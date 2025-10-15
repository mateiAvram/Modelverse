import { Layout } from "@/components/app/Layout";
import YouTubeEmbed from "@/components/app/YoutubeEmbed";
import { Card, CardContent } from "@/components/ui/card";
import customersFile from "@/data/customers.yaml?raw";
import { Link } from "react-router-dom";

import { parse } from "yaml";

type CaseItem = {
  name: string;
  about: string;
  case: string;
  logo: string;
  url: string;
};

export function Cases() {
  // Extracting Cases
  const cases = parse(customersFile);

  return (
    <Layout cases={true}>
      {/* Hero */}
      <Card className="border-0 rounded-none bg-teal-500">
        <CardContent>
          <div className="flex flex-col justify-center-safe items-center-safe gap-8">
            <h1 className="text-white text-5xl font-bold">Customer Cases</h1>
            <p className="text-white text-xl">
              Discover how we've helped our clients innovate and grow.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="grow flex flex-col mx-96 items-center-safe gap-4">
        <YouTubeEmbed
          videoId="KO0yNnQ8zbQ"
          title="​LeydenJar protects IP with help of Modelverse"
        />
        <p className="text-xl italic">
          Reshma and Team has helped us to close our security gaps.
        </p>
        <p className="text-xl italic font-bold">
          –Christiaan Rood, CEO, LeydenJar Technologies
        </p>
      </div>

      {/* Hero */}
      <Card className="border-0 rounded-none bg-gray-200 px-64">
        <CardContent>
          <Card className="bg-white">
            <CardContent className="grid auto-rows-fr">
              {cases.map((item: CaseItem, index: number) => (
                <>
                  <div
                    key={index}
                    className="flex flex-row gap-4 border-b-2 p-4"
                  >
                    <div className="basis-1/4 flex items-center-safe justify-center-safe">
                      <img
                        src={`${import.meta.env.BASE_URL}${item.logo}`}
                        alt={item.name}
                      />
                    </div>
                    <div className="basis-3/4 flex flex-col gap-2 justify-center-safe">
                      <Link
                        to={item.url}
                        className="text-teal-500 text-3xl underline"
                      >
                        {item.name}
                      </Link>
                      <p className="text-lg">{item.about}</p>
                      <p className="text-lg">{item.case}</p>
                    </div>
                  </div>
                </>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Layout>
  );
}
