import './App.css';
import { useState, useRef } from 'react';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { inputContainer, inputStyle, btnStyle, iconStyle, main, formStyle } from './styles/myStyles';
import { signUserUp } from './redux/actions/index'
import User from './components/user';

import { useDispatch } from 'react-redux';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(true);

    dispatch(signUserUp({
      name: name,
      email: email,
      password: password,
    }))






  }
  const arr = [
    { id: 1, title: 'lement1', subTitle: 'lah base it blah' },
    { id: 2, title: 'lement2', subTitle: 'lah some more blah' },
    { id: 3, title: 'lement3', subTitle: 'lah lorem ispum seun ter blah' },
    { id: 4, title: 'lement4', subTitle: 'lah def grhs lkif blah' },
    { id: 5, title: 'lement5', subTitle: 'lah defr freed sss blah' },

  ]

  const handlePosition = () => {

  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 200,
      width: "100%",
      height: 200,
      position: "relative",


    }}
    >
      <div style={{
        position: "relative",
        top: 300,
        right: 20
      }}>
        <button>Next</button>
        <button>Last</button>
      </div>
      {arr.map(element => {
        return (
          <div onClick={handlePosition(element.id)} className="elements" key={element.id}>
            <h1>{element.title}</h1>
            <h3>{element.subTitle}</h3>
          </div>

        )
      })}

    </div >
    /*    <div style={main}>
         <form onSubmit={handleSubmit} method="POST" style={formStyle}>
           <div style={inputContainer}>
             <BsFillPersonCheckFill style={iconStyle} />
             <input
               value={name}
   
   
               style={inputStyle}
               type="text"
               placeholder="name"
               onChange={handleName}
               required={true}
   
             />
   
           </div>
           <div style={inputContainer}>
             <AiTwotoneMail style={iconStyle} />
             <input
               value={email}
   
   
               style={inputStyle}
               type="text"
               placeholder="email"
               onChange={handleEmail}
               required={true}
   
             />
           </div>
           <div>
             <div style={inputContainer}>
               <RiLockPasswordLine style={iconStyle} />
               <input
                 value={password}
   
   
                 style={inputStyle}
                 type="text"
                 placeholder="password"
                 onChange={handlePassword}
                 required={true}
   
               >
   
               </input>
   
             </div>
   
           </div>
   
           <button
             type="submit"
             style={btnStyle}>
             Sumbit
           </button>
         </form>
         <User submitted={submit} />
       </div > */
  );
}

export default App;
