export type AllowedPanelType = {
  name: string;
  options: AllowedPanelOptionType[] | {};
};

type AllowedPanelOptionType = {
  name: string;
  onClick?: any;
};
