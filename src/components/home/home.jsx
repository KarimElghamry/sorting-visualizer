import React, { useState } from 'react';
import selectionSort from '../../algorithms/selection-sort';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../sorting_bar/SortingBar';

const Home = () => {
    const arraySize = 100;
    const [randomizedArray, setRandomizedArray] = useState(generateRandomizedArray({arraySize: arraySize}));
    const [colorsArray, setColorsArray] = useState(new Array(arraySize).fill(0));
    const maxItem = Math.max(...randomizedArray);

    return(
    <div>
        <div style={{backgroundColor:'#0D1929',display: 'flex', height:'calc(100vh - 20px)',
         width:'100vw', flexDirection:'row',alignItems: 'end', padding:'20px 0px 0px 0px'}}>
         {randomizedArray.map((item, index) => {
             const height = item/maxItem * 100;
             return <div key={index} style={{height: '100%', display: 'flex', alignItems: 'end'}}>
                        <SortingBar colorCode={colorsArray[index]} style={{height: `calc(${height}% - 20px)`, 
                        width: `calc((100vw/${randomizedArray.length}) - 2px `, border:`1px solid #0D1929`}}></SortingBar>
                    </div>
         })}
        </div>
        {/* <button onClick={async () => await selectionSort({array: randomizedArray, setArray: setRandomizedArray, setColorsArray: setColorsArray})}>Start</button> */}
    </div>
    );
}

export default Home;