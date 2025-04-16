import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Users,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Government Solutions',
      description: 'Custom software solutions for state governments and public sector organizations.',
    },
    {
      icon: GraduationCap,
      title: 'Educational Technology',
      description: 'Advanced systems for tertiary institutions and educational organizations.',
    },
    {
      icon: Briefcase,
      title: 'Enterprise Software',
      description: 'Scalable solutions for businesses and corporate organizations.',
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services for organizations.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive software solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
              >
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors flex items-center">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;