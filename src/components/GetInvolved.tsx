import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, Users, Target, Heart, Globe, CheckCircle } from 'lucide-react';

interface GetInvolvedProps {
  onBack: () => void;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const waysToGetInvolved = [
    {
      icon: Users,
      title: "Share Your Story",
      description: "Contribute your founder journey to our research. Your experiences help shape the narrative of African entrepreneurship.",
      
    },
    {
      icon: Target,
      title: "Partner With Us",
      description: "Collaborate on research projects, events, or content. Let's work together to amplify African founder voices.",
      
    },
    {
      icon: Heart,
      title: "Become a Contributor",
      description: "Join our community of writers, researchers, and ecosystem builders documenting African entrepreneurship.",
      
    },
    {
      icon: Globe,
      title: "Spread the Word",
      description: "Help us reach more founders across Africa by sharing our work within your networks.",
      
    }
  ];

  const contactDetails = {
    phone: "0741201421",
    email: "susanmaina84@gmail.com",
    available: "Mon-Fri, 9am-5pm EAT"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F8FAFC]">
      {/* Header with Back Button */}
      <div className="relative">
        {/* Back to home Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {onBack && (
            <button 
              onClick={onBack}
              className="text-[#475569] hover:text-[#F59E0B] flex items-center transition-colors font-medium group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          )}
        </div>

        {/* Hero Section */}
        <div className="pt-12 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-[#475569] mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in documenting and amplifying African entrepreneurship. Whether you're a founder, researcher, or ecosystem builder, there's a place for you here.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Contact Details Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#0A2540] to-[#1E293B] rounded-xl p-8 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Partner With Us</h3>
                <p className="text-blue-100">
                  Reach out directly to Susan for partnership opportunities
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Phone */}
                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-amber-200">Call Susan</div>
                    <div className="text-lg font-semibold group-hover:text-[#F59E0B] transition-colors">
                      {contactDetails.phone}
                    </div>
                    <div className="text-xs text-amber-300 mt-1">{contactDetails.available}</div>
                  </div>
                </a>
                
                {/* Email */}
                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-amber-200">Email Susan</div>
                    <div className="text-lg font-semibold group-hover:text-[#F59E0B] transition-colors break-all">
                      {contactDetails.email}
                    </div>
                    <div className="text-xs text-amber-300 mt-1">Typically replies within 24 hours</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-12">
            Ways to Get Involved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToGetInvolved.map((way, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] flex items-center justify-center mb-6">
                  <way.icon className="h-7 w-7 text-[#B45309]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-3">
                  {way.title}
                </h3>
                <p className="text-[#475569] mb-6 leading-relaxed">
                  {way.description}
                </p>
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#2563EB] font-semibold hover:text-[#1E40AF] transition-colors flex items-center group"
                >
                  {/* {way.action}
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg> */}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Info Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
              Get in Touch
            </h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-[#B45309]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E293B] mb-3">
                  Thank You!
                </h3>
                <p className="text-[#475569]">
                  Your message has been sent. Susan will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#475569] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#475569] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#475569] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-colors"
                      placeholder="Company or organization"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#475569] mb-2">
                      Your Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-colors"
                      placeholder="Founder, Researcher, etc."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#475569] mb-2">
                    How would you like to be involved? *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="share-story">Share my founder story</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="contribute">Become a contributor</option>
                    <option value="research">Collaborate on research</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#475569] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-colors resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#1E293B] rounded-lg hover:shadow-lg transition duration-300 font-semibold shadow-md hover:shadow-[#F59E0B]/30 border border-[#F59E0B]/20 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-b from-[#FFFBEB] to-white rounded-xl p-8 border border-[#FDE68A] shadow-sm">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-6">
                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-[#F59E0B]/30 hover:shadow-md transition-all group"
                >
                  <Phone className="h-6 w-6 text-[#B45309] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1E293B] group-hover:text-[#B45309] transition-colors">
                      Call Susan
                    </div>
                    <div className="text-[#475569] mt-1 text-lg font-medium">
                      {contactDetails.phone}
                    </div>
                    <div className="text-sm text-[#64748B] mt-1">
                      Available: {contactDetails.available}
                    </div>
                  </div>
                </a>
                
                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-[#F59E0B]/30 hover:shadow-md transition-all group"
                >
                  <Mail className="h-6 w-6 text-[#B45309] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1E293B] group-hover:text-[#B45309] transition-colors">
                      Email Susan
                    </div>
                    <div className="text-[#475569] mt-1 text-lg font-medium break-all">
                      {contactDetails.email}
                    </div>
                    <div className="text-sm text-[#64748B] mt-1">
                      Typically replies within 24 hours
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* What Happens Next */}
            <div className="bg-gradient-to-b from-[#EFF6FF] to-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6">
                What Happens Next?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">Initial Contact</h4>
                    <p className="text-[#475569] text-sm mt-1">Susan will respond to discuss your interest</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">Discussion</h4>
                    <p className="text-[#475569] text-sm mt-1">Explore how you can best contribute to the initiative</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">Collaboration</h4>
                    <p className="text-[#475569] text-sm mt-1">Start working together on documenting African entrepreneurship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;