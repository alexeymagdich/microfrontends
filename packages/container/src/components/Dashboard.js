import React, { useRef, useEffect } from 'react';

import { mount as mountDashboard } from 'dashboard/Dashboard';

export default function Dashboard() {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboard(ref.current);
  }, []);

  return <div ref={ref} />;
}
