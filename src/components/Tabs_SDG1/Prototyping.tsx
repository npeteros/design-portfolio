import { Accordion, AccordionTab } from "primereact/accordion";

export default function Prototyping() {
    return (
        <Accordion
            pt={{
                root: {
                    className: 'grid grid-cols-1 md:grid-cols-2 w-full gap-6 pb-6'
                }
            }}
        >
            <AccordionTab
                header="Low-Fidelity Prototype"
                pt={{
                    header: {
                        className: "bg-[#202B3B] py-4 px-2 rounded-tr-md rounded-tl-md"
                    },
                    headerAction: {
                        className: "mx-4 font-bold gap-2 font-serif"
                    },
                    toggleableContent: {
                        className: 'bg-neutral-900 rounded-br-md rounded-bl-md py-2'
                    },
                    content: {
                        className: 'mx-6 font-serif indent-8 leading-loose'
                    }
                }}
            >
                <img src="/lowfi_1.png" alt="BrainWriting Preview" />
                With our <span className="font-bold">low-fidelity prototype</span>, we noticed that although this isn&apos;t complete, It still lacked a few features that we should&apos;ve thought of such as the location to the nearest hospital so that a person would be able to choose should he/she can choose from that list of doctors and if ever if he/she is in a dire situation that they need to go to a hospital, they would easily find one.
            </AccordionTab>
            <AccordionTab
                header="High-Fidelity Prototype"
                pt={{
                    header: {
                        className: "bg-[#202B3B] py-4 px-2 rounded-tr-md rounded-tl-md"
                    },
                    headerAction: {
                        className: "mx-4 font-bold gap-2 font-serif"
                    },
                    toggleableContent: {
                        className: 'bg-neutral-900 rounded-br-md rounded-bl-md py-2'
                    },
                    content: {
                        className: 'mx-6 font-serif indent-8 leading-loose'
                    }
                }}
            >
                <img src="/hifi_1.png" alt="BrainWriting Preview" />
                With our <span className="font-bold">high-fidelity prototype</span>, we are still lacking in the reviews of other people therefore we are going on a basis of what we think would have a user-friendly atmosphere.
            </AccordionTab>
        </Accordion>
    )
}