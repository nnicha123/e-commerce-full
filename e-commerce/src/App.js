import React, { Component } from 'react';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import ContactUs from './ContactUs'
import CheckOut from './CheckOut'
import Login from './Login';
import Favourites from './Favourites';
import Test from './Test';
import Test2 from './Test2'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
class App extends Component {
  state = {
    title: 'This is the title from the app page',
    message: 'Hello',
    unit: 'kg',
    liked: [],
    checkOut:[]
  }
  changeUnit = (item) => this.setState({ unit: item })
  changeCheckOut = (item) => this.setState({checkOut:item})
  changeCake = (cake) => this.setState({ liked: cake })
  changeLikes = (likes) => {
    this.setState({liked:likes})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" render={() => (<Home data={{liked:this.state.liked,changeLikes:this.changeLikes}} checkOut={{checkout:this.state.checkOut,changeCheckOut:this.changeCheckOut}}/>)} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/checkout" render={() => (<CheckOut checkOut={{checkout:this.state.checkOut}}/>)}/>
            <Route
              exact path="/favourites" render={() => (<Favourites cake={{liked:this.state.liked}}/>)}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
