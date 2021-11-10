import React from "react";
import {products} from "../../productData";
import CarList from "../../components/carList";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    render() {
        // let keyword = new RegExp(this.state.keyword, 'gi')
        // console.log(keyword);

        return(
            <div className="bg-gray-100 w-screen min-h-screen flex flex-col items-center mt-12 pt-20">

                <div className="w-3/5 flex justify-between">

                    <div className="w-3/5 bg-white rounded h-10 flex items-center">
                        <form className="w-full">
                            <input 
                                className="w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" 
                                type="text" 
                                placeholder="Search your dream car"
                                onChange= { (searchVal) => {
                                    this.setState({keyword: searchVal.target.value});
                                } } 
                            />
                        </form>
                    </div>

                    <Link to="/create">
                        <div className="bg-blue-900 text-white px-5 py-2 rounded mb-10 w-48 text-center"> Create New Product</div>
                    </Link>

                </div>

                {/* CARLIST COMPONENT START HERE */}
                {products.map(list=> {
                    let keyword = new RegExp(this.state.keyword, 'gi')
                    if(list.name.match(keyword)){
                        return (
                        <CarList 
                            carData={list}
                            link={list.id} 
                            carImage={list.image} 
                            carName={list.name} 
                            carCost={list.cost}
                            carShortDesc={list.short_description}
                        />)
                    }
                    })}

            </div>
        )
    }
}

export default Dashboard