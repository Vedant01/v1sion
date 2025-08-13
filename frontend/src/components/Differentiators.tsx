
import React from 'react';
import { Settings, Layers, Users, Folder, Shield, Cpu } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "30-Day ROI Guarantee",
      description: "Your AI agents pay for themselves in 30 days or we refund the difference. We're that confident.",
      color: "text-emerald-700",
      badge: "Guaranteed"
    },
    {
      icon: Cpu,
      title: "MCP Data Goldmine System",
      description: "Every customer interaction becomes sellable data. Turn conversations into ₹2L+ monthly revenue streams.",
      color: "text-gray-900",
      badge: "Revenue Gen"
    },
    {
      icon: Users,
      title: "Zero Training Required",
      description: "Our AI agents come pre-trained and ready to deploy. No months of training - start scaling today.",
      color: "text-emerald-700",
      badge: "Instant"
    },
    {
      icon: Folder,
      title: "Agent Army Management",
      description: "Control 100+ AI agents from one dashboard. Scale operations without adding management overhead.",
      color: "text-gray-900",
      badge: "Scalable"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Competitive Edge</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            Unique
            <span className="block text-gradient">Differentiators</span>
          </h2>
          <p className="text-body-large text-gray-600 fade-in-up">
            Why smart businesses choose V1S1ON over expensive consultants and broken AI tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <div key={index} className="group relative fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
              <div className="frosted-glass p-6 hover-lift h-full relative overflow-hidden">
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full text-tiny font-bold bg-gray-100 text-gray-700 border border-gray-200">
                    {diff.badge}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 p-0.5 group-hover:scale-110 transition-all duration-300">
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <diff.icon className={`w-6 h-6 ${diff.color}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-subsection-title text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {diff.title}
                    </h3>
                    <p className="text-small text-gray-600 leading-relaxed">
                      {diff.description}
                    </p>

                    {/* Feature Highlight */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span className="text-tiny font-medium text-emerald-700">
                        {diff.title.includes('Vendor') && 'Technology Neutral'}
                        {diff.title.includes('Memory') && 'V0RA Platform'}
                        {diff.title.includes('Community') && 'V3RSE Network'}
                        {diff.title.includes('ROI') && 'Data-Driven'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                    style={{ width: '65%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Showcase */}
        <div className="mt-12 text-center fade-in-up">
          <div className="frosted-glass inline-block px-8 py-6 max-w-3xl hover-lift">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
              <div>
                <h4 className="font-agile font-bold text-gray-900 text-lg">V0RA + V3RSE Ecosystem</h4>
                <p className="text-tiny text-gray-600">Persistent Memory + Talent Network</p>
              </div>
            </div>
            <p className="text-body text-gray-700">
              Our proprietary platforms provide continuous learning capabilities and access to specialized AI talent, 
              ensuring your transformation stays ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
