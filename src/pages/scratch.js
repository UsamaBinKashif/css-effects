import React, { useState, useRef, useEffect } from "react";

const ScratchCard = () => {
  const [isScratching, setIsScratching] = useState(false);
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);

    const image = new Image();
    image.src = "/assets/two.jpg"; // Replace with your image URL
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      canvas.width = width; // Set canvas width to match image
      canvas.height = height; // Set canvas height to match image
      context.drawImage(image, 0, 0, width, height);
      setIsLoaded(true);
      setImageWidth(width);
    };
  }, []);

  const startScratch = (event) => {
    setIsScratching(true);
    scratch(event);
  };

  const endScratch = () => {
    setIsScratching(false);
  };

  const scratch = (event) => {
    if (!isLoaded || !isScratching) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const bounds = canvas.getBoundingClientRect();
    const x = (event.clientX - bounds.left) * (canvas.width / bounds.width);
    const y = (event.clientY - bounds.top) * (canvas.height / bounds.height);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    // Adjust cursor size based on image width
    // const cursorSize = imageWidth <= 800 ? 10 : 35 * (800 / imageWidth);
    ctx.beginPath();
    ctx.arc(x, y, 200, 0, Math.PI * 10);
    ctx.fill();
  };

  return (
    <div className="mx-auto h-[100vh] flex items-center justify-center">
      <div className="scratch-card">
        <canvas
          className="bg-cover bg-no-repeat w-[800px]"
          style={{ backgroundImage: `url('/assets/one.jpg')` }}
          ref={canvasRef}
          onMouseDown={startScratch}
          onMouseMove={scratch}
          onMouseUp={endScratch}
          onMouseOut={endScratch}
          onTouchStart={startScratch}
          onTouchMove={scratch}
          onTouchEnd={endScratch}
          onTouchCancel={endScratch}
        ></canvas>
      </div>
    </div>
  );
};

export default ScratchCard;
