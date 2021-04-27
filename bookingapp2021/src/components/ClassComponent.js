import React, { Component } from 'react'
class ClassComponent extends Component{
  constructor(props){
      super(props)  
// state deklareras här 
      this.state = { name:" "}
    
 
  }   // useState i functional component





  // complexa life cyckle metoder 
  // life cycle metoder
  
  // mounting : när en komponent skapas 
   //update:  när en komponent uppdateras
   //unmount: när vi tar bort en komponent 
componentDidMount() {
  // anropas direct efter render 
}

componentDidUpdate() {
}

componentWillUnmount() {
    
}


// function clickFunction , setState()
  // sätter value till state 
  clickFunction() {
    this.setState({name:"Mitt namn"})
  }
  // this.setState( {name:" ny value"});

  //hela render motsvarande till return (<div> JSX </div>)
  render() {
      return (
        <div>

           
            jsx {this.state.name}
            <button onClick={this.clickFunction.bind(this)}>Click me</button>
        </div>
      )
  }
}
export default ClassComponent;

//kl. 11.00


// state -> render/component -> componentDidMount   componentWillUnmount