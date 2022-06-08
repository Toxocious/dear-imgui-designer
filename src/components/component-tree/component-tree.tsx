import { useState } from 'react';
import { connect } from 'react-redux';

import { GetActiveComponentList } from '../../utils/get-active-component-list';

import { Panel } from '../panel';

const ComponentTree = (props: any) => {
  const { name, options, components } = props;

  return <Panel title={name} options={options} components={components} />;
};

const ComponentsList = connect(GetActiveComponentList);

export const COMPONENTS = ComponentsList(ComponentTree);
