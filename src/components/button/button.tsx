import { ButtonProps, ButtonVariants } from '../../types/button';

import './button.css';

export const Button = (props: ButtonProps) => {
  const { text, variant, isLoading, disabled } = props;

  if (disabled) {
    let className = `${ButtonVariants[variant]} disabled`;

    return (
      <button className={className}>{isLoading ? 'Loading' : text}</button>
    );
  }

  return (
    <button className={ButtonVariants[variant]}>
      {isLoading ? 'Loading' : text}
    </button>
  );
};
