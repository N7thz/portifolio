import { DictionaryRequest } from "@/@types";

export const dictionary: DictionaryRequest = {
    header: {
        about: "about_me",
        projects: "projects",
        contact: "contact",
        technologies: "technologies"
    },
    main: {
        message_animation: "Hi, my name is Nathan and I'm a full-stack developer.",
        summary: "I'm a full-stack developer dedicated to creating complete solutions, from databases to user interfaces, with the aim of contributing positively to the digital future. I am always learning and seeking to solve technical problems in a creative. Ready to help with any project.",
        aboutText: "My journey in the programming field began just over a year ago, when I decided to dive head first into this fascinating universe. Since then, I have dedicated myself intensely to studying and improving the skills necessary to become a qualified professional.",
        highlihgt: "highlihgt projects",
        other: "others projects",
        go_to_code: "code of project",
        or: "or",
        form: {
            enter_contact: "get in touch",
            description: "send an email regarding professional contacts, feedback and etc.",
            subject: "subject:",
            subject_placeholder: "enter the contact subject...",
            message: "message",
            message_placeholder: "type your message...",
            button_text: "send",
            input_message: "the subject is required to send the email.",
            input_subject: "the message is required to send the email.",
        }
    },
}

export default dictionary
