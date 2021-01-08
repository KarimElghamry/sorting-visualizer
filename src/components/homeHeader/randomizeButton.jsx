import React from 'react';
import { Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

export function RandomizeButton({ onClick }) {
    return (<div style={{ marginTop: 8 }}>
        <Button
            type="primary"
            style={{
                width: 160,
                background: '#02E095',
                borderColor: '#02E095'
            }}
            icon={<RedoOutlined />}
            onClick={onClick}>
            Randomize
        </Button>
    </div>)
}