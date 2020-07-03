import React, { Component } from 'react'
import './CheckOut.css'
import axios from 'axios'
import cake1 from './cakes/cupcake.PNG'

class CheckOut extends Component {
    state = {
        checkout: []
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/api/checkouts')
            .then(res => {
                console.log(res.data)
                this.setState({ checkout: res.data })
            })
    }
    removeLike = (id) => {
        axios.delete('http://localhost:5000/api/checkouts/' + id).then(res => {console.log(res.data)})
    }
    render() {
        return (
            <div className="checkoutOuterDiv">
                <div className="checkout">
                    <h3>CHECKOUT</h3>
                    {this.state.checkout.map((el, index) => <div className="arrangeLikes" key={el._id}>
                        <div className="checkOutStart">
                            <img src={cake1} alt="cake" />
                            <div>{el.title}</div>
                        </div>
                        <div className="checkOutRight"> 
                            <div>${el.price}</div>
                            <button className="checkOutEnd" onClick={() => this.removeLike(el._id)}>Remove</button>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default CheckOut
