export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  text: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: {
    alternativeText: string
    url: string
  }
}

export type AboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

type TechIcon = {
  name: string
  icon: {
    url: string
  }
}

export type TechProps = {
  title: string
  icons: TechIcon[]
}

type ConceptItems = {
  title: string
}

export type ConceptsProps = {
  title: string
  concepts: ConceptItems[]
}

type ModuleItems = {
  title: string
  subtitle: string
  description: string
}

export type ModulesProps = {
  title: string
  modules: ModuleItems[]
}

export type AgendaProps = {
  title: string
  description: string
}

type BenefitsItems = {
  title: string
}

export type PricingBoxProps = {
  totalPrice: number
  installmentsNumber: number
  installmentPrice: number
  benefits: BenefitsItems[]
  button: {
    text: string
    url: string
  }
}

export type SocialLinks = {
  title: string
  url: string
}

export type AuthorsProps = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  socialLinks: SocialLinks[]
  description: string
}

export type AboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
  sectionModules: ModulesProps
  sectionAgenda: AgendaProps
  sectionPricingBox: PricingBoxProps
  sectionAboutUs: AboutUsProps
}
