import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Introduction = () => {
  return (
    <SidebarProvider>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        width: '100%',
        backgroundColor: '#f5f5f5'
      }}>
        <AppSidebar />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <main style={{
            flex: 1,
            overflowY: 'auto'
          }}>
            <div style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '24px 32px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px'
              }}>
                <h1 style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <BookOpen style={{ width: '32px', height: '32px' }} />
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

              <div className="prose prose-gray max-w-none space-y-8">
                <section>
                  <h1 className="text-4xl font-bold mb-4">Welcome to Capital Ninja</h1>
                  <p className="text-xl text-gray-600">
                    Revolutionize your investor outreach with AI-powered insights and tools designed to save time and maximize results.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Why Capital Ninja?</h2>
                  <p className="mb-4">
                    We consolidate investor data from 34+ industry-leading sources, delivering access to over 360,000 contacts, including angel investors, HNWIs, family offices, and institutional investors. With Capital Ninja, you can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access comprehensive investor profiles tailored to your goals.</li>
                    <li>Refine searches using 30+ parameters, such as asset class, region, and ticket size.</li>
                    <li>Enrich outdated data with our cutting-edge AI for unmatched accuracy.</li>
                    <li>Export targeted lists seamlessly for CRM integration and outreach.</li>
                  </ul>
                  <p className="mt-4">Our platform is built to simplify private investments for professionals like you.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Data Sources We Use</h2>
                  <p className="mb-4">Our AI aggregates and harmonizes data from trusted industry channels, including:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>LinkedIn</div>
                    <div>Preqin</div>
                    <div>PitchBook</div>
                    <div>Fintrx</div>
                    <div>Crunchbase</div>
                    <div>SEC EDGAR Filings</div>
                    <div>ZoomInfo</div>
                    <div>Apollo</div>
                    <div>30+ additional leading data sources</div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">How Capital Ninja Works</h2>
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
                </section>

                <section className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">Beta Program</h2>
                  <p className="mb-4">
                    Capital Ninja is currently in beta and accepting early access requests. Join an exclusive community of professionals transforming their approach to investor relations.
                  </p>
                  <p className="text-lg font-medium">
                    Start unlocking smarter opportunities today.
                  </p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Introduction;