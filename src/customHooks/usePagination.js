import { useState, useEffect } from 'react';

export const usePagination = (
  getMorePosts,
  amountOfPosts,
  id = null,
  query = null
) => {
  const [start, setStart] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', checkWhetherBottom);
    return () => {
      window.removeEventListener('scroll', checkWhetherBottom);
    };
  }, [start, amountOfPosts]);
  const checkWhetherBottom = e => {
    let scrollTop = document.documentElement.scrollTop;
    let offsetHeight = document.documentElement.offsetHeight;
    let innerHeight = window.innerHeight;
    if (scrollTop + innerHeight >= offsetHeight) {
      if (start < amountOfPosts) {
        window.removeEventListener('scroll', checkWhetherBottom);
        if (query !== null) {
          getMorePosts(query, start + 5);
        } else {
          if (id !== null) {
            getMorePosts(start + 5, id);
          } else {
            getMorePosts(start + 5);
          }
        }
        setStart(start + 5);
      }
    }
  };
  return { start: start, setStart: setStart };
};
