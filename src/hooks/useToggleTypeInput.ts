import { useState } from "react";

const useToggleTypeInput = () => {
  const [toggleType, setToggleType] = useState<boolean>(false);

  return {
    toggleType,
    setToggleType
  };
};

export default useToggleTypeInput;