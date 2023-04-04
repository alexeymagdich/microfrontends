import React, { useRef, useEffect } from "react";

import { mount as mountMarketing } from "marketing/Marketing";

export default function Marketing() {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  });

  return <div ref={ref} />;
}
