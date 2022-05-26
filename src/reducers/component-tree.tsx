import { nextComponentID } from '../utils/get-next-component-id';

import { ImGuiComponent } from '../types/imgui-component';

const initialState: ImGuiComponent[] = [];

export const componentTreeReducer = (state = initialState, action: any) => {
  switch (action.type) {
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

/*
name: string;
label: string | undefined;
parent: ImGuiComponent | undefined;
children: ImGuiComponent[] | undefined;
value?: string | number | boolean | undefined;
properties: {
  height: number;
  width: number;
  padding: ImVec2;
  backgroundColor: ImVec4;
  textColor: ImVec4;
  active: boolean;
};
*/
