import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import ApartmentCard from "@/components/ApartmentCard";
import BookingButton from "@/components/BookingButton";
import { featuredRooms } from "@/config/rooms";
import { siteConfig } from "@/config/site";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>
                {/* <Button asChild className="btn-primary">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600711269860-ff440f53ed42?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Amsterdam canals" 
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
  <div className="container relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
          {t.home.booking.subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
          {t.home.booking.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t.home.booking.description}
        </p>
        <ul className="space-y-3 mb-8">
          {t.home.booking.benefits.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
              <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center mr-3">
                <ArrowRight className="h-3 w-3" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
              
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredApartments.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.featuredApartments.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.featuredApartments.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRooms.map((apartment, index) => (
                <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={apartment} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">

              <BookingButton
                label={t.home.featuredApartments.viewAll}
                className="btn-primary"
              />
            </div>
            
          {/* Google Maps Section */}
          <section className="section">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.findUs.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {t.home.findUs.location}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.findUs.description}
                </p>
              </div>
              
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg animate-fade-in [animation-delay:200ms]">
                <iframe
                  src={siteConfig.contact.mapEmbedUrl}
                  title={t.home.findUs.location}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
            
            
          </div>

          
          
        </section>
        
        
      </main>
      
      <Footer />
    </div>
  );
}
