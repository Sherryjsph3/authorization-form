import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

class Contact extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        password: 'swordfish',
        authorized: false
      };
      this.authorize = this.authorize.bind(this);
  }
  
    authorize = (e) => {
      const password = e.target.querySelector(
        'input[type="password"]').value;
      const auth = password === this.state.password;
      this.setState({
        authorized: auth
      });
    }
    
    render() {
    const login = (
      <form 
      className="form"
      onSubmit={this.authorize}
      action="#" 
      >
      <input className='font' type="password" placeholder="Password"/>
      <input className='font btn' type="submit"/>
      </form>
      );

      const contactInfo = (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      );

      return (
        <div className="authorization">
          <h1>{ this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
          {this.state.authorized ? contactInfo : login }
        </div>
       
      );
   
}
}

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
