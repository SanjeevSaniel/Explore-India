import { useState } from "react";

const HomePagePlaybacks = () => {
  const descriptionFirst = `One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist
            destinations in the world. It covers an area of 32, 87,263 sq. km,
            extending from the snow-covered Himalayan heights to the tropical
            rain forests of the south. As the 7th largest country in the world,
            India stands apart from the rest of Asia, marked off as it is by
            mountains and the sea, which give the country a distinct
            geographical entity.`;

  const descriptionSecond = `Fringed by the Great Himalayas in the north, it stretches southwards
            and at the Tropic of Cancer, tapers off into the Indian Ocean
            between the Bay of Bengal on the east and the Arabian Sea on the
            west. As you travel the expanse of the country, you are greeted by
            diverse nuances of cuisines, faiths, arts, crafts, music, nature,
            lands, tribes, history and adventure sports. India has a mesmeric
            conflation of the old and the new. As the bustling old bazaars rub
            shoulders with swanky shopping malls, and majestic monuments
            accompany luxurious heritage hotels, the quintessential traveller
            can get the best of both worlds. Head to the mountains, enjoy a
            beach retreat or cruise through the golden Thar, India has options
            galore for all.`;

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-[#fff5e2]">
      <div className="w-[80%] m-auto py-[5rem] ">
        <h1 className="text-[4rem] font-[Kalam] font-bold text-center px-4 leading-[3rem] drop-shadow-lg">
          Incredible <span className="text-green-400">In</span>
          <span className="text-white">d</span>
          <span className="text-orange-400">ia</span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <div className="text-center text-lg text-slate-500 px-4 py-6 leading-8 transition-all duration-500 ease-in-out">
              <p>{descriptionFirst}</p>
              <div
                className={`text-center transition-height duration-500 ease-in-out overflow-clip ${
                  showFullDescription ? "h-[13rem]" : "h-2"
                }`}
              >
                <p>{descriptionSecond}</p>
              </div>
              <button
                className="text-md font-semibold text-orange-500 drop-shadow-lg shadow-orange-600/100 "
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {descriptionSecond &&
                  `Read ${showFullDescription ? "Less" : "More"} `}
              </button>
            </div>
            <video
              //   autoPlay
              controls
              loop
              muted
              className="w-full mx-auto rounded-lg shadow-xl"
            >
              <source
                src="https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/Incredible_india_Edit_v10_1980x786_resolution.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {[1, 2, 3].map((v) => (
            <iframe
              key={v}
              width="100%"
              height="200"
              src="https://www.youtube-nocookie.com/embed/p8mXAQ6cPxg?si=Puq7CEa1-bPVjIOc&amp;controls=1;&amp;mute=1"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-lg  shadow-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePagePlaybacks;
