
import React from 'react';
import {
  ArrowRight,
  Heart,
  Users,
  Globe,
  Database,
  BookOpen,
  Lightbulb,
  Target,
  Map,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import heroBg from '../assets/hero-bg.jpg';
import Matters from '../assets/matters.png';
import FounderPhoto from '../assets/founder photo.jpeg';

interface HeroProps {
  onShareYourJourney?: () => void;
  onPartnerWithUs?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  onShareYourJourney,
  onPartnerWithUs,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleGetInvolved = () => {
    if (onShareYourJourney) {
      onShareYourJourney();
    } else {
      scrollToSection('contact');
    }
  };

  const handlePartnerWithUs = () => {
    if (onPartnerWithUs) {
      onPartnerWithUs();
    } else {
      scrollToSection('contact');
    }
  };

  const handleShareYourStory = () => {
    if (onShareYourJourney) {
      onShareYourJourney();
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section
      id="home"
      className="bg-[#F7F5EF] text-[#18251F] overflow-hidden"
    >

      {/* =========================
          HERO
          ========================= */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Research and documentation setting with people, books, and workspace"
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-[#08120E]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08120E]/95 via-[#08120E]/65 to-[#08120E]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08120E]/85 via-transparent to-[#08120E]/15" />
        </div>

        {/* Brand-colour details */}
        <div className="absolute top-0 left-0 right-0 h-1 flex z-20">
          <div className="w-1/3 bg-[#1677C8]" />
          <div className="w-1/3 bg-[#159447]" />
          <div className="w-1/3 bg-[#F2C230]" />
        </div>

        {/* Editorial circle detail */}
        <div className="absolute right-[-150px] top-[20%] w-[520px] h-[520px] rounded-full border border-white/10" />
        <div className="absolute right-[-40px] top-[30%] w-[330px] h-[330px] rounded-full border border-white/10" />
        <div className="absolute right-[70px] top-[40%] w-[130px] h-[130px] rounded-full border border-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full py-36 pt-44">

          <div className="max-w-5xl">

            <div className="flex items-center gap-4 mb-9">
              <span className="h-px w-14 bg-[#F2C230]" />

              <span className="text-sm tracking-[0.3em] text-white/75 uppercase font-light">
                Research Initiative
              </span>
            </div>

            <h1 className="text-white leading-[0.95] tracking-[-0.035em]">

              <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white/75 mb-7 tracking-[0.08em]">
                Documenting African Social Enterprise
              </span>

              <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium">
                <Typewriter
                  words={['African Founders Notebook']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>

            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/65 mt-9 mb-12 max-w-3xl leading-relaxed font-normal tracking-wide">
              A research and storytelling initiative combining anonymized,
              multi-country data and founder narratives to address critical
              evidence gaps in African social entrepreneurship.
            </p>

            {/* HERO BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Explore the Project */}
              <button
                type="button"
                className="group px-9 py-4.5 bg-[#F7F5EF] text-[#18251F] rounded-full hover:bg-white transition-all duration-300 font-semibold flex items-center justify-center hover:-translate-y-1 hover:shadow-2xl"
                onClick={() => scrollToSection('stories')}
              >
                Explore the Project

                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Get Involved */}
              <button
                type="button"
                className="px-9 py-4.5 border border-white/45 text-white rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 font-semibold backdrop-blur-sm"
                onClick={handleGetInvolved}
              >
                Get Involved
              </button>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/45 text-[10px] tracking-[0.35em]">
              SCROLL
            </span>

            <div className="w-px h-12 bg-gradient-to-b from-white/45 to-transparent" />
          </div>
        </div>

      </div>

      {/* =========================
          OUR IMPACT
          ========================= */}
      <div id="stories" className="bg-[#F7F5EF]">

        <div className="max-w-7xl mx-auto py-24 sm:py-32 px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.6fr_1.4fr] gap-12 items-end mb-16">

            <div>
              <div className="flex items-center gap-3 mb-5">

                <span className="text-xs tracking-[0.3em] text-[#6D7B73]">
                  01
                </span>

                <span className="h-px w-10 bg-[#F2C230]" />

              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#18251F]">
                Our Impact
              </h2>

            </div>

            <div className="h-px bg-[#D5D0C4] hidden lg:block mb-3" />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#CBC5B7]">

            {[
              {
                icon: Heart,
                value: '50+',
                label: 'Founder Stories',
                desc: 'Documented journeys',
              },
              {
                icon: Users,
                value: '25+',
                label: 'Countries',
                desc: 'Across Africa',
              },
              {
                icon: Globe,
                value: '700+',
                label: 'Enterprises',
                desc: 'In our database',
              },
            ].map((stat, idx) => (

              <div
                key={idx}
                className="group relative py-10 md:py-12 md:px-9 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r last:border-r-0 border-[#CBC5B7]"
              >

                <div className="flex items-start justify-between">

                  <span className="font-serif text-lg text-[#A08D67]">
                    0{idx + 1}
                  </span>

                  <div className="w-11 h-11 rounded-full border border-[#C8C1B3] flex items-center justify-center group-hover:bg-[#18251F] group-hover:text-white transition-all duration-500">
                    <stat.icon className="h-5 w-5" />
                  </div>

                </div>

                <div className="mt-12">

                  <div className="font-serif text-6xl lg:text-7xl text-[#18251F] group-hover:italic transition-all duration-500">
                    {stat.value}
                  </div>

                  <div className="text-lg font-semibold text-[#35433C] mt-3">
                    {stat.label}
                  </div>

                  <div className="text-[#788079] mt-1">
                    {stat.desc}
                  </div>

                </div>

                <div className="mt-7 flex gap-1">
                  <span className="h-1 w-5 rounded-full bg-[#1677C8]" />
                  <span className="h-1 w-5 rounded-full bg-[#159447]" />
                  <span className="h-1 w-5 rounded-full bg-[#F2C230]" />
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* =========================
          ABOUT THE FOUNDER
          ========================= */}
      <div id="founder" className="bg-[#EAE5DA]">

        <div className="max-w-7xl mx-auto py-24 sm:py-32 px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">

            {/* Left Column */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="text-xs tracking-[0.3em] text-[#6D7B73]">
                  02
                </span>

                <span className="h-px w-10 bg-[#F2C230]" />

              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#18251F] mb-8">
                About the Founder
              </h2>

              <div className="text-3xl font-serif text-[#159447] mb-2">
                Susan
              </div>

              <div className="text-lg text-[#65716B] font-medium mb-7">
                Researcher + Ecosystem Practitioner
              </div>

              <div className="relative rounded-sm overflow-hidden border border-[#D2CCBD] shadow-xl">

                <img
                  src={FounderPhoto}
                  alt="Susan, Founder of African Founders Notebook"
                  className="w-full h-[390px] object-cover object-center"
                />

                <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                  <div className="w-1/3 bg-[#1677C8]" />
                  <div className="w-1/3 bg-[#159447]" />
                  <div className="w-1/3 bg-[#F2C230]" />
                </div>

              </div>

              <div className="mt-8 space-y-3">

                <div className="flex items-start p-4 bg-[#F7F5EF] border border-[#D5D0C3] hover:border-[#159447] transition-colors duration-300">

                  <div className="w-9 h-9 rounded-full bg-[#E0EADF] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Map className="h-4 w-4 text-[#159447]" />
                  </div>

                  <span className="text-[#4D5B54]">
                    Work spans multiple African countries
                  </span>

                </div>

                <div className="flex items-start p-4 bg-[#F7F5EF] border border-[#D5D0C3] hover:border-[#1677C8] transition-colors duration-300">

                  <div className="w-9 h-9 rounded-full bg-[#E0E7EF] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-[#1677C8]" />
                  </div>

                  <span className="text-[#4D5B54]">
                    Master's research foundation
                  </span>

                </div>

                <div className="flex items-start p-4 bg-[#F7F5EF] border border-[#D5D0C3] hover:border-[#D6AD22] transition-colors duration-300">

                  <div className="w-9 h-9 rounded-full bg-[#F5EED1] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Target className="h-4 w-4 text-[#B48D14]" />
                  </div>

                  <span className="text-[#4D5B54]">
                    Ongoing field engagement
                  </span>

                </div>

              </div>

            </div>

            {/* Right Column */}
            <div className="lg:pt-16">

              <div className="space-y-6">

                <p className="text-lg sm:text-xl text-[#5F6B65] leading-relaxed">
                  With extensive experience across recruitment, research, and
                  founder support, Susan brings a unique practitioner-researcher
                  perspective to understanding African social entrepreneurship.
                </p>

                <p className="text-lg sm:text-xl text-[#5F6B65] leading-relaxed">
                  Her professional journey has involved working directly with
                  founders across diverse African contexts, providing hands-on
                  support while systematically documenting their experiences and
                  challenges.
                </p>

              </div>

              <div className="my-10 pl-7 border-l-2 border-[#F2C230]">

                <p className="text-lg font-medium text-[#35423C] leading-relaxed">
                  African Founders Notebook draws from professional work,
                  Master's research, and ongoing field engagement to provide
                  credible, evidence-based insights.
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#CBC5B7]">

                <div className="py-7 md:pr-6 md:border-r border-[#CBC5B7]">

                  <div className="w-12 h-12 rounded-full bg-[#E0EADF] flex items-center justify-center mb-5">
                    <Users className="h-5 w-5 text-[#159447]" />
                  </div>

                  <div className="font-semibold text-[#26352E] mb-2">
                    Recruitment Experience
                  </div>

                  <div className="text-sm text-[#6D766F]">
                    Talent & ecosystem
                  </div>

                </div>

                <div className="py-7 md:px-6 md:border-r border-[#CBC5B7]">

                  <div className="w-12 h-12 rounded-full bg-[#E0E7EF] flex items-center justify-center mb-5">
                    <BookOpen className="h-5 w-5 text-[#1677C8]" />
                  </div>

                  <div className="font-semibold text-[#26352E] mb-2">
                    Research Practice
                  </div>

                  <div className="text-sm text-[#6D766F]">
                    Academic & applied
                  </div>

                </div>

                <div className="py-7 md:pl-6">

                  <div className="w-12 h-12 rounded-full bg-[#F5EED1] flex items-center justify-center mb-5">
                    <Target className="h-5 w-5 text-[#B48D14]" />
                  </div>

                  <div className="font-semibold text-[#26352E] mb-2">
                    Founder Support
                  </div>

                  <div className="text-sm text-[#6D766F]">
                    Hands-on guidance
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          WHAT WE DO
          ========================= */}
      <div id="work" className="bg-[#F7F5EF]">

        <div className="max-w-7xl mx-auto py-24 sm:py-32 px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 mb-16">

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="text-xs tracking-[0.3em] text-[#6D7B73]">
                  03
                </span>

                <span className="h-px w-10 bg-[#F2C230]" />

              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#18251F]">
                What We Do
              </h2>

            </div>

            <p className="text-lg text-[#66716B] max-w-2xl leading-relaxed lg:pt-8">
              A comprehensive approach to understanding social entrepreneurship
              in Africa
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#CBC5B7]">

            {/* Evidence */}
            <div className="group py-10 lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#CBC5B7]">

              <div className="flex items-center justify-between mb-10">

                <span className="font-serif text-lg text-[#9B8A6A]">
                  01
                </span>

                <div className="w-12 h-12 rounded-full border border-[#C3BCAD] flex items-center justify-center group-hover:bg-[#159447] group-hover:text-white transition-all duration-500">
                  <Database className="h-5 w-5" />
                </div>

              </div>

              <h3 className="font-serif text-4xl text-[#18251F] mb-5 group-hover:italic transition-all">
                Evidence
              </h3>

              <p className="text-[#66716B] mb-8 leading-relaxed">
                Anonymized data from 700+ social enterprises across Africa
              </p>

              <ul className="space-y-4">

                {[
                  'Founder profiles & ventures',
                  'Characteristics, sectors & stages',
                  'Challenges & impact',
                ].map((item, idx) => (

                  <li
                    key={idx}
                    className="flex items-center text-[#4F5D56]"
                  >
                    <ChevronRight className="h-5 w-5 text-[#159447] mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </li>

                ))}

              </ul>

              <div className="mt-10 flex gap-1">
                <span className="h-1 w-7 rounded-full bg-[#1677C8]" />
                <span className="h-1 w-7 rounded-full bg-[#159447]" />
              </div>

            </div>

            {/* Stories */}
            <div className="group py-10 lg:px-10 border-b lg:border-b-0 lg:border-r border-[#CBC5B7]">

              <div className="flex items-center justify-between mb-10">

                <span className="font-serif text-lg text-[#9B8A6A]">
                  02
                </span>

                <div className="w-12 h-12 rounded-full border border-[#C3BCAD] flex items-center justify-center group-hover:bg-[#1677C8] group-hover:text-white transition-all duration-500">
                  <BookOpen className="h-5 w-5" />
                </div>

              </div>

              <h3 className="font-serif text-4xl text-[#18251F] mb-5 group-hover:italic transition-all">
                Stories
              </h3>

              <p className="text-[#66716B] mb-8 leading-relaxed">
                Qualitative founder narratives and letters
              </p>

              <ul className="space-y-4">

                {[
                  'Lived experiences of building social ventures in African contexts',
                ].map((item, idx) => (

                  <li
                    key={idx}
                    className="flex items-start text-[#4F5D56]"
                  >
                    <ChevronRight className="h-5 w-5 text-[#1677C8] mr-3 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </li>

                ))}

              </ul>

              <div className="mt-10 flex gap-1">
                <span className="h-1 w-7 rounded-full bg-[#1677C8]" />
                <span className="h-1 w-7 rounded-full bg-[#F2C230]" />
              </div>

            </div>

            {/* Insights */}
            <div className="group py-10 lg:pl-10">

              <div className="flex items-center justify-between mb-10">

                <span className="font-serif text-lg text-[#9B8A6A]">
                  03
                </span>

                <div className="w-12 h-12 rounded-full border border-[#C3BCAD] flex items-center justify-center group-hover:bg-[#F2C230] group-hover:text-[#18251F] transition-all duration-500">
                  <Lightbulb className="h-5 w-5" />
                </div>

              </div>

              <h3 className="font-serif text-4xl text-[#18251F] mb-5 group-hover:italic transition-all">
                Insights
              </h3>

              <p className="text-[#66716B] mb-8 leading-relaxed">
                Case studies and research outputs
              </p>

              <ul className="space-y-4">

                {[
                  'Current & forthcoming research',
                  'Practical insights for researchers ecosystem builders funders & founders',
                ].map((item, idx) => (

                  <li
                    key={idx}
                    className="flex items-start text-[#4F5D56]"
                  >
                    <ChevronRight className="h-5 w-5 text-[#B48D14] mr-3 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </li>

                ))}

              </ul>

              <div className="mt-10 flex gap-1">
                <span className="h-1 w-7 rounded-full bg-[#159447]" />
                <span className="h-1 w-7 rounded-full bg-[#F2C230]" />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          WHY THIS MATTERS
          ========================= */}
      <div
        id="matters"
        className="relative overflow-hidden bg-[#102019] text-white"
      >

        <div className="absolute inset-0">

          <img
            src={Matters}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#102019]/95 via-[#102019]/92 to-[#172D25]/90" />

        </div>

        <div className="absolute top-0 left-0 right-0 h-1 flex">

          <div className="w-1/3 bg-[#1677C8]" />
          <div className="w-1/3 bg-[#159447]" />
          <div className="w-1/3 bg-[#F2C230]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-24 sm:py-32 px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-20">

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="text-xs tracking-[0.3em] text-[#F2C230]">
                  04
                </span>

                <span className="h-px w-10 bg-[#F2C230]" />

              </div>

              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-7">
                <Shield className="h-6 w-6 text-[#F2C230]" />
              </div>

              <h3 className="font-serif text-5xl md:text-6xl text-[#F0EADF] leading-[0.95]">
                Why This{' '}
                <span className="italic text-[#F2C230]">
                  Matters
                </span>
              </h3>

              <div className="w-14 h-px bg-[#F2C230] mt-7" />

              <p className="text-lg text-white/60 max-w-md mt-7 leading-relaxed">
                Understanding the critical gaps in African social
                entrepreneurship research
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">

              <div className="py-9 md:pr-7 md:border-r border-white/15">

                <div className="text-[#F2C230] font-serif text-lg mb-8">
                  01
                </div>

                <div className="w-11 h-11 border border-white/15 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-5 w-5 text-[#F2C230]" />
                </div>

                <h4 className="font-serif text-2xl text-[#F0EADF] mb-4">
                  The Data Gap
                </h4>

                <p className="text-white/55 leading-relaxed">
                  Despite growing interest in African social entrepreneurship,
                  there remains a major data gap — especially beyond donor-funded
                  programs and single-country studies.
                </p>

              </div>

              <div className="py-9 md:px-7 md:border-r border-white/15">

                <div className="text-[#F2C230] font-serif text-lg mb-8">
                  02
                </div>

                <div className="w-11 h-11 border border-white/15 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-5 w-5 text-[#F2C230]" />
                </div>

                <h4 className="font-serif text-2xl text-[#F0EADF] mb-4">
                  What's Missing
                </h4>

                <p className="text-white/55 leading-relaxed">
                  Existing research often overlooks lived realities, founder
                  decision-making, and long-term sustainability.
                </p>

              </div>

              <div className="py-9 md:pl-7">

                <div className="text-[#F2C230] font-serif text-lg mb-8">
                  03
                </div>

                <div className="w-11 h-11 border border-white/15 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-5 w-5 text-[#F2C230]" />
                </div>

                <h4 className="font-serif text-2xl text-[#F0EADF] mb-4">
                  Our Solution
                </h4>

                <p className="text-white/55 leading-relaxed">
                  African Founders Notebook exists to help close this gap by
                  documenting real stories and providing credible,
                  evidence-based insights.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-6">

            <div className="flex gap-1">
              <span className="h-1 w-7 rounded-full bg-[#1677C8]" />
              <span className="h-1 w-7 rounded-full bg-[#159447]" />
              <span className="h-1 w-7 rounded-full bg-[#F2C230]" />
            </div>

            <p className="text-lg text-white/55">
              African Founders Notebook exists to help close this gap.
            </p>

          </div>

        </div>

      </div>

      {/* =========================
          CTA
          ========================= */}
      <div id="contact" className="bg-[#EAE5DA]">

        <div className="max-w-5xl mx-auto py-24 sm:py-32 px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <div className="flex items-center justify-center gap-3 mb-6">

              <span className="text-xs tracking-[0.3em] text-[#6D7B73]">
                05
              </span>

              <span className="h-px w-10 bg-[#F2C230]" />

            </div>

            <h3 className="font-serif text-4xl md:text-6xl text-[#18251F] mb-7 leading-tight">
              Join Our Research Initiative
            </h3>

            <div className="flex justify-center gap-1 mb-8">
              <span className="h-1 w-8 rounded-full bg-[#1677C8]" />
              <span className="h-1 w-8 rounded-full bg-[#159447]" />
              <span className="h-1 w-8 rounded-full bg-[#F2C230]" />
            </div>

            <p className="text-lg text-[#66716B] mb-10 max-w-2xl mx-auto leading-relaxed">
              Contribute to building a more comprehensive understanding of
              African social entrepreneurship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Explore Documentation */}
              <button
                type="button"
                className="group px-10 py-4 bg-[#102019] text-white rounded-full hover:bg-[#1B3027] transition-all duration-300 font-medium flex items-center justify-center hover:-translate-y-1 hover:shadow-xl"
                onClick={() => scrollToSection('stories')}
              >
                <span className="flex items-center justify-center">
                  Explore Documentation

                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              {/* Partner With Us */}
              <button
                type="button"
                className="px-10 py-4 border border-[#A9A08F] text-[#39463F] rounded-full hover:bg-[#F7F5EF] hover:border-[#102019] transition-all duration-300 font-medium"
                onClick={handlePartnerWithUs}
              >
                Partner With Us
              </button>

            </div>

            <div className="mt-10 pt-8 border-t border-[#D0CABC]">

              <p className="text-sm text-[#7A817B]">
                Connect with researchers, founders, and ecosystem builders
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
