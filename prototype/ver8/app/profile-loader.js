// Load visible portraits one at a time. A missing local file falls back to the complete snapshot.
window.GALAXIES = {};
window.GalaxyCache = (() => {
  const requests = new Map();
  let queue = Promise.resolve();
  let fullSnapshot;
  function load(path) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.onload = () => { script.remove(); resolve(); };
      script.onerror = () => { script.remove(); reject(new Error(path)); };
      script.src = path;
      document.head.append(script);
    });
  }
  async function read(id) {
    if (window.GALAXIES[id]) return;
    try {
      await load("generated/profiles/" + id + ".js?v=8.0");
      if (!window.GALAXIES[id]) throw new Error(id);
    } catch {
      fullSnapshot ||= load("generated/galaxies.js");
      await fullSnapshot;
      if (!window.GALAXIES[id]) throw new Error(id);
    }
  }
  return {
    ensure(id) {
      if (!requests.has(id)) {
        const request = queue.then(() => read(id));
        requests.set(id, request);
        queue = request.catch(() => {});
      }
      return requests.get(id);
    }
  };
})();
