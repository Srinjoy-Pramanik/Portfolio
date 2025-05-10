import React from "react";

const Participation: React.FC = () => {
  return (
    <section id="participation" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src="/images/winner.jpg"
                  alt="Award Winning Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 border-4 border-amber-500 rounded-lg -z-10"></div>
            </div>
            <br />
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              2nd Prize Winner
              <br />
              at{" "}
              <a
                href="https://dashtoon.com/comic-chronicles"
                className="text-amber-500 hover:text-amber-400"
              >
                Comic Chronicles
              </a>{" "}
              2025
              <br />
              Student Track
            </h2>
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-white mb-4">
              Achievements & Recognition
            </h2>
            <div className="w-12 h-1 bg-amber-500 mb-6"></div>

            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              On May 2, 2025, I had the honor of being invited to the Waves
              Summit 2025 as a 2nd Prize Winner in the Comic Chronicles
              competition in Student Track.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed text-justify">
              This recognition celebrated my creativity and storytelling in
              comic art, where my work stood out among numerous entries for its
              originality, visual appeal, and narrative impact. The summit
              provided a platform to connect with fellow creators, share
              insights, and discuss the evolving landscape of comic art and
              visual storytelling.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed text-justify">
              Key Highlights:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 leading-relaxed text-justify">
              <li>
                Received 2nd Prize in Comic Chronicles Student Track 2025.
              </li>
              <li>
                Personally invited to attend and engage at Waves Summit 2025.
              </li>
              <li>
                Showcased my work and discussed the inspiration and creative
                process behind it.
              </li>
              <li>
                Networked with industry experts, artists, and enthusiasts.
              </li>
            </ul>

            <p className="text-gray-300 mb-6 leading-relaxed text-justify">
              This experience reinforced my passion for visual storytelling and
              continues to inspire my creative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participation;
