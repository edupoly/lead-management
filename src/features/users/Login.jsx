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
                  <h2 className='text-center'>LOGIN</h2>
                  <Form>
                    {/* <Field name='username' className='form-control p-2 mt-3'/><br /> */}
                    <div className="form-floating mb-3 col">
                        <Field type="text" className="form-control" name='username' id="username" placeholder="username"/>
                        <label htmlFor="username">User Name</label>
                    </div>
                    <div className="form-floating mb-3 col">
                        <Field className="form-control" name='password' type="password" id="password" placeholder="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* <Field name='password' type='password' className='form-control p-2'/><br /> */}
                      <button className='btn btn-info w-100 text-light fs-5 fw-semibold mb-2'>Login</button>
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
