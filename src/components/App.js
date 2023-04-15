import React,{useState} from "react";


const App = () =>{
    let [inputText, setinputText] = useState("");

    const buttonClick = (e) =>{
      let clickedbutton = event.target;
      let value = clickedbutton.innerHtml;
      setinputText(inputText + value);
    }

    const answer = () =>{
        try{
          let ans = eval(inputText);
          setinputText(ans);
        }
        catch(err){
            setinputText("Invalid Input");
            
        }
      
        
    }

    const clear = ()=>{
     setinputText("");
    }

    return (
        <div>
            <input type="text" className="cal-input" value={inputText} readOnly/>
        <div className="buttons-container">
        <button onClick={clear}> C </button>
        <button onClick={buttonClick}> / </button>
        <button onClick={buttonClick}> * </button> 
        <button onClick={buttonClick}> - </button>
        <button onClick={buttonClick}> 7 </button>
        <button onClick={buttonClick}> 8 </button>
        <button onClick={buttonClick}> 9 </button>
        <button onClick={buttonClick}> + </button>
        <button onClick={buttonClick}> 4 </button>
        <button onClick={buttonClick}> 5 </button>
        <button onClick={buttonClick}> 6 </button>
        <button onClick={buttonClick}> 1 </button>
        <button onClick={buttonClick}> 2 </button>
        <button onClick={buttonClick}> 3 </button>
        <button onClick={answer}> = </button>
        <button onClick={buttonClick}> 0 </button>
        <button onClick={buttonClick}> . </button>
        </div>

        </div>
    );
}

export default App;
