import Link from "next/link";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function Results() {
    return (
        <Accordion
            pt={{
                root: {
                    className: 'grid grid-cols-1 md:grid-cols-2 w-full gap-6 pb-6'
                }
            }}
        >
            <AccordionTab
                header="Impact and Results"
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
                Through the reviews of other users, we are able to determine that what we lack on our prototype is features and also the <span className="font-bold">server side</span> to our website. It was clear that the reviews were true and as such, we are now working on adding the server side to our website and also improving our <span className="font-bold">UI/UX</span>. Furthermore, we lacked how it would create <span className="font-bold">monetization</span>. In the future, we hope to further improve our website through critiques and noteworthy reviews.
            </AccordionTab>
            <AccordionTab
                header="Conclusion"
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
                        className: 'mx-6 font-serif leading-loose'
                    }
                }}
            >
                <p>Click <Link href='https://miro.com/app/board/uXjVNrFIIXU=/' className="text-blue-500 underline hover:text-blue-700">here</Link> to view our Figma for the Overall Layout of our Website.</p>
                <p>Click <Link href='https://www.figma.com/file/PCRRGJzfynEoWanosOOo5p/Clinically?type=design&node-id=0-1&mode=design&t=9YHT6SCyz1r7YFa9-0' className="text-blue-500 underline hover:text-blue-700">here</Link> to view our Miro for the Overall Layout of the SDG.</p>
            </AccordionTab>
        </Accordion>
    )
}