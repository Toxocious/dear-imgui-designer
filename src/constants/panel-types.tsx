import { AllowedPanelType } from '../types/allowed-panels';

export const AllowedPanels: AllowedPanelType[] = [
  {
    name: 'Component Tree',
    content: 'You have no active components.',
    options: [
      { name: '-', onClick: '', disabled: true },
      { name: '+', onClick: '', disabled: false },
    ],
  },
  {
    name: 'Component Properties',
    content: 'Select a component.',
    options: {},
  },
];
