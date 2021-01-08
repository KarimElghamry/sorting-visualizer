import { PageHeader } from 'antd';
import React from 'react';
import { Slider, Button } from 'antd';
import { AlgorithmDropDown } from './algorithmDropDown';
import { PlayCircleOutlined, RedoOutlined } from '@ant-design/icons';



export function HomeHeader({ algorithms, onAlgorithmChange, currentAlgorithm }) {

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
                <div style={{ marginLeft: 60 }}>
                    <div style={{ marginLeft: 40 }}>
                        Visualization Speed
                    </div>
                    <Slider defaultValue={30} style={{ width: 200 }} />
                </div>
                <div style={{ marginLeft: 60 }}>
                    <div style={{ marginLeft: 60 }}>
                        Array Size
                    </div>
                    <Slider defaultValue={100} min={30} max={500} style={{ width: 200 }} />
                </div>
                <div style={{ marginLeft: 60 }}>
                    <Button type="primary" icon={<RedoOutlined />}>
                        Randomize
                    </Button>
                </div>
                <div style={{ marginLeft: 60 }}>
                    <Button type="primary" icon={<PlayCircleOutlined />}>
                        Start
                    </Button>
                </div>
            </div>

        </PageHeader>
    );
}