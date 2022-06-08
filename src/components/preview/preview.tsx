import { Stage, Layer, Text } from 'react-konva';

import './preview.scss';

export const Preview = () => {
  return (
    <div className='preview'>
      <Stage
        width={window.innerWidth - 330}
        height={window.innerHeight - 50}
        draggable={true}
      >
        <Layer>
          <Text text='Canvas' />
        </Layer>
      </Stage>
    </div>
  );
};
