import React from 'react';
import {Button} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';

const StartButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
        type="primary"
        style={{
          width: 130,
          background: '#0D1929',
          borderColor: '#0D1929',
          fontWeight: 'bold',
        }}
        icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </Button>
    </div>
  );
};

export default StartButton;
