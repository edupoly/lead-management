import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useUserSignupMutation } from '../../services/leadsApi'

function Signup() {
    var navigate = useNavigate();
     var [userSignFn] = useUserSignupMutation();
    var initialValues = { username:'',password:'' }
    var onSubmit = (values)=>{
        console.log(values);
        userSignFn(values).then((res)=>console.log(res));
        navigate('/login')
    }
  return (
    <div>
      {/* <h2 className='d-flex' style={{marginTop:"120px",marginLeft:"694px"}}>SIGN UP</h2> */}
      <Formik initialValues={initialValues}  onSubmit={onSubmit}>
        {
            ()=>{
                return <div className='border border-secondary rounded p-4 w-25 shadow' style={{marginLeft:'568px',marginTop:"140px"}}>
                  <h2 style={{marginLeft:'110px'}}>SIGN UP</h2>
                  <Form>
                    <Field name='username' className='form-control p-2 mt-3'/><br />
                    <Field name='password' className='form-control '/><br />
                    
                      <button className='btn btn-info w-100 mb-2'>Sign up</button>
                      <h6>Have an account ? <Link to='/login' className='text-decoration-none'>Login</Link></h6>
                    
                  </Form>
                </div>
            }
        }
      </Formik>
      
    </div>
  )
}

export default Signup
