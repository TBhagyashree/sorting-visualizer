//import React from "react"

function swap(Animations,items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
  Animations.push([leftIndex,items[leftIndex]]);
  Animations.push([rightIndex,items[rightIndex]]);
}

function partition(Animations,items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
   index2 = Math.floor((right + left) / 2),
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
        Animations.push([i,index2,'red']);
        Animations.push([i,index2,'turquoise']);
      i++;
    }
    while (items[j] > pivot) {
        Animations.push([i,index2,'red']);
        Animations.push([i,index2,'turquoise']);
      j--;
    }
    if (i <= j) {
      swap(Animations,items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort( Animations,items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(Animations,items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(Animations,items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(Animations,items, index, right);
      }
    }
    return items;
  }
  
  export default function getQuickSortAnimations(items){
    const Animations = []
    var sortedArray = quickSort(Animations,items, 0, items.length - 1);
    console.log(sortedArray); //prints [2,3,5,6,7,9]
    return Animations  
  }
  