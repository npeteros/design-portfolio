import CaseStudy from "@/components/Tabs_SDG1/CaseStudy";
import ResponsiveSidebar from "@/components/ResponsiveSidebar";
import Sidebar from "@/components/Sidebar";


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
                        <CaseStudy />
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
                        <CaseStudy />
                    </div>
                </div>

            </div>
        </div>
    )
}