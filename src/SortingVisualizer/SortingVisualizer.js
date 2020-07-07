import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Slider } from '@material-ui/core';
import  "./SortingVisualizer.css"
import  getMergeSortAnimations from  "../SortingAlgorithms/MergeSort.js"
import  getBubbleSortAnimations from  "../SortingAlgorithms/BubbleSort.js"
import  getInsertionSortAnimations from  "../SortingAlgorithms/InsertionSort.js"
import getSelectionSortAnimations from "../SortingAlgorithms/SelectionSort.js"
import getQuickSortAnimations from "../SortingAlgorithms/QuickSort.js"

export default class SortingVisualizer extends React.Component{
    constructor(){
        super()
        this.state = {
            array:[],
            ANIMATION_SPEED_MS:5,
            NUMBER_OF_ARRAY_BARS:70
        }
    }
    componentDidMount(){
        this.resetArray()
    }
    adjustSpeed(newSpeed){
      this.setState({
        ...this.state,
        ANIMATION_SPEED_MS:newSpeed
      })
    }
    resetArray(){
         const array = []
          for(let i =0;i<this.state.NUMBER_OF_ARRAY_BARS;i++){
              array.push(randomIntFromInterval(100,450))
          }
        this.setState({ ...this.state,array})
        this.enableButtons();
    }

    disableButtons(){
      const item=document.getElementsByClassName("listItem");
      document.getElementsByClassName("test").disabled = true;
      for(let i=0;i<item.length;i++){
        console.log("here")
        item[i].style.pointerEvents = 'none'; 
        item[i].style.color='red';
        item[i].style.backgroundColor='darkslategrey'; 
        item[i].innerHTML = item[i].value.strike();   
      }
      //const span=document.getElementsByClassName("listItem");    
      //item.style.color='white';
    }
  
    
    enableButtons(){
      const item=document.getElementsByClassName("listItem");
      document.getElementsByClassName("test").disabled = false;
      for(let i=0;i<item.length;i++){
        item[i].style.pointerEvents = 'auto'; 
        item[i].style.color='black'; 
         item[i].style.backgroundColor='#EFEFEF'; 
        item[i].innerHTML = item[i].value;    
      }
    }
  
    AnimationLogic(animations){
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const subArr_len = animations[i].length;
              if (subArr_len === 3) {
          const [barOneIdx, barTwoIdx,color] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * this.state.ANIMATION_SPEED_MS);
        }
      }
      //this.enableButtons();
  }    
    Algorithms(sortAlgo){
      this.resetArray()
      this.disableButtons();
      let animations = []
      if(sortAlgo==='bubbleSort'){
         animations = getBubbleSortAnimations(this.state.array);
      }else if(sortAlgo==='mergeSort'){
         animations = getMergeSortAnimations(this.state.array);
      }else if(sortAlgo==='insertionSort'){
         animations = getInsertionSortAnimations(this.state.array);
      }else if(sortAlgo==='selectionSort'){
         animations = getSelectionSortAnimations(this.state.array);
      }else {
         animations = getQuickSortAnimations(this.state.array);
      }
      this.AnimationLogic(animations)
    }
    // Exit(){
    //   return;
    //   //this.resetArray();
    // }
    render() {
        const {array} = this.state
        return(
          <div>
              <Typography className=" block-example1" component="h4" variant="h4">Sorting Visualizer</Typography>
              <div className="block-example,array-container">
                  {array.map((valuee,idx) => (
                  < div className="array-bar" key={idx} style={{height: `${valuee}px` }}>
                  </div>
                  ))}
              </div>

               <div > 
                <div>
                <button className="btn" onClick={() => this.enableButtons()}>Enable Buttons</button> 
                  <button   className="btn listItem" onClick={() => this.resetArray() }value="Create New Array">Create New Array</button>
                  <button className="  btn listItem" onClick={() => this.Algorithms('mergeSort')} value="MERGE SORT">MERGE SORT</button>
                  <button className="btn  listItem" onClick={() => this.Algorithms('insertionSort')} value="INSERTION SORT">INSERTION SORT</button>
                  <button className="btn listItem" onClick={() => this.Algorithms('quickSort')} value="QUICK SORT">QUICK SORT</button>
                  <button className="btn listItem" onClick={() => this.Algorithms('selectionSort')} value="SELECTION SORT">SELECTION SORT</button>
                  <button className="btn listItem" onClick={() => this.Algorithms('bubbleSort')} value="BUBBLE SORT">BUBBLE SORT</button>
                  
                 </div>

                <div className="speed">
                  <h4>Adjust Speed of Execution </h4>
                  <Slider className = "sliderr test"
                    onChange={(e, newValue) => this.adjustSpeed(newValue)} valueLabelDisplay="on" max={25}/>
                </div>
               </div>
          </div>
)
                  }}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Slider } from '@material-ui/core';
import  "./SortingVisualizer.css"
import  getMergeSortAnimations from  "../SortingAlgorithms/MergeSort.js"
import  getBubbleSortAnimations from  "../SortingAlgorithms/BubbleSort.js"
import  getInsertionSortAnimations from  "../SortingAlgorithms/InsertionSort.js"
import getSelectionSortAnimations from "../SortingAlgorithms/SelectionSort.js"
import getQuickSortAnimations from "../SortingAlgorithms/QuickSort.js"

export default class SortingVisualizer extends React.Component{
    constructor(){
        super()
        this.state = {
            array:[],
            ANIMATION_SPEED_MS:5,
            NUMBER_OF_ARRAY_BARS:70
        }
    }
    componentDidMount(){
        this.resetArray()
    }
    adjustSpeed(newSpeed){
      this.setState({
        ...this.state,
        ANIMATION_SPEED_MS:newSpeed
      })
    }
    resetArray(){
         const array = []
          for(let i =0;i<this.state.NUMBER_OF_ARRAY_BARS;i++){
              array.push(randomIntFromInterval(100,450))
          }
        this.setState({ ...this.state,array})
        this.enableButtons();
    }

    disableButtons(){
      const item=document.getElementsByClassName("listItem");
      document.getElementsByClassName("test").disabled = true;
      for(let i=0;i<item.length;i++){
        console.log("here")
        item[i].style.pointerEvents = 'none'; 
        item[i].style.color='red';
        item[i].style.backgroundColor='darkslategrey'; 
        item[i].innerHTML = item[i].value.strike();   
      }
      //const span=document.getElementsByClassName("listItem");    
      //item.style.color='white';
    }
  
    
    enableButtons(){
      const item=document.getElementsByClassName("listItem");
      document.getElementsByClassName("test").disabled = false;
      for(let i=0;i<item.length;i++){
        item[i].style.pointerEvents = 'auto'; 
        item[i].style.color='black'; 
         item[i].style.backgroundColor='#EFEFEF'; 
        item[i].innerHTML = item[i].value;    
      }
    }
  
    AnimationLogic(animations){
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const subArr_len = animations[i].length;
              if (subArr_len === 3) {
          const [barOneIdx, barTwoIdx,color] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * this.state.ANIMATION_SPEED_MS);
        }
      }
      //this.enableButtons();
  }    
    Algorithms(sortAlgo){
      this.resetArray()
      this.disableButtons();
      let animations = []
      if(sortAlgo==='bubbleSort'){
         animations = getBubbleSortAnimations(this.state.array);
      }else if(sortAlgo==='mergeSort'){
         animations = getMergeSortAnimations(this.state.array);
      }else if(sortAlgo==='insertionSort'){
         animations = getInsertionSortAnimations(this.state.array);
      }else if(sortAlgo==='selectionSort'){
         animations = getSelectionSortAnimations(this.state.array);
      }else {
         animations = getQuickSortAnimations(this.state.array);
      }
      this.AnimationLogic(animations)
    }
    // Exit(){
    //   return;
    //   //this.resetArray();
    // }
    render() {
        const {array} = this.state
        return(
          <div>
              <Typography className=" block-example1" component="h4" variant="h4">Sorting Visualizer</Typography>
              <div className="block-example,array-container">
                  {array.map((valuee,idx) => (
                  < div className="array-bar" key={idx} style={{height: `${valuee}px` }}>
                  </div>
                  ))}
              </div>

               <div > 
                <div>
                <button className="btn" onClick={() => this.enableButtons()}>Enable Buttons</button> 
                  <button   className="btn listItem" onClick={() => this.resetArray() }value="Create New Array">Create New Array</button>
                  <button className="  btn listItem" onClick={() => this.Algorithms('mergeSort')} value="MERGE SORT">MERGE SORT</button>
                  <button className="btn  listItem" onClick={() => this.Algorithms('insertionSort')} value="INSERTION SORT">INSERTION SORT</button>
                  <button className="btn listItem" onClick={() => this.Algorithms('quickSort')} value="QUICK SORT">QUICK SORT</button>
                  <button className="btn listItem" onClick={() => this.Algorithms('selectionSort')} value="SELECTION SORT">SELECTION SORT</button>
                  <button className="btn listItem" onClick={() => this.Algorithms('bubbleSort')} value="BUBBLE SORT">BUBBLE SORT</button>
                  
                 </div>

                <div className="speed">
                  <h4>Adjust Speed of Execution </h4>
                  <Slider className = "sliderr test"
                    onChange={(e, newValue) => this.adjustSpeed(newValue)} valueLabelDisplay="on" max={25}/>
                </div>
               </div>
          </div>
)
                  }}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }

