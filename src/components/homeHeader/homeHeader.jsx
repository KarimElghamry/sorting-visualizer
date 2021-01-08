import { PageHeader } from 'antd';
import React from 'react';
import { AlgorithmDropDown } from './algorithmDropDown';
import { SpeedSlider } from './speedSlider';
import { InputSizeSlider } from './inputSizeSlider';
import { RandomizeButton } from './randomizeButton';
import { StartButton } from './startButton';



function HomeHeader(
    {
        algorithms,
        onAlgorithmChange,
        currentAlgorithm,
        onSpeedChange,
        onInputSizeChanged,
        onRandomize,
        onStart,
    }) {

    return (
        <PageHeader
            style={{
                background: '#0D1929',
                border: '1px solid rgb(0, 0, 0)',
                borderColor: 'black',
                color: 'white',
                height: 100,
                position: 'relative',

            }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'

            }}>
                <AlgorithmDropDown
                    currentAlgorithm={currentAlgorithm}
                    algorithms={algorithms}
                    onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
                />
                <SpeedSlider onSpeedChange={onSpeedChange} />
                <InputSizeSlider onInputSizeChanged={onInputSizeChanged} />
                <RandomizeButton onClick={onRandomize} />
                <StartButton onClick={onStart} />
            </div>

        </PageHeader>
    );
}

export default HomeHeader;