import React, { useState } from 'react';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../sorting_bar/SortingBar';

const Home = () => {
    const [randomizedArray, setRandomizedArray] = useState(generateRandomizedArray({arraySize: 100}));
    const maxItem = Math.max(...randomizedArray);

    return(
    <div>
        <div style={{backgroundColor:'#0D1929',display: 'flex', height:'100vh',
         width:'100vw', flexDirection:'row',alignItems: 'end'}}>
         {randomizedArray.map((item, index) => {
             const height = item/maxItem * 100;
             console.log(height);
             return <div key={index} style={{height: '100%', display: 'flex', alignItems: 'end'}}>
                        <SortingBar style={{height: `${height}%`, 
                        width: `calc((100vw/${randomizedArray.length}) - 4px)`, border:'2px solid #0D1929'}}></SortingBar>
                    </div>
         })}
        </div>
    </div>
    );
}

export default Home;