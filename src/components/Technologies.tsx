import React from 'react';
import { 
  Glasses, 
  Cpu, 
  Brain, 
  Globe2,
  CheckCircle2
} from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: Glasses,
      title: 'Augmented & Virtual Reality',
      description: 'Immersive AR/VR solutions for training, education, and enterprise applications.',
      features: [
        'Interactive 3D Visualizations',
        'Virtual Training Environments',
        'AR-enhanced Learning',
        'VR Simulations'
      ]
    },
    {
      icon: Cpu,
      title: 'Internet of Things',
      description: 'Connected IoT solutions for smart infrastructure and industrial applications.',
      features: [
        'Sensor Networks',
        'Real-time Monitoring',
        'Smart City Solutions',
        'Industrial IoT'
      ]
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI and machine learning solutions for intelligent automation.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ]
    },
    {
      icon: Globe2,
      title: 'Metaverse Development',
      description: 'Next-generation digital experiences and virtual environments.',
      features: [
        'Virtual Worlds',
        'Digital Twin Solutions',
        'Blockchain Integration',
        'Social VR Platforms'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Cutting-edge Technologies</h2>
          <p className="mt-4 text-xl text-gray-600">
            Leveraging advanced technologies to create innovative solutions
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{tech.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{tech.description}</p>
                <ul className="mt-6 space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;