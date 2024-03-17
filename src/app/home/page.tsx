import HomeIllus from "@/components/IllusHome";
import NewsHeadlines from "@/components/NewsHeadlines";
import ResponsiveSidebar from "@/components/ResponsiveSidebar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="h-screen bg-[#0B131E]">
            <div className="block h-screen md:hidden">
                <div className="flex flex-col w-full">
                    <div className="m-6 md:m-0">
                        <div className="flex flex-col gap-8 font-serif ">
                            <div className="overflow-clip"><HomeIllus /></div>
                            <span className="text-md font-bold text-center md:text-justify md:text-4xl">PROMOTING JUSTICE AND WELL-BEING THROUGH TECHNOLOGY</span>
                            <span className="text-sm text-justify leading-loose md:text-xl">Explore innovative solutions that bridge the gap between technology and positive social impact, focusing on empowering individuals and fostering a more just and healthy society. Join us on a journey towards a future where technology becomes a force for justice, equality, and overall well-being.</span>
                            <div className="hidden md:border-b" />
                        </div>
                        <NewsHeadlines />
                    </div>
                </div>
                <ResponsiveSidebar />
            </div>
            <div className="hidden h-screen md:flex">
                <Sidebar />
                <div className="my-8 mr-12 w-full">
                    <div className="flex flex-col ">
                        <div className="w-full flex gap-12">
                            <div className="flex flex-col gap-8 font-serif mt-8 w-2/3">
                                <span className="text-4xl font-bold text-justify">PROMOTING JUSTICE AND WELL-BEING THROUGH TECHNOLOGY</span>
                                <span className="text-xl text-justify leading-loose">Explore innovative solutions that bridge the gap between technology and positive social impact, focusing on empowering individuals and fostering a more just and healthy society. Join us on a journey towards a future where technology becomes a force for justice, equality, and overall well-being.</span>
                                <div className="border-b" />
                            </div>
                            <div className="w-1/3">
                                <HomeIllus />
                            </div>
                        </div>
                        <NewsHeadlines />
                    </div>
                </div>

            </div>
        </div>
    )
}