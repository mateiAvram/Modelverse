import { Layout } from "@/components/app/Layout";
import YouTubeEmbed from "@/components/app/YoutubeEmbed";
import { Card, CardContent } from "@/components/ui/card";

export function Home() {
  return (
    <Layout home={true}>
      {/* Hero */}
      <Card className="border-0 rounded-none bg-teal-500 banner">
        <CardContent>
          <div className="flex flex-col justify-center-safe items-center-safe gap-8">
            <h1 className="text-white text-5xl font-bold">
              Secure Your Future
            </h1>
            <p className="text-white text-xl">
              Manage Security, Safety and Sustainability with the unique, modern
              Modelverse Solution.
            </p>
            <button className="py-2 px-4 rounded-md bg-white text-teal-500 font-bold hover:bg-gray-200 cursor-pointer">
              Book a Demo
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="grow flex flex-col mx-96 items-center-safe gap-4">
        <YouTubeEmbed videoId="XEPf418PJFU" title="Fellowmind Testimonial" />
        <p className="text-xl italic">
          Modelverse has transformed our approach to cybersecurity risk
          management.
        </p>
        <p className="text-xl italic font-bold">
          –David Warnink, CIO, Fellowmind
        </p>
      </div>

      {/* Hero */}
      <Card className="border-0 rounded-none bg-gray-200 px-64">
        <CardContent>
          <div className="flex flex-row gap-8">
            <Card className="border-0 bg-white basis-1/3">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-amber-500 text-xl font-bold">
                    Strategic Risks & Opportunities
                  </h1>
                  <p className="text-lg">
                    Decide what's important, establish a clear roadmap for your
                    organisation and achieve your security goals.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white basis-1/3">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-amber-500 text-xl font-bold">
                    Efficient Control and Assurance
                  </h1>
                  <p className="text-lg">
                    Use automation and AI to ensure operational control and
                    assurance success.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0  bg-white basis-1/3">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-amber-500 text-xl font-bold">
                    Seamless Integration
                  </h1>
                  <p className="text-lg">
                    Leverage the robust Azure, Power Platform and AI Modelverse
                    features to integrate with your systems of choice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
