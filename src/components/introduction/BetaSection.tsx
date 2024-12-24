import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BetaSection = () => {
  return (
    <Card className="border border-gray-200 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Beta Program</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Capital Ninja is currently in beta and accepting early access requests. Join an exclusive community of professionals transforming their approach to investor relations.
        </p>
        <p className="text-lg font-medium">
          Start unlocking smarter opportunities today.
        </p>
      </CardContent>
    </Card>
  );
};