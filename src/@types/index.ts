import { Locale } from "@/i18n-config"
import { StaticImageData } from "next/image"

export interface Params {
	params: {
		lang: Locale
	}
}

export interface DictionaryRequest {
	header: Header
	main: Main
}

interface Header {
	about: string
	projects: string
	contact: string
	technologies: string
}

interface Main {
	message_animation: string
	summary: string
	aboutText: string
}

export interface Dictionary {
	header: HeaderProps
	main: MainProps
}

export interface HeaderProps {
	header: {
		about: string
		projects: string
		contact: string
		technologies: string
	}
}

export interface MainProps extends HeaderProps {
	main: {
		message_animation: string
		summary: string
		aboutText: string
	}
}

export interface TopicProps {
	topic: string
}

export interface CardHomeProps {
	message_animation: string
	summary: string
}

export interface TecnologiesProps {
	technologies: string
}

export interface AboutProps {
    about: string
    aboutText: string
}

export interface Technology {
    id: number
    name: string
    image: StaticImageData
}

export interface TecnologyCardProps {
    tec: Technology
}

export interface ProjectsProps {
    projects: string
}

export interface Project {

	id: number
	title: string
	description: string
	cover: StaticImageData
	video: string
	technologies: Technology[]
	repository: string
}
