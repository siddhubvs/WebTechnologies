import React from 'react'; 
import logo2 from './logo2.jpg';

class Form extends React.Component {   
    constructor(props) {     
        super(props);     
        this.state = {name: ''};     
        this.state = {age: ''};
        this.state=  {rollno: ''};
        this.state=  {branch: ''};
        this.state=  {address: ''};
        this.state=  {tell: ''};
    this.UpdateName = this.UpdateName.bind(this);     
    this.UpdateAge = this.UpdateAge.bind(this);
    this.UpdateRoll = this.UpdateRoll.bind(this);     
    this.UpdateBranch = this.UpdateBranch.bind(this);
    this.UpdateAddress=this.UpdateAddress.bind(this);
    this.UpdateTell=this.UpdateTell.bind(this);
    this.formSubmit = this.formSubmit.bind(this);   
}
  UpdateName(event) {     
      this.setState({name: event.target.value});   
    }   
      UpdateAge(event) {     this.setState({age: event.target.value})};
      UpdateRoll(event) {     this.setState({rollno: event.target.value})};
      UpdateBranch(event) {     this.setState({branch: event.target.value})};
      UpdateAddress(event) {     this.setState({address: event.target.value})};
      UpdateTell(event) {     this.setState({tell: event.target.value})};
         formSubmit(event) {     alert("The name entered is: "+ this.state.name);     alert("The age entered is: "+ this.state.age);   }
  render() {     return (
      
      <form align="center">
         
          <h1>Student Registration Form</h1>
          <img src={logo2} height={100} width={100} alt="logo" align="center"/>
       
       <table align="center" cellpadding = "10">
       
 
 
 <tr>
 <td>FIRST NAME</td>
 <td><input type="text" name="First_Name" maxlength="30"/>

 </td>
 </tr>
  
 
 <tr>
 <td>LAST NAME</td>
 <td><input type="text" name="Last_Name" maxlength="30"/>

 </td>
 </tr>
 <tr>
<td>EMAIL ID</td>
<td><input type="text" name="Email_Id" maxlength="100" /></td>
</tr>
<tr>
<td>Mobile Number</td>
<td>
<input type="text" name="MobileNumber" maxlength="10"/>

</td>
</tr>
<tr>
<td>Gender</td>
<td>
<input type="radio" name="Gender" value="Male" />
Male
<input type="radio" name="Gender" value="Female" />
Female
</td>
</tr>
<tr>
<td>Tell me about yourself</td><td><textarea id="text" rows="10" cols="20"/></td>
</tr>  
<tr>
<td colspan="2" align="center">
<input type="submit" value="Submit"  onClick={this.formSubmit}/>
<input type="reset" value="Reset"/>
</td>
</tr>         
       
        
      </table>    
      </form>
    );
  } } 
  export default Form;
