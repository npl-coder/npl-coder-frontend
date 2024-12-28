import { useEffect } from 'react';

const RedirectToExternal = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};

export default RedirectToExternal;