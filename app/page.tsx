import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AchterZitSectie from "@/components/AchterZitSectie";
import VraagSectie from "@/components/VraagSectie";
import JourneySectie from "@/components/JourneySectie";
import VerhalenSectie from "@/components/VerhalenSectie";
import SitSectie from "@/components/SitSectie";
import ProfessionalsSectie from "@/components/ProfessionalsSectie";
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
        <AchterZitSectie />
        <VraagSectie />
        <JourneySectie />
        <VerhalenSectie />
        <SitSectie />
        <ProfessionalsSectie />
        <CtaSectie />
        <KlantenCarrousel />
        <ContactSectie />
      </main>
      <Footer />
    </>
  );
}
