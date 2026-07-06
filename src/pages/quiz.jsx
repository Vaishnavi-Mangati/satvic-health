import { Data } from "../components/data"
import { useState } from "react"
import './quiz.css'

const Quiz = () =>{
    const [question, setQuestion] = useState(1)
    const [answers, setAnswers] = useState([])
    const presentQuestion = Data.filter(each => (each.id === question))
    
    const selectedOption = (id, type) =>{
        const updated = [...answers]
        updated[id] = {type}
        setAnswers(updated)
    }
    

    const onClickNext = () =>{
        if (question < Data.length){
            setQuestion(prevState => prevState + 1)
        }  
    }

    const onClickPrev = () =>{
        if(question != 1){
            setQuestion(prevState => prevState - 1)
        }
    }
    console.log(answers)
    
    return(
        <div>
            <div className="main-container">
                <h1 className="question">{presentQuestion[0].id}.  {presentQuestion[0].question}</h1>
                <div className="options-card">
                    {presentQuestion[0].options.map(every =>(
                    <button className="options" key={every.type} onClick={() => selectedOption(every.type, presentQuestion[0].id)}>
                        <img src = {every.img} className="image" />
                        <p>{every.text}</p>
                    </button>
                    ))}
                </div>
                
            </div>

            <div>
                <button onClick={onClickPrev} className="button">Prev</button>
                <button onClick={onClickNext} className="button">Next</button>
            </div>
        </div>
    )
}

export default Quiz
