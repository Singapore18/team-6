import React, { Component } from 'react';
import axios from "axios";

import { Form, Text, Radio, RadioGroup,Select } from "react-form";


const statusOptions = [
    {
      label: 'Strongly Disagree',
      value: 1,
    },
    {
      label: 'Disagree',
      value: '2',
    },
    {
      label: "Slightly Disagree",
      value: '3',
    },
    {
       label: "Neutral ",
       value: '4',
    },
    {
        label: "Slightly Agree",
        value: '5',
     },
     {
         label: "Agree ",
         value: '6',
      },
      {
          label: "Strongly Agree",
          value: '7',
       }

  ]

export default class FormEg extends Component {
    constructor(props) {
      super(props);
      this.state={
        questions:[
          {"id":1,"question":"You are a reflective person","type":"scale"}, {"id":2,"question":"You are a confident person","type"
          :"qualitative"}
        ]
      }
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      this.setState({ submittedValues:e })
      alert('The value is: ' + e);
      console.log(e);
    }

    componentDidMount() {
     /*var response = {data: [
        {"id":1,"question":"are you smart?","type":"scale"}, {"id":2,"question":"are you dumb?","type"
        :"qualitative"}
      ]}
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // create an array of contacts only with relevant data
          const newquestions = response.data.map(c => {
            return {
              id: c.id,
              question: c.question,
              type: c.type,
              answer: ''
            };
          });
  
          // create a new "State" object without mutating 
          // the original State object. 
          const newState = Object.assign({}, this.state, {
            questions: newquestions
          });
  
          // store the new state object in the component's state
          this.setState({questions:newState});
          console.log(this.props.questions)
    }/*)
        .catch(error => console.log(error));
    }*/
    
  }

    render() {
      return (
        <div class = "ui-grid-a">
        <Form onSubmit={this.handleSubmit}>
               { formApi => (
               <form onSubmit={formApi.submitForm}>    

                    <div><Text field="fullName" placeholder='Full Name' /></div>
                    <div><Text field="email" placeholder='Email Address' /></div>
                    <div><Text field="age" placeholder='age' /></div>
                    <div><Text field="income" placeholder='family income' /></div>
                    <div><RadioGroup field="gender">
                        <label> Male
                        <Radio value="male" />
                        </label>
                        <label> Female
                        <Radio value="female" />
                        </label>
                    </RadioGroup>
                    </div>
                    
                    {this.state.questions.map(q => 
                        <div>
                        <text>{q.question}
                        <Select field="status" id="status" options={statusOptions} className="mb-4" />
                        </text>
                        </div>
                    )}
                     
          
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