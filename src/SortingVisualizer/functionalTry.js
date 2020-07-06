import React, {useState , useEffect} from 'react';
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

export default function SortingVisualizer(){

  const [items,setItems] = useState([])
    const [ANIMATION_SPEED_MS,setSpeed] = useState(1)
    const numItems = 10
    const createArray = (newValue) =>
    {
            setItems([])
            for(let i=0;i<newValue;i++)
            {
            setItems(prevState => [...prevState,{
                    id: prevState.length,
                    value: Math.floor(Math.random() * 10) + 1
                }])
            }   
        }
    const adjustSpeed = (newValue) => 
    {
        setSpeed(newValue)     
    }

    //resetArray(){
    //      const array = []
    //       for(let i =0;i<NUMBER_OF_ARRAY_BARS;i++){
    //           array.push(randomIntFromInterval(100,480))
    //       }
    //     this.setState({array})
    // }
   function AnimationLogic(animations){
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
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
  }    
    function Algorithms(sortAlgo){
      // this.resetArray()
      let animations = []
      if(sortAlgo==='bubbleSort'){
         animations = getBubbleSortAnimations(items);
      }else if(sortAlgo==='mergeSort'){
         animations = getMergeSortAnimations(items);
      }else if(sortAlgo==='insertionSort'){
         animations = getInsertionSortAnimations(items);
      }else if(sortAlgo==='selectionSort'){
         animations = getSelectionSortAnimations(items);
      }else {
         animations = getQuickSortAnimations(items);
      }
      AnimationLogic(animations)
    }
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
            {items.map((valuee,idx) => (
                <div className="array-bar" key={idx}
                style={{height: `${valuee}px` }}>
                </div>
            ))}
            <div>
            {/* <button className="btn" onClick={() => this.resetArray()}>Create New Array</button> */}
            <button className="btn" onClick={() => Algorithms('mergeSort')}>MERGE SORT</button>
            <button className="btn" onClick={() => Algorithms('insertionSort')}>INSERTION SORT</button>
            <button className="btn" onClick={() => Algorithms('quickSort')}>QUICK SORT</button>
            <button className="btn" onClick={() => Algorithms('selectionSort')}>SELECTION SORT</button>
            <button className="btn" onClick={() => Algorithms('bubbleSort')}>BUBBLE SORT</button>
            {/* <button className="btn" onClick={() => this.testSortingAlgorithms()}> Test Sorting Algorithms </button> */}
            </div>
            <div>
            <Slider
                        className = "sliderr"
                         //value={typeof numItems === 'number' ? numItems : 0}
                        onChange={(e, newValue) => createArray(newValue)}
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        min={numItems}
                        max={50}
                />  
                <Slider
                        className = "sliderr"
                        // value={typeof numItems === 'number' ? numItems : 0}
                        onChange={(e, newValue) => adjustSpeed(newValue)}
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

// function randomIntFromInterval(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min )
// }

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
