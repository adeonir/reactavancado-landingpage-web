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

export type Concept = {
  title: string
}

export type ConceptsProps = {
  title: string
  concepts: Concept[]
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type ModulesProps = {
  title: string
  modules: Module[]
}

export type AgendaProps = {
  title: string
  description: string
}

export type Benefit = {
  title: string
}

export type PricingBoxProps = {
  totalPrice: number
  installmentsNumber: number
  installmentPrice: number
  benefits: Benefit[]
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

export type Review = {
  photo: {
    url: string
  }
  name: string
  review: string
}

export type ReviewsProps = {
  title: string
  reviews: Review[]
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
  sectionReview: ReviewsProps
}
