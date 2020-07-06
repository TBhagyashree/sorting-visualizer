import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Slider } from '@material-ui/core';
import  "./SortingVisualizer.css"
import  getMergeSortAnimations from  "../SortingAlgorithms/MergeSort.js"
import  getBubbleSortAnimations from  "../SortingAlgorithms/BubbleSort.js"
import  getInsertionSortAnimations from  "../SortingAlgorithms/InsertionSort.js"
import getSelectionSortAnimations from "../SortingAlgorithms/SelectionSort.js"
import getQuickSortAnimations from "../SortingAlgorithms/QuickSort.js"
//const ANIMATION_SPEED_MS = 1;
//const NUMBER_OF_ARRAY_BARS =200;

export default class SortingVisualizer extends React.Component{
    constructor(){
        super()
        this.state = {
            array:[],
            ANIMATION_SPEED_MS:1,
            NUMBER_OF_ARRAY_BARS:150
        }
    }
    componentDidMount(){
        this.resetArray()
    }
    adjustSpeed(newSpeed){
      this.setState({
        ANIMATION_SPEED_MS:newSpeed
      })
    }
    updateNumberOfBars(num){
      this.setState({
        NUMBER_OF_ARRAY_BARS: num
      })
      this.resetArray(num);
    }
    resetArray(){
         const array = []
          for(let i =0;i<this.state.NUMBER_OF_ARRAY_BARS;i++){
              array.push(randomIntFromInterval(100,480))
          }
        this.setState({array})
        this.enableButtons();
    }

    disableButtons(){
      const item=document.getElementsByClassName("listItem");
      for(let i=0;i<item.length;i++){
        console.log("here")
        item[i].style.pointerEvents = 'none'; 
        item[i].style.color='red'; 
        item[i].innerHTML = "Disabled";   
      }
      //const span=document.getElementsByClassName("listItem");    
      //item.style.color='white';
    }
  
    
    enableButtons(){
      const item=document.getElementsByClassName("listItem");
      for(let i=0;i<item.length;i++){
        item[i].style.pointerEvents = 'auto'; 
        item[i].style.color='black';  
        item[i].innerHTML = item[i].value;    
      }
      //const span=document.getElementsByClassName("listItem");    
      //item.style.color='black';
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
          <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg" style={{height: '100vh'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" component="h1" variant="h1">Sorting
                            Visualizer</Typography>
                    </Grid>
            <div className="array-container">
            {array.map((valuee,idx) => (
                <div className="array-bar" key={idx}
                style={{height: `${valuee}px` }}>
                </div>
            ))}
            <div>
            <button   className="btn listItem" onClick={() => this.resetArray() }value="Create New Array">Create New Array</button>
            <button className="  btn listItem" onClick={() => this.Algorithms('mergeSort')} value="MERGE SORT">MERGE SORT</button>
            <button className="btn  listItem" onClick={() => this.Algorithms('insertionSort')} value="INSERTION SORT">INSERTION SORT</button>
            <button className="btn listItem" onClick={() => this.Algorithms('quickSort')} value="QUICK SORT">QUICK SORT</button>
            <button className="btn listItem" onClick={() => this.Algorithms('selectionSort')} value="SELECTION SORT">SELECTION SORT</button>
            <button className="btn listItem" onClick={() => this.Algorithms('bubbleSort')} value="BUBBLE SORT">BUBBLE SORT</button>
            {<button className="btn" onClick={() => this.enableButtons()}>Enable Buttons</button> }
            {/* <button className="btn" onClick={() => this.testSortingAlgorithms()}> Test Sorting Algorithms </button> */}
            </div>
            <div>
            <Slider
                        className = "sliderr"
                         //value={typeof numItems === 'number' ? numItems : 0}
                        onChange={(e, newValue) => this.updateNumberOfBars(newValue)}
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        min={150}
                        max={229}
                />  
                <Slider
                        className = "sliderr"
                        // value={typeof numItems === 'number' ? numItems : 0}
                        onChange={(e, newValue) => this.adjustSpeed(newValue)}
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        max={100}
                />
            </div>
            </div>
            </Grid>
            </Container>
</React.Fragment>
    )
    }
}
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
