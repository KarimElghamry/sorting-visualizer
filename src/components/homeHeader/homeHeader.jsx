import { PageHeader } from 'antd';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AlgorithmDropDown } from './algorithmDropDown';


export function HomeHeader({ algorithms, onAlgorithmChange }) {


    return (
        <PageHeader
            style={{
                background: '#0D1929',
                border: '1px solid rgb(0, 0, 0)',
                borderColor: 'black',
                color: 'white',
                height: 60,
                position: 'relative',
            }}>
            <div>
                <AlgorithmDropDown
                    algorithms={algorithms}
                    onAlgorithmChange={(algo) => onAlgorithmChange(algo)} />
            </div>
        </PageHeader>
    );
}