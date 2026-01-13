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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-lg mx-auto px-4">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="mb-6 text-orange-600 hover:text-orange-800 font-medium underline"
          >
            ← Back to Home
          </button>
        )}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Share Your Story</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            required
          />
          <textarea
            placeholder="Your Story"
            value={story}
            onChange={e => setStory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 min-h-[120px]"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Submit Story
          </button>
        </form>
        {submitted && (
          <div className="mt-6 text-green-600 text-center font-medium">
            Thank you for sharing your story!
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
