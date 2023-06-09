import React from "react";

const Operation = ({ color }) => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4609 7.19995H54.5389V13.2389H12.4609V7.19995Z" fill="white" />
      <path d="M47.5 53.2H20.5V57.2H47.5V53.2Z" fill="white" />
      <path d="M59 54.1929V20.1929C59 17.9769 57.216 16.1929 55 16.1929H9L5 20.1929V46.1929C5 48.4089 6.784 50.1929 9 50.1929H55" fill="#F4F7F8" />
      <path
        d="M36 18.2H33C32.1716 18.2 31.5 18.8715 31.5 19.7C31.5 20.5284 32.1716 21.2 33 21.2H36C36.8284 21.2 37.5 20.5284 37.5 19.7C37.5 18.8715 36.8284 18.2 36 18.2Z"
        fill="white"
      />
      <path d="M38.5 23.2H30.5V26.2H38.5V23.2Z" fill="white" />
      <path d="M24.5 35.2H19.5V38.2H24.5V35.2Z" fill="white" />
      <path
        d="M25.4999 25.4067L28.2929 28.1998L25.4999 30.9928L22.7069 28.1998L25.4999 25.4067ZM58.9999 54.1927V20.1927C59.0013 19.6671 58.8987 19.1464 58.6981 18.6605C58.4975 18.1747 58.2028 17.7333 57.8309 17.3618L6.16895 49.0238C6.54047 49.3957 6.98186 49.6904 7.46771 49.891C7.95357 50.0916 8.47429 50.1941 8.99994 50.1927H54.9999"
        fill="white"
      />
      <path
        d="M55 58.2C55.7021 58.1999 56.3919 58.015 56.9999 57.6639C57.608 57.3129 58.1129 56.808 58.464 56.2C58.8151 55.5919 58.9999 54.9021 58.9999 54.2C58.9999 53.4978 58.8151 52.808 58.464 52.2C58.1129 51.5919 57.608 51.0869 56.9999 50.7358C56.3919 50.3848 55.7021 50.2 55 50.2V54.2V58.2ZM9 11.2C8.2977 11.1998 7.60773 11.3845 6.99948 11.7356C6.39123 12.0867 5.88615 12.5917 5.535 13.2C5.13554 13.8973 4.95538 14.6987 5.01801 15.4999C5.01801 27.1999 5 33.2 5 46.2H5.004C5.0027 45.4983 5.18582 44.8086 5.535 44.2C5.88615 43.5917 6.39123 43.0867 6.99948 42.7356C7.60773 42.3845 8.2977 42.1998 9 42.2V15.2V11.2Z"
        fill="white"
      />
      <path
        d="M14 11.7H15V13.7H14V11.7ZM16 10.7H17V13.7H16V10.7ZM18 11.7H19V13.7H18V11.7ZM20 10.7H21V13.7H20V10.7ZM22 11.7H23V13.7H22V11.7ZM24 10.7H25V13.7H24V10.7ZM26 11.7H27V13.7H26V11.7ZM28 10.7H29V13.7H28V10.7ZM30 11.7H31V13.7H30V11.7ZM32 10.7H33V13.7H32V10.7ZM34 11.7H35V13.7H34V11.7ZM36 10.7H37V13.7H36V10.7ZM38 11.7H39V13.7H38V11.7ZM40 10.7H41V13.7H40V10.7ZM42 11.7H43V13.7H42V11.7ZM44 10.7H45V13.7H44V10.7ZM46 11.7H47V13.7H46V11.7ZM48 10.7H49V13.7H48V10.7ZM50 11.7H51V13.7H50V11.7ZM52 10.7H53V13.7H52V10.7Z"
        fill={color}
      />
      <path d="M45.47 53.3289H47.591V57.0859H45.47V53.3289Z" fill="white" />
      <path
        d="M5 20.1929V46.1929C5 48.4089 6.784 50.1929 9 50.1929H55M59 54.1929V20.1929C59 17.9769 57.216 16.1929 55 16.1929H9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 38.2V42.2H37.563M21.999 38.2V40.2H28.999V38.4299M40.999 35.137V32.231M40.999 29.075V24.2H38.5M21.967 34.83V33.2H29.019V34.83M25.501 33.0699V30.8469M25.501 25.6539V24.2H30.251M55 58.2C55.7022 58.1999 56.3919 58.015 57 57.6639C57.608 57.3129 58.113 56.808 58.464 56.2C58.8151 55.5919 58.9999 54.9021 58.9999 54.2C58.9999 53.4978 58.8151 52.808 58.464 52.2C58.113 51.5919 57.608 51.0869 57 50.7358C56.3919 50.3848 55.7022 50.2 55 50.2V54.2V58.2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 18.2H33C32.1716 18.2 31.5 18.8715 31.5 19.7C31.5 20.5284 32.1716 21.2 33 21.2H36C36.8284 21.2 37.5 20.5284 37.5 19.7C37.5 18.8715 36.8284 18.2 36 18.2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38.5 23.2H30.5V26.2H38.5V23.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.5 35.2H19.5V38.2H24.5V35.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.5 35.2H37.5V38.2H44.5V35.2Z" fill="white" />
      <path d="M31.5 35.2H26.5V38.2H31.5V35.2Z" fill="white" />
      <path
        d="M37 45.2H32C31.1716 45.2 30.5 45.8715 30.5 46.7C30.5 47.5284 31.1716 48.2 32 48.2H37C37.8284 48.2 38.5 47.5284 38.5 46.7C38.5 45.8715 37.8284 45.2 37 45.2Z"
        fill="white"
      />
      <path d="M34.5 21.3569V23.137M25.5 25.4069L28.293 28.2L25.5 30.9929L22.707 28.2L25.5 25.4069Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.5 29.2H37.5V32.2H44.5V29.2Z" fill="white" />
      <path d="M25.5 40.2V42.2H31.417" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37.5 40.2H31.5V43.2H37.5V40.2Z" fill="white" />
      <path
        d="M34.5 43.3188V45.054M9 11.2C8.2977 11.1998 7.60773 11.3845 6.99948 11.7356C6.39123 12.0867 5.88615 12.5917 5.535 13.2C5.13554 13.8973 4.95538 14.6987 5.01801 15.4999C5.01801 27.1999 5 33.2 5 46.2H5.004C5.0027 45.4983 5.18582 44.8086 5.535 44.2C5.88615 43.5917 6.39123 43.0867 6.99948 42.7356C7.60773 42.3845 8.2977 42.1998 9 42.2V15.2V11.2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.4609 7.19995H54.5389V13.2389H12.4609V7.19995Z" stroke={color} strokeLinejoin="round" />
      <path d="M20.5 53.2V57.2L15.5 55.2L20.5 53.2Z" fill="white" />
      <path d="M47.5 53.2H49.5C50.054 53.2 50.5 53.646 50.5 54.2V56.2C50.5 56.754 50.054 57.2 49.5 57.2H47.5" fill="white" />
      <path d="M45.5 57.2V53.2" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 53.2V57.2L15.5 55.2L20.5 53.2Z" fill="#F4F7F8" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 55.2H45.5" stroke={color} />
      <path d="M47.5 53.2H49.5C50.054 53.2 50.5 53.646 50.5 54.2V56.2C50.5 56.754 50.054 57.2 49.5 57.2H47.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47.5 53.2H20.5V57.2H47.5V53.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.5 35.2H37.5V38.2H44.5V35.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.5 35.2H26.5V38.2H31.5V35.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M37 45.2H32C31.1716 45.2 30.5 45.8715 30.5 46.7C30.5 47.5284 31.1716 48.2 32 48.2H37C37.8284 48.2 38.5 47.5284 38.5 46.7C38.5 45.8715 37.8284 45.2 37 45.2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M44.5 29.2H37.5V32.2H44.5V29.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37.5 40.2H31.5V43.2H37.5V40.2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Operation;
