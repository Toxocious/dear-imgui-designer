import { Meta, Story } from '@storybook/react';

import { Button } from './button';
import { ButtonProps } from '../../types/button';

import './button.css';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const dropdownItems: any = [
  {
    name: 'Component #1',
    onClick: undefined,
  },
  {
    name: 'Component #2',
    onClick: undefined,
  },
];

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  variant: 'primary',
};

Primary.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div className='button-container'>
          <Button {...(Primary.args as ButtonProps)} />
        </div>
        <div className='button-container'>
          <Button
            {...(Primary.args as ButtonProps)}
            dropdownItems={dropdownItems}
          />
        </div>
      </div>
    );
  },
];

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  variant: 'secondary',
};
Secondary.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div className='button-container'>
          <Button {...(Secondary.args as ButtonProps)} />
        </div>
        <div className='button-container'>
          <Button
            {...(Secondary.args as ButtonProps)}
            dropdownItems={dropdownItems}
          />
        </div>
      </div>
    );
  },
];

export const Glass = Template.bind({});
Glass.args = {
  text: 'Glass Button',
  variant: 'glass',
};
Glass.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div className='button-container'>
          <Button {...(Glass.args as ButtonProps)} />
        </div>
        <div className='button-container'>
          <Button
            {...(Glass.args as ButtonProps)}
            dropdownItems={dropdownItems}
          />
        </div>
      </div>
    );
  },
];

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  variant: 'disabled',
};
Disabled.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div className='button-container'>
          <Button {...(Disabled.args as ButtonProps)} />
        </div>
        <div className='button-container'>
          <Button
            {...(Disabled.args as ButtonProps)}
            dropdownItems={dropdownItems}
          />
        </div>
      </div>
    );
  },
];
