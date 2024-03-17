import StudiesIllus from "@/components/IllusStudies";
import ResponsiveSidebar from "@/components/ResponsiveSidebar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen bg-[#0B131E]">
            <div className="block h-screen md:hidden">
                <div className="flex flex-col w-full">
                    <div className="m-6 md:m-0">
                        <div className="flex flex-col gap-8 font-serif ">
                            <div className="overflow-clip"><StudiesIllus /></div>
                            <span className="text-md font-bold text-center md:text-justify md:text-4xl">PROMOTING JUSTICE AND WELL-BEING THROUGH TECHNOLOGY</span>
                            <span className="text-sm text-justify leading-loose md:text-xl">Explore innovative solutions that bridge the gap between technology and positive social impact, focusing on empowering individuals and fostering a more just and healthy society. Join us on a journey towards a future where technology becomes a force for justice, equality, and overall well-being.</span>
                            <div className="border-b" />
                        </div>
                        <div className="h-full pb-16 md:pb-0 my-4">
                            <div className="grid grid-cols-2 gap-4 h-full my-2">
                                <Link
                                    href='/studies/clinically'
                                    className="md:w-2/3 border-2 rounded-3xl border border-[#299B45] h-36"
                                >
                                    <div className="m-4 h-4/5">
                                        <div className="h-full flex flex-col justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-lg font-bold">Clinically</span>
                                                <span className="text-sm italic">Nurting Your Health</span>
                                            </div>
                                            <span className="text-xs italic">Click to see more</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    href='/studies/clinically'
                                    className="md:w-2/3 border-2 rounded-3xl border border-[#00548B] h-36"
                                >
                                    <div className="m-4 h-4/5">
                                        <div className="h-full flex flex-col justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-lg font-bold">Lawfully</span>
                                                <span className="text-sm italic">Protecting your legal rights</span>
                                            </div>
                                            <span className="text-xs italic">Click to see more</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ResponsiveSidebar />
            </div>
            <div className="hidden h-screen md:flex">
                <Sidebar />
                <div className="my-8 mr-12 w-full">
                    <div className="flex flex-col h-full">
                        <div className="w-full flex gap-12">
                            <div className="flex flex-col gap-8 font-serif mt-8 w-2/3">
                                <span className="text-4xl font-bold text-justify">UNVEILING IMPACT: CASE STUDIES</span>
                                <span className="text-xl text-justify leading-loose">These case studies delve into the heart of transformative initiatives, offering in-depth insights into the challenges faced, strategies employed, and the remarkable outcomes achieved. Dive into the stories that demonstrate the power of action, resilience, and collaboration, illustrating how small steps can lead to monumental change on the path towards a more sustainable and inclusive world.</span>
                                <div className="border-b" />
                            </div>
                            <StudiesIllus />
                        </div>
                        <div className="h-full w-full pb-16 md:pb-0 md:my-4 ">
                            <div className="grid grid-cols-2 gap-4 h-full my-2 w-2/3">
                                <Link
                                    href='/studies/clinically'
                                    className="h-full border border-[#299B45] flex flex-col justify-between hover:bg-[#299B45] hover:border-white hover:border-2 rounded-2xl font-serif "
                                >
                                    <div className="m-4 h-full flex flex-col justify-between gap-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-2xl font-bold">Clinically</span>
                                            <span className="text-lg">Providing exceptional remote healthcare services and ensuring a seamless experience for those in need of medical help.</span>
                                        </div>
                                        <span className="italic">Click to see more</span>
                                    </div>
                                </Link>
                                <Link
                                    href='/studies/lawfully'
                                    className="h-full border border-[#00548B] flex flex-col justify-between hover:bg-[#00548B] hover:border-white hover:border-2 rounded-2xl font-serif"
                                >
                                    <div className="m-4 h-full flex flex-col justify-between gap-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-2xl font-bold">Lawfully</span>
                                            <span className="text-lg">Explore a wealth of legal knowledge, navigate complexities with ease, and discover a community committed to your legal well-being.</span>
                                        </div>
                                        <span className="italic">Click to see more</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}