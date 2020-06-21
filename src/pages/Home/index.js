import React, {useState} from 'react';
import './styles.css';
import {mask, unMask} from 'remask';
import InputMask from '../../components/mask';
// import {Container, ContainerForm, TextFromInput} from './styles';

const Home = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = () => {
    console.log("Ok");
    alert(`Nome: ${cpf}`);
  }

  const handleOnChange = (ev) => {
    // console.log(ev);
    setBirth(mask(unMask(ev.target.value), ['99/99/9999']))
  }

  return(
    <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} >
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                // onChange={(name) => setName(name.target.value)}
                onChange={(name) => setName(name.target.value)}
                value={name}
                noValidate
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={(lastName) => setLastName(lastName.target.value)}
                value={lastName}
                noValidate
              />
            </div>
            <div className="birthDate">
              <label htmlFor="birthDate">Birth</label>
              <input
                placeholder="dd/mm/yyyy"
                type="text"
                name="birthDate"
                onChange={handleOnChange}
                value={birth}
                noValidate
              />
            </div>            
            <div className="cpf">
              <label htmlFor="cpf">CPF</label>
              <InputMask
                placeholder="000.000.000-00"
                // type="text"
                mask={["999.999.999-99"]}
                name="cpf"
                onChange={setCpf}
                value={cpf}
                noValidate
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={(email) => setEmail(email.target.value)}
                value={email}
                noValidate
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={(password) => setPassword(password.target.value)}
                value={password}
                noValidate
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Home;