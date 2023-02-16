import React from "react";

const Navigation = () => {
  const button = "py-1 px-4 outline-none cursor-pointer rounded-md font-medium";
  return (
    <nav className="flex flex-row justify-between h-24 items-center drop-shadow-lg">
      <h2>
        <span className="font-bold">United</span> Bank
      </h2>
      <ul className="flex gap-8 font-medium">
        <li>
          <a href="" className="font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
      </ul>
      <div className="flex gap-4 justify-between">
        <button className={`${button} text-primary border-2 border-primary`}>
          Login
        </button>
        <button className={`${button} text-white bg-primary`}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navigation;
