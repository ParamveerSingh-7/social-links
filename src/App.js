import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Avatar />
      <Info />
      <Buttons />
    </div>
  );
}

function Avatar() {
  return <div className="image-holder"></div>;
}

function Info() {
  return (
    <div className="main-info">
      <div className="personal-info">
        <h1>Jessiac Randall</h1>
        <p>London, United Kingdom</p>
      </div>
      <p>"Front-end devloper and avid reader."</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="btn-container">
      <button className="btn">GitHub</button>
      <button className="btn">Frontend Mentor</button>
      <button className="btn">LinkedIn</button>
      <button className="btn">Twitter</button>
      <button className="btn">Instagram</button>
    </div>
  );
}

export default App;
