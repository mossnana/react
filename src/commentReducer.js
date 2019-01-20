const commentReducer = (state = [], action) => {
  // เขียนในรูปแบบ action
  switch (action.type) {
    case "add_comment":
      return state.concat([action.data]);

    case "delete_comment":
      return state.filter(comment => comment.id !== action.id);

    case "edit_comment":
      return state.map(comment =>
        comment.id === action.id
          ? { ...comment, editing: !comment.editing }
          : comment
      );

    case "update_comment":
      return state.map(comment => {
        if (comment.id === action.id) {
          return {
            ...comment,
            name: action.data.newName,
            message: action.data.newMessage,
            editing: !comment.editing
          };
        } else {
          return comment;
        }
      });

    default:
      return state;
  }
};
export default commentReducer;
