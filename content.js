(function () {
  function nuke() {
    const hasComposer = Array.from(document.querySelectorAll("*")).some(
      (el) =>
        el.childElementCount === 0 &&
        el.textContent.trim() === "What's on your mind?"
    );
    if (!hasComposer) return;

    const main = document.querySelector('[role="main"]');
    if (main) main.remove();
  }

  nuke();

  new MutationObserver(nuke).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
