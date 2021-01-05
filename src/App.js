import React from 'react'
import './App.css';

class App extends React.Component {
      constructor(props){
      super(props);      
      this.state = {
          odometerValue: 0
    }
    this.addsOnClicked = this.addsOnClicked.bind(this);
  }

  addsOnClicked(num) {
    //          9998             +   1000 =      0998
    //^Current odometer value^       ^num^ = ^new Odo Value^
    let newOdometerValue = this.state.odometerValue + num
    if (newOdometerValue > 9999) {
      newOdometerValue -= 10000
    }
    this.setState({
      odometerValue: newOdometerValue
    });
  }
  render() {
    return (
      <div className="Odometer">
        <Header title="1,10,100,1000" />
        <Main numero={this.state.odometerValue} />
        <button onClick={() => this.addsOnClicked(1)}>Plus One</button>
        <button onClick={() => this.addsOnClicked(10)}>Plus Ten</button>
        <button onClick={() => this.addsOnClicked(100)}>Plus One Hunded</button>
        <button onClick={() => this.addsOnClicked(1000)}>Plus One Thousand</button>
        <Footer message="React.js Odometer" />
      </div>
    );
  }
}

function Header(props) {
  return (
      <nav>
          <h2>{props.title}</h2>
      </nav>
  )
}

function Main(props) {
  return (
      <>
        <h1>Odometer</h1>
        <p>{props.numero.toString().padStart(4, "0")}</p>
      </>
  )
}

function Footer(props) {
    return (
        <footer>
            <p>{props.message}</p>
        </footer>
    )
}

export default App;
