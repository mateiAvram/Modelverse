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
      <div className="flex grow flex-col items-center-safe gap-4 px-6 text-center lg:px-32 xl:px-64 2xl:px-128">
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
      <Card className="rounded-none border-0 bg-gray-200 xl:px-32 2xl:px-64">
        <CardContent>
          <Card className="bg-white">
            <CardContent className="flex flex-col">
              {cases.map((item: CaseItem, index: number) => (
                <div
                  key={index}
                  className="flex flex-row flex-wrap gap-8 border-b-2 p-4 md:gap-4"
                >
                  <div
                    className="flex w-full items-center-safe md:basis-48/100 md:justify-center-safe lg:basis-32/100"
                    onClick={() => (window.location.href = item.url)}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${item.logo}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex w-full flex-col justify-center-safe gap-2 md:basis-48/100 lg:basis-62/100">
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
