
import ResponsiveSidebar from "@/components/ResponsiveSidebar";
import Sidebar from "@/components/Sidebar";
import MembersProfile from "@/components/MembersProfile";

export default function Members() {
    return (
        <div className="h-screen bg-[#0B131E]">
            <div className="block h-screen md:hidden">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col gap-4 font-serif mt-6">
                        <span className="text-2xl font-bold text-center md:text-justify md:text-4xl">MEET THE MEMBERS</span>
                        <MembersProfile />
                    </div>
                </div>
                <ResponsiveSidebar />
            </div>
            <div className="hidden h-screen md:flex">
                <Sidebar />
                <div className="my-8 mr-12 w-full">
                    <div className="w-full flex flex-col gap-12">
                        <div className="flex flex-col gap-2 font-serif mt-8 w-full justify-center">
                            <span className="text-4xl font-bold text-justify">MEET THE MEMBERS</span>
                        </div>
                        <MembersProfile />
                    </div>
                </div>

            </div>
        </div>
    )
}