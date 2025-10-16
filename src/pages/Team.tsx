import { Layout } from "@/components/app/Layout";
import teamMembersFile from "@/data/team-members.yaml?raw";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { parse } from "yaml";

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

export function Team() {
  const teams = parse(teamMembersFile);

  return (
    <Layout team={true}>
      {/* Hero */}
      <Card className="border-0 rounded-none bg-teal-500">
        <CardContent>
          <div className="flex flex-col justify-center-safe items-center-safe gap-8">
            <h1 className="text-white text-5xl font-bold">Meet the Team</h1>
            <p className="text-white text-xl">
              The passionate individuals driving Customer Success at ValueTracks
              Services.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="flex flex-col mx-96 items-center-safe gap-4">
        {teams.map((team: Team, teamNumber: number) => (
          <div
            key={teamNumber}
            className="flex flex-col items-center-safe gap-4 w-full"
          >
            <h1 className="text-3xl font-bold">{team.name}</h1>
            <div className="grid grid-cols-4 gap-4 w-full">
              {team.members.map((member: Member, memberNumber) => (
                <Card key={memberNumber}>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row justify-start items-center gap-4 flex-wrap">
                        <Avatar className="size-32">
                          <AvatarImage
                            src={member.img || ""}
                            className="object-cover"
                          />
                          <AvatarFallback>{member.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <h1 className="text-teal-500 text-xl font-bold">
                            {member.name}
                          </h1>
                          <h1 className="text-lg italic">{member.role}</h1>
                        </div>
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
