import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export function AlgorithmDropDown({ currentAlgorithm, algorithms, onAlgorithmChange }) {


    const menu = (
        <Menu style={{ width: 200 }}>
            {algorithms.map(function (algorithm, idx) {
                return <Menu.Item key={idx} onClick={() => onAlgorithmChange(algorithm)}>
                    {algorithm}
                </Menu.Item>
            })}
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']} >
            <div style={{ marginTop: 10 }}>
                {currentAlgorithm} <DownOutlined />
            </div>
        </Dropdown>
    );
}