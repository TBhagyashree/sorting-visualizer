//While advancing to the right, every bar on the left is sorted
//for every new bar, insert it into the right place on the left
export default  function getInsertionSortAnimations(arr)
{
    const Animations = [];
        for (let i = 1; i < arr.length; i++) {
          let j = i - 1
          let temp = arr[i]
          Animations.push([i,j,'red']);
          Animations.push([i,j,'turquoise']);
          while (j >= 0 && arr[j] > temp) {
            //console.log("values of i and j " , i,j)
            arr[j + 1] = arr[j]
            Animations.push([j+1,arr[j]]);
            j--;
          }
          arr[j+1] = temp
          Animations.push([j+1,temp]);
      }
      return Animations
}
