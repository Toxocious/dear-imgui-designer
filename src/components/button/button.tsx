import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

import { ButtonProps, ButtonVariants } from '../../types/button';

import './button.css';

export const Button = (props: ButtonProps) => {
  const { text, variant, isLoading, dropdownItems } = props;

  const { buttonProps, itemProps, isOpen } = useDropdownMenu(
    dropdownItems?.length ?? 0,
    { disableFocusFirstItemOnClick: true }
  );

  return (
    <>
      <button className={ButtonVariants[variant]} {...buttonProps}>
        {isLoading ? 'Loading' : text}
      </button>

      {variant !== 'disabled' && !isLoading && dropdownItems?.length > 0 ? (
        <div className={isOpen ? 'visible' : 'invisible'} role='dropdown-menu'>
          {dropdownItems.map((item: any) => (
            <a {...itemProps[0]} href='#'>
              {item?.name}
            </a>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
