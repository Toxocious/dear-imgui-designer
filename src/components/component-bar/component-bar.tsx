import { ImGuiComponents } from '../../constants/imgui-components';
import { Button } from '../button';

import './component-bar.css';

export const ComponentBar = () => {
  return (
    <div className='component-bar'>
      {ImGuiComponents.map((component) => (
        <Button key={component.name} text={component.name} variant='glass' />
      ))}
    </div>
  );
};
