import { Layout } from "@/components/app/Layout";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <Layout about={true}>
      {/* Hero */}
      <Card className="border-0 rounded-none bg-teal-500">
        <CardContent>
          <div className="flex flex-col justify-center-safe items-center-safe gap-8">
            <h1 className="text-white text-5xl font-bold">About Modelverse</h1>
            <p className="text-white text-xl">
              Empowering organizations to navigate (cyber) security and
              sustainability risks with confidence and clarity.
            </p>
            <button className="py-2 px-4 rounded-md bg-white text-teal-500 font-bold hover:bg-gray-200 cursor-pointer">
              Talk to us
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="grow flex flex-col mx-96 justify-center-safe items-center-safe gap-4">
        <p className="text-xl italic">
          Modelverse is truly a gamechanger. It is a robust platform supporting
          my clients.
        </p>
        <p className="text-xl italic font-bold">
          –Chris Hazewinkel, Certified Information Security Manager
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
            <Card className="border-0 bg-white basis-1/3">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-amber-500 text-xl font-bold">Our Team</h1>
                  <p className="text-lg">
                    We are experienced professionals from diverse backgrounds,
                    including cybersecurity, software development, and business
                    strategy. Together, we are dedicated to create Modelverse
                    that addresses the evolving challenges of the digital
                    landscape.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0  bg-white basis-1/3">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-amber-500 text-xl font-bold">
                    Why Choose Us
                  </h1>
                  <ul className="text-lg list-disc pl-5">
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
