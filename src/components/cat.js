import React from "react"
import styles from "./index.module.css"

class Cat extends React.Component {
  constructor(props){
    super(props);
    this.props = {
      name: null,
      age: null,
      description: null,
      dob: null,
      photo: null,
      requireDuo: false,
      sex: null,
      specialStatus: null// should be list of weeklywhisker, barn kitties, bonded duos
    }
    this.state = {
      expandedCard: false
    }
    this.toggleExpandedCard = this.toggleExpandedCard.bind(this);   
  }

  toggleExpandedCard() {
    this.setState({ expandedCard: !this.state.expandedCard });
  }



  expandedInfo () {
    return (  
      <div className={styles.cat}>
      <h2>Age: {this.props.age} <i>(DOB: {this.props.dob})</i></h2>
      <h2>{this.props.description}</h2>
      {/* checks if the following elements are null and disables them  */}
      {this.props.requireDuo == false &&
        <h3>{this.props.requireDuo}</h3>
      }
      {this.props.specialStatus != null &&
        <h3>{this.props.specialStatus}</h3>
      }
      </div>  
    );
  }

  render() {
    return (
      <div  className={styles.cat}>
          <img src={this.props.photo} 
          alt={"Photo of " + this.props.name}       
          onClick={()=>this.toggleExpandedCard()} 
          onKeyDown={()=>this.toggleExpandedCard()}/>
          <h1>{this.props.name} ({this.props.sex})</h1>

          {/* Handle onClick event */ }
          {this.state.expandedCard ? <div>{this.expandedInfo()}</div> : null}
          
          {console.log(this.state.expandedCard)}
         
      </div>);
  }

  
} 

export default Cat;