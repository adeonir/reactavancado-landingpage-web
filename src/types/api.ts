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
  image: ImageProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
}
