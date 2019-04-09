export const createProject = project => {
  console.log("createProject Function (middleware)");
  console.log("receive: ", project);
  return (dispatch, getState) => {
    // make async call to database
    console.log("getState function allow you get previous state", getState());
    dispatch({
      type: "CREATE_PROJECT",
      project
    });
  };
};
