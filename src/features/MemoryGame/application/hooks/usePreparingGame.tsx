import { useEffect, useState } from "react";

export const usePreparingGame = () => {
  const [isPreparing, setIsPreparing] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreparing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return {
    isPreparing,
  };
};
