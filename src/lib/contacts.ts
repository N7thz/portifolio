import { Contact } from "@/@types"

import { Github, Linkedin, Mail, Phone } from "lucide-react"

export const contacts: Contact[] = [

    {
        id: 1,
        description: "github",
        Icon: Github,
        link: "https://github.com/N7thz"
    },
    {
        id: 2,
        description: "linkedin",
        Icon: Linkedin,
        link: "https://www.linkedin.com/in/nathan-ferreira-b74ab528b/"
    },
    {
        id: 3,
        description: "nathanferreiradev@gmail.com",
        Icon: Mail,
    },
    {
        id: 4,
        description: "(21) 99839-4721",
        Icon: Phone,
        link: "https://api.whatsapp.com/qr/KMONEPTYSBIYM1?autoload=1&app_absent=0"
    },
]