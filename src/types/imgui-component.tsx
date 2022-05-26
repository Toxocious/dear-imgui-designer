import { ImVec2, ImVec4 } from './imgui-imvec';

export type ImGuiComponent = {
  id: number;
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
};
