import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';



export default function SignIn() {

  const [formData, setFormData] = useState({});
const {loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
    const handleSubmit = async (e) =>{
      e.preventDefault();

      if (!formData.email || !formData.password){
        return dispatch(signInFailure('Please fill out all the fields'));
      }
      try {
        dispatch(signInStart());
        const res = await fetch ('/api/auth/signin', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.success === false){
          dispatch(signInFailure(data.message))
        }

        if (res.ok) {
          dispatch(signInSuccess(data))
          navigate('/');
        }
      } catch (error) {
        dispatch(signInFailure(error.message))
      }
    }
  return (
    <div className='min-h-screen mt-20'>
      <div className = "flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left side */}
        <div className ="flex-1">
        <Link to ="/" className ="font-bold dark:text-white text-white text-4xl">
            <span className ='px-2 py-1 bg-gradient-to-r from-indigo-600 tex via-purple-500 to-pink-500 rounded-lg my-3'> Gabriel's</span><p className ="font-bold dark:text-white text-black text-4xl my-2">Blog</p>
        </Link>
        <p className='text-sm mt-5'>This is a Demo project. You can sign in with your email<br/> and Password or with Goodle</p>
        </div>
         {/* right side */}
         <div className ="mx-10 flex-1">
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value='Your Email'></Label>
                <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}></TextInput>
              </div>
              <div>
                <Label value='Your Password'></Label>
                <TextInput type='password' placeholder='***********' id='password' onChange={handleChange}></TextInput>
              </div>
              <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-4 mt-4 text-white font-bold' type = 'submit' disabled = {loading}>
                {loading ? (
                  <>
                  <Spinner size = 'sm' />
                  <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign In'
                }
              </button>
            </form>
            <div className='mt-5 flex gap text-sm'>
              <span>Don't have an account?</span>
              <Link to ='/sign-up' className='text-blue-500'>Sign Up</Link>
            </div>
            {
              errorMessage &&(
                <Alert className='mt-4 bg-red-600 text-white'>
                  {errorMessage}
                </Alert>
              )
            }
          </div>
      </div>
    </div>
  )
}
