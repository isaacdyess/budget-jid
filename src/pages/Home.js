import "../styles/Home.css";

import React, { Component } from "react";

let id = 0;

const Home = () => {
  return (
    <div>
      <div className="Home-left">
        <h1 className="home-welcome">Welcome to Budget Buddy!</h1>
      </div>

      <div className="Home-right">
        <GoalList />
      </div>
    </div>
  );
};

class GoalList extends Component {
  constructor() {
    super();
    this.state = {
      goals: [
        { id: id++, text: "Save $500." },
        { id: id++, text: "Spend less than $1500." },
        { id: id++, text: "Donate $250." },
      ],
    };
  }

  addGoal = () => {
    const newGoal = prompt("Please enter a new goal.");
    this.setState((prevState) => ({
      goals: [...prevState.goals, { id: id++, text: newGoal }],
    }));
  };

  deleteGoal = (id) => {
    this.setState({ goals: this.state.goals.filter((goal) => goal.id !== id) });
  };

  render() {
    return (
      <div className="Home-right">
        <div>
          <p>Your monthly budget goals. </p>
          <AddGoalButton onClick={this.addGoal} />
        </div>
        <ol id="goalsList">
          {this.state.goals.map((goal) => (
            <div>
              <li id="onegoal"> {goal.text} </li>
              <DeleteGoalButton currId={goal.id} onClick={this.deleteGoal} />
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

class AddGoalButton extends React.Component {
  addGoal = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="addGoalButton">
        <button id="add-Goal-Button" onClick={this.addGoal}>
          Add Goal
        </button>
      </div>
    );
  }
}

class DeleteGoalButton extends React.Component {
  deleteGoal = () => {
    this.props.onClick(this.props.currId);
  };

  render() {
    return (
      <div className="deleteGoalButton">
        <button id="delete-Goal-Button" onClick={this.deleteGoal}>
          Delete
        </button>
      </div>
    );
  }
}

export default Home;
