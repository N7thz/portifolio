import { Locale } from "@/i18n-config"
import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction, ReactNode, ComponentProps } from "react"
import {
	AnimationControls, Target, TargetAndTransition, Transition, VariantLabels
} from "framer-motion"
import { LucideIcon } from "lucide-react"

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
	highlihgt: string
	other: string
	go_to_code: string
	or: string
	form: Form
}

export interface Form {
	enter_contact: string
	description: string
	subject: string
	subject_placeholder: string
	message: string
	message_placeholder: string
	button_text: string
	input_subject: string
	input_message: string
	toaster_sucess_title: string
	toaster_sucess_message: string
	toaster_error_title: string
	toaster_error_message: string
}

export interface Dictionary {
	header: HeaderProps
	main: MainProps
}

export interface ProjectDescription {

	description: string
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
		highlihgt: string
		other: string
		go_to_code: string
		or: string
		form: Form
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
	other: string
	highlihgt: string
	go_to_code: string
}

export interface ProjectLang {

	pt: Project[]
	en: Project[]
}

export interface Project {

	id: number
	title: string
	description: string
	cover: StaticImageData
	video: string
	technologies: string[]
	repository: string
}

export interface LangContextProps {

	lang: Locale
	setLang: Dispatch<SetStateAction<Locale>>
}

export interface TypeProjectsProps {
	title: string
	go_to_code: string
}

export interface AnimationProps extends ComponentProps<"div"> {
	children: ReactNode
	initial?: boolean | Target | VariantLabels
	whileInView?: VariantLabels | TargetAndTransition
	exit?: TargetAndTransition | VariantLabels
	transition?: Transition
	animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}

export interface ProjectsItemProps {
	project: Project
}

export interface WindowProjectProps {

	children: ReactNode
	project: Project
	go_to_code: string
}

export interface ContactsProps {
	contact: string
	or: string
	form: Form
}

export interface Contact {
	id: number,
	description: string
	Icon: LucideIcon
	link?: string
}

export interface ContactCardProps {
	children: ReactNode
	description: string
}

export interface FormProps {

	form: Form
}

export interface ReqProps {
	subject: string
	message: string
}