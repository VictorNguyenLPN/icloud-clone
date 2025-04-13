import React from "react";

const ProgressCircle = () => {
  const styles = {
    animation: "progress 2s linear infinite alternate",
    strokeDasharray: "700 1400",
    strokeLinecap: "round",
  };

  return (
    <div>
      {/* <style>
        {`
          @keyframes progress {
            from {
              stroke-dasharray: 0 1400;
            }
            to {
              stroke-dasharray: 1257 1400;
            }
          }
        `}
      </style> */}
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <circle
          class="progress"
          cx="400"
          cy="400"
          fill="none"
          r="200"
          stroke-width="50"
          stroke="#ffffff"
          stroke-dasharray="700 1400"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
