import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import TodoContainer from './components/TodoContainer.js';
import { Button } from '@mui/material';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className='page-container'>
            <div className='welcome-div'>
              <h1 className='welcome-h1'>Welcome to your Todo List!</h1>
              <Button variant="contained" href='/new'>Start Adding</Button>
            </div>
            <div className="flower">
        <div className="f-wrapper">
            <div className="flower__line"></div>
            <div className="f">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__leaf flower__leaf--5"></div>
                <div className="flower__leaf flower__leaf--6"></div>
                <div className="flower__leaf flower__leaf--7"></div>
                <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
            </div>
        </div>

        <div className="f-wrapper f-wrapper--2">
            <div className="flower__line"></div>
            <div className="f">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__leaf flower__leaf--5"></div>
                <div className="flower__leaf flower__leaf--6"></div>
                <div className="flower__leaf flower__leaf--7"></div>
                <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
            </div>
        </div>

        <div className="f-wrapper f-wrapper--3">
            <div className="flower__line"></div>
            <div className="f">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__leaf flower__leaf--5"></div>
                <div className="flower__leaf flower__leaf--6"></div>
                <div className="flower__leaf flower__leaf--7"></div>
                <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
            </div>
        </div>
        <div className="flower__glass"></div>
    </div>
            </div>
          }>
          </Route>
          <Route path='/new' element={
            <>
            <div className='todo-container'>
              <TodoContainer />
            </div>
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
