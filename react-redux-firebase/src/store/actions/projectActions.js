export const createProject = project => {
  console.log("createProject Function (middleware)");
  console.log("receive: ", project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    console.log("getState function allow you get previous state", getState());
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Ant",
        authorLastName: "DPU",
        authorId: 12345,
        createedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
