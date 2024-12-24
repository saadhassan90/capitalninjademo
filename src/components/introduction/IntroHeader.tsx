import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const IntroHeader = () => {
  return (
    <div className="flex flex-direction-row justify-between items-center gap-4 mb-8">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <BookOpen className="w-8 h-8" />
        Introduction
      </h1>
      <Button asChild>
        <a 
          href="https://www.capitalninja.ai" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Join Waitlist
        </a>
      </Button>
    </div>
  );
};