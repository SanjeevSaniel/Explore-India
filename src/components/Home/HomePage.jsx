import { NavLink } from "react-router-dom";
import NavBar from "../Header/NavBar";
import { useState } from "react";

import TopContent from "./TopContent";
import Destinations from "./Destinations";
import HomePagePlaybacks from "./HomePagePlaybacks";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="bg-[url(https://images.pexels.com/photos/2314983/pexels-photo-2314983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-bottom relative">
        <video
          autoPlay
          // controls
          // loop
          muted
          className="absolute top-0 bottom-0 w-full h-full mx-auto rounded-lg"
        >
          <source
            src="https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/Incredible_india_Edit_v10_1980x786_resolution.mp4"
            type="video/mp4"
          />
        </video>

        <div className="backdrop-brightness-[70%] z-10">
          <NavBar />
          <div className="grid grid-cols-2 lg:max-w-[1280px] lg:h-[31.8rem] m-auto text-white">
            <section className="pt-[5rem]">
              <p className="text-[4rem] font-bold leading-[4.5rem]">
                Travel memories you&apos;ll never forget
              </p>
              <button
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex mt-10 pl-4 text-2xl font-semibold hover:transition-transform hover:translate-x-2 duration-300 ease-in-out"
              >
                <NavLink to="/explore" className="pt-1 mr-2 shadow-lg">
                  explore
                </NavLink>
                <span
                  className={`hover:transition-transform ${
                    isHovered && "translate-x-2"
                  } duration-300 ease-in-out`}
                >
                  <img
                    width="48"
                    height="64"
                    src="https://img.icons8.com/laces/64/ffffff/arrow.png"
                    alt="arrow"
                  />
                </span>
              </button>
            </section>
          </div>
        </div>
      </div>

      <HomePagePlaybacks />
      <Destinations />
      <TopContent />
    </div>
  );
};

export default HomePage;
