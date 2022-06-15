import { ImGuiComponent } from '../../types/imgui-component';

import './component-node.scss';

export const ComponentNode = (props: any) => {
  let childNodesTest = [];
  if (props.children.length > 0) {
    childNodesTest = props.children.map((childNode: ImGuiComponent) => {
      return (
        <ComponentNode
          key={childNode.id}
          name={childNode.name}
          children={childNode.children}
        />
      );
    });
  }

  return (
    <li key={props.id}>
      <span>{props.name}</span>
      {childNodesTest ? childNodesTest : <></>}
    </li>
  );
};
