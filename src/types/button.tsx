import React from 'react';

export const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  disabled: 'disabled',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant: keyof typeof ButtonVariants;
  isLoading?: boolean;
};
