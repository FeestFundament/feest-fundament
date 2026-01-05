import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users } from "lucide-react";

const OverOns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-secondary mb-4 text-center">
          Over ons
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Het fundament voor een geslaagd feest!
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-4">Wie zijn wij?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Feest-Fundament is uw betrouwbare partner voor de verhuur van professionele feestartikelen. 
                Met een frisse blik in de eventsector bieden wij een breed assortiment aan hoogwaardige 
                producten voor elk type evenement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Of u nu een familiefeest, een groots bedrijfsevenement of een bruisend festival 
                organiseert, wij zorgen ervoor dat u beschikt over de juiste materialen om uw evenement 
                tot een succes te maken.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">Waarom Feest-Fundament?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Hoogwaardige professionele apparatuur",
                  "Flexibele verhuurperiodes",
                  "Scherpe prijzen zonder verborgen kosten",
                  "Snelle levering en ophaalservice",
                  "Persoonlijk advies en begeleiding",
                  "Ruim assortiment voor elk evenement"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-4">Ons aanbod</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ons uitgebreide assortiment omvat onder andere statafels, biertafels, bars, verlichting, 
                partytenten, geluidsapparatuur en nog veel meer. Al onze producten worden regelmatig 
                onderhouden en gecontroleerd om de hoogste kwaliteit te garanderen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold text-secondary">Onze feestbeesten</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Mick Ceylan",
                    role: "Oprichter & Manager sociale media",
                    description: " Mick is onze social media wizard. Met creativiteit, humor en een feilloos gevoel voor trends brengt hij ons merk tot leven op elk platform. Als oprichter stond hij aan de wieg van het idee en weet hij precies hoe je online buzz creëert én vasthoudt. Scroll-stopping content? Mick territory."
                  },
                  {
                    name: "Kasper Gras",
                    role: "Oprichter & Manager sales",
                    description: " Kasper is een echt feestbeest. Met aanstekelijk enthousiasme en een scherp commercieel inzicht ziet hij kansen waar anderen ze missen. Als oprichter weet hij dromen om te zetten in groei en sterke samenwerkingen. Energie, ambitie en resultaat: dat is Kasper."
                  },
                  {
                    name: "Floris van Emmerik",
                    role: "Oprichter & Manager HR",
                    description: "Floris is de sfeerbewaker en teambuilder van het bedrijf. Als manager HR zorgt hij voor een fijne cultuur waarin iedereen kan groeien en stralen. Als oprichter gelooft hij dat succes begint bij mensen — en die visie voel je elke dag op de werkvloer. "
                  }
                ].map((person, index) => (
                  <Card key={index} className="bg-background border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{person.name}</h3>
                      <p className="text-secondary font-semibold mb-3">{person.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{person.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OverOns;
