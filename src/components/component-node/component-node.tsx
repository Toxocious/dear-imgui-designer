import { ImGuiComponent } from '../../types/imgui-component';

import './component-node.scss';

export const ComponentNode = (props: any) => {
  const { id, name, label, children } = props;

  let childNodesTest = [];

  if (children.length > 0) {
    childNodesTest = children.map((childNode: ImGuiComponent) => {
      console.log(childNode);

      return (
        <ComponentNode
          id={childNode.id}
          key={childNode.id}
          name={childNode.name}
          label={childNode.label}
          children={childNode.children}
        />
      );
    });
  }

  return (
    <li key={id}>
      <div>
        {label}
        {name ? <span>{name}</span> : null}
      </div>
      {childNodesTest.length > 0 ? <ul>{childNodesTest}</ul> : null}
    </li>
  );
};
