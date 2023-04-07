import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount as mountAuth } from 'auth/Auth';

function onNavigateAuth(location, history) {
  const { pathname: nextPathname } = location;
  const { pathname } = history.location;

  if (pathname !== nextPathname) {
    history.push(nextPathname);
  }
}

export default function Auth({ onSignIn }) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onContainerNavigate } = mountAuth(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => onNavigateAuth(location, history),
      onSignIn,
    });

    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref} />;
}
