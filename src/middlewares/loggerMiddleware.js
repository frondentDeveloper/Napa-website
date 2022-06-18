const logger = (store) => (next) => (action) => {
  if (action.type === "@@router/LOCATION_CHANGE") {
    console.group(`${action.type} ${action.payload.pathname}`);
  } else {
    console.group(action.type);
  }
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};
export default logger;
