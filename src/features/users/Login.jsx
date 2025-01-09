import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useAddUserMutation } from '../../services/leadsApi'

function Login() {
    var navigate = useNavigate();
    var [addUserFn] = useAddUserMutation();
    var initialValues = { username:'',password:'' }
    var onSubmit = (values)=>{ 
        console.log(values); 
        addUserFn(values).then((res)=>{ window.localStorage.setItem('token',res.data.token);
           if(res.data.msg=="loginsuccess"){
            navigate("/dashboard")
          }
          else{
            navigate("/")
          }});
     }
    
  return (
    <div>
      {/* <h2 className='d-flex' style={{marginTop:"120px",marginLeft:"700px"}}>LOGIN</h2> */}
      <Formik initialValues={initialValues}  onSubmit={onSubmit}>
        {
            ()=>{
                return <div className='border border-secondary rounded p-4 w-25 shadow' style={{marginLeft:'568px',marginTop:'140px'}}>
                  <h2 style={{marginLeft:'110px'}}>LOGIN</h2>
                  <Form>
                    <Field name='username' className='form-control p-2 mt-3'/><br />
                    <Field name='password' className='form-control p-2'/><br />
                    
                      <button className='btn btn-info w-100 mb-2'>Login</button>
                      <h6>Don't have an account ? <Link to='/signup' className='text-decoration-none'>Signup</Link></h6>
                    
                  </Form>
                </div>
            }
        }
      </Formik>
      
    </div>
  )
}

export default Login
