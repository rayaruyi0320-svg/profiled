// 按人加载，不在入口 HTML 堆放采样数组。最多同时解压两个人，避免阻塞输入。
window.GALAXIES = {};
window.GalaxyCache = (() => {
  const pending = new Map(), queue = [];
  let running = 0;
  function pump() {
    while (running < 2 && queue.length) {
      const id = queue.shift(); running++;
      const script = document.createElement("script");
      script.src = `generated/cache/${id}.js`;
      script.onerror = () => finish(id, new Error("Visual cache could not load"));
      document.head.append(script);
    }
  }
  function finish(id, error) {
    const job = pending.get(id);
    if (!job || job.done) return;
    job.done = true; running--;
    if (error) { pending.delete(id); job.reject(error); }
    else job.resolve(GALAXIES[id]);
    pump();
  }
  return {
    ensure(id) {
      if (GALAXIES[id]) return Promise.resolve(GALAXIES[id]);
      if (pending.has(id)) return pending.get(id).promise;
      let resolve, reject;
      const promise = new Promise((a,b) => { resolve=a; reject=b; });
      pending.set(id, { promise, resolve, reject }); queue.push(id); pump();
      return promise;
    },
    async receive(id, encoded) {
      try {
        const bytes = Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
        const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
        GALAXIES[id] = JSON.parse(await new Response(stream).text());
        finish(id);
      } catch (error) { finish(id, error); }
    }
  };
})();
