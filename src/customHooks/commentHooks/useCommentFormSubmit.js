export const useCommentFormSubmit = (
  ref,
  id,
  createComment,
  setShow = null
) => {
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      if (ref.current.value !== '') {
        createComment(id, { body: ref.current.value });
        if (setShow) {
          setShow(false);
        }
        ref.current.value = '';
      }
    }
  };
  return onKeyPress;
};
