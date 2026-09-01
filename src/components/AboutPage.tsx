import React from 'react';
import { BookOpen, Users, Target, Heart, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onShareYourStory?: () => void;
  onJoinCommunity?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({
  onBack,
  onShareYourStory,
  onJoinCommunity
}) => {
  const values = [
    {
      icon: BookOpen,
      title: "Documenting Real Journeys",
      description:
        "We capture the authentic stories of African founders - the ups, the doubts, the pivots, and the real work behind building something meaningful."
    },
    {
      icon: Users,
      title: "Practical Insights",
      description:
        "Sharing wisdom that comes from lived experience, not theory. Every story contains lessons that can help the next generation of founders."
    },
    {
      icon: Target,
      title: "Founders First",
      description:
        "Creating a space where founders feel seen, not just studied. We celebrate the entrepreneur and the process, not just the outcome."
    },
    {
      icon: Heart,
      title: "Preserving Wisdom",
      description:
        "Building an archive that shapes what support for African founders should really look like, contributing to better understanding of what it takes to build in Africa."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">

      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-sm font-medium
          text-[#68756E] hover:text-[#159447] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </button>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#6D7B73]">
                About the Notebook
              </span>
              <span className="h-px w-12 bg-[#F2C230]" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] mb-8">
              The stories
              <br />
              <span className="text-[#159447] italic">
                behind the building.
              </span>
            </h1>

            <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-[#5F6B65]">
              African Founders Notebook exists to document the people,
              experiences and lessons behind building meaningful things
              across Africa.
            </p>
          </div>

          {/* RIGHT EDITORIAL CARD */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-24 h-24 border border-[#F2C230]/50 rounded-full" />

            <div className="relative bg-[#102019] rounded-[2rem] p-10 sm:p-12 min-h-[390px]
              flex flex-col justify-between overflow-hidden">

              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full
                border border-white/10" />

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#F2C230]
                  flex items-center justify-center mb-10">
                  <BookOpen className="w-7 h-7 text-[#102019]" />
                </div>

                <p className="font-serif text-3xl sm:text-4xl leading-tight text-white">
                  “The outcome is only one part of the story.”
                </p>
              </div>

              <div className="relative mt-10">
                <div className="h-px w-12 bg-[#F2C230] mb-4" />
                <p className="text-sm tracking-wide text-white/60">
                  African Founders Notebook
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#DCD7CB] bg-[#F1EEE6]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">

          <span className="text-[11px] tracking-[0.35em] uppercase text-[#6D7B73]">
            Why we exist
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl
            leading-tight mt-5 mb-8">
            The messy middle deserves
            <span className="text-[#159447]"> to be remembered.</span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-[#5F6B65] max-w-3xl mx-auto">
            <p>
              We're here to document the untold stories of African founders -
              the real ones. The ones that don't always make it into the
              spotlight.
            </p>

            <p>
              Too often, what gets celebrated is the outcome: the funding
              raised, the launch, the headline. But what's missing is the
              process. The uncertainty. The pivots. The messy middle.
            </p>

            <p>
              That's where the real work happens. And that's what we're here
              to capture.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DOCUMENT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-32">

        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#6D7B73]">
              Our values
            </span>
            <span className="h-px w-12 bg-[#F2C230]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
            What we're
            <span className="text-[#159447] italic"> about.</span>
          </h2>
        </div>

        {/* VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8D3C8] border border-[#D8D3C8]">

          {values.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <div
                key={index}
                className="bg-[#F7F5EF] p-8 sm:p-10 lg:p-12
                group hover:bg-white transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">

                  <div className="w-12 h-12 rounded-full border border-[#D5D0C4]
                    flex items-center justify-center
                    group-hover:border-[#159447]
                    group-hover:bg-[#159447]
                    transition-all duration-300"
                  >
                    <IconComponent
                      className="w-5 h-5 text-[#159447]
                      group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  <span className="font-serif text-4xl text-[#D8D3C8]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl mb-4">
                  {value.title}
                </h3>

                <p className="text-[#5F6B65] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="px-5 sm:px-8 lg:px-10 pb-24 sm:pb-32">

        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#102019]
            px-7 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 text-center">

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full
              border border-white/5" />

            <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full
              border border-[#F2C230]/10" />

            <div className="relative max-w-3xl mx-auto">

              <span className="text-[11px] tracking-[0.35em] uppercase text-[#F2C230]">
                Be part of the archive
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl
                leading-tight text-white mt-5 mb-6">
                Your story matters here.
              </h3>

              <p className="text-lg text-white/65 leading-relaxed mb-10">
                We're preserving wisdom, sharing honest experiences and
                shaping what support for African founders should really
                look like.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <button
                  onClick={onShareYourStory}
                  className="bg-[#F2C230] text-[#102019]
                  px-8 py-4 rounded-full font-semibold
                  hover:bg-[#E5B820]
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  transition-all duration-300"
                >
                  Share Your Story
                </button>

                <button
                  onClick={onJoinCommunity}
                  className="border border-white/30 text-white
                  px-8 py-4 rounded-full font-semibold
                  hover:bg-white hover:text-[#102019]
                  transition-all duration-300"
                >
                  Join Our Community
                </button>

              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default AboutPage;