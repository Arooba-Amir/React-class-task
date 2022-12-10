import logo from "./logo.png"
import{Component} from "react";
class main extends Component{

  render(){

    return(
      <div style={{display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',}}>
      <img src ={logo} width = "380" height="130" alt ="logo google"></img>
      </div>
      



    )
  }
}
export default main;