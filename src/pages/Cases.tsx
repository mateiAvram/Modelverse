import { Layout } from '@/components/app/layout';
import YouTubeEmbed from '@/components/app/embed/youtubeEmbed';
import { Card, CardContent } from '@/components/ui/card';
import customersFile from '@/data/customers.yaml?raw';
import { Link } from 'react-router-dom';

import { parse } from 'yaml';
import { Banner } from '@/components/app/content/banner';

type CaseItem = {
  name: string;
  about: string;
  case: string;
  logo: string;
  url: string;
};

const casesBanner = (
  <Banner>
    <h1 className="text-5xl font-bold text-white">Customer Cases</h1>
    <p className="text-xl text-white">
      Discover how we've helped our clients innovate and grow.
    </p>
  </Banner>
);

export function Cases() {
  // Extracting Cases
  const cases = parse(customersFile);

  return (
    <Layout cases={true} banner={casesBanner}>
      {/* Main content */}
      <div className="mx-auto flex w-full grow flex-col items-center-safe justify-center-safe gap-4 px-6 text-center lg:max-w-[854px] xl:max-w-[1024px] 2xl:max-w-[1366px]">
        <YouTubeEmbed
          videoId="KO0yNnQ8zbQ"
          title="​LeydenJar protects IP with help of Modelverse"
        />
        <p className="text-xl italic">
          Reshma and Team has helped us to close our security gaps.
        </p>
        <p className="text-xl font-bold italic">
          –Christiaan Rood, CEO, LeydenJar Technologies
        </p>
      </div>

      {/* Hero */}
      <Card className="rounded-none border-0 bg-gray-200">
        <CardContent>
          <Card className="mx-auto w-full bg-white xl:max-w-[1280px] 2xl:max-w-[1600px]">
            <CardContent className="flex flex-col">
              {cases.map((item: CaseItem, index: number) => (
                <div
                  key={index}
                  className="lg flex flex-col gap-8 border-b-2 p-4 md:flex-row"
                >
                  <div
                    className="flex items-center-safe md:basis-1/3 md:justify-center-safe"
                    onClick={() => (window.location.href = item.url)}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${item.logo}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center-safe gap-2 md:basis-2/3">
                    <Link
                      to={item.url}
                      className="hidden text-3xl text-teal-500 underline lg:inline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-lg">{item.about}</p>
                    <p className="text-lg">{item.case}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Layout>
  );
}
