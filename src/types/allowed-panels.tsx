export type AllowedPanelType = {
  name: string;
  childNodes: any;
  options?: AllowedPanelOptionType[];
};

type AllowedPanelOptionType = {
  name: string;
  onClick?: any;
  subOptions?: any;
};
