import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from 'react'



function App() {
  const[queryDescription, setQueryDescription] = useState("")

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log('form submiited: ', queryDescription);
  }
  

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt='' className={styles.icon}/>
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input
        type = "text"
        name="query description"
        placeholder='Enter to describe the query'
        onChange={(e)=>setQueryDescription(e.target.value)}/>

        <input type ='submit' value='Click to generate query '/>
      </form>


    </main>
  )
}

export default App
