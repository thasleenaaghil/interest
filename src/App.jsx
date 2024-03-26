
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  //state to hold value
   const[principle,setprinciple]=useState(0)
   const[rate,setrate]=useState(0)
   const[year,setyear]=useState(0)
   const[interest,setinterest]=useState(0)
//conditionally render
   const[Isprinciple,setIsprinciple]=useState(true)
   const[Israte,setIsrate]=useState(true)
   const[Isyear,setIsyear]=useState(true)

   
   

   const validate=(e)=>{
    const {name,value}=e.target 
    console.log(name);
    console.log(value);
    //regular
    
   /* console.log(!!value.match(/^[0-9]*$/));*/
   if(!!value.match(/^[0-9]*$/)){
          if(name=='principle'){
            setprinciple(value)
            setIsprinciple(true)
          }
          else if(name=='rate'){
            setrate(value)
            setIsrate(true)
          }else{
            setyear(value)
            setIsyear(true)
          }
    

   }else{
    if(name=='principle'){
      setprinciple(value)
      setIsprinciple(false)
    }
    else if(name=='rate'){
      setrate(value)
      setIsrate(false)
    }
    else{
      setyear(value)
      setIsyear(false)
    }

   }
    
   }
   //function to reset
   const handleReset=()=>{
   setprinciple(0)
   setrate(0)
   setyear(0)
   setIsprinciple(true)
   setIsrate(true)
   setIsyear(true)
   setinterest(0)
   }
   const handleCalculate=()=>{
   setinterest ((principle*rate*year)/100)
   }
  return (
    <>
      <div className='main'>
      <div className='sub p-5'> <h1>Simple Interest App</h1>
         <p>Calculate your simple interest easily </p>
         <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-5 shadow flex-column'> 
         <h1 >₹ {interest}</h1>
         <p>Total simple interest</p>
         </div>
         <form action="" className='mt-5'>
         <TextField id="outlined-basic" name='principle'value={principle||""} label="₹ Principle Amount" variant="outlined"className='w-100'onChange={(e)=>validate(e)} />
         {!Isprinciple && <p className='text-danger'>invalid input</p>}
         <TextField id="outlined-basic" name='rate'value={rate||""}  label="rate of Interest (p.a) %" variant="outlined"className='w-100 mt-3'onChange={(e)=>validate(e)} />
         {!Israte && <p className='text-danger'>invalid input</p>}
         <TextField id="outlined-basic"name='year'value={year||""}  label="Year (Yr)" variant="outlined"className='w-100 mt-3'onChange={(e)=>validate(e)} />
         {!Isyear && <p className='text-danger'>invalid input</p>}
         </form>
         <div className='d-flex mt-4 '>
         <Button variant="contained"className='w-50 p-3 me-3' color='success' disabled={Isprinciple && Israte && Isyear?false:true} onClick={handleCalculate}>Calculate</Button>
         <Button variant="outlined"className='w-50 p-3' color='primary'onClick={handleReset}>Reset</Button>
         </div>



      </div>
      </div>
    </>
  )
}

export default App
/*SI=PRY/100*/
