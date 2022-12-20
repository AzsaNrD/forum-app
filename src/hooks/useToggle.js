import { useState } from 'react';

function useToggle(inititalState = false) {
  const [state, setState] = useState(inititalState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
}

export default useToggle;
