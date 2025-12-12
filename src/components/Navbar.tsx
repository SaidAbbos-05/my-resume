

function Navbar () {
    return (
        <nav className="w-full h-16 bg-white/10 shadow-md flex m-0 p-0">
            <ul className="w-full h-fit flex flex-row justify-center items-center gap-8 p-4 text-lg font-medium">
                <li className="hover:text-blue-500 cursor-pointer">Home</li>
                <li className="hover:text-blue-500 cursor-pointer">About</li>
                <li className="hover:text-blue-500 cursor-pointer">Projects</li>
                <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;