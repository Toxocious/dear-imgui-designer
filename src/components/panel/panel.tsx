import { PanelProps } from '../../types/panel';
import { Button } from '../button';

import './panel.css';

export const Panel = (props: PanelProps): any => {
  const { title, content, options } = props;
  console.log(title, content, options, options.length);

  return (
    <div className='panel'>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
      {typeof options.length === 'undefined' ? (
        <></>
      ) : (
        <div className='footer'>
          {options.map((option: any) => (
            <Button
              text={option.name}
              variant='primary'
              disabled={option.disabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};
