import React, { useState } from 'react';
import selectionSort from '../../algorithms/selection-sort';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../sorting_bar/SortingBar';
import HomeHeader from '../homeHeader/homeHeader';
import '../../index.css';

const Home = () => {
    const arraySize = 100;
    const [isVisualizing, setIsVisualizing] = useState(false);
    const [randomizedArray, setRandomizedArray] = useState(generateRandomizedArray({ arraySize: arraySize }));
    const [colorsArray, setColorsArray] = useState(new Array(randomizedArray.length).fill(0));
    const [visualizationSpeed, setVisualizationSpeed] = useState(30);
    const maxItem = Math.max(...randomizedArray);
    const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
    const algorithms = ['Bubble Sort', 'Insertion Sort', 'Selection Sort'];


    const onRandomize = () => {
        if(isVisualizing) return;
        setRandomizedArray(generateRandomizedArray({arraySize: randomizedArray.length}))
    };
    const onInputSizeChanged = (val) => {
        if(isVisualizing) return;
        setRandomizedArray(generateRandomizedArray({arraySize: val}));
        setColorsArray(new Array(randomizedArray.length).fill(0));
    }
    const onSpeedChange = (val) =>{
        if(isVisualizing) return;
        setVisualizationSpeed(100 - val + 2);
    }
    const onVisualize = async() =>{
        if(isVisualizing) return;

        setIsVisualizing(true);
        switch (currentAlgorithm) {
            case 'Selection Sort':
                await selectionSort({array: randomizedArray, 
                    setArray: setRandomizedArray, 
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray});
                break;
        
            default:
                break;
        }

        setIsVisualizing(false);
    }

    return (
        <div>
            <HomeHeader
                algorithms={algorithms}
                onAlgorithmChange={setCurrentAlgorithm}
                currentAlgorithm={currentAlgorithm}
                onRandomize={onRandomize}
                onInputSizeChanged={onInputSizeChanged}
                onSpeedChange={onSpeedChange}
                onStart={onVisualize}
                isVisualizing={isVisualizing}
            />
            <div style={{
                backgroundColor: '#0D1929', display: 'flex', height: 'calc(100vh - 100px)',
                width: '100vw', flexDirection: 'row',
                alignItems: 'end',  padding: '0px 0px 0px 0px',
            }}>
                {randomizedArray.map((item, index) => {
                    const height = item / maxItem * 100;
                    return <div className='container' 
                        key={index} style={{ height: '100%', display: 'flex', alignItems: 'end' }}>
                        <SortingBar colorCode={colorsArray[index]} style={{
                            height: `calc(${height}% - 20px)`,
                            width: `calc((100vw/${randomizedArray.length}) - 2px `, border: `1px solid #0D1929`,
                            marginTop: 'auto',
                        }}></SortingBar>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Home;