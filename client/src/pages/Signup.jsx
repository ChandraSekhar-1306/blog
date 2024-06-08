import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { Button, Label, TextInput, Alert, Spinner } from 'flowbite-react'
import OAuth from '../components/OAuth';


export default function Signup() {
  const[formData , setFormData] = useState({})
  const[errorMessage  , setErrorMessage] = useState(null);
  const[loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    // console.log(e.target.value);
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }
  // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   try{
  //     const res = await fetch('/api/auth/signup',{
  //       method:'POST',
  //       headers:{'Content-Type':'application/json'},
  //       body: JSON.stringify(formData)
  //     })
  //     const data = await res.json(); 
  //   } catch(error){

  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password )
      return setErrorMessage('Please fill out all the fields')
    // console.log('Form data:', formData); // Add logging to check form data
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        return setErrorMessage('username or email already exists.');
      }
      if(res.ok){
        navigate('/sign-in')
        
      }
      // console.log('Response data:', data); // Add logging to check response data
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };



  return (
    <div className='min-h-screen mt-20'>

      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">


      <div className="flex-1">
        <Link to="/" className='  font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 rounded-lg text-white'>CS's</span> 
        Blog
      </Link>
      <p className='text-sm mt-5'>
        A fully functional full stack blog application created with MERN stack. Sign up to continue.
      </p>
      </div>


          {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="">
              <Label value='Your Username' />
              <TextInput type='text' placeholder='Username' id='username'  onChange={handleChange}/>
            </div>
            <div className="">
              <Label value='Your Email' />
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>
            <div className="">
              <Label value='Your Password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
             {
              loading ? (
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
              ) : 'Sign Up'
             }
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
            Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }



        </div>



      </div>
      
    </div>
  )
}
