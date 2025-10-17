import { Card, CardContent } from '@/components/ui/card';

type BannerProps = {
  children?: React.ReactNode;
};

export function Banner({ children }: BannerProps) {
  return (
    <Card className="h-fit justify-center-safe rounded-none border-0 bg-teal-500 text-center md:h-64">
      <CardContent className="flex flex-col items-center-safe justify-center-safe gap-8">
        {children}
      </CardContent>
    </Card>
  );
}
