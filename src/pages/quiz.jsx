import { Data } from "../components/data"
import { useState } from "react"
import './quiz.css'

const Quiz = () =>{
    const [question, setQuestion] = useState(1)
    const presentQuestion = Data.filter(each => (each.id === question))
    console.log(presentQuestion)
    const onClickNext = () =>{
        if (question < Data.length+1){
            setQuestion(prevState => prevState + 1)
        }  
    }

    const onClickPrev = () =>{
        if(question != 1){
            setQuestion(prevState => prevState - 1)
        }
    }

    return(
        <div>
            <div className="main-container">
                <h1 className="question">{presentQuestion[0].id}.  {presentQuestion[0].question}</h1>
                {presentQuestion[0].options.map(every =>(
                <button className="options">
                    <img src = {every.img} className="image"/>
                    {every.text}</button>)
                )}
                
            </div>

            <div>
                <button onClick={onClickPrev} className="button">Prev</button>
                <button onClick={onClickNext} className="button">Next</button>
            </div>
        </div>
    )
}

export default Quiz
