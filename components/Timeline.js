import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Joined Explorest">
        It was time for a change in my career, and Explorest came calling. The
        best part was remote working.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Full-Time at MMSoft">
        I was offered and accepted a full-time offer with MMSoft, as well as the
        opportunity to build a first digital banking app for Timo.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Landed First Internship ❤️">
        Finally felt like I understood this whole programming thing. My
        interviewing skills weren't great, but I managed to snag my first
        internship.
      </Step>
    </ul>
    <Divider />
    <Year>2002</Year>
    <ul>
      <Step title="First Computer">
        I remember many nights playing Diablo, Warcraft, and Heroes of Might and
        Magic.
      </Step>
    </ul>
    <Divider />
    <Year>1994</Year>
    <ul>
      <Step title="Became a Video Game Enthusiast"></Step>
    </ul>
    <Divider />
    <Year>1987</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Became a Freelance Contractor 👨🏻‍💻">
          I'm extremely excited about this new role helping grow the Next.js and
          Vercel community.
        </Step>
        <Step title="Started my Blog"></Step>
        <Step title="Started Teaching Programming 💌">
          I taught mobile and web development for Passerelles numériques's
          students.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Started Exercising"></Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Moved back to Da Nang"></Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
