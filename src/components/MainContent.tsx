

interface MainContentProps {
    activeSection: string;
    isVisible: boolean;
    section: SectionItem;
}

interface SectionItem {
    icon: React.ComponentType<any>;
    title: string;
    content: React.ReactNode;
}


function MainContent({ activeSection, isVisible, section }: MainContentProps) {
    return (
        <div className="min-h-full flex flex-col justify-center mx-20 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {section.title}
                </h1>
                <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mb-6 sm:mb-8 rounded-full"></div>

                <div className="max-w-6xl">
                    {section.content}
                </div>
            </div>
        </div>
    );
}
export default MainContent;