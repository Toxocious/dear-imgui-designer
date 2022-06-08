export const GetActiveComponentList = (state: any) => {
  console.log(state.componentTree);

  return {
    components: state.componentTree,
  };
};
