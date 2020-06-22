import React, {useState} from 'react';
import './styles.css';
import InputMask from '../../components/mask';

const Home = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = () => {
    console.log("Ok");
    alert(`CPF: ${cpf} Data: ${birth} Sex: ${sex}` );
  }

  const setGender = (sex) => {
    console.log(sex.target.value);
    setSex(sex.target.value);

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
              <InputMask
                placeholder="dd/mm/yyyy"
                mask={['99/99/9999']}
                name="birthDate"
                onChange={setBirth}
                value={birth}
                noValidate
              />
            </div>   

            <div className="cpf">
              <label htmlFor="cpf">CPF</label>
              <InputMask
                placeholder="000.000.000-00"
                mask={['999.999.999-99']}
                name="cpf"
                onChange={setCpf}
                value={cpf}
                noValidate
              />
            </div>

            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                placeholder="Address"
                type="text"
                name="address"
                onChange={(address) => setAddress(address.target.value)}
                value={address}
                noValidate
              />
            </div>

            <div className="deliveryNumber">
              <label htmlFor="deliveryNumber">Number</label>
              <input
                placeholder="Number"
                type="number"
                name="deliveryNumber"
                onChange={(deliveryNumber) => setDeliveryNumber(deliveryNumber.target.value)}
                value={deliveryNumber}
                noValidate
              />
            </div>

            <div className="sex" onChange={setGender}>
              <input type="radio" value="MALE" name="gender"/> Male
              <input type="radio" value="FEMALE" name="gender"/> Female
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
            </div>
          </form>
        </div>
      </div>
  );
}

export default Home;