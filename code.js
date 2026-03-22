function sortedSquaredGrowth(growthPercentages) {
  const n = growthPercentages.length;
  const result = new Array(n);

  let left = 0;
  let right = n - 1;
  let writeIndex = n - 1;

  while (left <= right) {
    const leftSquare = growthPercentages[left] * growthPercentages[left];
    const rightSquare = growthPercentages[right] * growthPercentages[right];

    if (leftSquare > rightSquare) {
      result[writeIndex] = leftSquare;
      left++;
    } else {
      result[writeIndex] = rightSquare;
      right--;
    }

    writeIndex--;
  }

  return result;
}
