import React from 'react';
import { HomeHeader } from '../homeHeader/homeHeader.jsx';
const Home = () => {
    let currentAlgorithm = '';
    const algorithms = ['Bubble Sort', 'Insertion Sort']
    return (
        <HomeHeader
            algorithms={algorithms}
            onAlgorithmChange={(algorithm) => {
                currentAlgorithm = algorithm;
            }}
        />);
}

export default Home;