import React, { useState } from 'react';

interface ContactSectionProps {
  onBackToHome?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [story, setStory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the data to your backend or email service
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F7F5EF]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">

        {/* Back Button */}
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#5F6B65] hover:text-[#159447] transition-colors duration-300"
          >
            <span className="text-lg">←</span>
            Back to Home
          </button>
        )}

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-0 mb-6">
            <span className="w-10 h-[3px] bg-[#1677C8]"></span>
            <span className="w-10 h-[3px] bg-[#159447]"></span>
            <span className="w-10 h-[3px] bg-[#F2C230]"></span>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-[#159447] font-semibold mb-4">
            Get Involved
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#18251F] mb-5">
            Share Your Story
          </h2>

          <p className="max-w-xl mx-auto text-[#66716B] leading-relaxed">
            Have a story, insight, or experience worth documenting?
            We would love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-[#D5D0C4] p-6 sm:p-10 shadow-[0_8px_30px_rgba(16,32,25,0.04)]">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#4F5D56] mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-[#F7F5EF] border border-[#D5D0C4] px-4 py-3.5 text-[#18251F] placeholder-[#8A918C] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447] transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#4F5D56] mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#F7F5EF] border border-[#D5D0C4] px-4 py-3.5 text-[#18251F] placeholder-[#8A918C] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447] transition-all duration-300"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#4F5D56] mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is your story about?"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full bg-[#F7F5EF] border border-[#D5D0C4] px-4 py-3.5 text-[#18251F] placeholder-[#8A918C] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447] transition-all duration-300"
                required
              />
            </div>

            {/* Story */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#4F5D56] mb-2">
                Your Story
              </label>
              <textarea
                placeholder="Tell us your story..."
                value={story}
                onChange={e => setStory(e.target.value)}
                className="w-full bg-[#F7F5EF] border border-[#D5D0C4] px-4 py-3.5 text-[#18251F] placeholder-[#8A918C] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447] transition-all duration-300 min-h-[180px] resize-y"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#102019] text-white py-4 px-6 font-semibold tracking-wide hover:bg-[#159447] transition-all duration-300 hover:shadow-lg"
            >
              Submit Story
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 border border-[#159447]/30 bg-[#159447]/5 px-5 py-4 text-[#159447] text-center text-sm font-medium">
              Thank you for sharing your story!
            </div>
          )}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-[#788079] mt-8 tracking-wide">
          Your story helps build a richer record of African social enterprise.
        </p>

      </div>
    </section>
  );
};

export default ContactSection;

