import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tasklist" element={<TaskList />}/>
        <Route path="/tasklist/taskform" element={<TaskForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
