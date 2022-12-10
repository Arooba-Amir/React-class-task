

 import{Component} from "react";
 class main extends Component{
 
   render(){
 
     return(
      
       <div style={{
         border: '1px solid black',
         height: '60vh',
         width: '90vh',
         margin: 'auto',
         marginTop: '100px',
         borderRadius: '5px'
       }}>
          <div style={{display: 'flex',
          margin: '40px 30px',
         background: '#008B8B',
         padding: '8px 10px'}}>
           <p style={{color:'white'}}> Question 1: </p>
          </div>
          <div style={{
           marginLeft: '20px',
          
            marginBottom: '60px',
            
            
 
          }}>
            <ol style={{listStyle: 'none'}}>
              <li><input type="radio"/><button style={{padding: '7px 5px', border: 'none'}}>Option 1</button></li>
              <li><input type="radio"/><button style={{padding: '7px 5px',border: 'none'}}>Option 2</button></li>
              <li><input type="radio"/><button style={{padding: '7px 5px',border: 'none'}}>Option 3</button></li>
              <li><input type="radio"/><button style={{padding: '7px 5px',border: 'none'}}>Option 4</button></li>
            </ol>
            
            
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
           
          }}
          ><button style={{marginLeft: '35px', padding: '5px 15px' }}>SAVE</button><button style={{ padding: '5px 15px', marginRight: '35px'}}>SKIP</button></div>
       </div>
 
 
 
     )
   }
 }
 export default main;