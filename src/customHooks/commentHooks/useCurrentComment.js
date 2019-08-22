import { useState } from 'react';

export const useCurrentComment = comment => {
  const [currentComment, setCurrentComment] = useState(comment);

  const onChange = e => {
    setCurrentComment({ ...currentComment, [e.target.name]: e.target.value });
  };

  return { currentComment: currentComment, onChange: onChange };
};
