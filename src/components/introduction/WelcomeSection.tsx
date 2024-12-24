import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WelcomeSection = () => {
  return (
    <Card className="border border-gray-200 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl">Welcome to Capital Ninja</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl text-gray-600">
          Revolutionize your investor outreach with AI-powered insights and tools designed to save time and maximize results.
        </p>
      </CardContent>
    </Card>
  );
};