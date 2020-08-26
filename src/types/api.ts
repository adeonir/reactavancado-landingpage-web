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

export type ConceptItem = {
  title: string
}

export type ConceptsProps = {
  title: string
  concepts: ConceptItem[]
}

export type ModuleItem = {
  title: string
  subtitle: string
  description: string
}

export type ModulesProps = {
  title: string
  modules: ModuleItem[]
}

export type AgendaProps = {
  title: string
  description: string
}

export type BenefitItem = {
  title: string
}

export type PricingBoxProps = {
  totalPrice: number
  installmentsNumber: number
  installmentPrice: number
  benefits: BenefitItem[]
  button: {
    text: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type AboutUsProps = {
  title: string
  authors: Author[]
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
