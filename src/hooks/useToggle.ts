import { useState } from 'react';

export const useToggle = (): [boolean, { toggle: () => void }] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggle() {
    setIsOpen(prev => !prev);
  }

  return [isOpen, { toggle }];
};
