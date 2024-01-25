import React from "react";

const BackButton = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1725 42L21.25 32L31.1725 22"
        stroke="#5E516F"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.6287 32H42.75"
        stroke="#5E516F"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M56 32C56 18.75 45.25 8 32 8C18.75 8 8 18.75 8 32C8 45.25 18.75 56 32 56C45.25 56 56 45.25 56 32Z"
        stroke="#5E516F"
        stroke-width="4"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default BackButton;
