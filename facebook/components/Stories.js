import React from "react";
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";
import Image from "next/image";

const Stories = () => {
  const stories = [
    { profile: mikeprofile, background: mike },
    { profile: mrbeast, background: mrbeastbackground },
    { profile: kobe, background: kobebackground },
    { profile: arnold, background: arnoldbackground },
    { profile: therock, background: therock20 },
  ];

  return (
    <div className="w-screen sm:w-full">
      <div className="w-full flex space-x-2 p-4 mx-auto max-w-[25rem]">
        {stories.map((story) => (
          <div className="flex sm:w-24 sm:first-line:h-40 rounded-[1rem] w-[4.5rem] h-32">
            <div className="flex">
              <Image
                src={story.background}
                className="object-cover rounded-[1rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
