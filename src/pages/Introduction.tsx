import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { IntroHeader } from "@/components/introduction/IntroHeader";
import { WelcomeSection } from "@/components/introduction/WelcomeSection";
import { WhySection } from "@/components/introduction/WhySection";
import { DataSourcesSection } from "@/components/introduction/DataSourcesSection";
import { HowItWorksSection } from "@/components/introduction/HowItWorksSection";
import { BetaSection } from "@/components/introduction/BetaSection";

const Introduction = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#f5f5f5]">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-8 py-6">
              <IntroHeader />
              <div className="space-y-6">
                <WelcomeSection />
                <WhySection />
                <DataSourcesSection />
                <HowItWorksSection />
                <BetaSection />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Introduction;