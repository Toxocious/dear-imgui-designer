import { ImGuiComponents } from '../constants/imgui-components';

import { AllowedPanelType } from '../types/allowed-panels';

export const AllowedPanels: AllowedPanelType[] = [
  {
    name: 'Component Tree',
    content: 'You have no active components.',
    options: [
      {
        name: '+',
        subOptions: [...ImGuiComponents],
      },
    ],
  },
  {
    name: 'Component Properties',
    content: 'Select a component.',
  },
];
