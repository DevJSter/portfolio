import React from "react";
import FoodApp from "../img/food_app.png";
import JobSet from "../img/jobset.png";
import BullishBrains from "../img/builish_brains.png";
import FramesByEngineers from "../img/fbe.png";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

const WebCards = () => {
  const navigate = useNavigate();

  const cardDataArray = [
    {
      key: 1,
      imageSrc: FoodApp,
      title: "🥫 teen",
      description:
        "Canteen is a cutting-edge Online Food Ordering System created using ReactJS and enhanced with Tailwind CSS for seamless and appealing user interfaces. With the integration of Firebase, the platform utilizes Google authentication for a secure and user-friendly login process. The application effectively employs a Redux-powered reducer store to manage the shopping cart, ensuring a smooth and interactive experience for users as they curate and confirm their orders. By harmonizing these technologies, Canteen facilitates a streamlined user journey from browsing the menu to placing orders, contributing to an efficient and satisfying food ordering process.",
      buttonText: "Visit Site",
      bgColor: "bg-accYellow",
      onClick: "https://canteen-system.netlify.app/",
    },
    {
      key: 2,
      imageSrc: JobSet,
      title: "JobSet",
      description:
        "During my tenure as an intern in the IBM Skillbuild program for web development, I actively participated in a collaborative project called JobSet. This project focused on creating a comprehensive web application to facilitate job-related activities. My role involved working on various key components of the application, including the Homepage, Resources section, and the Find Job feature. I employed ReactJS and Tailwind CSS, two powerful technologies, to develop these components. ReactJS enabled me to build dynamic and responsive user interfaces, while Tailwind CSS streamlined the design process and ensured a visually cohesive presentation. Through this experience, I not only refined my technical skills but also gained valuable insights into effective collaboration. By contributing to different facets of the JobSet project, I learned how to work harmoniously within a team, manage code integration, and maintain consistent coding practices. Overall, my involvement in JobSet allowed me to apply my knowledge of ReactJS and Tailwind CSS to a real-world project, while also fostering a deeper understanding of teamwork and collaborative software development.",
      buttonText: "Visit Site",
      bgColor: "bg-accPurple",
      onClick: "https://jobset.onrender.com/",
    },

    {
      key: 3,
      imageSrc: FramesByEngineers,
      title: "Frames By Engineers",
      description:
        "In the era of digital transformation, the e-commerce industry continues to evolve, with a growing demand for innovative solutions that enhance the online shopping experience. Our project aims to address a common challenge faced by customers when purchasing custom picture frames from online retailers. The challenge revolves around the difficulty of visualizing how different frames will complement the selected photograph, leading to uncertainty and potential dissatisfaction with the final product. To tackle this issue, we propose the development of a user-friendly website that offers customers a seamless and interactive way to preview their photographs in various frames",
      buttonText: "Visit Site",
      bgColor: "bg-accRed",
      onClick: "https://frames-by-engineers.vercel.app/",
    },
    {
      key: 4,
      imageSrc: BullishBrains,
      title: "Bullish Brains",
      description:
        "In my portfolio, I also had the privilege of contributing to a project called Bullish Brains, a dynamic platform centered around the stock market. This project catered to stock market enthusiasts by providing real-time news updates and interactive graphical representations of stock data obtained through APIs. Incorporating a range of functionalities, Bullish Brains seamlessly displayed live news updates, ensuring users were always informed about the latest developments in the stock market. Additionally, the platform offered the capability to visualize stock data through dynamic graphs, helping users analyze market trends and make informed decisions. For user authentication, the project implemented a secure and user-friendly approach. It leveraged email verification and Google sign-in, utilizing the authentication services offered by Firebase. This not only ensured a robust login system but also contributed to a seamless and convenient user experience. By harmonizing these elements, Bullish Brains emerged as a comprehensive tool that empowered users to stay updated on stock market happenings, make data-driven investment choices, and engage with a user interface that combined real-time information and intuitive design.",
      buttonText: "View Source code",
      bgColor: "bg-accBlue",
      onClick: "https://github.com/vwakesahu/bullish_brains",
    },
  ];

  return (
    <div>
      <p className="mt-36 mb-8 text-2xl font-semibold">
        Web Development Projects:
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        {cardDataArray.map((cardData, key) => (
          <Cards
            key={cardData.key}
            imageSrc={cardData.imageSrc}
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
            bgColor={cardData.bgColor}
            href={cardData.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default WebCards;
