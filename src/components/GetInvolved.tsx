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
  Sparkles
} from 'lucide-react';

interface GetInvolvedProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({
  onBack,
  onNavigateToContact
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: 'YOUR_ACCESS_KEY',
            subject: `Get Involved - ${formData.interest}`,
            from_name: formData.name,
            name: formData.name,
            email: formData.email,
            organization: formData.organization,
            role: formData.role,
            interest: formData.interest,
            message: formData.message
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setFormData({
          name: '',
          email: '',
          organization: '',
          role: '',
          interest: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert(
          data.message ||
            'Something went wrong. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      alert(
        'Unable to send your message. Please try again later.'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactDetails = {
    phone: '0741201421',
    email: 'susanmaina84@gmail.com',
    available: 'Mon-Fri, 9am-5pm EAT'
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactDetails.email
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#102019]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <button
              onClick={onBack}
              className="flex items-center gap-3 text-white hover:text-[#F2C230] transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">
                Back to Home
              </span>
            </button>

            <div className="hidden sm:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1677C8]" />
              <div className="w-2 h-2 rounded-full bg-[#159447]" />
              <div className="w-2 h-2 rounded-full bg-[#F2C230]" />
            </div>

          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#102019] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#159447] blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#1677C8] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
              <Users size={16} className="text-[#F2C230]" />
              <span className="text-sm font-medium">
                Join the Movement
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
              Get Involved
            </h1>

            <p className="text-xl md:text-2xl text-white/75 leading-relaxed max-w-3xl">
              Help us document, understand, and amplify the journeys of
              African founders building solutions that matter.
            </p>

          </div>
        </div>
      </section>

      {/* Contact Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#159447]">
                Let's Connect
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
                Your contribution can help preserve the stories that
                shape Africa's future.
              </h2>

              <p className="mt-6 text-lg text-[#18251F]/70 leading-relaxed">
                Whether you're a founder, researcher, ecosystem builder,
                organization, or simply someone passionate about African
                entrepreneurship, there is a place for you here.
              </p>

              {/* ONLY EMAIL BUTTON */}
              <div className="mt-8">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#102019] text-white font-semibold hover:bg-[#159447] transition-all duration-300"
                >
                  <Mail size={19} />
                  Email Us
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white rounded-2xl p-7 border border-[#18251F]/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#1677C8]/10 flex items-center justify-center mb-5">
                  <Phone className="text-[#1677C8]" size={22} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Call Us
                </h3>

                <p className="text-[#18251F]/60 text-sm">
                  {contactDetails.phone}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#18251F]/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#159447]/10 flex items-center justify-center mb-5">
                  <Mail className="text-[#159447]" size={22} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Email
                </h3>

                <p className="text-[#18251F]/60 text-sm break-all">
                  {contactDetails.email}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#18251F]/10 shadow-sm sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-[#F2C230]/15 flex items-center justify-center mb-5">
                  <Clock className="text-[#b18b00]" size={22} />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Availability
                </h3>

                <p className="text-[#18251F]/60 text-sm">
                  {contactDetails.available}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 lg:py-28 bg-[#EAE5DA]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#1677C8]">
              Ways to Contribute
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif">
              There are many ways to be part of the work.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Share Your Story */}
            <div className="bg-white rounded-3xl p-8 border border-[#18251F]/10 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#159447]/10 flex items-center justify-center mb-7">
                <PenTool className="text-[#159447]" size={25} />
              </div>

              <h3 className="text-2xl font-serif mb-4">
                Share Your Story
              </h3>

              <p className="text-[#18251F]/65 leading-relaxed">
                Are you building something in Africa? Share your journey,
                challenges, lessons, and insights with our community.
              </p>

            </div>

            {/* Research */}
            <div className="bg-white rounded-3xl p-8 border border-[#18251F]/10 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#1677C8]/10 flex items-center justify-center mb-7">
                <Target className="text-[#1677C8]" size={25} />
              </div>

              <h3 className="text-2xl font-serif mb-4">
                Collaborate on Research
              </h3>

              <p className="text-[#18251F]/65 leading-relaxed">
                Partner with us on research projects exploring African
                entrepreneurship, innovation, and social impact.
              </p>

            </div>

            {/* Community */}
            <div className="bg-white rounded-3xl p-8 border border-[#18251F]/10 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#F2C230]/15 flex items-center justify-center mb-7">
                <Users className="text-[#b18b00]" size={25} />
              </div>

              <h3 className="text-2xl font-serif mb-4">
                Join the Community
              </h3>

              <p className="text-[#18251F]/65 leading-relaxed">
                Connect with founders, researchers, ecosystem builders,
                and others who care about African entrepreneurship.
              </p>

            </div>

            {/* Partner */}
            <div className="bg-white rounded-3xl p-8 border border-[#18251F]/10 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#159447]/10 flex items-center justify-center mb-7">
                <Building2 className="text-[#159447]" size={25} />
              </div>

              <h3 className="text-2xl font-serif mb-4">
                Partner With Us
              </h3>

              <p className="text-[#18251F]/65 leading-relaxed">
                Organizations can support our research, storytelling,
                founder engagement, and ecosystem-building initiatives.
              </p>

            </div>

            {/* Support */}
            <div className="bg-white rounded-3xl p-8 border border-[#18251F]/10 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#1677C8]/10 flex items-center justify-center mb-7">
                <Sparkles className="text-[#1677C8]" size={25} />
              </div>

              <h3 className="text-2xl font-serif mb-4">
                Support the Work
              </h3>

              <p className="text-[#18251F]/65 leading-relaxed">
                Help us continue documenting founder journeys and
                producing research that strengthens African ecosystems.
              </p>

            </div>

            {/* Share */}
            <div className="bg-white rounded-3xl p-8 border border-[#18251F]/10 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#F2C230]/15 flex items-center justify-center mb-7">
                <Share2 className="text-[#b18b00]" size={25} />
              </div>

              <h3 className="text-2xl font-serif mb-4">
                Spread the Word
              </h3>

              <p className="text-[#18251F]/65 leading-relaxed">
                Share African Founders Notebook with founders,
                researchers, organizations, and communities that may
                benefit from our work.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Get Involved Form */}
      <section
        id="get-involved-form"
        className="py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-sm font-semibold tracking-widest uppercase text-[#159447]">
              Start a Conversation
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif">
              Tell us how you'd like to get involved.
            </h2>

            <p className="mt-5 text-lg text-[#18251F]/65">
              Fill in the form below and we'll get back to you.
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#18251F]/10 shadow-sm p-8 md:p-12">

            {submitted ? (
              <div className="py-16 text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-[#159447]/10 flex items-center justify-center mb-7">
                  <CheckCircle
                    className="text-[#159447]"
                    size={42}
                  />
                </div>

                <h3 className="text-3xl font-serif mb-4">
                  Thank You!
                </h3>

                <p className="text-lg text-[#18251F]/65 max-w-xl mx-auto">
                  Your message has been sent successfully. We'll be in
                  touch with you soon.
                </p>

              </div>
            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <User size={16} />
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-5 py-4 rounded-xl border border-[#18251F]/15 bg-[#F7F5EF] focus:outline-none focus:ring-2 focus:ring-[#159447]/30 focus:border-[#159447] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <Mail size={16} />
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-[#18251F]/15 bg-[#F7F5EF] focus:outline-none focus:ring-2 focus:ring-[#159447]/30 focus:border-[#159447] transition-all"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Organization */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <Building2 size={16} />
                      Organization
                    </label>

                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Organization name"
                      className="w-full px-5 py-4 rounded-xl border border-[#18251F]/15 bg-[#F7F5EF] focus:outline-none focus:ring-2 focus:ring-[#159447]/30 focus:border-[#159447] transition-all"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <Briefcase size={16} />
                      Your Role
                    </label>

                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Founder, Researcher, etc."
                      className="w-full px-5 py-4 rounded-xl border border-[#18251F]/15 bg-[#F7F5EF] focus:outline-none focus:ring-2 focus:ring-[#159447]/30 focus:border-[#159447] transition-all"
                    />
                  </div>

                </div>

                {/* Interest */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <Target size={16} />
                    How would you like to get involved?
                  </label>

                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-[#18251F]/15 bg-[#F7F5EF] focus:outline-none focus:ring-2 focus:ring-[#159447]/30 focus:border-[#159447] transition-all"
                  >
                    <option value="">
                      Select an option
                    </option>

                    <option value="Share my story">
                      Share my story
                    </option>

                    <option value="Research collaboration">
                      Research collaboration
                    </option>

                    <option value="Community">
                      Join the community
                    </option>

                    <option value="Partnership">
                      Partnership
                    </option>

                    <option value="Support">
                      Support the work
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <MessageSquare size={16} />
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us a little more about how you'd like to get involved..."
                    className="w-full px-5 py-4 rounded-xl border border-[#18251F]/15 bg-[#F7F5EF] focus:outline-none focus:ring-2 focus:ring-[#159447]/30 focus:border-[#159447] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#102019] text-white font-semibold hover:bg-[#159447] transition-all duration-300"
                >
                  <Send size={19} />
                  Send Message
                  <ArrowRight size={18} />
                </button>

              </form>

            )}

          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-[#102019] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-semibold tracking-widest uppercase text-[#F2C230]">
              Have Questions?
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif">
              Let's start a conversation.
            </h2>

            <p className="mt-5 text-white/65 max-w-2xl mx-auto text-lg">
              If you have questions or would rather speak directly,
              reach out using the options below.
            </p>

            {/* Phone only — no second email button */}
            <div className="mt-10 flex justify-center">

              <a
                href={`tel:${contactDetails.phone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={19} />
                Call Us
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">

            <span className="text-sm font-semibold tracking-widest uppercase text-[#1677C8]">
              What Happens Next
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif">
              Simple, human, and collaborative.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#1677C8]/10 text-[#1677C8] flex items-center justify-center text-xl font-bold mb-5">
                01
              </div>

              <h3 className="text-xl font-semibold mb-3">
                We Read
              </h3>

              <p className="text-[#18251F]/60 leading-relaxed">
                We'll review your message and understand how you'd like
                to contribute.
              </p>

            </div>

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#159447]/10 text-[#159447] flex items-center justify-center text-xl font-bold mb-5">
                02
              </div>

              <h3 className="text-xl font-semibold mb-3">
                We Connect
              </h3>

              <p className="text-[#18251F]/60 leading-relaxed">
                We'll reach out to discuss your idea, story, or
                collaboration opportunity.
              </p>

            </div>

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#F2C230]/15 text-[#b18b00] flex items-center justify-center text-xl font-bold mb-5">
                03
              </div>

              <h3 className="text-xl font-semibold mb-3">
                We Build
              </h3>

              <p className="text-[#18251F]/60 leading-relaxed">
                Together, we find meaningful ways to contribute to the
                African Founders Notebook.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default GetInvolved;