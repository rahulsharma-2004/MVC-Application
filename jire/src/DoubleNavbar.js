//  import classes from './../src/DoubleNavbar.module.css';
 
// import { useState } from 'react';
// import { UnstyledButton, Tooltip, Title, rem } from '@mantine/core';
// import {
//   IconHome2,
//   IconGauge,
//   IconDeviceDesktopAnalytics,
//   IconFingerprint,
//   IconCalendarStats,
//   IconUser,
//   IconSettings,
// } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';


 

// //function App() {
//   // const [count, setCount] = useState(0);
//   // return (
//   //   <div>
//   //     <p>you clicked {count} times</p>
//   //     <button onClick={() => setCount(count + 2)}>Click me</button>
//   //   </div>
//   // );

//   // const[isOn,setIsOn] = useState(false) ;

//   // return (
//   //   <div>
//   //     <p>The LIght is {isOn ? "On" : "off"}</p>
//   //     <button onClick={() => setIsOn(!isOn)}>Toggle</button>
//   //   </div>
//   // );

//   //input filed handling
//   // const [text,setText] = useState('');

//   // return (
//   //   <div>
//   //     <input
//   //       type="text"
//   //       value={text}
//   //       onChange={(e) => setText(e.target.value)}
//   //     />
//   //     <p>you typed : {text}</p>
//   //   </div>
//   // );

//   //form submission
//   // const [name, setName] = useState("");
//   // const [submitted, setsubmitted] = useState(false);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setsubmitted(true);
//   // };
//   // return (
//   //   <div>
//   //     {submitted ? (
//   //       <p>Thanku you, {name}!</p>
//   //     ) : (
//   //       <form onSubmit={handleSubmit}>
//   //         <input
//   //           type="text"
//   //           value={name}
//   //           onChange={(e) => setName(e.target.value)}
//   //         />
//   //         <button type="submit">Submit</button>
//   //       </form>
//   //     )}
//   //   </div>
//   // );

//   // const [items, setItems] = useState([]);

//   // const addItems = () => {
//   //   setItems([...items, `Item ${items.length + 1}`]);
//   // };

//   // return (
//   //   <div>
//   //     <ul>
//   //       {items.map((item, index) => (
//   //         <li key={index}> {item}</li>
//   //       ))}
//   //     </ul>
//   //     <button onClick={addItems}>Add Item</button>
//   //   </div>
//   // );

//   //Checkbox handling
//   // const [checked, setChecked] = useState(false);

//   // return (
//   //   <div>
//   //     <label>
//   //       <input
//   //         type="checkbox"
//   //         checked={checked}
//   //         onChange={(e) => setChecked(e.target.value)}
//   //       />
//   //       Check me
//   //     </label>
//   //     <p>{checked ? "Checked" : "Not Checked"}</p>
//   //   </div>
//   // );

//   //DropDown Menu
//   // const [selected, setSelected] = useState("");
//   // return (
//   //   <div>
//   //     <select value={selected} onChange={(e) => setSelected(e.target.value)}>
//   //       <option vlaue="">Select an option</option>
//   //       <option value="option1">Option 1</option>
//   //       <option vlaue="option2"> Option 2</option>
//   //       <option vlaue="option3">Option 3</option>
//   //     </select>
//   //     <p>you selected : {selected}</p>
//   //   </div>
//   // );

//   //Multiple State variable
//   // const [name, setName] = useState("");
//   // const [age, setAge] = useState("");

//   // return (
//   //   <div>
//   //     <input
//   //       type="text"
//   //       placeholder="Name"
//   //       value={name}
//   //       onChange={(e) => setName(e.target.value)}
//   //     />
//   //     <input
//   //       type="number"
//   //       placeholder="Age"
//   //       value={age}
//   //       onChange={(e) => setAge(e.target.value)}
//   //     />
//   //     <p>
//   //       Name:{name}, Age: {age}
//   //     </p>
//   //   </div>
//   // );
//   //conditional Rendering Based on State
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // return (
//   //   <div>
//   //     {isLoggedIn ? <p>Welcome back !</p> : <p>Please log in.</p>}
//   //     <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//   //       {isLoggedIn ? "Log out" : "Log in"}
//   //     </button>
//   //   </div>
//   // );

//   // const [seconds, setSeconds] = useState(0);
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setSeconds((seconds) => seconds + 1);
//   //   },-10000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   // return (

//   //   <div>
//   //     <p>Seconds elapsed : {seconds}</p>
//   //   </div>
//   // );

//   //1 Form validation
//   // const[email,setEmail] = useState('');
//   // const[password,setPassword] = useState('');
//   // const[errors,setErrors] = useState([]);

//   // const validate = () => {
//   //   let errors = {};

//   //   if(!email.includes('@')){
//   //     errors.email = 'Invalid email address';
//   //   }
//   //   if(password.length < 6){
//   //     errors.password  =  'Password must be at least 6 characters';
//   //   }
//   //   setErrors(errors);
//   //   return Object.keys(errors).length ===0;
//   // }
//   // const hadnleSub = (f) => {
//   //   f.preventDefault();
//   //   if (validate()) {
//   //     console.log('Form submitted');
//   //   }
//   // };
//   // return (
//   //   <div>
//   //     <form onSubmit={hadnleSub}>
//   //       <input type="email" value={email} onChange={(f) => setEmail(f.target.value)} placeholder="Email" />
//   //       {errors.email && <p>{errors.email}</p>}
//   //       <input type="password" value={password} onChange={(f) => setPassword(f.target.value)} placeholder="Password"/>
//   //       {errors.password && <p>{errors.password}</p>}
//   //       <button type="submit">Submit</button>
//   //     </form>
//   //   </div>
//   // );

//   //dynamic form fileds
//   //  const [fields, setFields] = useState([{ value: "" }]);

//   //  const handleChange = (i, event) => {
//   //    const values = [...fields];
//   //    values[i].value = event.target.value;
//   //    setFields(values);
//   //  };

//   //  const handleAdd = () => {
//   //    const values = [...fields];
//   //    values.push({ value: "" });
//   //    setFields(values);
//   //  };

//   //  const handleRemove = (i) => {
//   //    const values = [...fields];
//   //    values.splice(i, 1);
//   //    setFields(values);
//   //  };

//   //  return (
//   //    <div>
//   //      {fields.map((field, idx) => (
//   //        <div key={`${field}-${idx}`}>
//   //          <input
//   //            type="text"
//   //            value={field.value}
//   //            onChange={(e) => handleChange(idx, e)}
//   //          />
//   //          <button type="button" onClick={() => handleRemove(idx)}>
//   //            Remove
//   //          </button>
//   //        </div>
//   //      ))}
//   //      <button type="button" onClick={() => handleAdd()}>
//   //        Add Field
//   //      </button>
//   //    </div>
//   //  );

//   //debouced input
//   // const [value, setValue] = useState("");
//   // const [debouncedValue, setDebouncedValue] = useState(value);

//   // useEffect(() => {
//   //   const hanler = setTimeout(() => {
//   //     setDebouncedValue(value);
//   //   });
//   //   return () => {
//   //     clearTimeout(hanler);
//   //   };
//   // }, [value]);

//   // return (
//   //   <div>
//   //     <input
//   //       type="text"
//   //       value={value}
//   //       onChange={(e) => setValue(e.target.value)}
//   //     />
//   //     <p> Debounced value : {debouncedValue}</p>
//   //   </div>
//   // );

//   //Fetching data with loading state
//   // const [data, setData] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetch("http://api.example.com")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setData(data);
//   //       setLoading(false);
//   //     });
//   // }, []);

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }
//   // return (
//   //   <div>
//   //     <pre>{JSON.stringify(data, null, 2)}</pre>
//   //   </div>
//   // );

//   //undo/Redo State

//   // const[history,sethistory] = useState([{}]);
//   // const[index,setIndex] = useState(0);

//   // const addAction = (action) => {
//   //   const newHistory = history.slice(0,index +1);
//   //   sethistory([...newHistory,action]);
//   //   setIndex(newHistory.length);
//   // };

//   // const redo = () => {
//   //   if(index > history.length - 1) {
//   //     setIndex(index + 1);
//   //   }
//   // };
//   // return (

//   //   <div>
//   //     <button onClick={undo} disabled={index === 0}>Undo</button>
//   //     <button onClick={redo} disabled={index === history.length-1}>redo</button>
//   //     <pre>{JSON.stringify(history[index ])}</pre>
//   //   </div>
//   // );

//   //Dark Mode
//   // const [darkMode, setdarkMode] = useState(false);

//   // return (
//   //   <div
//   //     style={{
//   //       background: darkMode ? "#333" : "#fff",
//   //       color: darkMode ? "#fff" : "#000",
//   //     }}
//   //   >
//   //     <button onClick={() => setdarkMode(!darkMode)}>Toggle Dark Mode</button>

//   //     <p>Dark Mode is{darkMode ? "enabled" : "disabled"}</p>
//   //   </div>
//   // );

//   //controlled component with validation
//   //  function ControlledInput(){
//   //   const[value,setValue] = useState('');
//   //   const[error,setError]  = useState('');

//   //   const  validate = (value) => {
//   //     if(value.length < 5){
//   //       setError('value must be at least 5 characters');
//   //     }else{
//   //       setError('');
//   //     }
//   //   };

//   //  const handleChange = (g) => {
//   //   setValue(g.target.value);
//   //   validate(e.target.value);
//   //  }
//   //  return (
//   //   <div>
//   //     <input type="text" value={value} onChange={handleChange}/>
//   //     {error && <p>{error}</p>}
//   //   </div>
//   //  )
//   //  };

//   //custom hook for local storage
// //   function useLocalStorage(key, initialValue) {
// //     const [storedValue, setStoredValue] = useState(() => {
// //       try {
// //         const item = window.localStorage.getItem(key);
// //         return item ? JSON.parse(item) : initialValue;
// //       } catch (error) {
// //         console.error(error);
// //         return initialValue;
// //       }
// //     });
// //     const setValue = (value) => {
// //       try {
// //         setStoredValue(value);
// //         window.localStorage.setItem(key, JSON.stringify(value));
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     return [storedValue, setValue];
// //   }
// //   function LocalStorageComponent() {
// //     const [name, setName] = useLocalStorage("name", "");
// //     return (
// //       <div>
// //         <input
// //           type="text"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <p>Stored name:{name}</p>
// //       </div>
// //     );
// //   }

// const mainLinksMockdata = [
//   { icon: IconHome2, label: 'Home' },
//   { icon: IconGauge, label: 'Dashboard' },
//   { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
//   { icon: IconCalendarStats, label: 'Releases' },
//   { icon: IconUser, label: 'Account' },
//   { icon: IconFingerprint, label: 'Security' },
//   { icon: IconSettings, label: 'Settings' },
// ];

// const linksMockdata = [
//   'Security',
//   'Settings',
//   'Dashboard',
//   'Releases',
//   'Account',
//   'Orders',
//   'Clients',
//   'Databases',
//   'Pull Requests',
//   'Open Issues',
//   'Wiki pages',
// ];

// export function DoubleNavbar() {
//   const [active, setActive] = useState('Releases');
//   const [activeLink, setActiveLink] = useState('Settings');

//   const mainLinks = mainLinksMockdata.map((link) => (
//     <Tooltip
//       label={link.label}
//       position="right"
//       withArrow
//       transitionProps={{ duration: 0 }}
//       key={link.label}
//     >
//       <UnstyledButton
//         onClick={() => setActive(link.label)}
//         className={classes.mainLink}
//         data-active={link.label === active || undefined}
//       >
//         <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
//       </UnstyledButton>
//     </Tooltip>
//   ));

//   const links = linksMockdata.map((link) => (
//     <a
//       className={classes.link}
//       data-active={activeLink === link || undefined}
//       href="https://example.com"
//       onClick={(event) => {
//         event.preventDefault();
//         setActiveLink(link);
//       }}
//       key={link}
//     >
//       {link}
//     </a>
//   ));

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.wrapper}>
//         <div className={classes.aside}>
//           <div className={classes.logo}>
//             <MantineLogo type="mark" size={30} />
//           </div>
//           {mainLinks}
//         </div>
//         <div className={classes.main}>
//           <Title order={4} className={classes.title}>
//             {active}
//           </Title>

//           {links}
//         </div>
//       </div>
//     </nav>
//   );
// }




//  //}

// export default DoubleNavbar;
