import { contacts } from "@/lib/contacts"
import { ContactCard } from "./contatc-card"
import { Animation } from "./animation"
import Link from "next/link"

export const ContactsLinks = () => {

    return (

        <div
            className="justify-around grid grid-cols-4 max-lg:grid max-lg:grid-cols-2 max-lg:w-2/3 max-lg:m-auto max-lg:gap-12 max-md:w-10/12 max-sm:grid-cols-1"
        >
            {contacts.map((contact, index) => {

                const { description, Icon, id, link } = contact

                return <Animation
                    key={id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    className="w-full"
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
