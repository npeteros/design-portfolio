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
                <img src="/lowfi_2.png" alt="BrainWriting Preview" />
                With our <span className="font-bold">low-fidelity prototype</span>, we noticed that although this isn&apos;t complete, it still lacked a few features such as the location of the closest firm that has partnered up with Lawfully, an authorization/verification on a solo attorney. Our UI also needs a little work however, we have created at least the important features of our website.
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
                <img src="/hifi_2.png" alt="BrainWriting Preview" />
                With our <span className="font-bold">high-fidelity prototype</span>, due to the reviews of our colleagues, we worked on what we think is the optimal appearance of our website. Similar to the lo-fi prototype, we still lack certain features such as the authorization/verification however, we do believe that in terms of the appearance, we have made it clean and appealing to the users eyes.
            </AccordionTab>
        </Accordion>
    )
}