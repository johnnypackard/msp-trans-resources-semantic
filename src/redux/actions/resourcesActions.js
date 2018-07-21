export const RESOURCES_ACTIONS = {
    GET: 'GET_RESOURCES',
  };
  
  export function getResources() {
    return { type: RESOURCES_ACTIONS.GET };
  }