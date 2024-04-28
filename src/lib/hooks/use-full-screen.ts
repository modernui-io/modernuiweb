"use client";

import { useEffect, useState } from "react";

export interface UseFullScreenHook {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
}

const useFullScreen = (): UseFullScreenHook => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const checkFullScreenStatus = (): void =>
    document.fullscreenElement /* || window.parent.document.webkitFullscreenElement */
      ? setIsFullScreen(true)
      : setIsFullScreen(false);

  const toggleFullScreen = (): void => {
    !document.fullscreenElement && !isFullScreen
      ? void document.documentElement.requestFullscreen()
      : void document.exitFullscreen();
  };

  useEffect(() => {
    window.addEventListener("fullscreenchange", checkFullScreenStatus);
    return (): void => {
      window.removeEventListener("fullscreenchange", checkFullScreenStatus);
    };
  }, []);

  return { isFullScreen, toggleFullScreen };
};

export default useFullScreen;
