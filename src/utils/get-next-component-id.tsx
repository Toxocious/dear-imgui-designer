import { ImGuiComponent } from '../types/imgui-component';

export const nextComponentID = (components: ImGuiComponent[]): number => {
  const highestID = components.reduce(
    (highestID, component) => Math.max(component.id, highestID),
    -1
  );

  return highestID + 1;
};
