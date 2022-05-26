import React from 'react';
import './button.css';

const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  disabled: 'disabled',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof ButtonVariants;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={ButtonVariants[variant]}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);
