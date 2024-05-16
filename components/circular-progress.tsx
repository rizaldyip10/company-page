import React from 'react';

interface CircularProgressBarProps {
  progress: number;
  strokeWidth: string;
  width: string;
  textSize: string
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress, strokeWidth, width, textSize }) => {
  const radius = parseInt(width) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className={"relative"} style={{ width: `${width}px`, height: `${width}px`}}>
      <div className="absolute inset-0 flex items-center justify-center bg-[#37393F] rounded-full">
        <span className={`text-${textSize} font-semibold`}>{progress}%</span>
      </div>
      <svg className="absolute" width={width} height={width}>
        <circle cx={radius} cy={radius} r={radius - parseInt(strokeWidth) / 2} fill="none" stroke="#37393F" strokeWidth={strokeWidth}></circle>
        <circle
          cx={radius}
          cy={radius}
          r={radius - parseInt(strokeWidth) / 2}
          fill="none"
          stroke="#40DDB6"
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${radius} ${radius})`}
        ></circle>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
