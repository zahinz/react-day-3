import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div className="fixed flex items-center px-10 top-0 h-20 w-screen bg-blue-900 text-white z-50 text-2xl font-bold">
                FINDCAR
            </div>
        )
    }
}

export default Header;