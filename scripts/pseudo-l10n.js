// Pseudo-localisation for the 11-language stress test (scripts/check-i18n.mjs).
// Active only with ?pseudo=1 in the page URL (the check server also injects it into kit pages).
// Every visible text grows by about 40 % and carries the diacritics of the league's languages,
// so overflow, clipped labels and fixed widths show up before real translations exist.
(function () {
  if (!/[?&]pseudo=1\b/.test(location.search)) return;
  var MAP = { a: "à", e: "é", i: "î", o: "ö", u: "ü", A: "Å", E: "É", I: "Î", O: "Ö", U: "Ü", s: "š", c: "ç", n: "ñ", z: "ž", l: "ł", r: "ř" };
  var PAD = "ẞŁŘŮĘ";
  var done = new WeakSet();
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1 };
  function grow(node) {
    if (done.has(node)) return;
    var p = node.parentElement, t = node.textContent;
    if (!p || SKIP[p.tagName] || !t.trim() || /^[\d\s:.,+\-–—·/%]+$/.test(t)) return;
    var core = t.trim(), extra = Math.ceil(core.length * 0.4), pad = "";
    while (pad.length < extra) pad += PAD;
    node.textContent = t.replace(/[a-zA-Z]/g, function (c) { return MAP[c] || c; }).replace(/\s*$/, "") + " " + pad.slice(0, extra) + (/\s$/.test(t) ? " " : "");
    done.add(node);
  }
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n, list = [];
    while ((n = w.nextNode())) list.push(n);
    list.forEach(grow);
  }
  function start() {
    walk(document.body);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        m.addedNodes.forEach(function (n) { n.nodeType === 3 ? grow(n) : n.nodeType === 1 && walk(n); });
        if (m.type === "characterData" && !done.has(m.target)) grow(m.target);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start) : start();
})();
