import { ButtonProps, ButtonVariants } from '../../types/button';

import './button.css';

export const Button = (props: ButtonProps) => {
  const { text, variant, isLoading } = props;

  return (
    <button className={ButtonVariants[variant]}>
      {isLoading ? 'Loading' : text}
    </button>
  );
};
