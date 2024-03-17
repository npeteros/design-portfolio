import { Accordion, AccordionTab } from "primereact/accordion";

export default function IdeationMap() {
    return (
        <Accordion
            pt={{
                root: {
                    className: 'grid grid-cols-1 md:grid-cols-2 w-full gap-6 pb-6'
                }
            }}
        >
            <AccordionTab
                header="Problems Addressed"
                pt={{
                    header: {
                        className: "bg-neutral-600 py-4 px-2 rounded-tr-md rounded-tl-md"
                    },
                    headerAction: {
                        className: "mx-4 font-bold gap-2 font-serif"
                    },
                    toggleableContent: {
                        className: 'bg-neutral-800 rounded-br-md rounded-bl-md py-2'
                    },
                    content: {
                        className: 'mx-6 font-serif indent-8 leading-loose'
                    }
                }}
            >
                Following the emergence of the new normal, the world drastically changed in terms of standard routines in business, personal lives, work, and other similar factors. As such, with the aim to adapt to the ever-changing technological tools of the modern 21st century, it is important to integrate technology into society&apos;s standard routines to improve and increase work efficiency and productivity. The design project is aimed to implement reliable and modern technology in the fields of health and law to address problems and challenges that arise in areas with limited access to their traditional services.
            </AccordionTab>
            <AccordionTab
                header="Involved Stakeholders"
                pt={{
                    header: {
                        className: "bg-neutral-600 py-4 px-2 rounded-tr-md rounded-tl-md"
                    },
                    headerAction: {
                        className: "mx-4 font-bold gap-2 font-serif"
                    },
                    toggleableContent: {
                        className: 'bg-neutral-800 rounded-br-md rounded-bl-md py-2'
                    },
                    content: {
                        className: 'mx-6 font-serif'
                    }
                }}
            >
                <ol className="list-inside list-decimal flex flex-col gap-4">
                    <li><span className="font-bold">Healthcare Organization</span>
                        - Responsible for spearheading the development process of the application and in identifying the needs for an improved healthcare system.
                    </li>
                    <li><span className="font-bold">Patients</span>
                        - The end-users of the application whose needs and preferences help shape the design and functionality of the application.
                    </li>
                    <li><span className="font-bold">Healthcare Professionals</span>
                        - Responsible for developing care and providing services through the application while also providing valuable insights into the challenges faced in remote healthcare services.
                    </li>
                    <li><span className="font-bold">IT Professionals</span>
                        - Responsible for the continuous maintenance and development of the application, ensuring maximum functionality, security, and stability.
                    </li>
                </ol>
            </AccordionTab>
            <AccordionTab
                header="Ideation: BrainWriting"
                pt={{
                    header: {
                        className: "bg-neutral-600 py-4 px-2 rounded-tr-md rounded-tl-md"
                    },
                    headerAction: {
                        className: "mx-4 font-bold gap-2 font-serif"
                    },
                    toggleableContent: {
                        className: 'bg-neutral-800 rounded-br-md rounded-bl-md py-2'
                    },
                    content: {
                        className: 'mx-6 font-serif indent-8'
                    }
                }}
            >
                <img src="/brainwriting.png" alt="BrainWriting Preview" />
                <span className="font-bold">BrainWriting</span> is a method of brainstorming in which we collect different ideas of people anonymously and slowly select the idea/ideas that we find would be the most idealistic method to solve the problem.
            </AccordionTab>
            <AccordionTab
                header="Ideation: Fishbone"
                pt={{
                    header: {
                        className: "bg-neutral-600 py-4 px-2 rounded-tr-md rounded-tl-md"
                    },
                    headerAction: {
                        className: "mx-4 font-bold gap-2 font-serif"
                    },
                    toggleableContent: {
                        className: 'bg-neutral-800 rounded-br-md rounded-bl-md py-2'
                    },
                    content: {
                        className: 'mx-6 font-serif indent-8'
                    }
                }}
            >
                <img src="/fishbone.png" alt="BrainWriting Preview" />
                <span className="font-bold">Fishbone</span> is another method of brainstorming in which we write down the cause and effects of the problem. The problem is stated on the upper bone part of the fish, whereas the bottom part of the fish represents the causes.
            </AccordionTab>
        </Accordion>
    )
}