import React, { useState } from 'react'

export default function Main() {


   const[username , setusername]=useState('')
   const[email , setemail]=useState('')
   const[password , setpassword]=useState('')
   const[confirmpassword , setconfirmpassword]=useState('')


   const[errorusername , seterrorusername]=useState('')
   const[errorpassword , seterrorpassword]=useState('')
   const[erroremail , seterroremail]=useState('')
   const[errorconfirmpassword , seterrorconfirmpassword]=useState('')

   const[usercolor , setusercolor]=useState('')
   const[emailcolor , setemailcolor]=useState('')
   const[passwordcolor , setpasswordcolor]=useState('')
   const[confirmpassowrdcolor , setconfirmpasswordcolor]=useState('')




   function validate()
   {
    
       if(username.length > 8)
       {
           seterrorusername('')
           setusercolor('green')
       }
       else{
           seterrorusername('username must be 8 letters long')
           setusercolor('red')
       }


       if(email.includes('@gmail'))
       {
           seterroremail('')
           setemailcolor('green')
       }
       else{
           setemailcolor('red')
           seterroremail('email should have @gmail')
       }

       if(password.length >8 )
       {
           seterrorpassword('')
           setpasswordcolor('green')
       }
       else{
           seterrorpassword('password should be 8 letters long ')
           setpasswordcolor('red')
       }


       if(password!='' && password == confirmpassword)
       {
           seterrorconfirmpassword('')
           setconfirmpasswordcolor('green')
       }
       else{
           seterrorconfirmpassword('passwords not matched')
           setconfirmpasswordcolor('red')
       }

   }



    return (
        <div>
            
            <div className="row justify-content-center">

                 <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

                     <h1>Form Validation</h1>

                     <input type="text" placeholder='username' className='form-control' style={{borderColor:usercolor}}
                     value={username} onChange={(e)=>{setusername(e.target.value)}}
                     />
                     <p>{errorusername}</p>
                     
                     <input type="text" placeholder='email' className='form-control' style={{borderColor:emailcolor}}
                     value={email} onChange={(e)=>{setemail(e.target.value)}}
                     />

                     <p>{erroremail}</p>

                     <input type="password" placeholder='password' className='form-control' style={{borderColor:passwordcolor}}
                     value={password} onChange={(e)=>{setpassword(e.target.value)}}
                     />

                     <p>{errorpassword}</p>

                     <input type="password" placeholder='confirm password' className='form-control' style={{borderColor:confirmpassowrdcolor}}
                     value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}}
                     />

                      <p>{errorconfirmpassword}</p>

                     <button className='btn btn-success' onClick={validate}>SUBMIT</button>


                 </div>

            </div>

        </div>
    )
}
