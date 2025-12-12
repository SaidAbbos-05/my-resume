import { Github, Gitlab, LinkedinIcon, Eye } from 'lucide-react';
import resume from "../assets/Said-resume.pdf";


function FloatingActions() {

    return <div>
        {/* Floating Action Buttons - Bottom Right */}
        <div className='fixed bottom-15 right-15 z-50'>
            {/* 1. GitHub Tugmachasi */}
            <div
                className='group bg-linear-to-tl mb-2 from-black-900 to-blue-500 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center'
                onClick={() => window.open('https://github.com/SaidAbbos-05', '_blank')}
            >
                <Github className='w-6 h-6 ' />
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                        Github
                    </div>
                </div>
            </div>

            {/* 2. Gitlab Tugmachasi */}
            <div
                className='group bg-linear-to-tl mb-2 from-red-900 to-red-50 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center'
                onClick={() => window.open('https://gitlabdev.sud.uz/saidabbosxon', '_blank')}
            >
                <Gitlab className='w-6 h-6 ' />
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                        Gitlab
                    </div>
                </div>
            </div>

            {/* 3. LinkedIn Tugmachasi */}
            <div
                onClick={() => window.open('https://www.linkedin.com/in/%D1%81%D0%B0%D0%B8%D0%B4%D0%B0%D0%B1%D0%B1%D0%BE%D1%81-undefined-067a5528b/', '_blank')}
                className='group bg-linear-to-tl mb-2 bg-blue-400 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center'
            >
                <LinkedinIcon className='w-6 h-6' />
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                        Linkedln
                    </div>
                </div>
            </div>

            {/* 4. Resume/SV Tugmachasi */}
            <div
                onClick={() => window.open(resume, '_blank')} // Aslida bu onclick tashqi divda edi, endi bitta tugmachaga o'tkazildi
                className='group bg-linear-to-tl mb-2 from-cyan-900 to-blue-500 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center'
            >
                <Eye className='w-6 h-6 ' />
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                        See SV
                    </div>
                </div>
            </div>

            {/* 5. Telegram Tugmachasi */}
            <div
                onClick={() => window.open("https://t.me/Saidabbos_Alisherov", '_blank')} // Aslida bu onclick tashqi divda edi, endi bitta tugmachaga o'tkazildi
                className='group mb-2  rounded-full shadow-lg cursor-pointer flex items-center justify-center'
            >
                <img className='w-13 h-13' src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png" alt="telegram" />
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                        Telegram
                    </div>
                </div>
            </div>

            {/* 6. Instagram Tugmachasi */}
            <div
                onClick={() => window.open("https://www.instagram.com/said_abbos_/", '_blank')} // Aslida bu onclick tashqi divda edi, endi bitta tugmachaga o'tkazildi
                className='group   rounded-full shadow-lg cursor-pointer flex items-center justify-center'
            >
                <img className='w-13.5 h-13.5' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="telegram" />
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                        Instagram
                    </div>
                </div>
            </div>


        </div>        </div>;

}

export default FloatingActions;