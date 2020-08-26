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

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
}
