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
        <div className="absolute inset-0" style={{ backgroundColor: '#D5D0E1', opacity: 0.3 }}></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center animate-fade-in">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest mb-6 opacity-90" style={{ color: '#D5D0E1', fontFamily: 'Carrington, serif' }}>
              You Are Invited To:
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in-up underline" style={{ color: '#D5D0E1' }}>
              The Luncheon
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-delayed" style={{ color: '#F7F6EE' }}>
              An event to uplift and celebrate each other as we continue to embark on journeys to better ourselves as young adults.
            </p>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-px" style={{ backgroundColor: '#A5B49E' }}></div>

        {/* Elegant Social Experience Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-full mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 drop-shadow-lg" style={{ color: '#D5D0E1' }}>
              An Elegant Social Experience
            </h2>
            
            <div className="mb-16 w-full">
              <ImageSlideshow />
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-px" style={{ backgroundColor: '#A5B49E' }}></div>

        {/* Simplified What to Expect Section */}
        <section className="py-20 px-4 relative overflow-hidden animate-fade-in">
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <p className="text-2xl md:text-3xl leading-relaxed font-light" style={{ color: '#F7F6EE' }}>
              A vibrant gathering filled with food, drinks, interactive games, engaging conversations and just all round good vibes
            </p>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-px" style={{ backgroundColor: '#A5B49E' }}></div>

        {/* Dress Code Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-full mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 drop-shadow-lg" style={{ color: '#D5D0E1' }}>
              Dress Code
            </h3>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="text-center">
                <h4 className="text-2xl font-serif font-bold mb-6" style={{ color: '#D5D0E1' }}>Women</h4>
                <p className="text-lg mb-8" style={{ color: '#F7F6EE' }}>Spring formal solid pastels</p>
                <WomenDressCodeSlideshow />
              </div>
              
              {/* Bold separator line */}
              <div className="hidden md:block w-px mx-auto" style={{ backgroundColor: '#A5B49E', height: '100%' }}></div>
              <div className="md:hidden w-full h-px my-8" style={{ backgroundColor: '#A5B49E' }}></div>
              
              <div className="text-center">
                <h4 className="text-2xl font-serif font-bold mb-6" style={{ color: '#D5D0E1' }}>Men</h4>
                <p className="text-lg mb-8" style={{ color: '#F7F6EE' }}>Spring formal neutral earth tones</p>
                <MenDressCodeSlideshow />
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-px" style={{ backgroundColor: '#A5B49E' }}></div>

        {/* Event Details Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm border rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: 'rgba(165, 180, 158, 0.1)', borderColor: 'rgba(165, 180, 158, 0.2)' }}>
                <div className="flex items-center mb-6">
                  <Calendar className="w-8 h-8 mr-4" style={{ color: '#D5D0E1' }} />
                  <h4 className="text-2xl font-serif font-bold" style={{ color: '#F7F6EE' }}>Date</h4>
                </div>
                <p className="text-xl font-light" style={{ color: '#D5D0E1' }}>27 September 2025</p>
              </div>

              <div className="backdrop-blur-sm border rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: 'rgba(165, 180, 158, 0.1)', borderColor: 'rgba(165, 180, 158, 0.2)' }}>
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 mr-4" style={{ color: '#D5D0E1' }} />
                  <h4 className="text-2xl font-serif font-bold" style={{ color: '#F7F6EE' }}>Time</h4>
                </div>
                <p className="text-xl font-light" style={{ color: '#D5D0E1' }}>11am - 6pm</p>
              </div>

              <div className="backdrop-blur-sm border rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: 'rgba(165, 180, 158, 0.1)', borderColor: 'rgba(165, 180, 158, 0.2)' }}>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 mr-4" style={{ color: '#D5D0E1' }} />
                  <h4 className="text-2xl font-serif font-bold" style={{ color: '#F7F6EE' }}>Location</h4>
                </div>
                <p className="text-xl font-light" style={{ color: '#D5D0E1' }}>Safari Garden Center c/o Lynnwood Rd &, Rubida St, The Willows, Pretoria, 0040</p>
              </div>

              <div className="backdrop-blur-sm border rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: 'rgba(165, 180, 158, 0.1)', borderColor: 'rgba(165, 180, 158, 0.2)' }}>
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 mr-4" style={{ color: '#D5D0E1' }} />
                  <h4 className="text-2xl font-serif font-bold" style={{ color: '#F7F6EE' }}>Fee</h4>
                </div>
                <p className="text-xl font-light" style={{ color: '#D5D0E1' }}>R500 per person</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-px" style={{ backgroundColor: '#A5B49E' }}></div>

        {/* Reservation Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 drop-shadow-lg" style={{ color: '#D5D0E1' }}>
              Reserve Your Spot
            </h3>
            <p className="text-xl font-semibold mb-8" style={{ color: '#D5D0E1' }}>
              Spots are limited!!
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#F7F6EE' }}>
              Join us for this elegant celebration. Please click the button below to secure your place at The Luncheon.
            </p>
            <Button 
              onClick={handleReservation}
              className="px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: '#A5B49E', color: '#000000' }}
            >
              Reserve Now
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;
