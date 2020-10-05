import { useRef, useEffect } from 'react';

const useCanvas = draw => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      predraw(context, canvas);
      draw(context, frameCount);
      postdraw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

const predraw = (context, canvas) => {
  context.save();
  resizeCanvas(canvas);
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};

const postdraw = context => {
  context.restore();
};

const resizeCanvas = canvas => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(beginX, beginY, endX, endY) {
    this.begin = new Point(beginX, beginY);
    this.end = new Point(endX, endY);
  }
}

const drawLine = (ctx, line) => {
  ctx.beginPath();
  ctx.moveTo(line.begin.x, line.begin.y);
  ctx.lineTo(line.end.x, line.end.y);
  ctx.stroke();
};

export { useCanvas, Point, Line, drawLine };
