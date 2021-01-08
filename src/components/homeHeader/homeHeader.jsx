import { PageHeader } from 'antd';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export function HomeHeader({ algorithms, onAlgorithmChange }) {


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
        <PageHeader
            style={{
                background: '#0D1929',
                border: '1px solid rgb(0, 0, 0)',
                borderColor: 'black',
                color: 'white',
                height: 60,
                position: 'relative',
            }}>
            <Dropdown overlay={menu} trigger={['click']}>
                <div>
                    Choose Algorithm <DownOutlined />
                </div>
            </Dropdown>
        </PageHeader>
    );
}