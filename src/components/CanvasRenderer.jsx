import React, { useRef, useEffect } from "react";

import React from "react";

function CanvasRenderer({ width = 400, height = 400, renderedClass }) {
  const canvasRef = useRef();

  useEffect(() => {
    const context = canvasRef.current.getContext();
    const element = new renderedClass(context);
    element.render();
  });

  return <canvas width={width} height={height} useRef={canvasRef} />;
}

export default CanvasRenderer;
