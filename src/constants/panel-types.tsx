import { AllowedPanelType } from '../types/allowed-panels';

export const AllowedPanels: AllowedPanelType[] = [
  {
    name: 'Component Tree',
    content: 'You have no active components.',
    options: [
      { name: '-', onClick: '' },
      { name: '+', onClick: '' },
    ],
  },
  {
    name: 'Component Properties',
    content: 'Select a component.',
    options: {},
  },
];
