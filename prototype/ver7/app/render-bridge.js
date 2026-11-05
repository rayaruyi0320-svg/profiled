// 薄适配层：继续调用原来的各题绘图函数，不另写答案到视觉的算法。
window.VisualBridge = {
  cache: new WeakMap(),
  draw(canvas, topic, { view = "all", time = 0, progress = 1, item = 0 } = {}) {
    if (!topic.data) return;
    window.PROFILE_SELF_VIEW = view;
    const d = topic.data,
      q = Number(topic.id.slice(1)),
      ctx = canvas.getContext("2d");
    const w = canvas.clientWidth || canvas.width,
      h = canvas.clientHeight || canvas.height;
    if (q <= 3 || q === 4) {
      let art = this.cache.get(canvas);
      if (!art) {
        // 由统一播放器驱动时间，避免各题各自启动重复动画循环。
        const raf = window.requestAnimationFrame;
        window.requestAnimationFrame = () => 0;
        try {
          art =
            q === 4
              ? new ParticlePortrait(canvas)
              : new [null, FilamentPortrait, MembranePortrait, WovenPortrait][q](
                  canvas,
                  d.selves,
                );
        } finally {
          window.requestAnimationFrame = raf;
        }
        art.paused = true;
        this.cache.set(canvas, art);
      }
      art.time = time;
      if (q === 4) {
        const layers = ProfileMapping.mapTopic(d).filter((l) =>
          SelfViews.allows(l.perspective),
        );
        art.setLayers(layers);
      } else art.selves = d.selves;
      // resize 本身会 draw；尺寸未变时只画一次，不重复重建像素缓冲区。
      if (art.w !== canvas.clientWidth || art.h !== canvas.clientHeight) art.resize();
      else art.draw();
      return;
    }
    ctx.clearRect(0, 0, w, h);
    if (q === 5) {
      window.Q5_DATA = d;
      Q5Field.draw(ctx, w, h, { time });
    }
    if (q === 6) {
      window.Q6_DATA = d;
      window.Q6_OPTIONS = CATALOG.options6;
      Q6Art.draw(ctx, w, h, { mode: "profile", progress, time });
    }
    if (q === 7) {
      window.Q7_MEANING_DATA = { nickname: d.nickname, interests: [d.interests[item]] };
      ctx.save();
      ctx.translate(w * 0.1, h * 0.1);
      ctx.scale(0.8, 0.8);
      Q7MeaningArt.draw(ctx, w, h, { time });
      ctx.restore();
    }
    if (q === 8) Q8Art.draw(ctx, w, h, d, time);
    if (q === 21) Q21Art.draw(ctx, w, h, d, progress, time);
    if (q === 22) Q22Art.draw(ctx, w, h, d, progress, time);
    if (q === 42) Q42Art.draw(ctx, w, h, d, progress, time);
    if (q >= 7 && view !== "all") {
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }
  },
  parameters(topic) {
    const d = topic.data;
    if (!d) return { status: topic.status };
    const q = Number(topic.id.slice(1));
    if (q <= 3)
      return Object.fromEntries(
        d.selves.map((s) => [
          s.label || s.id,
          {
            value: s.value,
            parameter:
              q === 1 ? "lengthRatio" : q === 2 ? "openingDegrees" : "connectionCount",
            result:
              q === 1
                ? Q1Mapping.lengthRatio(s.value)
                : q === 2
                  ? Q2Mapping.openingDegrees(s.value)
                  : Q3Mapping.connectionCount(s.value),
          },
        ]),
      );
    if (q === 4)
      return ProfileMapping.mapTopic(d).map((l) => ({
        self: l.perspective,
        value: l.value,
        contourAmplitude: l.contourAmplitude,
        offset: l.offset,
        relativeAvailable: l.relativeAvailable,
      }));
    if (q === 5 || q === 6)
      return d.selves.map((s) => ({
        self: s.id,
        selected: s.answers,
        templates: s.answers.map((id) =>
          (q === 5 ? CATALOG.options5 : CATALOG.options6).find((o) => o.id === id),
        ),
      }));
    if (q === 7)
      return d.interests.map((i) => ({
        interest: i.text,
        motif: i.motif,
        reasons: i.reasons,
        parameters: Q7MeaningArt.params(i),
        interpretation: i.reasonCoding || i.reasonStatus,
      }));
    if (q === 8)
      return {
        shownExtent: Q8Art.extent(d.shown),
        unseenExtent: Q8Art.extent(d.unseen),
        influences: Q8Art.selectedReasons(d.influences),
      };
    if (q === 21)
      return {
        channel: d.channel,
        rule: Q21Art.CHANNELS[d.channel],
        evidence: d.evidence,
      };
    if (q === 22)
      return {
        category: d.category,
        rule: Q22Art.CATEGORIES[d.category],
        evidence: d.evidence,
      };
    return { direction: d.relationDirection, evidence: d.relationEvidence };
  },
};
