import { Locale } from '@/i18n-config';

export interface Params {
	params: {
		lang: Locale
	}
}

export interface DictionaryRequest {
    header: Header;
    main: Main;
}

interface Header {
    about: string;
    projects: string;
    contact: string;
    technologies: string;
}

interface Main {
    message_animation: string;
    summary: string;
    aboutText: string;
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
