import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  //state value to capture entered text
  const [enteredValue, setEnteredValue] = useState('');
  //create state variable to indicate  valid text entries
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // if input text is valid show regular styling
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // evaluate if text entry is blank spaces
    if (enteredValue.trim().length === 0) {
      // update state to indicate blank entry
      setIsValid(false);
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
