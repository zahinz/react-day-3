import React from "react";
import { Link } from 'react-router-dom'

class CarList extends React.Component {
    render() {
        return (
            <div className="bg-gray-200 w-3/5 h-72 flex mb-7 rounded-xl overflow-hidden">
                <div className="bg-white h-full w-96">
                    <div className="h-full w-full bg-no-repeat bg-center bg-cover hover:bg-contain" style={{ backgroundImage: `url(${this.props.carImage})`}}></div>
                    <img src={this.props.carImage} alt="" className="h-full w-auto"/>
                </div>
                <div className="flex flex-col justify-start px-12 relative w-3/4">
                    <p className="mt-14 font-bold text-2xl">{this.props.carName}</p>
                    <div className="flex items-center absolute bottom-7 right-10">
                        <p className="mr-4">Market price</p>

                        {/* REACT ROUTER METHOD 2 */}
                        <Link to={{
                            pathname:`/dashboard/${this.props.link}`,
                            state: this.props.carData,
                        }}>
                            <p className="bg-blue-900 text-white px-5 py-2 rounded">USD {this.props.carCost}</p>
                        </Link>

                    </div>
                    <p>{this.props.carShortDesc}</p>
                    <p>{this.props.carBulletDesc}</p>
                </div>
            </div>
        )
    }
}

export default CarList