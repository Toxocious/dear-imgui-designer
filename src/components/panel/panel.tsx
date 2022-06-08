import { Button } from '../button';

import { PanelProps } from '../../types/panel';
import { ImGuiComponent } from '../../types/imgui-component';

import './panel.scss';

export const Panel = (props: PanelProps): any => {
  const { title, options, components } = props;

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
                  key={option.name}
                  text={option.name}
                  variant='primary'
                  dropdownItems={[...option.subOptions]}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className='content'>
        {components.length === 0
          ? 'Select a component'
          : components.map((childNode: ImGuiComponent) => (
              <div key={childNode.id}>{childNode.name}</div>
            ))}
      </div>
    </div>
  );
};
