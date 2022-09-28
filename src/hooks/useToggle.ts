import { useState } from 'react';

type UseToggle = [boolean, { toggle: () => void }];

export const useToggle = (): UseToggle => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggle() {
    setIsOpen(prev => !prev);
  }

  return [isOpen, { toggle }];
};
