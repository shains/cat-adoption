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
      specialStatus: null,// should be list of weeklywhisker, barn kitties, bonded duos
      
    };
  }

  render() {
    return (
      <div className={styles.cat}>
          <img src={this.props.photo} alt={"Photo of " + this.props.name} />
          <h1>{this.props.name} ({this.props.sex})</h1>
          <h2>Age: {this.props.age} <i>(DOB: {this.props.dob})</i></h2>
          <h2>{this.props.description}</h2>
          {/* <h3>{this.props.requireDuo}</h3>
          <h3>{this.props.specialStatus}</h3> */}
      </div>
    );
  }
  
} 

export default Cat;