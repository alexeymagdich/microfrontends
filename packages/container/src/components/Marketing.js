import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount as mountMarketing } from 'marketing/Marketing';

function onNavigateMarketing(location, history) {
  const { pathname: nextPathname } = location;
  const { pathname } = history.location;

  if (pathname !== nextPathname) {
    history.push(nextPathname);
  }
}

export default function Marketing() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onContainerNavigate } = mountMarketing(ref.current, {
      onNavigate: (location) => onNavigateMarketing(location, history),
    });

    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref} />;
}
