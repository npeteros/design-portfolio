import LandingIllus from '@/components/IllusLanding';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="h-screen bg-[#0B131E] flex flex-col md:flex-row items-center">
            <div className="mx-12 my-12 md:my-0 bg-[#202B3B] w-2/3 px-8 md:px-0 md:w-2/5 md:h-5/6 rounded-xl flex items-center justify-center">
                <LandingIllus />
            </div>
            <div className='w-3/5 flex flex-col gap-4 md:gap-12 justify-center items-center font-serif'>
                <div className='flex flex-col gap-2 md:gap-6 justify-center items-center'>
                    <span className="text-4xl md:text-6xl font-bold">Techfully</span>
                    <span className="text-[#828992] text-xl text-center md:text-left">Promoting Justice and Well-being through Technology</span>
                </div>
                <Link
                    href={'/home'}
                >
                    <button className="bg-white text-[#0B131E] rounded-full px-8 py-2 hover:bg-neutral-300">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
}
