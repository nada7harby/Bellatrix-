import { Card, CardContent, Typography } from '@mui/material';

const testimonials = [
  {
    quote: "Bellatrix transformed our operations. Their NetSuite expertise is unmatched.",
    client: "John Doe, CEO of TechCorp",
  },
  {
    quote: "The implementation process was seamless, and the support has been outstanding.",
    client: "Jane Smith, COO of Innovate Inc.",
  },
  {
    quote: "Thanks to Bellatrix, our productivity has increased by 40%. Highly recommended!",
    client: "Sam Wilson, CFO of Global Solutions",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 text-white"
            >
              <CardContent>
                <Typography variant="body1" className="italic mb-4">
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="subtitle2" className="font-bold text-right text-blue-400">
                  - {testimonial.client}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
