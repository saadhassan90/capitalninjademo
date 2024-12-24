import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

              <div className="space-y-6">
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

                <Card className="border border-gray-200 bg-transparent shadow-none">
                  <CardHeader>
                    <CardTitle>Data Sources We Use</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>

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
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Introduction;