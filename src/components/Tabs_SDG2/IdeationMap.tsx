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
                In today&apos;s modern era, obtaining legal assistance promptly and efficiently is crucial, yet for many, navigating the intricacies of legal processes and finding reputable lawyers can be overwhelming. This is where Lawfully steps in - a user-friendly website/application meticulously crafted to streamline the journey of seeking legal advice, scheduling appointments with skilled attorneys, and managing law firms and individual lawyers effortlessly.
            </AccordionTab>
            <AccordionTab
                header="Background"
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
                Inspired by the challenges faced by our elderly ones who may struggle with technology, we're driven by a profound desire to create a more inclusive world. Through our platform, Lawfully, we aim to extend a helping hand to those who may lack technical proficiency, ensuring that everyone can access legal services effortlessly. By prioritizing user-friendly design and intuitive features, we're not only catering to the needs of the tech-savvy but also providing invaluable support to the older generation, fostering inclusivity and empowerment in an increasingly digital society.
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
                <img src="/brainwriting_2.png" alt="BrainWriting Preview" />
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
                <img src="/fishbone_2.png" alt="BrainWriting Preview" />
                <span className="font-bold">Fishbone</span> is another method of brainstorming in which we write down the cause and effects of the problem. The problem is stated on the upper bone part of the fish, whereas the bottom part of the fish represents the causes.
            </AccordionTab>
        </Accordion>
    )
}