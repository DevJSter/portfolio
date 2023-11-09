import React from "react";

const Cards = ({
  imageSrc,
  title,
  description,
  buttonText,
  bgColor,
  onClick,
  href,
}) => {
  return (
    <div className=" border rounded-lg p-4 mt-3 md:mt-0 md:mx-2">
      <img src={imageSrc} className="w-full h-40 md:h-60 " alt="" />
      <div className="mt-6 flex flex-col">
        <p className="text-xl font-semibold">{title}</p>
        <p className="overflow-hidden md:line-clamp-6 line-clamp-4  mt-3">
          {description}
        </p>
      </div>
      <a href={href} target="_blank">
        <button
          className={`mt-12 w-full border rounded-lg p-3 mb-3 ${bgColor}`}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Cards;
