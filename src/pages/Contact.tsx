import { Banner } from '@/components/app/content/banner';
import { GoogleMapEmbed } from '@/components/app/embed/googleMapEmbed';
import { Layout } from '@/components/app/layout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const contactBanner = (
  <Banner>
    <h1 className="text-5xl font-bold text-white">Contact Us</h1>
    <p className="text-xl text-white">
      We are here to help you connect, collaborate, and co-create.
    </p>
  </Banner>
);

export function Contact() {
  const email: string = 'partners@modelverse.online';

  return (
    <Layout contact={true} banner={contactBanner}>
      {/* Main content */}
      <div className="flex grow items-center-safe justify-center-safe">
        <div className="grid h-fit grid-cols-1 items-center-safe gap-4 px-6 lg:grid-cols-2 xl:px-64 2xl:px-96">
          <Card className="h-full w-full lg:basis-49/100">
            <CardContent className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-amber-500">Get in Touch</h1>
              <div className="text-lg">
                Email:{' '}
                <Link
                  to={`mailto:${email}`}
                  className="text-teal-500 underline"
                >
                  {email}
                </Link>
              </div>
              <p className="text-lg">
                Our office is located in the Hague, the international city of
                Peace and Justice. Visit us at the HSD Campus – the heart of
                Dutch cybersecurity innovation:
              </p>
              <ul className="text-lg">
                <li>HSD Campus, 7th floor</li>
                <li>Wilhelmina van Pruisenweg 104</li>
                <li>2595 AN The Hague</li>
                <li>The Netherlands</li>
              </ul>
              <p className="text-lg">
                The HSD Campus is easily accessible by car and public transport.
                From Den Haag Laan van NOI train station, it’s a 10-minute walk
                or a short tram ride via line 2.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full w-full lg:basis-49/100">
            <CardContent className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-amber-500">Directions</h1>
              <GoogleMapEmbed></GoogleMapEmbed>
              <div className="text-lg">
                Parking options: limited space is available in the underground
                HSD Campus garage upon request. Alternatively, nearby garages
                are:{' '}
                <Link
                  to="https://maps-web.parkbee.com/nl/pages/garage-details/2281d136-a100-45f6-85a1-9475799c362e"
                  className="text-teal-500 underline"
                >
                  Parkbee
                </Link>
                ,{' '}
                <Link
                  to="https://www.q-park.nl/nl-nl/parkeren/den-haag/p-r-laan-van-noi/"
                  className="text-teal-500 underline"
                >
                  Parking P+R Laan van NOI
                </Link>{' '}
                or at{' '}
                <Link
                  to="https://www.interparking.nl/nl-NL/find-parking/WTCTheHague/"
                  className="text-teal-500 underline"
                >
                  WTC building/NH Hotel.
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div></div>
    </Layout>
  );
}
