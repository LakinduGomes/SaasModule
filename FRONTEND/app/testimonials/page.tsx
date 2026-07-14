import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Testimonials | Gate One Engineering",
  description: "What our clients say about our engineering solutions.",
};

const TestimonialsPage = () => {
  return (
    <main className="pt-[120px]"> 
      <Testimonials />
    </main>
  );
};

export default TestimonialsPage;