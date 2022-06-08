import { nextComponentID } from '../utils/get-next-component-id';

import { ImGuiComponent } from '../types/imgui-component';

const initialState: ImGuiComponent[] = [
  {
    id: 0,
    name: 'Container',
    label: 'Container',
    parent: undefined,
    children: [],
    value: undefined,
    properties: {
      height: 400,
      width: 400,
      padding: { x: 0, y: 0 },
      backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
      textColor: { r: 255, g: 255, b: 255, a: 1 },
      active: true,
    },
  },
];

export const componentTreeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'componentTree/getComponents':
      return state;

    case 'componentTree/addComponent':
      return [
        ...state,
        {
          id: nextComponentID(state),
          name: action.payload.name,
          label: action.payload.label,
          parent: action.payload?.parent,
          children: action.payload?.children,
          value: action.payload?.value,
          properties: {
            height: action.payload.properties.height,
            width: action.payload.properties.width,
            padding: action.payload.properties.padding,
            backgroundColor: action.payload.properties.backgroundColor,
            textColor: action.payload.properties.textColor,
            active: action.payload.properties.active,
          },
        },
      ];

    case 'componentTree/removeComponent':
      return state.filter((component) => component.id !== action.payload.id);

    default:
      return state;
  }
};
