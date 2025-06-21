
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Mic, GameController2, Award } from "lucide-react";
import ImageSlideshow from "@/components/ImageSlideshow";

const Index = () => {
  const handleReservation = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSffIs14p3geSTaMLgvouHngy55l2mTST5RGzzm55cdOejFuxg/viewform?usp=sharing&ouid=110678490747529455416", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/92e473ab-8288-47eb-9c1a-8156764e0bc5.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-light tracking-widest mb-4 animate-fade-in opacity-90">
            You Are Invited
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-900 mb-12">
            An Elegant Social Experience
          </h2>
          
          {/* Placeholder for Images Slideshow */}
          <div className="mb-16">
            <ImageSlideshow />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 text-center mb-16">
            What to Expect
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="text-xl font-serif font-bold text-amber-900 mb-4">Motivational Talks</h4>
                <p className="text-stone-600 leading-relaxed">
                  Inspiring speakers sharing wisdom and experiences to motivate your journey ahead.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="text-xl font-serif font-bold text-amber-900 mb-4">Poetry Sessions</h4>
                <p className="text-stone-600 leading-relaxed">
                  Beautiful poetry performances and open mic opportunities for creative expression.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GameController2 className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="text-xl font-serif font-bold text-amber-900 mb-4">Interactive Games</h4>
                <p className="text-stone-600 leading-relaxed">
                  Fun activities and games to build connections and create lasting memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 text-center mb-16">
            Dress Code
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-serif font-bold text-amber-900 mb-6">Women</h4>
              <p className="text-lg text-stone-600 mb-8">Spring formal solid pastels</p>
              <div className="bg-stone-100 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                <p className="text-stone-500 italic">Women's dress code slideshow will appear here</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl font-serif font-bold text-amber-900 mb-6">Men</h4>
              <p className="text-lg text-stone-600 mb-8">Spring formal neutral earth tones</p>
              <div className="bg-stone-100 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                <p className="text-stone-500 italic">Men's dress code slideshow will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-amber-700 mr-3" />
                  <h4 className="text-xl font-serif font-bold text-amber-900">Date</h4>
                </div>
                <p className="text-lg text-stone-600">27 September 2025</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-amber-700 mr-3" />
                  <h4 className="text-xl font-serif font-bold text-amber-900">Time</h4>
                </div>
                <p className="text-lg text-stone-600">11am - 6pm</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-700 mr-3" />
                  <h4 className="text-xl font-serif font-bold text-amber-900">Location</h4>
                </div>
                <p className="text-lg text-stone-600">Sandton, Gauteng</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-amber-700 mr-3" />
                  <h4 className="text-xl font-serif font-bold text-amber-900">Fee</h4>
                </div>
                <p className="text-lg text-stone-600">R500 per person</p>
                <p className="text-sm text-stone-500 mt-2">Invite plus one for R500</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-100 to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8">
            Reserve Your Spot
          </h3>
          <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us for this elegant celebration. Please click the button below to secure your place at The Prestige Luncheon.
          </p>
          <Button 
            onClick={handleReservation}
            className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Reserve Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-16 px-4">
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
  );
};

export default Index;
