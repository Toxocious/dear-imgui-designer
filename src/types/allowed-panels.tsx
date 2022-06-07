import { ButtonProps, ButtonVariants } from './button';

export type AllowedPanelType = {
  name: string;
  content: any;
  options: AllowedPanelOptionType[] | {};
};

type AllowedPanelOptionType = {
  name: string;
  onClick?: any;
};
