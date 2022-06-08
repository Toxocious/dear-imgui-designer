import { Button } from '../button';

import './menu-bar.scss';

export const MenuBar = () => {
  return (
    <div className='menu-bar'>
      <h2>ImGui Designer</h2>

      <div className='button-container'>
        <Button text='New Template' variant='primary' />
        <Button text='Generate Code' variant='primary' />
      </div>
    </div>
  );
};
