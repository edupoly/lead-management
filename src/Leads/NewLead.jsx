import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useAddLeadMutation, useLazyGetLeadsQuery } from '../services/leadsApi';
import { useNavigate } from 'react-router-dom';

function NewLead() {
  var navigate = useNavigate();
  var [getAllLeadsFn] = useLazyGetLeadsQuery();
  var [addleadFn] =  useAddLeadMutation();
  var initialValues = {
    name:String,
    experience:String,
    intrestedCourse:String,
    mode:String,
    academics:String,
    mobile:Number,
    email:String,
    address:String,
    referredBy:String,
    remarks:Array
  };
  var onSubmit = (values) => { addleadFn(values).then((res)=>{console.log(res)}); navigate('/dashboard/'); getAllLeadsFn(); }
  return (
    <div className='container'>
      <h2 style={{marginLeft:'580px',marginBottom:'20px'}}>NEW LEAD</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {
            ()=>{
                return <div style={{width:'70%',marginLeft:'200px'}}>
                    <Form >
                        <div className='row row-cols-1 row-cols-lg-2'>
                            <div className="form-floating mb-3 col">
                                <Field type="text" className="form-control" name='name' id="name" placeholder="Username"/>
                                <label htmlFor="name">Name</label>
                            </div>

                            {/* <div className='d-flex'> */}
                                <div className="form-floating mb-3 col">
                                    <Field type="email" className="form-control" name='email' id="email" placeholder="Username"/>
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="form-floating mb-3 col">
                                    <Field type="number" className="form-control" name='mobile' id="mobile" placeholder="Username"/>
                                    <label htmlFor="mobile">Mobile</label>
                                </div>
                            {/* </div> */}

                            <div className="form-floating mb-3 col">
                                <Field type="text" className="form-control" name='address' id="address" placeholder="Username"/>
                                <label htmlFor="address">Address</label>
                            </div>

                            <div className="form-floating mb-3 col">
                                <Field type="text" className="form-control" name='intrestedCourse' id="intrestedCourse" placeholder="Username"/>
                                <label htmlFor="intrestedCourse">Interested Course</label>
                            </div>
                    
                                <div className="form-floating mb-3 col" >
                                    <Field type="text" className="form-control" name='experience' id="experience" placeholder="Username"/>
                                    <label htmlFor="experience">Experience</label>
                                </div>
                            
                                <div className="form-floating mb-3 col" >
                                    <Field type="text" className="form-control" name='mode' id="mode" placeholder="Username"/>
                                    <label htmlFor="mode">Mode</label>
                                </div>
                            
                                <div className="form-floating mb-3 col">
                                    <Field type="text" className="form-control" name='academics' id="academics" placeholder="Username"/>
                                    <label htmlFor="academics">Academics</label>
                                </div>
                       
                                <div className="form-floating mb-3 col">
                                    <Field type="text" className="form-control" name='referredBy' id="referredBy" placeholder="Username"/>
                                    <label htmlFor="referredBy">Referred By</label>
                                </div>
                    
                                <div className="form-floating mb-3 col">
                                    <Field type="text" className="form-control" name='remarks' id="remarks" placeholder="Username"/>
                                    <label htmlFor="remarks">Remarks</label>
                                </div>
                            </div>
                        <button className='btn btn-info text-light fw-semibold float-end'>Submit</button>
                    </Form>
                </div>
            }
          } 
      </Formik>
    </div>
  )
}

export default NewLead
