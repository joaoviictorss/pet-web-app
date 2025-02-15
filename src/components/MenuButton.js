import React from "react";

const MenuButton = (props) => {
  return (
    <>
      <label htmlFor="checkbox-menu" className="checkbox-menu-label">
        <input
          type="checkbox"
          id="checkbox-menu"
          className={props.className}
          onChange={props.toogleMenu}
        />
        <svg
          className="svg-menu-hamburguer"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="#ffffff"
        >
          <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
        </svg>
      </label>
    </>
  );
};

export default MenuButton;

