import React from 'react';
import { Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

export function RandomizeButton({ onClick }) {
    return (<div style={{ marginTop: 8 }}>
        <Button
            type="primary"
            style={{
                width: 160,
                background: '#0D1929',
                borderColor: '#0D1929',
            }}
            icon={<RedoOutlined />}
            onClick={onClick}>
            Randomize
        </Button>
    </div>)
}