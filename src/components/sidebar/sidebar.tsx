import { ImGuiComponents } from '../../constants/imgui-components';

import { COMPONENTS as ComponentsTree } from '../component-tree';
import { ComponentProps } from '../component-props';

import './sidebar.scss';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ComponentsTree
        name='Component Tree'
        components={[]}
        options={[
          {
            name: '+',
            subOptions: [
              ...ImGuiComponents.filter((component) => component.selectable),
            ],
          },
        ]}
      />

      <ComponentProps name='Component Props' components={[]} />
    </div>
  );
};
