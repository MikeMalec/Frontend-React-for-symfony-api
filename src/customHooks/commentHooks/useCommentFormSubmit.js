export const useCommentFormSubmit = (
  ref,
  id,
  createComment,
  getComments,
  setShow = null
) => {
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      if (ref.current.value !== '') {
        createComment(id, { body: ref.current.value });
        getComments(id);
        if (setShow) {
          setShow(false);
        }
        ref.current.value = '';
      }
    }
  };
  return onKeyPress;
};
