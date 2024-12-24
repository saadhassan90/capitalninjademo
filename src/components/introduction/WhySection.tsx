import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhySection = () => {
  return (
    <Card className="border border-gray-200 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Why Capital Ninja?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          We consolidate investor data from 34+ industry-leading sources, delivering access to over 360,000 contacts, including angel investors, HNWIs, family offices, and institutional investors. With Capital Ninja, you can:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access comprehensive investor profiles tailored to your goals.</li>
          <li>Refine searches using 30+ parameters, such as asset class, region, and ticket size.</li>
          <li>Enrich outdated data with our cutting-edge AI for unmatched accuracy.</li>
          <li>Export targeted lists seamlessly for CRM integration and outreach.</li>
        </ul>
        <p>Our platform is built to simplify private investments for professionals like you.</p>
      </CardContent>
    </Card>
  );
};