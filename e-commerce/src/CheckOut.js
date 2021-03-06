import React, { Component } from 'react'
import './CheckOut.css'
import axios from 'axios'
import cake1 from './cakes/cupcake.PNG'

class CheckOut extends Component {
    state = {
        checkout: [],
        total:0
    }
    componentDidMount = () => {
        let total = 0;
        axios.get('http://localhost:5000/api/checkouts')
            .then(res => {
                this.setState({ checkout: res.data })
                for(let i=0;i<res.data.length;i++){
                   total += res.data[i].price
                }
                this.setState({total:total})
            })
    }
    removeLike = (id) => {
        axios.delete('http://localhost:5000/api/checkouts/' + id).then(res => { console.log(res.data) })
        axios.get('http://localhost:5000/api/checkouts')
            .then(res => {
                console.log(res.data)
                this.setState({ checkout: res.data })
            })
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
                    <div className="arrangeLikes total" >
                        <div>Total:</div>
                        <div>${this.state.total}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckOut
