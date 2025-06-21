
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import ImageSlideshow from "@/components/ImageSlideshow";
import WomenDressCodeSlideshow from "@/components/WomenDressCodeSlideshow";
import MenDressCodeSlideshow from "@/components/MenDressCodeSlideshow";

const Index = () => {
  const handleReservation = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSffIs14p3geSTaMLgvouHngy55l2mTST5RGzzm55cdOejFuxg/viewform?usp=sharing&ouid=110678490747529455416", "_blank");
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image for Entire Page */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/92e473ab-8288-47eb-9c1a-8156764e0bc5.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center animate-fade-in">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <p className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-widest mb-6 opacity-90 underline decoration-amber-100 decoration-4 underline-offset-8">
              You Are Invited To:
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
              The Prestige Luncheon
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-delayed">
              An event to uplift and celebrate each other as we continue to embark on journeys to better ourselves as young adults.
            </p>
          </div>
        </section>

        {/* Elegant Social Experience Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-full mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 drop-shadow-lg">
              An Elegant Social Experience
            </h2>
            
            <div className="mb-16 w-full">
              <ImageSlideshow />
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-4 relative overflow-hidden animate-fade-in">
          {/* Background dining table icons */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-8 md:grid-cols-12 gap-8 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-8 h-8 text-amber-100">
                    🍽️
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16 drop-shadow-lg">
              What to Expect
            </h3>
            
            <div className="space-y-16">
              <div className="text-center group">
                <h4 className="text-4xl font-serif font-bold text-amber-100 mb-8 group-hover:text-amber-50 transition-colors duration-300">
                  Motivational Talks
                </h4>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-100 to-amber-200 mx-auto mb-8 rounded-full opacity-80"></div>
                <p className="text-white/90 leading-relaxed text-xl max-w-4xl mx-auto font-light">
                  Inspiring speakers sharing wisdom and experiences to motivate your journey ahead.
                </p>
              </div>

              <div className="text-center group">
                <h4 className="text-4xl font-serif font-bold text-amber-100 mb-8 group-hover:text-amber-50 transition-colors duration-300">
                  Poetry Sessions
                </h4>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-100 to-amber-200 mx-auto mb-8 rounded-full opacity-80"></div>
                <p className="text-white/90 leading-relaxed text-xl max-w-4xl mx-auto font-light">
                  Beautiful poetry performances and open mic opportunities for creative expression.
                </p>
              </div>

              <div className="text-center group">
                <h4 className="text-4xl font-serif font-bold text-amber-100 mb-8 group-hover:text-amber-50 transition-colors duration-300">
                  Interactive Games
                </h4>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-100 to-amber-200 mx-auto mb-8 rounded-full opacity-80"></div>
                <p className="text-white/90 leading-relaxed text-xl max-w-4xl mx-auto font-light">
                  Fun activities and games to build connections and create lasting memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dress Code Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-full mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16 drop-shadow-lg">
              Dress Code
            </h3>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="text-center">
                <h4 className="text-2xl font-serif font-bold text-amber-100 mb-6">Women</h4>
                <p className="text-lg text-white/80 mb-8">Spring formal solid pastels</p>
                <WomenDressCodeSlideshow />
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-serif font-bold text-amber-100 mb-6">Men</h4>
                <p className="text-lg text-white/80 mb-8">Spring formal neutral earth tones</p>
                <MenDressCodeSlideshow />
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-100/10 backdrop-blur-sm border border-amber-100/20 rounded-2xl p-8 shadow-2xl hover:bg-amber-100/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Calendar className="w-8 h-8 text-amber-100 mr-4" />
                  <h4 className="text-2xl font-serif font-bold text-white">Date</h4>
                </div>
                <p className="text-xl text-amber-100 font-light">27 September 2025</p>
              </div>

              <div className="bg-amber-100/10 backdrop-blur-sm border border-amber-100/20 rounded-2xl p-8 shadow-2xl hover:bg-amber-100/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-amber-100 mr-4" />
                  <h4 className="text-2xl font-serif font-bold text-white">Time</h4>
                </div>
                <p className="text-xl text-amber-100 font-light">11am - 6pm</p>
              </div>

              <div className="bg-amber-100/10 backdrop-blur-sm border border-amber-100/20 rounded-2xl p-8 shadow-2xl hover:bg-amber-100/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-amber-100 mr-4" />
                  <h4 className="text-2xl font-serif font-bold text-white">Location</h4>
                </div>
                <p className="text-xl text-amber-100 font-light">Sandton, Gauteng</p>
              </div>

              <div className="bg-amber-100/10 backdrop-blur-sm border border-amber-100/20 rounded-2xl p-8 shadow-2xl hover:bg-amber-100/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-amber-100 mr-4" />
                  <h4 className="text-2xl font-serif font-bold text-white">Fee</h4>
                </div>
                <p className="text-xl text-amber-100 font-light">R500 per person</p>
                <p className="text-sm text-amber-100/80 mt-2">Invite plus one for R500</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 drop-shadow-lg">
              Reserve Your Spot
            </h3>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us for this elegant celebration. Please click the button below to secure your place at The Prestige Luncheon.
            </p>
            <Button 
              onClick={handleReservation}
              className="bg-amber-100/80 hover:bg-amber-100 text-amber-900 px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Reserve Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-100/20 backdrop-blur-sm text-amber-50 py-16 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-6">The Prestige Luncheon</h4>
            <p className="text-lg mb-8">An elegant celebration of growth and success</p>
            <p className="text-amber-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Where young minds gather to celebrate achievements, share inspiration, and forge meaningful connections. 
              Join us as we honor the journey of personal growth and collective success in an atmosphere of elegance and sophistication.
            </p>
            <p className="text-xl font-light italic">Together we rise, together we celebrate</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
