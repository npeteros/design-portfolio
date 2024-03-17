import AboutIllus from "@/components/IllusAbout";
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
                            <div className="overflow-clip"><AboutIllus /></div>
                            <span className="text-md font-bold text-center md:text-justify md:text-4xl">PROMOTING JUSTICE AND WELL-BEING THROUGH TECHNOLOGY</span>
                            <span className="text-sm text-justify leading-loose md:text-xl">Explore innovative solutions that bridge the gap between technology and positive social impact, focusing on empowering individuals and fostering a more just and healthy society. Join us on a journey towards a future where technology becomes a force for justice, equality, and overall well-being.</span>
                            <div className="border-b" />
                        </div>
                        <div className="h-full pb-16 md:pb-0 my-4">
                            <span className="text-xl font-bold font-serif">Sustainable Development Goals</span>
                            <div className="grid grid-cols-2 gap-4 h-full my-2">
                                <Link href='https://sdgs.un.org/goals/goal3' className="md:w-2/3 border-2 rounded-3xl">
                                    <img src="/sdg3.png" alt="SDG #3: Good Health and Well-Being" className="w-full rounded-3xl" />
                                </Link>
                                <Link href='https://sdgs.un.org/goals/goal16' className="md:w-2/3 border-2 rounded-3xl">
                                    <img src="/sdg16.png" alt="SDG #16: Peace, Justice and Strong Institutions" className="w-full rounded-3xl" />
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
                    <div className="flex flex-col">
                        <div className="w-full flex gap-12">
                            <div className="flex flex-col gap-8 font-serif mt-8 w-2/3">
                                <span className="text-4xl font-bold text-justify">UNITING FOR A SUSTAINABLE WORLD, ONE GOAL AT A TIME</span>
                                <span className="text-xl text-justify leading-loose">Dive into a world where collective action meets sustainable impact, as we shape a future that leaves no one behind. Explore each SDG and discover actionable insights, and innovative techy solutions that empower individuals and communities.</span>
                                <div className="border-b" />
                            </div>
                            <AboutIllus />
                        </div>
                        <div className="h-full pb-16 md:pb-0 w-2/3">
                            {/* <span className="text-xl font-bold font-serif">Sustainable Development Goals</span> */}
                            <div className="grid grid-cols-2 h-full my-2 place-items-center">
                                <Link href='https://sdgs.un.org/goals/goal3' className="w-2/3 border-2 rounded-3xl">
                                    <img src="/sdg3.png" alt="SDG #3: Good Health and Well-Being" className="w-full rounded-3xl" />
                                </Link>
                                <Link href='https://sdgs.un.org/goals/goal16' className="w-2/3 border-2 rounded-3xl">
                                    <img src="/sdg16.png" alt="SDG #16: Peace, Justice and Strong Institutions" className="w-full rounded-3xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}