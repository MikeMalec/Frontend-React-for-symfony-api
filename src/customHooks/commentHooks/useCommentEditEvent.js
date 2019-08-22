export const useCommentEditEvent = (
  currentComment,
  updateComment,
  setEdit,
  getComments,
  id
) => {
  const onKeyPress = e => {
    if (e.key === 'Enter' && currentComment.body !== '') {
      updateComment(currentComment);
      setEdit(false);
      getComments(id);
    }
  };
  return onKeyPress;
};
