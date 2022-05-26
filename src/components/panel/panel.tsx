import { PanelProps } from '../../types/panel';

import './panel.css';

export const Panel = (props: PanelProps): any => {
  const { title, content } = props;

  return (
    <div className='panel'>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
    </div>
  );
};
