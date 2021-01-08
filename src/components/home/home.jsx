import React, { useState } from "react"; import { HomeHeader } from '../homeHeader/homeHeader.jsx';
const Home = () => {
    const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
    const algorithms = ['Bubble Sort', 'Insertion Sort']
    return (
        <HomeHeader
            algorithms={algorithms}
            onAlgorithmChange={setCurrentAlgorithm}
            currentAlgorithm={currentAlgorithm}
        />);
}

export default Home;