import Header from "./components/Header";
import ResultList from "./components/ResultList";
import React,{ useState, createContext } from 'react';

export const InputContext = createContext();

function App() {
  const[inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header/>
        <ResultList/>
      </div>
    </InputContext.Provider>
  );
}

export default App;
