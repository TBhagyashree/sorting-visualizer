export default function getBubbleSortAnimations(array){
    const animations = [];
    //const auxiliaryArray = array.slice();
        let len = array.length;
        for(let i = 0; i < len;i++)
        {
            for(let j = 0;j<len ; j++)
            {
                if(array[j] > array[j+1])
                {
                    animations.push([i, j,'red']);
                    animations.push([i, j,'turquoise']);
                    let temp = array[j]
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    animations.push([j, array[j]]);
                    animations.push([j+1, array[j+1]]);
                }
            }
        }
    return animations;
}
