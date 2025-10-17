import { Banner } from '@/components/app/content/banner';
import { Layout } from '@/components/app/layout';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const aboutBanner = (
  <Banner>
    <h1 className="text-5xl font-bold text-white">About Modelverse</h1>
    <p className="text-xl text-white">
      Empowering organizations to navigate (cyber) security and sustainability
      risks with confidence and clarity.
    </p>
    <button
      className="cursor-pointer rounded-md bg-white px-4 py-2 font-bold text-teal-500 hover:bg-gray-200"
      onClick={() =>
        (window.location.href =
          'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
      }
    >
      Talk to us
    </button>
  </Banner>
);

export function About() {
  const navigate = useNavigate();

  return (
    <Layout about={true} banner={aboutBanner}>
      {/* Main content */}
      <div className="flex grow flex-col items-center-safe justify-center-safe gap-4 px-6 text-center lg:px-32 xl:px-64 2xl:px-128">
        <p className="text-xl italic">
          Modelverse is truly a gamechanger. It is a robust platform supporting
          my clients.
        </p>
        <p className="text-xl font-bold italic">
          –Chris Hazewinkel, Certified Information Security Manager
        </p>
      </div>

      {/* Hero */}
      <Card className="rounded-none border-0 bg-gray-200 xl:px-32 2xl:px-64">
        <CardContent>
          <div className="flex flex-row flex-wrap justify-center-safe gap-8">
            <Card className="w-full border-0 bg-white lg:basis-30/100">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-amber-500">
                    Our Mission
                  </h1>
                  <p className="text-lg">
                    At Modelverse, our mission is to make organisations more
                    secure. We strive to deliver an efficient and effective
                    platform that is both powerful and user-friendly, enabling
                    organizations to protect their (digital) assets and maintain
                    trust with their stakeholders.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full border-0 bg-white lg:basis-30/100">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-amber-500">Our Team</h1>
                  <p className="text-lg">
                    We are experienced professionals from diverse backgrounds,
                    including cybersecurity, software development, and business
                    strategy. Together, we are dedicated to create Modelverse
                    that addresses the evolving challenges of the digital
                    landscape.
                  </p>
                  <button
                    className="cursor-pointer rounded-md border-2 border-teal-500 bg-white px-4 py-2 font-bold text-teal-500 hover:bg-gray-200"
                    onClick={() => navigate('/team')}
                  >
                    More..
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full border-0 bg-white lg:basis-30/100">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-amber-500">
                    Why Choose Us
                  </h1>
                  <ul className="list-disc pl-5 text-lg">
                    <li>
                      <span className="font-bold"> Expertise: </span>
                      Deep knowledge in cybersecurity, IT, AI, risk management
                      and business sectors.
                    </li>
                    <li>
                      <span className="font-bold">Innovation: </span>
                      Cutting-edge platform tailored to modern business needs.
                    </li>
                    <li>
                      <span className="font-bold">Customer Focus: </span>
                      Commitment to exceptional service and support.
                    </li>
                  </ul>
                  <p className="text-lg"></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
