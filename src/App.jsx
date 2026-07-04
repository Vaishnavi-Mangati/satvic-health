import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Quiz from './pages/quiz'

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/quiz' element = {<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App 