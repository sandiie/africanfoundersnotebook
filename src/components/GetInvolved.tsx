import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Users, 
  Target,  
  CheckCircle, 
  ArrowRight, 
  Send, 
  Clock, 
  User, 
  Building2, 
  Briefcase, 
  MessageSquare,
  PenTool,
  Share2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface GetInvolvedProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({ onBack, onNavigateToContact }) => {
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
    
    // Open email client with pre-filled data
    const subject = `Get Involved - ${formData.interest}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nRole: ${formData.role}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:susanmaina84@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
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
      icon: PenTool,
      title: "Share Your Story",
      description: "Contribute your founder journey to our research. Your experiences help shape the narrative of African entrepreneurship.",
      action: "Share Your Story",
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-50 to-red-50",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      type: "contact"
    },
    {
      icon: Target,
      title: "Partner With Us",
      description: "Collaborate on research projects, events, or content. Let's work together to amplify African founder voices.",
      action: "Partner Now",
      color: "from-blue-500 to-indigo-500",
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
      type: "form"
    },
    {
      icon: Users,
      title: "Join Our Community",
      description: "Connect with fellow founders, researchers, and ecosystem builders across Africa. Join our growing network.",
      action: "Join Community",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      type: "external"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more founders across Africa by sharing our work within your networks.",
      action: "Share Now",
      color: "from-emerald-500 to-teal-500",
      gradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      type: "share"
    }
  ];

  const contactDetails = {
    phone: "0741201421",
    email: "susanmaina84@gmail.com",
    available: "Mon-Fri, 9am-5pm EAT"
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleActionClick = (type: string, action: string) => {
    switch(type) {
      case 'contact':
        if (onNavigateToContact) {
          onNavigateToContact();
        } else {
          scrollToForm();
        }
        break;
      case 'form':
        scrollToForm();
        break;
      case 'external':
        window.open('https://forms.gle/your-community-form', '_blank');
        break;
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'African Founders Notebook',
            text: 'Discover the African Founders Notebook - documenting African social enterprise through data, stories, and insights.',
            url: window.location.href,
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard! Share it with your network.');
          }).catch(() => {
            prompt('Copy this link to share:', window.location.href);
          });
        }
        break;
      default:
        scrollToForm();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Header with Back Button */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Hero Section */}
        <div className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
              <span className="text-xs sm:text-sm font-semibold text-orange-700">Join Our Community</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Get Involved
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Join us in documenting and amplifying African entrepreneurship. Whether you're a founder, researcher, or ecosystem builder, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <a 
                href={`mailto:${contactDetails.email}`}
                className="border-2 border-gray-300 text-gray-700 px-5 sm:px-8 py-2.5 sm:py-4 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        
        {/* Contact Details Banner */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Partner With Us</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Reach out directly to Susan for partnership opportunities
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full lg:w-auto">
                {/* Phone */}
                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-center gap-3 group w-full sm:w-auto justify-center sm:justify-start hover:bg-white/5 rounded-lg p-2 transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-orange-300">Call Susan</div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-orange-400 transition-colors">
                      {contactDetails.phone}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <Clock className="h-2 w-2 sm:h-3 sm:w-3" />
                      {contactDetails.available}
                    </div>
                  </div>
                </a>
                
                {/* Email */}
                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 group w-full sm:w-auto justify-center sm:justify-start hover:bg-white/5 rounded-lg p-2 transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-orange-300">Email Susan</div>
                    <div className="text-xs sm:text-sm md:text-lg font-semibold group-hover:text-orange-400 transition-colors break-all">
                      {contactDetails.email}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Typically replies within 24 hours</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            Ways to Get Involved
          </h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Choose how you'd like to contribute to documenting African entrepreneurship
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {waysToGetInvolved.map((way, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${way.gradient} rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl ${way.iconBg} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
                  <way.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {way.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {way.description}
                </p>
                <button 
                  onClick={() => handleActionClick(way.type, way.action)}
                  className={`w-full py-2 sm:py-2.5 md:py-3 bg-gradient-to-r ${way.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base hover:scale-[1.02] px-2`}
                >
                  {way.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Info Side by Side */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg scroll-mt-20">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
              </div>
              Send a Message
            </h2>
            
            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-50 to-red-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Thank You
                </h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Your message has been sent. Susan will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors text-xs sm:text-sm md:text-base"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors text-xs sm:text-sm md:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Organization
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors text-xs sm:text-sm md:text-base"
                        placeholder="Company or organization"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Your Role
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors text-xs sm:text-sm md:text-base"
                        placeholder="Founder, Researcher, etc."
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    How would you like to be involved? *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white text-xs sm:text-sm md:text-base"
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
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none text-xs sm:text-sm md:text-base"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-b from-orange-50 to-white rounded-2xl p-5 sm:p-6 md:p-8 border border-orange-100 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Quick Contact
              </h3>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-sm sm:text-base">
                      Call Susan
                    </div>
                    <div className="text-gray-600 mt-1 text-base sm:text-lg font-medium">
                      {contactDetails.phone}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Available: {contactDetails.available}
                    </div>
                  </div>
                </a>
                
                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-sm sm:text-base">
                      Email Susan
                    </div>
                    <div className="text-gray-600 mt-1 text-sm sm:text-lg font-medium break-all">
                      {contactDetails.email}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      Typically replies within 24 hours
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* What Happens Next */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-5 sm:p-6 md:p-8 border border-blue-100 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                What Happens Next?
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Initial Contact</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5">Susan will respond to discuss your interest</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Discussion</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5">Explore how you can best contribute to the initiative</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Collaboration</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5">Start working together on documenting African entrepreneurship</p>
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