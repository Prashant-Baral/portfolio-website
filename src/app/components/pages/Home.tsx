import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/Sigma/ImageWithFallback';

export function Home({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <main className="flex-1 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center py-12">

          {/* Left Decorative Pattern */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 border border-[#FF6B6B]/30"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 ml-8"></div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 ml-4"></div>
            </div>
          </div>

          {/* Center Section - Profile & Intro */}
          <div className="lg:col-span-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-4 border-[#FF6B6B]/20 scale-110 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 scale-125"></div>

                {/* Main photo container */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent"></div>
                  <ImageWithFallback
                    src="/images/profile/prashant.jpg"
                    alt="Prashant Baral"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg border-4 border-white">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="flex-1 text-center lg:text-left max-w-xl">
              <div className="mb-4">
                <p className="text-lg text-gray-600">
                  Greetings, I'm
                </p>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Prashant Baral
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A passionate <span className="text-[#187cc4] font-semibold">Data Science and ML learner</span>
              </p>

              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                I work with data to turn messy, real-world problems into clear, usable insights. My focus is on data analysis, machine learning, and building reliable systems.
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                I love bringing ideas to life through creativity, constantly learning new technologies to solve challenging problems.
              </p>

              <div className="flex gap-4 mx-auto lg:mx-0 justify-center lg:justify-start flex-wrap">
                <button
                  onClick={() => onNavigate?.('projects')}
                  className="group bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="group bg-gradient-to-r from-[#47c584] to-[#4fe857] hover:from-[#FF5252] hover:to-[#3189ab] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Get in Touch</span>
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Decorative Pattern */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 ml-auto"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30"></div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 ml-auto"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </main>
  );
}