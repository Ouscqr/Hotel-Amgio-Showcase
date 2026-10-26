
import { Link } from "react-router-dom";
import {Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { contact } = siteConfig;
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4">{siteConfig.name}</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  {contact.address.street}<br />
                  {contact.address.cityLine}<br />
                  {contact.address.country}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="text-muted-foreground hover:text-primary hover:underline transition-all duration-200 cursor-pointer"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-muted-foreground hover:text-primary hover:underline transition-all duration-200"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
