import {useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import InputForm from './components/Form/InputForm';
import Table from './components/Table/Table';

function App() {
  let [userInput,setUserInput] = useState(null);
  const calculateHandler = (input) => {
    setUserInput(input);
  }
  const yearlyData = [];
  if(userInput){
    let currentSavings = +userInput.currentSavings; 
    const yearlyContribution = +userInput.yearlySavings; 
    const expectedReturn = +userInput.expectedIntrests / 100;
    const duration = +userInput.investmentDuration;

    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InputForm getInputFromForm={calculateHandler}></InputForm>
      {
        !userInput?<p>No Investment made!</p>:
        <Table outputData={yearlyData}></Table>
      }
    </div>
  );
}

export default App;
