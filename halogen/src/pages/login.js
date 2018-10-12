import React, { Component } from "react";
import { Form, Text  } from "react-form";



class login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
    handleSubmit(e) {
    this.setState({ submittedValues:e })
    alert('The value is: ' + e);
    console.log(e);
    }

    render() {

        return(
        //Form here
        <div id="login">
        
            <h2> Login </h2>
            <Form onSubmit={this.handleSubmit}>
               { formApi => (
               <form onSubmit={formApi.submitForm}> 
                    <div id = "padding">
                    <Text field="NRIC" placeholder='NRIC' />
                    </div>
                    <div id = "padding">
                    <Text field="passaword" type="password" placeholder='password' />
                    </div>
                   
                    <button type="submit" className="mb-4 btn btn-primary" > 
                        Submit
                    </button>
            </form>
               )}
        </Form>
        </div>
        );
    }
}

export default login;