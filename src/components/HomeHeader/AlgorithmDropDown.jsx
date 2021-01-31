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
            <div style={{
                marginTop: 4,
                height: 40,
                width: 150,
                paddingTop: 8,
                paddingLeft: 24,
                background: '#0D1929',
                borderRadius: 2, boxShadow:
                    '0px 0px 1px 2px #02E095',
            }}>
                {currentAlgorithm} <DownOutlined />
            </div>
        </Dropdown>
    );
}