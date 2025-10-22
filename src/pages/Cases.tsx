import YouTubeEmbed from '@/components/app/embed/youtubeEmbed';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useInView } from 'react-intersection-observer';
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

  type CaseComponentProps = {
    item: Case;
    index: number;
    extendedCard?: boolean; // if you are using it in your component
  };

  const CaseComponent: React.FC<CaseComponentProps> = ({
    item,
    index,
    extendedCard,
  }) => {
    const { ref, inView } = useInView({
      threshold: 0.8,
    });

    return (
      <div
        className={`flex flex-col shrink-0 grow snap-center snap-always w-48 gap-2 overflow-y-scroll transition-transform duration-200 ${inView ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}
        key={index}
        ref={ref}
      >
        <img
          src={`${import.meta.env.BASE_URL}${item.logo}`}
          alt={item.name}
          className="object-scale-down h-12 sticky"
        />
        <ScrollArea
          className={`px-4 transition-card-height text-sm ${!extendedCard ? 'h-0' : 'h-48'}`}
        >
          {item.about}
          <br />
          <br />
          {item.case}
        </ScrollArea>
      </div>
    );
  };

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
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full flex flex-row overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-proximity justify-center-safe grow gap-4 px-32">
              {cases.map((item: Case, index: number) => (
                <CaseComponent
                  key={index}
                  item={item}
                  index={index}
                  extendedCard={extendedCard}
                />
              ))}
            </div>
            <button
              onClick={handleCardBtn}
              className="flex flex-row w-fit text-black/70 hover:text-black bg-clip-text cursor-pointer outline-0"
            >
              {!extendedCard ? (
                <>
                  <span>Show more</span>
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
                  <span>Show less</span>
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
          {/* <div className="flex flex-col">
            <div className="flex flex-row overflow-x-auto scrollbar-hide w-full h-full items-center-safe snap-x snap-mandatory gap-8">
              {cases.map((item: Case, index: number) => (
                <div
                  className={`flex flex-col items-center-safe shrink-0 w-64 grow snap-center gap-4 ${index == 0 ? 'ms-16' : ''} ${index == cases.length - 1 ? 'me-16' : ''}`}
                  key={index}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${item.logo}`}
                    alt={item.name}
                    className="object-scale-down h-16"
                  />
                  <div
                    className={`flex flex-col gap-4 text-sm transition-card-height overflow-hidden ${!extendedCard ? 'h-0' : 'h-96'}`}
                  >
                    <p>{item.about}</p>
                    <p>{item.case}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleCardBtn}
              className="flex flex-row w-30 text-black/70 hover:text-black justify-between bg-clip-text cursor-pointer"
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
          </div> */}

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
