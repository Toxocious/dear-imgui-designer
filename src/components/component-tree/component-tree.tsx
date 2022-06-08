import { useState } from 'react';

import { GetActiveComponentList } from '../../utils/get-active-component-list';

import { Panel } from '../panel';

export const ComponentTree = (props: any) => {
  // const [componentList, setComponentList] = useState(GetActiveComponentList());

  const { name, options, childNodes } = props;

  return <Panel title={name} options={options} childNodes={childNodes} />;
};
