import { Panel } from '../panel';

import './sidebar.css';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Panel title='Component Tree' content='...' />
      <Panel title='Component Properties' content='...' />
    </div>
  );
};
