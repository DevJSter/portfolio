import React from "react";
import GuideConnect from "../img/guide_connect.png";
import Cards from "./Cards";

const AppCards = () => {
  const cardDataArray = [
    {
      key: 1,
      imageSrc: GuideConnect,
      title: "Guide Connect",
      description: "Guide Connect is an android app made in Flutter for connecting mentors to their students. It's has simple implementation of Flutter UI and backend in flutter which can show students their schedule and mentor can change schedule anytime it will be reflected in real in student's POV. Guide Connect made connection between student and their guide more easy",
      buttonText: "View on Github",
      bgColor: "bg-accBlue",
      onClick: "https://github.com/vwakesahu/Guide_connect"
    },
  ];

  return (
    <div>
      <p className="mt-20 mb-8 text-2xl font-semibold">
        App Development Projects:
      </p>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        {cardDataArray.map((cardData, key) => (
          <Cards
            key={cardData.key}
            imageSrc={cardData.imageSrc}
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
            bgColor={cardData.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AppCards;
