import { Panel } from '../panel';

export const ComponentProps = (props: any) => {
  const { name, options, childNodes } = props;

  return <Panel title={name} options={options} childNodes={childNodes} />;
};
