import "../styles/Home.css";

const Home = () => {
  const goals = ["Save $500.", "Spend less than $1500.", "Donate $250."];
  const goalList = goals.map((goal) => <li>{goal}</li>);

  return (
    <div>
      <div className="Home-left">
        <h1 className="home-welcome">Welcome to Budget Buddy!</h1>
        {/* <p>Future home of Isaac's budget.</p> */}
      </div>

      <div className="Home-right">
        <p>Your monthly budget goals.</p>
        <ol>{goalList}</ol>
      </div>
    </div>
  );
};

export default Home;
