import React, {useState} from 'react'
import './App.css'
import Alert from './componants/Alert';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const [mode,setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);

  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }


  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success");  
    }
    else{ setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled" , "success");  
    }
  }


  // const toggleMode = (cls)=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark mode has been enabled" , "success");  
      // document.title = "TextUtils - Dark mode" 

      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install Textutil now"
      // }, 1500);


  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled" , "success");
  //     // document.title = "TextUtils - Light mode"
  //   }
  // }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>

    <Alert alert = {alert}/>

    <div className="container my-3">
      <Switch> 
        { <Route exact path="/about">
          <About mode={mode} />
        </Route> }
        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
        </Route>
      </Switch>

      
      
    </div>
    </Router>
    </>
    
  );
}

export default App
