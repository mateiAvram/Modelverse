import { Layout } from '@/components/app/layout';
import YouTubeEmbed from '@/components/app/embed/youtubeEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Banner } from '@/components/app/content/banner';

const homeBanner = (
  <Banner>
    <h1 className="text-5xl font-bold text-white">Secure Your Future</h1>
    <p className="text-xl text-white">
      Manage Security, Safety and Sustainability with the unique, modern
      Modelverse Solution.
    </p>
    <button
      className="cursor-pointer rounded-md bg-white px-4 py-2 font-bold text-teal-500 hover:bg-gray-200"
      onClick={() =>
        (window.location.href =
          'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
      }
    >
      Book a Demo
    </button>
  </Banner>
);

export function Home() {
  return (
    <Layout home={true} banner={homeBanner}>
      {/* Main content */}
      <div className="mx-auto flex w-full grow flex-col items-center-safe justify-center-safe gap-4 px-6 text-center lg:max-w-[854px] xl:max-w-[1024px] 2xl:max-w-[1366px]">
        <YouTubeEmbed videoId="XEPf418PJFU" title="Fellowmind Testimonial" />
        <p className="text-xl italic">
          Modelverse has transformed our approach to cybersecurity risk
          management.
        </p>
        <p className="text-xl font-bold italic">
          –David Warnink, CIO, Fellowmind
        </p>
      </div>

      {/* Hero */}
      <Card className="rounded-none border-0 bg-gray-200">
        <CardContent>
          <div className="mx-auto flex w-full flex-col justify-center-safe gap-8 md:flex-row xl:max-w-[1280px] 2xl:max-w-[1600px]">
            <Card className="basis-1/3 border-0 bg-white">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-amber-500">
                    Strategic Risks & Opportunities
                  </h1>
                  <p className="text-lg">
                    Decide what's important, establish a clear roadmap for your
                    organisation and achieve your security goals.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="basis-1/3 border-0 bg-white">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-amber-500">
                    Efficient Control and Assurance
                  </h1>
                  <p className="text-lg">
                    Use automation and AI to ensure operational control and
                    assurance success.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="basis-1/3 border-0 bg-white">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-amber-500">
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
