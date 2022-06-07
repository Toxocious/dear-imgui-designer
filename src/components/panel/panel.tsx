import { PanelProps } from '../../types/panel';
import { Button } from '../button';

import './panel.css';

export const Panel = (props: PanelProps): any => {
  const { title, content, options } = props;

  return (
    <div className='panel'>
      <div className='title'>
        {title}
        <div className='button-container'>
          {typeof options === 'undefined' ? (
            <></>
          ) : (
            <>
              {options.map((option: any) => (
                <Button
                  text={option.name}
                  variant='primary'
                  disabled={option.disabled}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className='content'>{content}</div>
    </div>
  );
};
