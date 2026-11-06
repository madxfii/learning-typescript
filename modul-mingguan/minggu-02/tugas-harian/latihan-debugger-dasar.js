function makeDepthTracker() {
  let maxDepth = 0;

  function recurse(n, depth = 0) {
    maxDepth = Math.max(maxDepth, depth);
    if (n <= 0) return;
    recurse(n - 1, depth + 1);
  }

  return { recurse, getMaxDepth: () => maxDepth };
}

const tracker = makeDepthTracker();
tracker.recurse(3);
console.log(tracker.getMaxDepth());
