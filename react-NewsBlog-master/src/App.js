//importin styling
//react necc modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//componnet
import { Header } from './MyComp/Header'
import { Footer } from './MyComp/Footer'
import { HomePage } from './MyComp/HomePage'
import { Blogs } from './MyComp/Blogs'
import { Resume } from './MyComp/Resume';


import { useSelector  } from 'react-redux'
import {  selectSignedIn , selectUserData } from './UserSlice'


const App = () => {


  const isSignedIn = useSelector(selectSignedIn)
  const userData = useSelector(selectUserData)

// console.log(isSignedIn , userData)
 //{isSignedIn ? <Blogs/>  : <HomePage /> }
  return (
    <div className='app'>

      <Router>


          <Header isSignedIn={isSignedIn} userData = {userData} />

        <Switch>


          <Route exact path='/' >


            {isSignedIn ? <Blogs/>  : <HomePage /> }
      

            
          </Route>
          <Route path = '/resume'><Resume/></Route>

        </Switch>



        <Footer />

      </Router>


    </div>
  );
}






export default App;
