import React,{Component} from 'react';
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'
class FormContainer extends Component {
     constructor(props) {
    super(props);

    this.state = {
      newCandidate: {
        firstName: '',
        lastName: '',
        email:'',
        skills: [],
        selectionOption: []

      },

      skillOptions: ['Javascript', 'Angular', 'React', 'HTML'],
      selectionOption :['Selected','Not Slelected']

    }
    
  }
 render() {
     return (
           
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'First Name'} 
                   name= {'firstName'}
                   value={this.state.newCandidate.firstName} 
                   placeholder = {'Enter the First name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* First Name Name of the user */}
        
        <Input inputType={'text'}
                   title= {'Last Name'} 
                   name= {'lastName'}
                   value={this.state.newCandidate.LastName} 
                   placeholder = {'Enter the Last name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Lst Nmae Name of the user */}

        <Input inputType={'email'}
                   title= {'email'} 
                   name= {'email'}
                   value={this.state.newCandidate.email} 
                   placeholder = {'Email'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Lst Nmae Name of the user */}

          
          <CheckBox  title={'Skills'}
                  name={'skills'}
                  options={this.state.skillOptions}
                  selectedOptions = { this.state.newCandidate.skills}
                  handleChange={this.handleCheckBox}
                   /> {/* Skill */}
         
          <CheckBox  title={'Selection Decision'}
                  name={'decision'}
                  options={this.state.selectionOption}
                  selectedOptions = { this.state.newCandidate.selectionOption}
                  handleChange={this.handleCheckBox}
                   /> {/* Skill */}

          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>
     )
 }   
}
const buttonStyle = {
  margin : '10px 10px 10px 10px'
}
export default FormContainer;