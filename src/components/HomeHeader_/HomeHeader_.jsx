import { Row } from 'antd';
import React from 'react';
import assets from '../../assets';
import AlgorithmDropDown from './algorithmDropDown';
import InputSizeSlider from './InputSizeSlider_';
import RandomizeButton from './RandomizeButton_';
import SpeedSlider from './SpeedSlider_';
import StartButton from './StartButton_';

const HomeHeader = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing,
}) => {
  const openUrl = (url) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <Row
      style={{
        background: '#02E095',
        color: 'white',
        padding: '10px 0px 10px 0px',
        width: '100%',
      }}
      align="middle"
      justify="space-around"
    >
      <img
        alt=""
        src={assets.images.githubLogo}
        width={125}
        height={30}
        style={{ cursor: 'pointer' }}
        onClick={() =>
          openUrl('https://github.com/KarimElghamry/sorting-visualizer')
        }
      ></img>

      <AlgorithmDropDown
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <SpeedSlider
        onSpeedChange={onSpeedChange}
        isVisualizing={isVisualizing}
      />
      <InputSizeSlider
        onInputSizeChanged={onInputSizeChanged}
        isVisualizing={isVisualizing}
      />
      <RandomizeButton onClick={onRandomize} />
      <StartButton onClick={onStart} />
    </Row>
  );
};

export default HomeHeader;
