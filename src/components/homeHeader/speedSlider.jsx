import { Slider } from 'antd';
import React from 'react';

export function SpeedSlider({ onSpeedChange }) {
    return (
        <div >
            <div style={{ marginLeft: 40 }}>
                Visualization Speed
                    </div>
            <Slider
                defaultValue={30}
                style={{ width: 200 }}
                handleStyle={{ borderColor: '#02E095' }}
                trackStyle={{ background: '#02E095' }}
                onChange={onSpeedChange}
            />
        </div>
    );
};