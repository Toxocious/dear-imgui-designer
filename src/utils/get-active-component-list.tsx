import { mainStore } from '../store/store';

export const GetActiveComponentList = (): Object => {
  const COMPONENT_LIST = mainStore.dispatch('componentTree/getComponents');

  return [...COMPONENT_LIST] ?? [];
};
