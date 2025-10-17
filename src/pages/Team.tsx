import { Layout } from '@/components/app/layout';
import teamMembersFile from '@/data/team-members.yaml?raw';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { parse } from 'yaml';
import { Banner } from '@/components/app/content/banner';

type Member = {
  name: string;
  role: string;
  bio: string;
  img: string;
};

type Team = {
  name: string;
  members: Member[];
};

const teamBanner = (
  <Banner>
    <h1 className="text-5xl font-bold text-white">Meet the Team</h1>
    <p className="text-xl text-white">
      The passionate individuals driving Customer Success at ValueTracks
      Services.
    </p>
  </Banner>
);

export function Team() {
  const teams = parse(teamMembersFile);

  return (
    <Layout team={true} banner={teamBanner}>
      {/* Main content */}
      <div className="flex flex-col items-center-safe gap-4 px-6 lg:px-32 xl:px-64 2xl:px-96">
        {teams.map((team: Team, teamNumber: number) => (
          <div
            key={teamNumber}
            className="flex w-full flex-col items-center-safe gap-4"
          >
            <h1 className="text-3xl font-bold">{team.name}</h1>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {team.members.map((member: Member, memberNumber) => (
                <Card
                  key={memberNumber}
                  className="transition duration-200 ease-in-out hover:-translate-y-2"
                >
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      {/* <div className="flex flex-row flex-wrap items-center justify-start gap-4">
                        
                      </div> */}
                      <Avatar className="size-32">
                        <AvatarImage
                          src={member.img || ''}
                          className="object-cover"
                        />
                        <AvatarFallback>{member.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-teal-500">
                          {member.name}
                        </h1>
                        <h1 className="text-lg italic">{member.role}</h1>
                      </div>
                      <p>{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </Layout>
  );
}
