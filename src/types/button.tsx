import React from 'react';

export const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  glass: 'glass',
  disabled: 'disabled',
  dropdown: 'dropdown',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant: keyof typeof ButtonVariants;
  isLoading?: boolean;
  dropdownItems?: any;
};
