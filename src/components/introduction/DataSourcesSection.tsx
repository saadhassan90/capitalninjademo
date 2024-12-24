import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dataSources } from "@/data/dataSources";

export const DataSourcesSection = () => {
  return (
    <Card className="border border-gray-200 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Data Sources We Use</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Our AI aggregates and harmonizes data from 34+ trusted industry channels, including:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataSources.map((source) => (
            <Card key={source.name} className="border border-gray-100 bg-gray-50/50">
              <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
                <div className="w-24 h-12 relative flex items-center justify-center">
                  <img 
                    src={source.logo} 
                    alt={`${source.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      filter: 'grayscale(100%)',
                      opacity: '0.8'
                    }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-600">{source.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};