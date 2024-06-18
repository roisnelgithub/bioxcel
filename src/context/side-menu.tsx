import { ReactNode, createContext, useState } from "react";

interface SideMenuContextProps {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const SideMenuContext = createContext<SideMenuContextProps>({
  isOpen: false,
  openMenu: () => null,
  closeMenu: () => null,
});

interface SideMenuProviderProps {
  children: ReactNode;
}

export const SideMenuProvider = ({ children }: SideMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <SideMenuContext.Provider value={{ isOpen, closeMenu, openMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
};
