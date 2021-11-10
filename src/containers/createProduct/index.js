import React from "react";
import { products } from "../../productData";
import { Link } from "react-router-dom"

class CreateProduct extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            description: '',
            cost: 0
        }
    }


    submitForm() {
        // ?check
        // console.log(this.state);

        // ?push to the array
        // products.push(this.state)
        // console.log(products);

        // ?check id
        const result = products.find( ({ id }) => id === this.state.id )

        // ?check empty field
        const emptyId = this.state.id === ""
        const emptyName = this.state.name === ""
        const emptyDesc = this.state.description === ""
        const emptyCost = this.state.cost === ""

        if(result) {
            alert(`ID for number ${this.state.id} is taken. Please use the different ID`)
        }
        else if (emptyId || emptyName || emptyDesc || emptyCost) {
            alert(`Kindly complete the form.`)
        }else {
            products.push(this.state)
            alert('New car created.')
            console.log(products);
        }
    }

    render() {
        return(
            <div className="flex items-center justify-center h-screen w-screen">
                <form className="flex flex-col w-2/5" action="#">
                    {/* <label className="mb-1"  htmlFor="id ">ID</label> */}
                    <p className="text-center font-semibold text-xl mb-8">Create new car</p>
                    <div className="flex justify-between mb-6">
                        <input
                            required
                            className="w-1/5 px-5 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            id="id" type="number"
                            placeholder={`${products.length + 1}`}
                            onChange={ (idval) => {
                                this.setState({id: idval.target.value});
                                } }
                            />
                        {/* <label className="mb-1"  htmlFor="name">Name</label> */}
                        <input
                        required
                        className=" w-9/12 px-5 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        id="name"
                        type="text"
                        placeholder="Name"
                        onChange={ (nameval) => {
                            this.setState({name: nameval.target.value});
                            } }
                        />
                    </div>

                    {/* <label className="mb-1"  htmlFor="desc">Description</label> */}
                    <input 
                    required
                    className="mb-6 px-5 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"  
                    id="desc" 
                    type="text" 
                    placeholder="Description"
                    onChange={ (descval) => {
                        this.setState({description: descval.target.value});
                        } }
                    />

                    {/* <label className="mb-1"  htmlFor="cost">Cost</label> */}
                    <input 
                    required
                    className="mb-10 px-5 py-2 rounded border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"  
                    id="cost" 
                    type="number" 
                    placeholder="Cost"
                    onChange={ (costval) => {
                        this.setState({cost: costval.target.value});
                        } }
                    />

                    <button type="button" className="bg-blue-900 border-2 border-blue-900 font-semibold text-white mb-3 px-5 py-2 rounded" 
                    onClick={ ()=>this.submitForm() }>Submit</button>
                    
                    <Link to="/dashboard">
                        <button type="button" className="font-semibold text-blue-900 px-5 py-2 rounded w-full">Back</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default CreateProduct