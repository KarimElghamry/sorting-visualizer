import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

export function StartButton({ onClick }) {
    return (<div style={{ marginTop: 8 }}>
        <Button
            type="primary"
            style={{
                width: 160,
                background: '#02E095',
                borderColor: '#02E095'
            }}
            icon={<PlayCircleOutlined />}
            onClick={onClick}
        >
            Start
        </Button>
    </div>
    )
}