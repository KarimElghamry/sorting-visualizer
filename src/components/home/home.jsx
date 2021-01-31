import React, { useState } from 'react';
import selectionSort from '../../algorithms/selection-sort';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../SortingBar/SortingBar';
import HomeHeader from '../HomeHeader/HomeHeader';
import '../../index.css';
import bubbleSort from '../../algorithms/bubble-sort';
import insertionSort from '../../algorithms/insertion-sort';
import inplaceMergeSortWrapper from '../../algorithms/inplace-merge-sort';
import mergeSortWrapper from '../../algorithms/merge-sort';
import quickSortLWrapper from '../../algorithms/quick-sort-l';
import quickSortLRWrapper from '../../algorithms/quick-sort-lr';

const Home = () => {
    const arraySize = 100;
    const [isVisualizing, setIsVisualizing] = useState(false);
    const [randomizedArray, setRandomizedArray] = useState(generateRandomizedArray({ arraySize: arraySize }));
    const [colorsArray, setColorsArray] = useState(new Array(randomizedArray.length).fill(0));
    const [visualizationSpeed, setVisualizationSpeed] = useState(30);
    const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
    const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
    const algorithms = ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Quick Sort', 'Quick Sort (L)', 'Quick Sort (LR)', 'Merge Sort', 'Inplace Merge Sort'];


    const onRandomize = () => {
        if (isVisualizing) return;
        setRandomizedArray(generateRandomizedArray({ arraySize: randomizedArray.length }));
        setMaxItem(Math.max(...randomizedArray));
    };
    const onInputSizeChanged = (val) => {
        if (isVisualizing) return;
        setRandomizedArray(generateRandomizedArray({ arraySize: val }));
        setMaxItem(Math.max(...randomizedArray));
        setColorsArray(new Array(randomizedArray.length).fill(0));
    }
    const onSpeedChange = (val) => {
        if (isVisualizing) return;
        setVisualizationSpeed(100 - val + 2);
    }

    const onVisualize = async () => {
        if (isVisualizing) return;

        setIsVisualizing(true);
        switch (currentAlgorithm) {
            case 'Selection Sort':
                await selectionSort({
                    array: randomizedArray,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
                break;

            case 'Bubble Sort':
                await bubbleSort({
                    array: randomizedArray,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
                break;

            case 'Insertion Sort':
                await insertionSort({
                    array: randomizedArray,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
                break;

            case 'Quick Sort (L)':
                await quickSortLWrapper({
                    array: randomizedArray,
                    leftIndex: 0,
                    rightIndex: randomizedArray.length - 1,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
                break;
            case 'Quick Sort (LR)':
                await quickSortLRWrapper({
                    array: randomizedArray,
                    leftIndex: 0,
                    rightIndex: randomizedArray.length - 1,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
                break;


            case 'Merge Sort':
                await mergeSortWrapper({
                    array: randomizedArray,
                    leftIndex: 0,
                    rightIndex: randomizedArray.length - 1,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
                break;

            case 'Inplace Merge Sort':
                await inplaceMergeSortWrapper({
                    array: randomizedArray,
                    leftIndex: 0,
                    rightIndex: randomizedArray.length - 1,
                    setArray: setRandomizedArray,
                    visualizationSpeed: visualizationSpeed,
                    setColorsArray: setColorsArray
                });
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
                alignItems: 'end', padding: '0px 0px 0px 0px',
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