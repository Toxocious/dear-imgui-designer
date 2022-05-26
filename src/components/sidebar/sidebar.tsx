import { AllowedPanels } from '../../constants/panel-types';

import { Panel } from '../panel';

import './sidebar.css';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      {AllowedPanels.map((panel) => (
        <Panel
          key={panel.name}
          title={panel.name}
          content='...'
          options={panel.options}
        />
      ))}
    </div>
  );
};
