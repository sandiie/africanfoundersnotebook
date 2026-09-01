
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
      color: "from-[#1677C8] to-[#159447]",
      gradient: "from-[#F7F5EF] to-white",
      iconBg: "bg-[#1677C8]",
      type: "contact"
    },
    {
      icon: Target,
      title: "Partner With Us",
      description: "Collaborate on research projects, events, or content. Let's work together to amplify African founder voices.",
      action: "Partner Now",
      color: "from-[#159447] to-[#102019]",
      gradient: "from-[#F7F5EF] to-white",
      iconBg: "bg-[#159447]",
      type: "form"
    },
    {
      icon: Users,
      title: "Join Our Community",
      description: "Connect with fellow founders, researchers, and ecosystem builders across Africa. Join our growing network.",
      action: "Join Community",
      color: "from-[#102019] to-[#1677C8]",
      gradient: "from-[#F7F5EF] to-white",
      iconBg: "bg-[#102019]",
      type: "external"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more founders across Africa by sharing our work within your networks.",
      action: "Share Now",
      color: "from-[#F2C230] to-[#159447]",
      gradient: "from-[#F7F5EF] to-white",
      iconBg: "bg-[#159447]",
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
    <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">

      {/* Header */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-6 sm:pt-8">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#5F6B65] hover:text-[#159447] transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Hero */}
        <div className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">

            <div className="flex justify-center mb-7">
              <span className="w-12 h-[3px] bg-[#1677C8]"></span>
              <span className="w-12 h-[3px] bg-[#159447]"></span>
              <span className="w-12 h-[3px] bg-[#F2C230]"></span>
            </div>

            <div className="inline-flex items-center gap-2 mb-5">
              <Sparkles className="h-4 w-4 text-[#159447]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#159447]">
                Join Our Community
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#18251F] mb-5">
              Get Involved
            </h1>

            <p className="text-base sm:text-lg text-[#66716B] mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in documenting and amplifying African entrepreneurship. Whether you're a founder, researcher, or ecosystem builder, there's a place for you here.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-[#102019] text-white px-7 py-3.5 rounded-full hover:bg-[#159447] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>

              <a 
                href={`mailto:${contactDetails.email}`}
                className="border border-[#CBC5B7] bg-white text-[#18251F] px-7 py-3.5 rounded-full hover:border-[#159447] hover:text-[#159447] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">

        {/* Contact Details */}
        <div className="mb-16">
          <div className="bg-[#102019] p-6 sm:p-8 md:p-10 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F2C230] font-semibold mb-2">
                  01 / Connect
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl mb-2">
                  Partner With Us
                </h3>
                <p className="text-[#B9C2BC] text-sm">
                  Reach out directly to Susan for partnership opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-center gap-3 group p-3 border border-white/10 hover:border-[#159447]/50 transition-all"
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#159447] transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#F2C230]">
                      Call Susan
                    </div>
                    <div className="text-base font-semibold group-hover:text-[#159447] transition-colors">
                      {contactDetails.phone}
                    </div>
                    <div className="text-xs text-[#8F9A94] mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {contactDetails.available}
                    </div>
                  </div>
                </a>

                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 group p-3 border border-white/10 hover:border-[#159447]/50 transition-all"
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#159447] transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#F2C230]">
                      Email Susan
                    </div>
                    <div className="text-sm sm:text-base font-semibold group-hover:text-[#159447] transition-colors break-all">
                      {contactDetails.email}
                    </div>
                    <div className="text-xs text-[#8F9A94] mt-1">
                      Typically replies within 24 hours
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-20">

          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#159447] font-semibold mb-3">
              02 / Participate
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#18251F] mb-3">
              Ways to Get Involved
            </h2>

            <p className="text-[#66716B] max-w-2xl mx-auto text-sm sm:text-base">
              Choose how you'd like to contribute to documenting African entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {waysToGetInvolved.map((way, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#D5D0C4] p-6 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,32,25,0.07)] transition-all duration-300 group"
              >

                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-full ${way.iconBg} flex items-center justify-center`}>
                    <way.icon className="h-5 w-5 text-white" />
                  </div>

                  <span className="text-xs font-semibold text-[#9AA19C]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#18251F] mb-3">
                  {way.title}
                </h3>

                <p className="text-sm text-[#66716B] leading-relaxed mb-6">
                  {way.description}
                </p>

                <button 
                  onClick={() => handleActionClick(way.type, way.action)}
                  className="w-full py-3 bg-[#102019] text-white hover:bg-[#159447] transition-all duration-300 font-semibold text-sm inline-flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  {way.action}
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Form */}
          <div 
            id="contact-form" 
            className="bg-white p-6 sm:p-8 md:p-10 border border-[#D5D0C4] scroll-mt-20"
          >

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#159447] font-semibold mb-3">
                03 / Connect
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#18251F] flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-[#159447]" />
                Send a Message
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#159447]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-[#159447]" />
                </div>

                <h3 className="font-serif text-2xl text-[#18251F] mb-2">
                  Thank You
                </h3>

                <p className="text-[#66716B] text-sm">
                  Your message has been sent. Susan will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F5D56] mb-2">
                      Full Name *
                    </label>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#788079]" />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#F7F5EF] border border-[#D5D0C4] text-[#18251F] placeholder-[#9AA19C] focus:border-[#159447] focus:ring-1 focus:ring-[#159447] outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F5D56] mb-2">
                      Email Address *
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#788079]" />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#F7F5EF] border border-[#D5D0C4] text-[#18251F] placeholder-[#9AA19C] focus:border-[#159447] focus:ring-1 focus:ring-[#159447] outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F5D56] mb-2">
                      Organization
                    </label>

                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#788079]" />

                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#F7F5EF] border border-[#D5D0C4] text-[#18251F] placeholder-[#9AA19C] focus:border-[#159447] focus:ring-1 focus:ring-[#159447] outline-none transition-all"
                        placeholder="Company or organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F5D56] mb-2">
                      Your Role
                    </label>

                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#788079]" />

                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#F7F5EF] border border-[#D5D0C4] text-[#18251F] placeholder-[#9AA19C] focus:border-[#159447] focus:ring-1 focus:ring-[#159447] outline-none transition-all"
                        placeholder="Founder, Researcher, etc."
                      />
                    </div>
                  </div>

                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F5D56] mb-2">
                    How would you like to be involved? *
                  </label>

                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F7F5EF] border border-[#D5D0C4] text-[#18251F] focus:border-[#159447] focus:ring-1 focus:ring-[#159447] outline-none transition-all"
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
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F5D56] mb-2">
                    Your Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#F7F5EF] border border-[#D5D0C4] text-[#18251F] placeholder-[#9AA19C] focus:border-[#159447] focus:ring-1 focus:ring-[#159447] outline-none transition-all resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#102019] text-white hover:bg-[#159447] transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

              </form>
            )}

          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Quick Contact */}
            <div className="bg-[#EAE5DA] p-6 sm:p-8 border border-[#D5D0C4]">

              <p className="text-xs uppercase tracking-[0.2em] text-[#159447] font-semibold mb-3">
                04 / Reach Us
              </p>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#18251F] mb-6">
                Quick Contact
              </h3>

              <div className="space-y-4">

                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-start gap-4 p-4 bg-white border border-[#D5D0C4] hover:border-[#159447] transition-all group"
                >
                  <Phone className="h-5 w-5 text-[#159447] mt-1 flex-shrink-0" />

                  <div>
                    <div className="font-semibold text-[#18251F] group-hover:text-[#159447] transition-colors text-sm">
                      Call Susan
                    </div>

                    <div className="text-[#4F5D56] mt-1 font-medium">
                      {contactDetails.phone}
                    </div>

                    <div className="text-xs text-[#788079] mt-2 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Available: {contactDetails.available}
                    </div>
                  </div>
                </a>

                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-start gap-4 p-4 bg-white border border-[#D5D0C4] hover:border-[#159447] transition-all group"
                >
                  <Mail className="h-5 w-5 text-[#159447] mt-1 flex-shrink-0" />

                  <div>
                    <div className="font-semibold text-[#18251F] group-hover:text-[#159447] transition-colors text-sm">
                      Email Susan
                    </div>

                    <div className="text-[#4F5D56] mt-1 text-sm font-medium break-all">
                      {contactDetails.email}
                    </div>

                    <div className="text-xs text-[#788079] mt-2">
                      Typically replies within 24 hours
                    </div>
                  </div>
                </a>

              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-[#102019] p-6 sm:p-8 text-white">

              <p className="text-xs uppercase tracking-[0.2em] text-[#F2C230] font-semibold mb-3">
                05 / The Process
              </p>

              <h3 className="font-serif text-2xl sm:text-3xl mb-6">
                What Happens Next?
              </h3>

              <div className="space-y-4">

                <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#159447] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    1
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">Initial Contact</h4>
                    <p className="text-[#AEB8B2] text-xs mt-1 leading-relaxed">
                      Susan will respond to discuss your interest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#1677C8] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    2
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">Discussion</h4>
                    <p className="text-[#AEB8B2] text-xs mt-1 leading-relaxed">
                      Explore how you can best contribute to the initiative.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F2C230] text-[#102019] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    3
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">Collaboration</h4>
                    <p className="text-[#AEB8B2] text-xs mt-1 leading-relaxed">
                      Start working together on documenting African entrepreneurship.
                    </p>
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

