export enum SelectedPage {
  Home = "physiotherapie",
  Benefits = "leistungen",
  OurClasses = "bilder",
  ContactUs = "kontaktuns",
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
