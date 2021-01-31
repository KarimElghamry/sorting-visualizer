import { Row } from 'antd';
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
        isVisualizing,
    }) {

    return (
            <Row style={{
                background: '#02E095',
                color: 'white',
                minHeight: '80px',
                padding: '10px 10px 10px 10px'
            }}
            align='middle'
            justify='space-around'
            >
                    <AlgorithmDropDown
                        currentAlgorithm={currentAlgorithm}
                        algorithms={algorithms}
                        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
                    />

                    <SpeedSlider onSpeedChange={onSpeedChange} isVisualizing={isVisualizing} />
                    <InputSizeSlider onInputSizeChanged={onInputSizeChanged} isVisualizing={isVisualizing} />
                    <RandomizeButton onClick={onRandomize} />
                    <StartButton onClick={onStart} />

            </Row>
    );
}

export default HomeHeader;