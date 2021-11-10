import React from "react";
import {Link} from "react-router-dom";

class Details extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.location.state,
        }

        // console.log("Details", props);
    }

    render() {
        return(
            <div className="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center">
                <div className="bg-white w-3/4 p-10">
                    <p className="mb-4 text-2xl font-bold">{this.state.data.name}</p>
                    <p className="mb-4">{this.state.data.short_description}</p>
                    <ul className="list-disc ml-8">
                        {this.state.data.bullet_description.map((bullet) => 
                            <li>{bullet}</li>
                        )}
                    </ul>
                </div>
                <Link to="/dashboard">
                    <button type="button" className="bg-blue-900 border-2 border-blue-900 font-semibold text-white mb-3 px-5 py-2 rounded w-full mt-5">Back</button>
                </Link>
            </div>
        )
    }
}

export default Details