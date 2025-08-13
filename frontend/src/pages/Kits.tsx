import React from 'react';
import Navigation from '../components/Navigation';
import { Package, Download, Star, CheckCircle, ArrowRight, Zap, Target, Users, Code, BookOpen, Wrench } from 'lucide-react';

const KitsPage = () => {
  const kits = [
    {
      id: 1,
      title: "Enterprise AI Agent Empire Kit",
      description: "Build your own army of AI agents that work 24/7 - no coffee breaks, no sick days, just pure efficiency",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      category: "Enterprise",
      icon: Target,
      features: [
        "Complete agent deployment framework",
        "Multi-agent orchestration system",
        "Revenue tracking & optimization",
        "Client onboarding automation",
        "Performance scaling protocols",
        "White-label customization suite"
      ],
      downloads: "850+",
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      title: "Internal Operations Domination Kit",
      description: "Turn your company into a lean, mean, AI-powered machine that operates while you sleep",
      price: "₹1,75,000",
      originalPrice: "₹2,75,000",
      category: "Operations",
      icon: Zap,
      features: [
        "Workflow automation blueprints",
        "Employee productivity amplifiers",
        "Cost reduction algorithms",
        "Decision-making accelerators",
        "Resource optimization engines",
        "Performance monitoring dashboards"
      ],
      downloads: "1,200+",
      rating: 4.8
    },
    {
      id: 3,
      title: "Lead Generation Warfare Kit",
      description: "Deploy AI agents that hunt, capture, and convert leads like digital predators",
      price: "₹3,25,000",
      originalPrice: "₹5,00,000",
      category: "Sales",
      icon: Wrench,
      features: [
        "Prospect identification algorithms",
        "Automated outreach sequences",
        "Conversion optimization systems",
        "Pipeline management agents",
        "Follow-up automation protocols",
        "ROI tracking & analytics"
      ],
      downloads: "950+",
      rating: 4.9
    },
    {
      id: 4,
      title: "GEO Optimization Arsenal",
      description: "Dominate search engines with Generative Engine Optimization - make AI search engines work for you",
      price: "₹1,25,000",
      originalPrice: "₹2,00,000",
      category: "Marketing",
      icon: Users,
      features: [
        "GEO content strategy frameworks",
        "AI search engine algorithms",
        "Response optimization tools",
        "Citation building systems",
        "Authority establishment protocols",
        "Performance tracking suite"
      ],
      downloads: "650+",
      rating: 4.7
    },
    {
      id: 5,
      title: "MCP Protocol Mastery Kit",
      description: "Master Model Context Protocol - control AI conversations like a puppet master",
      price: "₹2,00,000",
      originalPrice: "₹3,25,000",
      category: "Technical",
      icon: Code,
      features: [
        "MCP implementation blueprints",
        "Context management systems",
        "Multi-model orchestration",
        "Protocol optimization tools",
        "Integration frameworks",
        "Advanced configuration guides"
      ],
      downloads: "420+",
      rating: 4.8
    },
    {
      id: 6,
      title: "AI Agent Training Bootcamp",
      description: "Transform your team into AI agent commanders - from rookies to tactical operators",
      price: "₹1,50,000",
      originalPrice: "₹2,50,000",
      category: "Training",
      icon: BookOpen,
      features: [
        "Agent command training modules",
        "Tactical deployment strategies",
        "Performance optimization methods",
        "Troubleshooting protocols",
        "Advanced configuration techniques",
        "Certification & assessment tools"
      ],
      downloads: "780+",
      rating: 4.6
    }
  ];

  const categories = ["All", "Enterprise", "Operations", "Sales", "Marketing", "Technical", "Training"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
                <Package className="w-4 h-4 text-emerald-700" />
                <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">AI Agent Arsenal</span>
              </div>
              
              <h1 className="text-section-title text-gray-900 mb-4 fade-in-up">
                Deploy Your AI Agent
                <span className="block text-gradient">Army Today</span>
              </h1>
              <p className="text-body-large text-gray-600 fade-in-up max-w-3xl mx-auto">
                Battle-tested kits that turn ordinary businesses into AI-powered empires. No fluff, just results.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-emerald-700 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Kits Grid */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kits.map((kit, index) => (
                <div key={kit.id} className="group relative fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                  
                  {/* Popular Badge */}
                  {kit.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="frosted-glass px-3 py-1 bg-emerald-50 border border-emerald-200">
                        <span className="text-tiny font-bold text-emerald-700 uppercase tracking-wider">Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className={`frosted-glass p-6 hover-lift h-full relative overflow-hidden ${kit.popular ? 'border-emerald-300 shadow-lg shadow-emerald-100' : ''}`}>
                    
                    {/* Kit Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <kit.icon className="w-6 h-6 text-emerald-700" />
                        </div>
                      </div>
                      <span className="text-tiny font-bold px-3 py-1 rounded-full bg-gray-100 text-emerald-700">
                        {kit.category}
                      </span>
                    </div>

                    <h3 className="text-subsection-title text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {kit.title}
                    </h3>
                    
                    <p className="text-small text-gray-600 mb-4 leading-relaxed">
                      {kit.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="stat-counter text-xl font-bold text-emerald-700">
                          {kit.price}
                        </span>
                        <span className="text-gray-500 line-through text-sm">
                          {kit.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-tiny text-gray-600">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{kit.downloads} downloads</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span>{kit.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-small font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {kit.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-tiny text-gray-600 flex items-start">
                            <CheckCircle className="w-3 h-3 text-emerald-700 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {kit.features.length > 4 && (
                          <li className="text-tiny text-gray-500 italic">
                            +{kit.features.length - 4} more items...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button className="w-full professional-button text-center flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Kit
                      </button>
                      <button className="w-full professional-button-secondary text-center flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="frosted-glass p-8 hover-lift">
                <h3 className="text-subsection-title text-gray-900 mb-4">
                  Complete AI Dominance Bundle
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Get all 6 agent kits and build an unstoppable AI empire - save ₹4,50,000
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="stat-counter text-3xl font-bold text-emerald-700">₹12,00,000</span>
                  <span className="text-gray-500 line-through text-xl">₹16,50,000</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">27% OFF</span>
                </div>
                <button className="professional-button text-lg px-8 py-4">
                  Build Your Empire
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="text-center">
              <h3 className="text-subsection-title text-gray-900 mb-4">
                Need Help Choosing Your Weapon?
              </h3>
              <p className="text-body text-gray-600 mb-8">
                Our AI strategists will help you select the perfect arsenal for maximum impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="professional-button">
                  Get Strategic Advice
                </button>
                <button className="professional-button-secondary">
                  Contact War Room
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KitsPage;