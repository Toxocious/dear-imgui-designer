import { nextComponentID } from '../utils/get-next-component-id';

import { ImGuiComponent } from '../types/imgui-component';

const initialState: ImGuiComponent[] = [
  {
    id: 0,
    name: 'Container',
    label: 'Container',
    children: [
      {
        id: 1,
        name: 'Column',
        label: 'Navigation',
        children: [
          {
            id: 2,
            name: 'Button',
            label: 'General',
            children: [],
            value: undefined,
            selectable: false,
            properties: {
              height: 400,
              width: 400,
              padding: { x: 0, y: 0 },
              backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
              textColor: { r: 255, g: 255, b: 255, a: 1 },
              active: true,
            },
          },
          {
            id: 3,
            name: 'Button',
            label: 'ESP',
            children: [],
            value: undefined,
            selectable: false,
            properties: {
              height: 400,
              width: 400,
              padding: { x: 0, y: 0 },
              backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
              textColor: { r: 255, g: 255, b: 255, a: 1 },
              active: true,
            },
          },
        ],
        value: undefined,
        selectable: false,
        properties: {
          height: 400,
          width: 400,
          padding: { x: 0, y: 0 },
          backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
          textColor: { r: 255, g: 255, b: 255, a: 1 },
          active: true,
        },
      },
      {
        id: 4,
        name: 'Column',
        label: 'Content',
        children: [
          {
            id: 5,
            name: 'Child',
            label: 'Content Child',
            children: [
              {
                id: 6,
                name: 'Checkbox',
                label: 'Feature #1 Enabled',
                children: [],
                value: undefined,
                selectable: false,
                properties: {
                  height: 400,
                  width: 400,
                  padding: { x: 0, y: 0 },
                  backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
                  textColor: { r: 255, g: 255, b: 255, a: 1 },
                  active: true,
                },
              },
              {
                id: 7,
                name: 'Checkbox',
                label: 'Feature #2 Enabled',
                children: [],
                value: undefined,
                selectable: false,
                properties: {
                  height: 400,
                  width: 400,
                  padding: { x: 0, y: 0 },
                  backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
                  textColor: { r: 255, g: 255, b: 255, a: 1 },
                  active: true,
                },
              },
            ],
            value: undefined,
            selectable: false,
            properties: {
              height: 400,
              width: 400,
              padding: { x: 0, y: 0 },
              backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
              textColor: { r: 255, g: 255, b: 255, a: 1 },
              active: true,
            },
          },
        ],
        value: undefined,
        selectable: false,
        properties: {
          height: 400,
          width: 400,
          padding: { x: 0, y: 0 },
          backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
          textColor: { r: 255, g: 255, b: 255, a: 1 },
          active: true,
        },
      },
    ],
    value: undefined,
    selectable: false,
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
