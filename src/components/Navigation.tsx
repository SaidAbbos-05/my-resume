
interface NavItem {
    id: string;
    label: string;
    icon: React.ComponentType<any>;
}


interface NavigationProps {
    navItems: NavItem[];
    activeSection: string;
    setActiveSection: (id: string) => void;
}


function Navigation({ navItems, activeSection, setActiveSection }: NavigationProps) {

    return (
        <nav className="hidden md:flex fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 flex-col space-y-3">
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.id} className="relative group">
                        <button
                            onClick={() => setActiveSection(item.id)}
                            className={`p-4 lg:p-4 rounded-xl transition-all duration-300 ${activeSection === item.id
                                ? 'bg-linear-to-t from-cyan-800 to-blue-950 shadow-lg shadow-cyan-500/50'
                                : 'bg-linear-to-b from-gray-500 to-red-50 hover:border-blue-800 border border-transparent hover:shadow-md hover:shadow-blue-500/30'
                                }`}
                        >
                            <Icon className="w-5 h-6 lg:w-6 lg:h-6 hover:text-blue-800" />
                        </button>
                        {/* Tooltip */}
                        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500 whitespace-nowrap shadow-lg">
                                {item.label}
                            </div>
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}

export default Navigation;