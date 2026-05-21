(function () {
  function nuke() {
    const hasComposer = !!document.querySelector('[aria-label="Create a post"]');
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
