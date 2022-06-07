import { PanelProps } from '../../types/panel';
import { Button } from '../button';

import './panel.css';

export const Panel = (props: PanelProps): any => {
  const { title, content, options } = props;

  return (
    <div className='panel'>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
      {typeof options === 'undefined' ? (
        <></>
      ) : (
        <>
          <div className='footer'>
            {options.map((option: any) => (
              <Button
                text={option.name}
                variant='primary'
                disabled={option.disabled}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
