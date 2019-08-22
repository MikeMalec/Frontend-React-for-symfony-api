import { useState } from 'react';

export const useFileHandling = () => {
  const [file, setFile] = useState(null);

  const fileAction = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFile(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return { file: file, fileAction: fileAction };
};
