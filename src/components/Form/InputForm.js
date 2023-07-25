import { useState } from "react"
import styles from './InputForm.module.css';
import Inputs from "../Inputs/Inputs";
const InputForm = (props) =>{
    let[userInput,setUserInput] = useState({currentSavings:0,
                                            yearlySavings:0,
                                            expectedIntrests:5,
                                            investmentDuration:0
                                        })
    const sendInputsOut = (event) =>{
        event.preventDefault();
        props.getInputFromForm(userInput);
    }
    const mapUserInput = (value,id) =>{
        if(id==='current-savings'){
            setUserInput({...userInput,currentSavings:value});
        }
        else if(id==='yearly-savings'){
            setUserInput({...userInput,yearlySavings:value});
        }
        else if(id==='expected-intrests'){
            setUserInput({...userInput,expectedIntrests:value});
        }
        else{
            setUserInput({...userInput,investmentDuration:value});
        }
    }
    const resetForm = () =>{
        setUserInput({currentSavings:0,yearlySavings:0,expectedIntrests:5,investmentDuration:0});
        return;
    }
    return(
        <div className={styles.formMain}>
            <form onSubmit={sendInputsOut}>
                <div className={styles.formInput}>
                    <Inputs label='Current Savings' id='current-savings' min= '0' getValue={mapUserInput} value={userInput.currentSavings}></Inputs>
                    <Inputs label='Yearly Savings' id='yearly-savings' min='0' getValue={mapUserInput} value={userInput.yearlySavings}></Inputs>
                </div>
                <div className={styles.formInput}>
                    <Inputs label='Expected Intrest' min='5' max='100' id='expected-intrests' getValue={mapUserInput} value={userInput.expectedIntrests}></Inputs>
                    <Inputs label='Investment Duration' id='duration' min='0' getValue={mapUserInput} value={userInput.investmentDuration}></Inputs>
                </div>
                <p>
                    <button type="button" onClick={resetForm}>Reset</button>
                    <button>Submit</button>
                </p>
            </form>
        </div>
    )
}

export default InputForm;