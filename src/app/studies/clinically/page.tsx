import HomeIllus from "@/components/IllusHome";
import NewsHeadlines from "@/components/NewsHeadlines";
import ResponsiveSidebar from "@/components/ResponsiveSidebar";
import Sidebar from "@/components/Sidebar";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function Clinically() {
    return (
        <div className="h-screen bg-[#0B131E] overflow-y-scroll">
            <div className="block h-screen md:hidden">
                <div className="flex flex-col w-full">
                    <div className="m-6 md:m-0">
                        <div className="flex flex-col gap-8 font-serif ">
                            <img src="/clinically.png" alt="" />
                            <span className="text-md font-bold text-center md:text-justify md:text-4xl">CLINICALLY</span>
                            <span className="text-sm text-justify leading-loose md:text-xl">Clinically providing exceptional healthcare services and ensuring a seamless experience for our patients. The platform leverages technology to enhance healthcare accessibility, focusing on remote care solutions to improve the overall health and wellness of individuals.</span>
                        </div>
                    </div>
                    <div className="m-6 md:m-0 overflow-y-scroll pb-12">
                        <div className="w-full flex gap-12">
                            <Accordion
                                activeIndex={0}
                                pt={{
                                    root: {
                                        className: 'grid grid-cols-1 w-full gap-6 pb-6'
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
                        </div>
                    </div>
                </div>
                <ResponsiveSidebar />
            </div>
            <div className="hidden h-screen md:flex">
                <Sidebar />
                <div className="my-8 mr-12 w-full">
                    <div className="flex flex-col gap-6">
                        <div className="w-full flex gap-12">
                            <div className="flex flex-col gap-8 font-serif mt-8 w-2/3">
                                <span className="text-3xl font-bold text-justify">CLINICALLY</span>
                                <span className="text-lg text-justify leading-loose">Clinically providing exceptional healthcare services and ensuring a seamless experience for our patients. The platform leverages technology to enhance healthcare accessibility, focusing on remote care solutions to improve the overall health and wellness of individuals.</span>
                            </div>
                            <div className="w-1/3 h-full border rounded-2xl p-6">
                                <img src="/clinically.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full flex gap-12">
                            <Accordion
                                activeIndex={0}
                                pt={{
                                    root: {
                                        className: 'grid grid-cols-2 w-full gap-6 pb-6'
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}