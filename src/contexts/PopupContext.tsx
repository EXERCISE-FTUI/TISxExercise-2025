"use client";

import React, { createContext, useContext, useState } from "react";

type PopupContextType = {
  popupVisible: boolean;
  setPopupVisible: (visible: boolean) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <PopupContext.Provider value={{ popupVisible, setPopupVisible }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
