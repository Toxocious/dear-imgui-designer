import { ImGuiComponents } from '../../constants/imgui-components';

import { ComponentTree } from '../component-tree';
import { ComponentProps } from '../component-props';

import './sidebar.scss';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ComponentTree
        name='Component Tree'
        childNodes={[]}
        options={[
          {
            name: '+',
            subOptions: [...ImGuiComponents],
          },
        ]}
      />

      <ComponentProps name='Component Props' childNodes={[]} />
    </div>
  );
};
