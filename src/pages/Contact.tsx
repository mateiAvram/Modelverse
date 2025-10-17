import { GoogleMapEmbed } from "@/components/app/embed/googleMapEmbed";
import { Layout } from "@/components/app/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Contact() {
  const email: string = "partners@modelverse.online";

  return (
    <Layout contact={true}>
      {/* Hero */}
      <Card className="border-0 rounded-none bg-teal-500 banner">
        <CardContent>
          <div className="flex flex-col justify-center-safe items-center-safe gap-8">
            <h1 className="text-white text-5xl font-bold">Contact Us</h1>
            <p className="text-white text-xl">
              We are here to help you connect, collaborate, and co-create.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="grow flex flex-row flex-wrap mx-96 justify-center-safe items-center-safe gap-4">
        <Card className="w-full md:basis-49/100 min-h-fit md:h-112">
          <CardContent className="h-full flex flex-col gap-4">
            <h1 className="text-amber-500 text-xl font-bold">Get in Touch</h1>
            <div className="text-lg">
              Email:{" "}
              <Link to={`malito:${email}`} className="underline text-teal-500">
                {email}
              </Link>
            </div>
            <p className="text-lg">
              Our office is located in the Hague, the international city of
              Peace and Justice. Visit us at the HSD Campus – the heart of Dutch
              cybersecurity innovation:
            </p>
            <ul className="text-lg">
              <li>HSD Campus, 7th floor</li>
              <li>Wilhelmina van Pruisenweg 104</li>
              <li>2595 AN The Hague</li>
              <li>The Netherlands</li>
            </ul>
            <p className="text-lg">
              The HSD Campus is easily accessible by car and public transport.
              From Den Haag Laan van NOI train station, it’s a 10-minute walk or
              a short tram ride via line 2.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full md:basis-49/100 min-h-fit md:h-112">
          <CardContent className="h-full flex flex-col gap-4">
            <h1 className="text-amber-500 text-xl font-bold">Directions</h1>
            <GoogleMapEmbed></GoogleMapEmbed>
            <div className="text-lg">
              Parking options: limited space is available in the underground HSD
              Campus garage upon request. Alternatively, nearby garages are:{" "}
              <Link
                to="https://maps-web.parkbee.com/nl/pages/garage-details/2281d136-a100-45f6-85a1-9475799c362e"
                className="underline text-teal-500"
              >
                Parkbee
              </Link>
              ,{" "}
              <Link
                to="https://www.q-park.nl/nl-nl/parkeren/den-haag/p-r-laan-van-noi/"
                className="underline text-teal-500"
              >
                Parking P+R Laan van NOI
              </Link>{" "}
              or at{" "}
              <Link
                to="https://www.interparking.nl/nl-NL/find-parking/WTCTheHague/"
                className="underline text-teal-500"
              >
                WTC building/NH Hotel.
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </Layout>
  );
}
