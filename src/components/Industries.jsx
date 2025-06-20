import { Card, CardContent, Typography } from '@mui/material';
import { Business, Store, Devices, LocalShipping } from '@mui/icons-material';

const industries = [
  { name: 'Manufacturing', icon: <Business fontSize="large" /> },
  { name: 'Retail', icon: <Store fontSize="large" /> },
  { name: 'Professional Services', icon: <Devices fontSize="large" /> },
  { name: 'Wholesale Distribution', icon: <LocalShipping fontSize="large" /> },
];

const Industries = () => {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <Card 
              key={industry.name}
              className="bg-gray-700 text-white transform hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="text-center">
                <div className="text-blue-400 mb-4">{industry.icon}</div>
                <Typography variant="h6" component="div" className="font-bold">
                  {industry.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
