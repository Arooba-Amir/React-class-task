import { Component } from 'react';
import './App.css'
import { Button } from '@mui/material';
class main extends Component {
  constructor(props) {
    super(props)
    this.state = {

      name: "Counter App",
      number: 0
    }

  }
  AddNumber() {
    this.setState({
      number: this.state.number + 1

    })

  }
  SubNumber() {
    this.setState({
      number: this.state.number - 1

    })

  }
  ResetNumber() {
    this.setState({
      number: this.state.number = 0

    })

  }
  render() {
    return (
      <div className='App'>
       
        <div className='Heading' >
          <p>{this.state.name}</p>
          </div>
        <div className='subHeading'>
        <p>{this.state.number}</p>
        <div>
        </div>
        <div className='banner' >
       <Button variant='contained' color='secondary' size='medium'
        style={{backgroundColor:"blue",display:'flex',justifyContent:'center',left:"10rem"}}
        onClick={() => this.AddNumber()} >
        Increment
       </Button>
       <Button variant='contained' color='secondary' size='medium'
        style={{backgroundColor:"red",display:'flex',justifyContent:'left',left:"24rem"}}
        onClick={() => this.SubNumber()} >
        Decrement
       </Button>
       <Button variant='contained' color='secondary' size='medium'
        style={{backgroundColor:"green",display:'flex',justifyContent:'left',left:"37rem"}}
        onClick={() => this.ResetNumber()} >
        Reset
       </Button>
       </div>
        </div>  
      </div>
    );
  }
}

export default main
