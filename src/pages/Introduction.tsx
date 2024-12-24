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

              <div className="prose prose-gray max-w-none">
                <h2>Welcome to Our Platform</h2>
                <p>This is where you'll find everything you need to know about getting started with our investor management platform.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Introduction;