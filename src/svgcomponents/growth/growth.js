import React from "react";

const Growth = ({ color }) => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_434_8981)">
        <path
          d="M49.8666 22.0332H48.8C47.6218 22.0332 46.6666 22.9883 46.6666 24.1665V50.5665C46.6666 51.7447 47.6218 52.6999 48.8 52.6999H49.8666C51.0448 52.6999 52 51.7447 52 50.5665V24.1665C52 22.9883 51.0448 22.0332 49.8666 22.0332Z"
          fill="white"
          stroke={color}
          strokeWidth="2.66667"
        />
        <path
          d="M39.2 31.3667H38.1333C36.9551 31.3667 36 32.3218 36 33.5V50.5667C36 51.7449 36.9551 52.7 38.1333 52.7H39.2C40.3782 52.7 41.3333 51.7449 41.3333 50.5667V33.5C41.3333 32.3218 40.3782 31.3667 39.2 31.3667Z"
          fill="white"
          stroke={color}
          strokeWidth="2.66667"
        />
        <path
          d="M28.5334 36.7H27.4667C26.2885 36.7 25.3334 37.6551 25.3334 38.8333V50.5666C25.3334 51.7448 26.2885 52.7 27.4667 52.7H28.5334C29.7116 52.7 30.6667 51.7448 30.6667 50.5666V38.8333C30.6667 37.6551 29.7116 36.7 28.5334 36.7Z"
          fill="white"
          stroke={color}
          strokeWidth="2.66667"
        />
        <path
          d="M17.8666 44.7H16.8C15.6218 44.7 14.6666 45.6551 14.6666 46.8333V50.5666C14.6666 51.7448 15.6218 52.7 16.8 52.7H17.8666C19.0448 52.7 20 51.7448 20 50.5666V46.8333C20 45.6551 19.0448 44.7 17.8666 44.7Z"
          fill="white"
          stroke={color}
          strokeWidth="2.66667"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 51.3667H56V54.0334H8V51.3667ZM9.09147 38.3382L41.0373 14.2654L42.6421 16.395L10.696 40.4681L9.09147 38.3382Z"
          fill={color}
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M40.7611 12.9666H43.4278V19.8999H40.7611V12.9666Z" fill={color} />
        <path fillRule="evenodd" clipRule="evenodd" d="M43.4664 12.9854V15.652H36.5331V12.9854H43.4664Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_434_8981">
          <rect width="64" height="64" fill="white" transform="translate(0 0.699951)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Growth;
