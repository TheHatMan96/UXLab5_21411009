import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
import Students from './Students';
import Classes from './Classes';

const routing =(


    <Router>
    <div> 
    <div> 
               <ul>
                   <li>
                       <Link to="/">home</Link>
                   </li>
                   <li>
                       <Link to="/students">students</Link>
                   </li>
                   <li>
                       <Link to="/classes">classes</Link>
                   </li>
               </ul>     
        </div>
    <div> 
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/classes" component={Classes} />
    </div>
        
    
     </div>
     </Router>       
    
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
