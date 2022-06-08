import { Panel } from '../panel';

export const ComponentProps = (props: any) => {
  const { name, options, components } = props;

  return <Panel title={name} options={options} components={components} />;
};
