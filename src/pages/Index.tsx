import { InvestorTable } from "@/components/InvestorTable";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Users } from "lucide-react";

const Index = () => {
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
                flexDirection: 'column',
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
                  <Users style={{ width: '32px', height: '32px' }} />
                  Investors
                </h1>
              </div>

              <InvestorTable />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Index;