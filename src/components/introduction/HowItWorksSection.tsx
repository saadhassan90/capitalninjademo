import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LayoutDashboard, Users, List, Sparkles, Download } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <Card className="border border-gray-200 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>How Capital Ninja Works</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Navigate the platform with ease using our intuitive menu:</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <span>Your command center for tracking activity and metrics.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/investors">
                <Users className="h-4 w-4" />
                Investor
              </Link>
            </Button>
            <span>Search and discover detailed investor profiles in seconds.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/lists">
                <List className="h-4 w-4" />
                My Lists
              </Link>
            </Button>
            <span>Organize prospects into custom lists by asset class, region, or other criteria.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/enrichment">
                <Sparkles className="h-4 w-4" />
                Enrichment
              </Link>
            </Button>
            <span>Upload your existing data and let our AI enhance it with precision.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/exports">
                <Download className="h-4 w-4" />
                Exports
              </Link>
            </Button>
            <span>Keep a detailed log of your export history for tracking and optimization.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};