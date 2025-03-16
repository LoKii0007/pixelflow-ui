import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface CustomProps {
  onChange?: (points: Point[]) => void;
}

const Custom: React.FC<CustomProps> = ({ onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([
    { x: 0.25, y: 0.75 },  // First control point
    { x: 0.75, y: 0.25 },  // Second control point
  ]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const drawCurve = (ctx: CanvasRenderingContext2D) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 10; i++) {
      const pos = (i / 10) * width;
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(width, pos);
      ctx.stroke();
    }

    // Draw guide lines
    ctx.beginPath();
    ctx.moveTo(0, height); // Start point (bottom-left)
    ctx.lineTo(points[0].x * width, points[0].y * height); // First control point
    ctx.moveTo(width, 0); // End point (top-right)
    ctx.lineTo(points[1].x * width, points[1].y * height); // Second control point
    ctx.strokeStyle = '#90caf9';
    ctx.setLineDash([5, 5]); // Create dashed lines
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]); // Reset line style

    // Draw Bezier curve
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.bezierCurveTo(
      points[0].x * width,
      points[0].y * height,
      points[1].x * width,
      points[1].y * height,
      width,
      0
    );
    ctx.strokeStyle = '#2196f3';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw control points
    points.forEach((point, index) => {
      ctx.beginPath();
      ctx.arc(point.x * width, point.y * height, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#2196f3';
      ctx.fill();
      ctx.strokeStyle = '#1976d2';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    console.log(ctx);
    if (!ctx) return;

    // Set canvas size
    canvas.width = 300;
    canvas.height = 300;

    drawCurve(ctx);
  }, [points]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / canvas.width;
    const y = (e.clientY - rect.top) / canvas.height;

    // Find if we're clicking near a point
    const clickedIndex = points.findIndex(
      point =>
        Math.abs(point.x - x) < 0.05 && Math.abs(point.y - y) < 0.05
    );

    if (clickedIndex !== -1) {
      setDraggingIndex(clickedIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (draggingIndex === null) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    let x = (e.clientX - rect.left) / canvas.width;
    let y = (e.clientY - rect.top) / canvas.height;

    // Clamp values between 0 and 1
    x = Math.max(0, Math.min(1, x));
    y = Math.max(0, Math.min(1, y));

    const newPoints = [...points];
    newPoints[draggingIndex] = { x, y };
    setPoints(newPoints);
    onChange?.(newPoints);
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded-lg cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div className="mt-2 text-sm text-gray-600">
        Drag the blue points to adjust the easing curve
      </div>
    </div>
  );
};

export default Custom;
