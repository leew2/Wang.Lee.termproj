import React from 'react';
import './App.css';
/*
  REFERENCES: https://react.dev/learn/tutorial-tic-tac-toe
  
*/


/*  
  Wang Lee
  2/26/2023
  This is an Account Creation page
  
*/


/*  
  For repeat usage of Link in the naviagation
  The {display} is for whats display for people to see
  The {link} is for the link (Currently does not work)
*/
function Page({display}, {link}) {
  return <a href="./index.js"/** <-- {link} should go after the 'href='*/ className="Page">{display} Page</a>;
}

/*  
  This display the Input on the form, using the {name} to change the "id" and "name", ie allowing us to flex this line of code for different input usage  
  The {name} is for 'name' and 'id' in label and 'name'
  The {display} is for what is to be displayed/shown/printed out for the user
*/
function UserInput({display}, {name}){
  return (
    <>
      <label for={name}> {display} </label>
      <br />
      <input type="text" id={name} name={name}></input>
    </>
  )
}

/*  This creates the form and places the 'UserInput' component */
function CreateForm(){
  return (
    <>
      <form className="userForm">
        <div class="input" ><UserInput display="First Name" name="fName" /></div>
        <div class="input" ><UserInput display="Last Name" name="lName" /></div>
        <div class="input" ><UserInput display="Email" name="userEmail" /></div>
        <div class="input" ><UserInput display="Password" name="userPassword" /></div>
        <div class="submitbtn" ><button>Submit</button></div>
      </form>
    </>
  )
}

//  This is the app that is ran, ie our "Main()"
export default function App() {
  return (
    <>
    
    <div class="createAccount">
      <header class="headerCSS">
        <h2 style={{height: 50+"px"}} >Concordia University, St Paul</h2>
        
        <div class="nav-row">
          <Page display="Home" />
          <Page display="Create Account" />
        </div>
      </header>

      <User />
      
    </div>
    </>
  );
}


/*  UserForm Class  */
class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fName:"first Name",
      lName:"last Name"
    };
  }

  //  Prints user name after login in
  render() {
    return (<p>Would be Blink if not logged in{'->'} {this.state.fName} {this.state.lName}</p>)
  }
}

/*  Child Class Of UserForm Class */
class User extends UserForm {
  constructor(){
    super();
    this.state = {
      fName:"first Name",
      lName:"last Name",
      email: "Email",
      pass: "Password"
    };
  }

  /*  This one display the Form component*/
  render(){
    return (
      <>
        <CreateForm /> 
      </>
    )
  }

}