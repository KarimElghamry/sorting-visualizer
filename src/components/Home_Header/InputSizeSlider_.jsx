import { Slider } from 'antd';
import React from 'react';

export function InputSizeSlider({ onInputSizeChanged, isVisualizing }) {
    return (
        <div >
            <div style={{ marginLeft: 70, color: '#0D1929', fontWeight: 500 }}>
                Array Size
                    </div>
            <Slider
                disabled={isVisualizing}
                defaultValue={100}
                min={30}
                max={500}
                style={{ width: 200 }}
                handleStyle={{ borderColor: '#0D1929' }}
                trackStyle={{ background: '#0D1929' }}
                onChange={onInputSizeChanged}
            />
        </div>
    );
};