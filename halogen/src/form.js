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
        questions: [{"question":" I have a certain amount of intelligence, and I can't really do much to change it. "}, {"question":" My intelligence is something that I cannot change very much. "}, {"question":" I believe that no matter who you are, you can significantly change your intelligence level. "}, {"question":" I believe that you can always substantially change how intelligent you are. "}, {"question":" You can learn new things, but you can't really change your basic intelligence. "}, {"question":" No matter how much talent you have, you can always change it quite a bit. "}, {"question":" You can change even your basic talent level considerably. "}, {"question":" I can make unpopular or difficult decisions that affect other people if necessary. "}, {"question":" Under pressure, I stay focused and think clearly. "}, {"question":" I feel in control of my life. "}, {"question":" I try to see the funny side of things when I am faced with problems. "}, {"question":" Good or bad, I believe that most things happen for a reason. "}, {"question":" I don't believe that I can achieve my goals if there are problems. "}, {"question":" Having to cope with stress can make me stronger. "}, {"question":" On a whole, I am satisfied with myself. "}, {"question":" At times, I think I'm no good at all. "}, {"question":" I feel that I have a number of good qualities. "}, {"question":" I am able to do things as well as most people. "}, {"question":" I feel that I'm a person of worth, at least on an equal plane with others. "}, {"question":" I wish I could have more respect for myself. "}, {"question":" All in all, I am inclined to feel that I am a failure. "}, {"question":" I take a positive attitude towards myself. "}, {"question":" If someone opposes me, I can find means and ways to get what I want. "}, {"question":" I am confident that I can efficiently deal with unexpected events. "}, {"question":" Thanks to my resourcefulness, I know how to handle unforeseen situations. "}, {"question":" I can solve most problems if I invest the necessary effort. "}, {"question":" I can remain calm when facing difficulties because I can rely on my coping abilities. "}, {"question":" When I am confronted with a problem, I can usually find several solutions. "}, {"question":" If I'm in a bind, I can usually think of something to do. "}, {"question":" No matter what comes my way, I'm usually able to handle it. "}, {"question":" It's fun to learn about unfamiliar subjects. "}, {"question":" I enjoy exploring new ideas. "}, {"question":" It's fun to discuss abstract concepts. "}, {"question":" I paint an interesting picture of the future for my group. "}, {"question":" I have a clear understanding of where we are going. "}, {"question":" I'm able to get others committed to my dream. "}, {"question":" I would describe myself as someone who actively seeks as much information as I can in a new situation. "}, {"question":" When I am participating in an activity, I tend to get so involved that I lose track of time. "}, {"question":" I frequently find myself looking for new opportunities to grow as a person. "}, {"question":" I am <strong>not</strong>\u00c2\u00a0the type of person who probes deeply into new situations or things. "}, {"question":" When I am actively interested in something, it takes a great deal to interrupt me. "}, {"question":" Everywhere I go, I am out looking for new things or experiences. "}, {"question":" I am able to finish all my work during a set amount of time. "}, {"question":" I know all the tasks I have to accomplish for the day. "}, {"question":" I can set aside distractions and focus on what I am doing. "}, {"question":" I set up a schedule for tasks and projects to be done. "}, {"question":" I am sensitive to what others are not saying. "}, {"question":" I understand how others feel. "}, {"question":" I listen for more than just the spoken words. "}, {"question":" I assure others that I will remember what they say. "}, {"question":" I summarise points of agreement and disagreement when appropriate. "}, {"question":" I keep track of points others make. "}, {"question":" I assure others that I am listening by using verbal acknowledgements. "}, {"question":" I ask questions that show my understanding of others' positions. "}, {"question":" How much do you contribute ideas/information/resources? "}, {"question":" What is your typical standard of work quality? "}, {"question":" How much do you support the team? "}, {"question":" How do you participate in group problem solving? "}, {"question":" How flexible are you between roles? "}, {"question":" How self-reflective are you? "}]
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

                    <div id = "padding"> Full Name  &emsp;&emsp;&ensp;&nbsp;      <Text field="fullName" placeholder='Bob Tan' /></div>
                    <div id = "padding"> Email Address &emsp;&nbsp;<Text field="email" placeholder='bobtan@example.com' /></div>
                    <div id = "padding"> Age &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; <Text field="age" placeholder='10' /></div>
                    <div id = "padding"> Family Income &emsp;<Text field="income" placeholder='0' /></div>
                    <div id = "padding"><RadioGroup field="gender">
                        <label> Male
                        <Radio value="male" />
                        </label>
                        &emsp;
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