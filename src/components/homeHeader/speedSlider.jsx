import { Slider } from 'antd';
import React from 'react';

export function SpeedSlider({ onSpeedChange, isVisualizing }) {
    return (
        <div >
            <div style={{ marginLeft: 40, color: '#0D1929', fontWeight: 500 }}>
                Visualization Speed
                    </div>
            <Slider
                disabled={isVisualizing}
                defaultValue={30}
                style={{ width: 200 }}
                handleStyle={{ borderColor: '#0D1929' }}
                trackStyle={{ background: '#0D1929' }}
                onChange={onSpeedChange}
            />
        </div>
    );
};