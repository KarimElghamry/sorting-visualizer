import { Slider } from 'antd';
import React from 'react';

export function InputSizeSlider({ onInputSizeChanged }) {
    return (
        <div >
            <div style={{ marginLeft: 70 }}>
                Array Size
                    </div>
            <Slider
                defaultValue={100}
                min={30}
                max={500}
                style={{ width: 200 }}
                handleStyle={{ borderColor: '#02E095' }}
                trackStyle={{ background: '#02E095' }}
                onChange={onInputSizeChanged}
            />
        </div>
    );
};