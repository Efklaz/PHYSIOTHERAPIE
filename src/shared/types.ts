export enum SelectedPage {
  Home = "physiotherapie",
  Benefits = "leistungen",
  OurClasses = "bilder",
  OurTeam = "team",
  ContactUs = "kontaktuns",
  BenefitsPromo = "leistungen-promo",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
