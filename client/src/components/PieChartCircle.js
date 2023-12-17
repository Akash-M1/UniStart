import React from 'react';

const getColor = (percent) => {
  const red = Math.round((1 - percent / 100) * 255);
  const green = Math.round((percent / 100) * 255);
  return `rgb(${red}, ${green}, 0)`;
};

const PieChartCircle = ({ radius, percent }) => {
  const circumference = 2 * Math.PI * radius;
  const progress = (100 - percent) / 100;
  const offset = progress * circumference;
  const strokeWidth = 20; // Adjust the stroke width as needed

  const color = getColor(percent);

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
        stroke="#ccc"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <circle
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={radius / 2}
        fill="#333"
        fontWeight="bold"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default PieChartCircle;
