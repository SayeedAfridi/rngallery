export const insertAtFront = (
  arr: string[][],
  itemToInsert: string,
): string[][] => {
  if (arr.length > 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][1] && i === arr.length - 1) {
        arr.push([]);
      }
      if (arr[i][1]) {
        arr[i + 1][0] = arr[i][1];
      }
      arr[i][1] = arr[i][0];
    }
    arr[0] = [itemToInsert, arr[0][1]];
  } else {
    arr[0] = [itemToInsert];
  }
  return arr;
};
