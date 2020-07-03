import React, { Component } from 'react'
import './Favourites.css'
import axios from 'axios'
import cake2 from './cakes/redglazed.jpg'

class Favourites extends Component {
    state = {
        liked:[]
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/api/favourites').then(res => {
            console.log(res.data)
            this.setState({liked:res.data})
        })
    }
    removeLike = (id) => {
        axios.delete('http://localhost:5000/api/favourites/' + id).then(res => {
            console.log(res.data)
        })
        axios.get('http://localhost:5000/api/favourites').then(res => {
            console.log(res.data)
            this.setState({liked:res.data})
        })
    }
    render() {
        return (
            <div className="favouritesOuterDiv">
                <div className="favourites">
                    <h3>FAVOURITES</h3>
                    {/* {this.props.cake} */}
                    {this.state.liked.map((el,index) => <div className="arrangeLikes" key={el._id}>
                        <div className="favouriteStart">
                            <img src={cake2} alt="cake" />
                            <div>{el.title}</div>
                        </div>
                        <div className="favouriteEnd" onClick={() => this.removeLike(el._id)}>
                            <div>Remove</div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Favourites
