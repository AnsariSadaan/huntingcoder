import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'




const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("thanks for contacting us")
        setname('')
        setemail('')
        setphone('')
        setdesc('')
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }

  return (

    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlable}>Name</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange} required id="name" name='name' aria-describedby="nameHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="Email" className={styles.formlable}>Email address</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange} required id="email" name='email' aria-describedby="emailHelp" />
          <divrequired id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</divrequired>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlable}>Phone</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} required id="phone" name='phone' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlable}>Elaborate your concren</label>
          <textarea className={styles.input} value={desc} onChange={handleChange} name='desc' required id="desc" />
        </div>
        <button className={styles.btn} type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Contact
