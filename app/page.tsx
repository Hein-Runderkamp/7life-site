import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WatWeDoenSectie from "@/components/WatWeDoenSectie";
import JourneySectie from "@/components/JourneySectie";
import VerhalenSectie from "@/components/VerhalenSectie";
import SpotlightSectie from "@/components/SpotlightSectie";
import CtaSectie from "@/components/CtaSectie";
import KlantenCarrousel from "@/components/KlantenCarrousel";
import ContactSectie from "@/components/ContactSectie";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WatWeDoenSectie />
        <JourneySectie />
        <VerhalenSectie />
        <SpotlightSectie />
        <KlantenCarrousel />
        <CtaSectie />
        <ContactSectie />
      </main>
      <Footer />
    </>
  );
}
