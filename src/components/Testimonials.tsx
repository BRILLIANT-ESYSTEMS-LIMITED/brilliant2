import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Director of Technology, Lagos University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: 'The AR/VR solutions provided by Brilliant Esystems have revolutionized our medical training program. The immersive learning experience has significantly improved student engagement and understanding.',
    },
    {
      name: 'Mohammed Ibrahim',
      role: 'CTO, TechCorp Nigeria',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: 'Their IoT implementation has transformed our manufacturing processes. The real-time monitoring and predictive maintenance capabilities have reduced downtime by 60%.',
    },
    {
      name: 'Chief Adebayo Ogunlesi',
      role: 'Director, State Ministry of Science & Tech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
      content: 'Brilliant Esystems has been instrumental in our smart city initiative. Their expertise in AI and IoT has helped us create more efficient public services.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our satisfied clients across Nigeria
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
              <div className="absolute top-4 right-4 text-6xl font-serif text-green-200 opacity-50">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;