import YouTubeEmbed from '@/components/app/embed/youtubeEmbed';
import { Banner } from '@/components/app/misc/banner';
import infoFile from '@/data/cases.yaml?raw';
import { Layout } from '@/components/layout';
import { useState } from 'react';
import { parse } from 'yaml';

const casesBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Our Customers</h1>
    <p className="text-lg">
      Discover how we've helped our clients innovate and grow.
    </p>
  </Banner>
);

type Case = {
  name: string;
  about: string;
  case: string;
  logo: string;
  url: string;
};

export function Cases() {
  const cases = parse(infoFile);
  const [extendedCard, setExtenedCard] = useState(false);
  const handleCardBtn = () => {
    if (extendedCard) {
      setExtenedCard(false);
    } else {
      setExtenedCard(true);
    }
  };

  console.log(cases);

  return (
    <Layout cases={true} banner={casesBanner}>
      <div className="flex flex-col items-center-safe gap-8 p-4 w-full">
        <h1 className="text-center text-4xl font-bold">Our Clients</h1>
        <div
          className={`flex flex-row justify-center gap-8 w-full transition-card-height grow`}
        >
          <button className="hidden rounded-full self-start mt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="size-8 stroke-amber-500/70 hover:stroke-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <div className="flex flex-row overflow-x-auto scrollbar-hide w-full h-full items-center-safe snap-x snap-mandatory">
            {cases.map((item: Case, index: number) => (
              <div className="shrink-0 w-full grow px-16" key={index}>
                <div
                  className="flex flex-col items-center-safe shrink-0 w-full p-8 rounded-lg grow snap-center bg-gradient-to-br from-green-500/20 to-teal-500/20 gap-4"
                  key={index}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="object-scale-down h-16"
                  />
                  <div
                    className={`flex flex-col justify-center gap-4 text-sm transition-card-height overflow-hidden ${!extendedCard ? 'h-0' : 'h-64'}`}
                  >
                    <p>{item.about}</p>
                    <p>{item.case}</p>
                  </div>
                  <button
                    onClick={handleCardBtn}
                    className="flex flex-row bg-white rounded-full py-2 px-4 text-white font-bold bg-gradient-to-br from-green-500 to-teal-500 w-36 justify-between"
                  >
                    {!extendedCard ? (
                      <>
                        <span>See more</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-6 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>See less</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-6 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="hidden rounded-full self-start mt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="size-8 stroke-amber-500/70 hover:stroke-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center-safe justify-center-safe gap-8 p-4 text-center">
        <h1 className="text-center text-4xl font-bold">Testimonial</h1>
        <p className="italic">
          Reshma and the Team has helped us close our security gaps.
        </p>
        <p className="text-lg font-bold italic">
          –Christiaan Rood, CEO, LeydenJar Technologies
        </p>
        <YouTubeEmbed
          videoId="KO0yNnQ8zbQ"
          title="​LeydenJar protects IP with help of Modelverse"
        />
      </div>
    </Layout>
  );
}
