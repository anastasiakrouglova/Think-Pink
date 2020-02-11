import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants/index";
import styles from "./LoginForm.module.css";
//import stylesForm from "../../styles/form.module.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = { email: ``, pwd: ``, pwd2: ``, name: ``, surname:``, phoneNumber: ``, tShirtSize:``, country: ``};
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { uiStore, history } = this.props;
    const { email, surname, phoneNumber, tShirtSize, pwd, name, country } = this.state;
    uiStore.register(name, surname, phoneNumber, tShirtSize, email, pwd, country).then(() => {
      history.push(ROUTES.login);
    });
  };

  render() {
    const { email, pwd, pwd2, name, surname, phoneNumber, tShirtSize, country } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.name_container}>
            <label htmlFor="email" className={styles.label}>
              Voornaam
              <input
                className={styles.inputfield}
                type="text"
                name="name"
                id="name="
                value={name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="email" className={styles.label}>
              Achternaam
              <input
                className={styles.inputfield}
                type="text"
                name="surname"
                id="surname="
                value={surname}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              className={styles.inputfield}
              type="email"
              name="email"
              id="email="
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>


          {/* <label htmlFor="country" className={styles.label}>
            country
            <input
              className={styles.inputfield}
              type="country"
              name="country"
              id="country="
              value={country}
              onChange={this.handleChange}
              required
            />
          </label> */}

          <div className={styles.name_container}>
          <label htmlFor="username" className={styles.label}>
            Password
            <input
              className={styles.inputfield}
              type="password"
              name="pwd"
              id="pwd"
              value={pwd}
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="username" className={styles.label}>
            Repeat password
            <input
              className={styles.inputfield}
              type="password"
              name="pwd2"
              id="pwd2"
              ref={pwd2}
              onChange={this.handleChange}
              required
            />
          </label>
          </div>

          <label htmlFor="phoneNumber" className={styles.label}>
            Gsm nummer
            <div className={styles.name_container}>
              <select className={styles.selectCountry} value={country} onChange={this.handleChange} name="country" id="country">
                    <option value="empty" >--select country--</option>
                    <option value="Belgium" >🇧🇪(+32)</option>
                    <option value="Italia">🇨🇮(+39)</option>
                    <option value="Russia">🇷🇺(+7)</option>
                    <option value="England">🇬🇧(+44)</option>
                    <option value="Spain">🇪🇸(+34)</option>
              </select>
            <input
              className={styles.inputfield}
              type="number"
              name="phoneNumber"
              id="phoneNumber="
              value={phoneNumber}
              onChange={this.handleChange}
              required
              />
            </div>
          </label>


          <div className="App-form-input-container">
            <label htmlFor="tShirtSize" className={styles.label}>
              T-shirt maat
            </label>
            <div>
              <input
                className={styles.radioInput}
                type="radio"
                name="tShirtSize"
                value="xs"
                id="xs"
                onChange={this.handleChange}
              />
              <label className={styles.radioLabel} htmlFor="xs">
                xs
              </label>

              <input
                className={styles.radioInput}
                type="radio"
                name="tShirtSize"
                value="s"
                id="s"
                onChange={this.handleChange}
              />
              <label className={styles.radioLabel} htmlFor="s">
                s
              </label>

              <input
                className={styles.radioInput}
                type="radio"
                name="tShirtSize"
                value="m"
                id="m"
                onChange={this.handleChange}
              />
              <label className={styles.radioLabel} htmlFor="m">
                m
              </label>

              <input
                className={styles.radioInput}
                type="radio"
                name="tShirtSize"
                value="l"
                id="l"
                onChange={this.handleChange}
              />
              <label className={styles.radioLabel} htmlFor="l">
                l
              </label>

              <input
                className={styles.radioInput}
                type="radio"
                name="tShirtSize"
                value="xl"
                id="xl"
                onChange={this.handleChange}
              />
              <label className={styles.radioLabel} htmlFor="xl">
                xl
              </label>

              <input
                className={styles.radioInput}
                type="radio"
                name="tShirtSize"
                value="xxl"
                id="xxl"
                onChange={this.handleChange}
              />
              <label className={styles.radioLabel} htmlFor="xxl">
                xxl
              </label>
            </div>
          </div>

          <input
            className={styles.submit}
            type="submit"
            value="Register"
            disabled={pwd && pwd !== pwd2}
          />
        </form>
      </>
    );
  }
}

export default inject(`uiStore`)(withRouter(RegisterForm));









// import React, { Component } from "react";
// import { inject } from "mobx-react";
// import { withRouter } from "react-router-dom";
// import { ROUTES } from "../../constants";
// import styles from "./LoginForm.module.css";

// const formValid = ({ formErrors, ...rest}) => {
//   let valid = true

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false)
//   })

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === `` && (valid = false)
//   });

//   return valid;
// }

// class RegisterForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: ``, pwd: ``, pwd2: ``, name: ``, surname: ``,
//       formErrors:  {email: ``, pwd: ``, pwd2: ``, name: ``, surname: ``} };
//   }

//   handleChange = e => {
//     const input = e.currentTarget;
//     const state = { ...this.state };
//     state[input.name] = input.value;
//     this.setState(state);
//     let formErrors = this.state.formErrors;

//     switch (input.name) {
//       case `email`:
//         formErrors.email = input.value.length < 5 && input.value.length > 0 ? `minimum 5 characters required` : ``;
//         break;
//       case `pwd`:
//         formErrors.pwd = input.value.length < 3 && input.value.length > 0 ? `minimum 3 characters required` : ``;
//         break;
//       case `pwd2`:
//         formErrors.pwd2 = input.value.length < 3 && input.value.length > 0 ? `minimum 3 characters required` : ``;
//         break;
//       default:
//         break;
//     }
//     this.setState({formErrors, [input.name]: input.value})
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { uiStore, history } = this.props;
//     const {name, surname, email, pwd} = this.state;

//     if (formValid(this.state)) {
//       uiStore.register(name, surname, email, pwd).then(() => {
//         console.log('form is valid!')
//         history.push(ROUTES.login);
//       });
//     }
//   };

//   render() {
//     const { formErrors, name, surname, email, pwd, pwd2 } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className={styles.formContainer}>
//         <div className={styles.name_container}>
//           <div className="App-form-input-container">
//           <label htmlFor="name" className={styles.label}>Voornaam</label>
//             <input
//               required
//               placeholder="John"
//               className={styles.inputfield}
//               type="name"
//               name="name"
//               id="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="App-form-input-container">
//             <label htmlFor="surname" className={styles.label}>Familienaam</label>
//             <input
//               required
//               placeholder="Doe"
//               className={styles.inputfield}
//               type="surname"
//               name="surname"
//               id="surname"
//               value={surname}
//               onChange={this.handleChange}
//             />
//             </div>
//           </div>
//           <div className="App-form-input-container">
//           <label htmlFor="email" className={styles.label}>Email</label>
//             <input
//               required
//               placeholder="johndoe@gmail.com"
//               className={formErrors.email.length > 0 ? styles.inputfieldError : styles.inputfield}
//               type="email"
//               name="email"
//               id="emailRegister"
//               value={email}
//               onChange={this.handleChange}
//             />
//             {formErrors.email.length > 0 && (
//               <span>{formErrors.email}</span>
//               )} 
//           </div>

//           <div className="App-form-input-container">
//           <label htmlFor="pwd" className={styles.label}>Wachtwoord</label>
            
//             <input
//               required
//               placeholder="*****"
//               className={formErrors.pwd2.length > 0 ? styles.inputfieldError : styles.inputfield}
//               type="password"
//               name="pwd"
//               id="pwdRegister"
//               value={pwd}
//               onChange={this.handleChange}
//             />
//             {formErrors.pwd.length > 0 && (
//               <span>{formErrors.pwd}</span>
//             )}
            
//           </div>
//           <div className="App-form-input-container">
//           <label htmlFor="pwd2" className={styles.label}>Repeat password</label>
//             <input
//               required
//               placeholder="*****"
//               className={formErrors.pwd2.length > 0 ? styles.inputfieldError : styles.inputfield}
//               type="password"
//               name="pwd2"
//               id="pwd2"
//               ref={pwd2}
//               onChange={this.handleChange}
//             />
//             {formErrors.pwd2.length > 0 && (
//               <span>{formErrors.pwd2}</span>
//             )}
//           </div>
//           <input
//             required
//             className={styles.loginButton}
//             type="submit"
//             value="Sign up"
//             disabled={pwd && pwd !== pwd2}
//           />
//         </form>
//       </>
//     );
//   }
// }
// export default inject(`uiStore`)(withRouter(RegisterForm));
















// import React, { Component } from "react";
// import { inject } from "mobx-react";
// import { withRouter } from "react-router-dom";
// import { ROUTES } from "../../constants";
// import styles from "./LoginForm.module.css";

// const formValid = ({ formErrors, ...rest}) => {
//   let valid = true

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false)
//   })

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === `` && (valid = false)
//   });

//   return valid;
// }

// class RegisterForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: ``, pwd: ``, pwd2: ``, name: ``, surname: ``, birthday: ``, phoneNumber: ``, tShirtSize: ``,
//       formErrors:  {email: ``, pwd: ``, pwd2: ``, name: ``, surname: ``, birthday: ``, phoneNumber: ``, tShirtSize: ``} };
//   }

//   //   constructor() {
//   //   super();
//   //   this.state = {
//   //     email: ``, pwd: ``, pwd2: ``, name: ``, surname: ``, phoneNumber: ``,
//   //     formErrors:  {email: ``, pwd: ``, pwd2: ``, name: ``, surname: ``, phoneNumber: ``} };
//   // }

//   handleChange = e => {
//     const input = e.currentTarget;
//     const state = { ...this.state };
//     state[input.name] = input.value;
//     this.setState(state);
//     let formErrors = this.state.formErrors;

//     switch (input.name) {
//       case `email`:
//         formErrors.email = input.value.length < 5 && input.value.length > 0 ? `minimum 5 characters required` : ``;
//         break;
//       case `pwd`:
//         formErrors.pwd = input.value.length < 3 && input.value.length > 0 ? `minimum 3 characters required` : ``;
//         break;
//       case `pwd2`:
//         formErrors.pwd2 = input.value.length < 3 && input.value.length > 0 ? `minimum 3 characters required` : ``;
//         break;
//       default:
//         break;
//     }
//     this.setState({formErrors, [input.name]: input.value})
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { uiStore, history } = this.props;
//     const {name, surname, email, pwd, birthday, phoneNumber, tShirtSize} = this.state;
//     //const { name, surname, email, pwd, phoneNumber } = this.state;
    
//     if (formValid(this.state)) {
//       uiStore.register(name, surname, email, pwd, birthday, phoneNumber, tShirtSize).then(() => {
//         console.log('form is valid!')
//         history.push(ROUTES.login);
//       });
//     }
//   };
//     //     if (formValid(this.state)) {
//     //   uiStore.register(name, surname, email, pwd, phoneNumber).then(() => {
//     //     console.log('form is valid!')
//     //     history.push(ROUTES.login);
//     //   });
//     // }
//   // };

//   render() {
//     const { formErrors, name, surname, email, pwd, pwd2, birthday, phoneNumber, tShirtSize } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className={styles.formContainer}>
//         <div className={styles.name_container}>
//           <div className="App-form-input-container">
//           <label htmlFor="name" className={styles.label}>Voornaam</label>
//             <input
//               required
//               placeholder="John"
//               className={styles.inputfield}
//               type="name"
//               name="name"
//               id="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="App-form-input-container">
//             <label htmlFor="surname" className={styles.label}>Familienaam</label>
//             <input
//               required
//               placeholder="Doe"
//               className={styles.inputfield}
//               type="surname"
//               name="surname"
//               id="surname"
//               value={surname}
//               onChange={this.handleChange}
//             />
//             </div>
//           </div>
//           <div className="App-form-input-container">
//           <label htmlFor="email" className={styles.label}>Email</label>
//             <input
//               required
//               placeholder="johndoe@gmail.com"
//               className={formErrors.email.length > 0 ? styles.inputfieldError : styles.inputfield}
//               type="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//             {formErrors.email.length > 0 && (
//               <span>{formErrors.email}</span>
//               )} 
//           </div>

//           <div className="App-form-input-container">
//           <label htmlFor="pwd" className={styles.label}>Wachtwoord</label>
            
//             <input
//               required
//               placeholder="*****"
//               className={formErrors.pwd2.length > 0 ? styles.inputfieldError : styles.inputfield}
//               type="password"
//               name="pwd"
//               id="pwd"
//               value={pwd}
//               onChange={this.handleChange}
//             />
//             {formErrors.pwd.length > 0 && (
//               <span>{formErrors.pwd}</span>
//             )}
            
//           </div>
//           <div className="App-form-input-container">
//           <label htmlFor="pwd2" className={styles.label}>Repeat password</label>
//             <input
//               required
//               placeholder="*****"
//               className={formErrors.pwd2.length > 0 ? styles.inputfieldError : styles.inputfield}
//               type="password"
//               name="pwd2"
//               id="pwd2"
//               ref={pwd2}
//               onChange={this.handleChange}
//             />
//             {formErrors.pwd2.length > 0 && (
//               <span>{formErrors.pwd2}</span>
//             )}
//           </div>
          
//           {/* <div className="App-form-input-container">
//             <label htmlFor="phoneNumber" className={styles.label}>Telefoonnummer (optioneel)</label>
//             <input
//               placeholder="92874030"
//               className={styles.inputfield}
//               type="phoneNumber"
//               name="phoneNumber"
//               id="phoneNumber"
//               value={phoneNumber}
//               onChange={this.handleChange}
//             />
//             </div> */}
//         {/* <div className={styles.container_date}>
//           <div className="App-form-input-container">
//             <label htmlFor="day" className={styles.label}>day</label>
//             <input required name="day" id="day" ref={birthday} className={styles.input} placeholder="01" type="number" min="1" max="31" />
//           </div>
//           <div className="App-form-input-container">
//             <label htmlFor="month" className={styles.label}>month</label>
//             <input required name="month" id="month" ref={birthday} className={styles.input} placeholder="02" type="number"  min="1" max="12" />
//           </div>
//           <div className="App-form-input-container">
//             <label htmlFor="year" className={styles.label}>year</label>
//             <input required name="year" id="year" ref={birthday} className={styles.input} placeholder="*****" type="number" min="1900" max="2500" />
//           </div>
//         </div> */}

//           <input
//             required
//             className={styles.loginButton}
//             type="submit"
//             value="Sign up"
//             disabled={pwd && pwd !== pwd2}
//           />
//         </form>
//       </>
//     );
//   }
// }

// export default inject(`uiStore`)(withRouter(RegisterForm));
