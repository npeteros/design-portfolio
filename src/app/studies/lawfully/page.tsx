import CaseStudy from "@/components/Tabs_SDG2/CaseStudy";
import ResponsiveSidebar from "@/components/ResponsiveSidebar";
import Sidebar from "@/components/Sidebar";


export default function Lawfully() {

    return (
        <div className="h-screen bg-[#0B131E] overflow-y-scroll">
            <div className="block h-screen md:hidden">
                <div className="flex flex-col w-full">
                    <div className="m-6 md:m-0">
                        <div className="flex flex-col gap-8 font-serif ">
                            <img src="/clinically.png" alt="" />
                            <span className="text-md font-bold text-center md:text-justify md:text-4xl">LAWFULLY</span>
                            <span className="text-sm text-justify leading-loose md:text-xl">Lawfully offers accessible legal assistance, connecting users with resources, educational materials, and professionals to navigate legal challenges confidently. With its intuitive interface and commitment to inclusivity, the app aims to democratize access to justice and empower individuals to advocate for their legal rights effectively.</span>
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
                                <span className="text-3xl font-bold text-justify">LAWFULLY</span>
                                <span className="text-lg text-justify leading-loose">Lawfully offers accessible legal assistance, connecting users with resources, educational materials, and professionals to navigate legal challenges confidently. With its intuitive interface and commitment to inclusivity, the app aims to democratize access to justice and empower individuals to advocate for their legal rights effectively.</span>
                            </div>
                            <div className="w-1/3 h-full border rounded-2xl p-6">
                                <img src="/lawfully.png" alt="" />
                            </div>
                        </div>
                        <CaseStudy />
                    </div>
                </div>

            </div>
        </div>
    )
}