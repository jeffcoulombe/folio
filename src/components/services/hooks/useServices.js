import { useState } from "react";

function useServices() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleOnClose = () => {
    setToggleState(0);
  };

  return {
    selectors: { toggleState },
    actions: {
      toggleTab,
      handleOnClose,
    },
  };
}

export default useServices;
