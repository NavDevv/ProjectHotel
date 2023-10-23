import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
function App() {
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className="App">
      <LoginPage
        about={about}
        setAbout={setAbout}
        contact={contact}
        setContact={setContact}
      />
      {/* <Test /> */}
    </div>
  );
}

export default App;
function LoginPage({ about, setAbout, contact, setContact }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "Login.js";
    navigate(path);
  };
  return (
    <div>
      <button type="submit" id="submitbtn" onClick={routeChange}>
        <a>Login Here</a>
      </button>
      <Info
        about={about}
        setAbout={setAbout}
        contact={contact}
        setContact={setContact}
      />
    </div>
  );
}

function Info({ about, setAbout, contact, setContact }) {
  function openAbout() {
    setAbout(!about);
    setContact(false);
  }
  function openContact() {
    setContact(!contact);
    setAbout(false);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={openAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#contactus" onClick={openContact}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      {about && <About />}
      {contact && <Contact />}
    </div>
  );
}

// function Test() {
//   const [test, setTest] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setTest((c) => !c)}>test</button>
//       {test ? <p>Hi there , this is the test:</p> : ""}
//     </div>
//   );
// }
function About() {
  return (
    <div className="About">
      <form id="AboutForm" method="get">
        <h3
          style={{
            color: "Red",
            fontFamily: "Courier New, Courier, Monospace",
            margin: "1px",
          }}
        >
          Welcome ~~
        </h3>
        <p style={{ color: "white", fontFamily: " Courier New" }}>
          You have made it here! Thank you so much for visiting. This is my
          first personal project made with the React library. This was
          originally made in javaScript but as going with my learning phase, I
          decided to re-do it.
          <br />
          <br /> About me?: I am a Front-end Developer currently learning new
          technologies. I have created few desktop applications. Proficent in
          C#, PHP, SQL, javaScript, React and Java, I may not be professional
          yet, but I will be. Thank you so much again for visiting
        </p>
      </form>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Messgae, setMessage] = useState("");
  function onSubmit(e) {
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  }

  return (
    <div className="contact">
      <form
        onSubmit={() => onSubmit}
        className="form"
        action="MAILTO:navjot200284@gmail.com"
        method="post"
        encType="text/plain"
      >
        <h3
          style={{
            color: "red",
            fontFamily: "Courier New",
            margin: "1px",
            fontSize: "30px",
            padding: "0px 0px 10px",
          }}
        >
          Contact
        </h3>
        <label>Full Name*</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Phone Number (optional)</label>
        <input
          type="text"
          placeholder="Enter your Phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <label>Messgae</label>
        <textarea
          value={Messgae}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            resize: "none",
            height: "80px",
            width: "170px",
            boxSizing: "border-box",
            outline: "none",
            borderColor: "transparent",
            fontFamily: "Courier New",
            borderRadius: "6px",
          }}
        ></textarea>
        <button
          className="btn"
          type="submit"
          style={{ position: "absolute", top: "89.5%" }}
        >
          Submit
        </button>
      </form>
      <button onClick={onSubmit} className="btn" type="reset">
        Reset
      </button>
    </div>
  );
}
