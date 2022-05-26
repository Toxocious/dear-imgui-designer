import { Meta, Story } from '@storybook/react';

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

export const ComponentProperties = PanelTemplate.bind({});
ComponentProperties.args = {
  title: 'Component Properties',
  content: 'Content',
};
