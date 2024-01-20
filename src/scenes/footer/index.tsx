import Logo from "@/assets/physioconcept-logo_dark.png";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Als führende Praxis für moderne Physiotherapie in Nürnberg unterstützen wir dich durch maßgeschneiderte Therapiekonzepte Lebensqualität wiederzugewinnen oder zu steigern. Du findest uns am Ludwigsplatz 1 (Weißer Turm) im Herzen der Nürnberger Innenstadt.
          </p>
          <p>© Daniel Malkov All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">ADRESSE</h4>
          <p className="my-5">physioconcept | Praxis für moderne Physiotherapie</p>
          <p className="my-5">Ludwigsplatz 1
          </p>
          <p>90403 Nürnberg
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Kontakt Uns</h4>
          <p className="my-5">TERMINE UNTER</p>
          <p>Telefon 0911 9503 6000</p>
          <p>WhatsApp 01525 900 3491</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
