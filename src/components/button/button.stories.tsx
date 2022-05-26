import { Meta, Story } from '@storybook/react';

import { Button } from './button';
import { ButtonProps } from '../../types/button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  variant: 'secondary',
};

export const Glass = Template.bind({});
Glass.args = {
  text: 'Glass Button',
  variant: 'glass',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  variant: 'disabled',
};
