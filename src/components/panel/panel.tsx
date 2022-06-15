import { Button } from '../button';
import { ComponentNode } from '../component-node';

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
        {components.length === 0 ? (
          'Select a component'
        ) : (
          <ul>
            {components.map((component: ImGuiComponent) => (
              <ComponentNode
                key={component.id}
                id={component.id}
                name={component.name}
                children={component.children}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
