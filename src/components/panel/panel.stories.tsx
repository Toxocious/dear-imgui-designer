import { Meta, Story } from '@storybook/react';

import { ImGuiComponents } from '../../constants/imgui-components';

import { Panel } from './panel';
import { PanelProps } from '../../types/panel';

const meta: Meta = {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const PanelTemplate: Story<PanelProps> = (props) => <Panel {...props} />;

export const ComponentTree = PanelTemplate.bind({});
ComponentTree.args = {
  title: 'Component Tree',
  content: 'Content',
};
ComponentTree.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <Panel {...(ComponentTree.args as PanelProps)} />

        <Panel
          {...(ComponentTree.args as PanelProps)}
          options={[
            {
              name: '+',
              subOptions: [...ImGuiComponents],
            },
          ]}
        />
      </div>
    );
  },
];

export const ComponentProperties = PanelTemplate.bind({});
ComponentProperties.args = {
  title: 'Component Properties',
  content: 'Content',
};
