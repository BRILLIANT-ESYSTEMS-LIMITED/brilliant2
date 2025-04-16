import React from 'react';
import { Users, Building, Award, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients Served',
      description: 'Trusted by businesses across Nigeria'
    },
    {
      icon: Building,
      value: '50+',
      label: 'Government Projects',
      description: 'Supporting digital transformation'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    },
    {
      icon: Globe,
      value: '100+',
      label: 'Solutions Deployed',
      description: 'Across multiple sectors'
    }
  ];

  return (
    <section className="py-20 bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-green-800">
                  <Icon className="h-8 w-8 text-green-300" />
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-lg font-medium text-green-100">{stat.label}</div>
                  <div className="mt-2 text-sm text-green-300">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;