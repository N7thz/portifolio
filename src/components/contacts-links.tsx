import { contacts } from "@/lib/contacts"
import { ContactCard } from "./contatc-card"
import { Animation } from "./animation"
import Link from "next/link"

export const ContactsLinks = () => {

    return (

        <div className="justify-around flex">
            {contacts.map((contact, index) => {

                const { description, Icon, id, link } = contact

                return <Animation
                    key={id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                    {link ?
                        <Link
                            href={link}
                            legacyBehavior
                        >
                            <a
                                target="_blank"
                            >
                                < ContactCard
                                    description={description}
                                >
                                    <Icon size={42} />
                                </ContactCard>
                            </a>
                        </Link> :
                        < ContactCard
                            description={description}
                        >
                            <Icon size={42} />
                        </ContactCard>
                    }
                </Animation>
            })}
        </div>
    )
}
