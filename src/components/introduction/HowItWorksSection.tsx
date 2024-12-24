import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HowItWorksSection = () => {
  return (
    <Card className="border border-gray-200 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>How Capital Ninja Works</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Navigate the platform with ease using our intuitive menu:</p>
        <div className="space-y-3">
          <div>
            <strong>Dashboard:</strong> Your command center for tracking activity and metrics.
          </div>
          <div>
            <strong>Investor:</strong> Search and discover detailed investor profiles in seconds.
          </div>
          <div>
            <strong>My Lists:</strong> Organize prospects into custom lists by asset class, region, or other criteria.
          </div>
          <div>
            <strong>Enrichment:</strong> Upload your existing data and let our AI enhance it with precision.
          </div>
          <div>
            <strong>Exports:</strong> Keep a detailed log of your export history for tracking and optimization.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};