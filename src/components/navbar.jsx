const NavBar = () => {
    return (
        <div className="flex w-full justify-center items-center bg-[#052E49] py-2" style={{backgroundImage: 'url("header.png")', backgroundSize: "cover"}}>
            {/* Here you will write the Navbar code */}
            <div className="flex gap-3">
                <p className="text-white text-lg">✨REGISTER early to get early benifits</p>
                <div className="bg-[#FCDA86] text-[#052E49] px-3 py-1 rounded-md">
                    Register design firm
                </div>
            </div>
        </div>
    );
}


export default NavBar;
