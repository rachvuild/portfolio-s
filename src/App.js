import './App.css';
import caseJson from "./json/case.json";
import Case from "./components/Case";

function App() {
  return (
    <div className='parent-case'>
      {caseJson.case.map((value, index) => (
        <Case key={index} value={value} />
      ))}
    </div>
  );
}

export default App;
