import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useAddLeadMutation } from '../services/leadsApi';

function EditLead() {
 // var [addleadFn] =  useAddLeadMutation();
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
  var onSubmit = (values) => {  }
  return (
    <div className='container'>
      <h2>Edit Lead</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {
            ()=>{
                return <Form>
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='name' id="name" placeholder="Username"/>
                                <label htmlFor="name">Name</label>
                            </div>
                    
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='experience' id="experience" placeholder="Username"/>
                                <label htmlFor="experience">Experience</label>
                            </div>
                        
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='intrestedCourse' id="intrestedCourse" placeholder="Username"/>
                                <label htmlFor="intrestedCourse">Interested Course</label>
                            </div>
                        
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='mode' id="mode" placeholder="Username"/>
                                <label htmlFor="mode">Mode</label>
                            </div>
                        
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='academics' id="academics" placeholder="Username"/>
                                <label htmlFor="academics">Academics</label>
                            </div>
                      
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='mobile' id="mobile" placeholder="Username"/>
                                <label htmlFor="mobile">Mobile</label>
                            </div>
                        
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='email' id="email" placeholder="Username"/>
                                <label htmlFor="email">Email</label>
                            </div>
                       
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='address' id="address" placeholder="Username"/>
                                <label htmlFor="address">Address</label>
                            </div>
                       
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='referredBy' id="referredBy" placeholder="Username"/>
                                <label htmlFor="referredBy">Referred By</label>
                            </div>
                
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" name='remarks' id="remarks" placeholder="Username"/>
                                <label htmlFor="remarks">Remarks</label>
                            </div>
                        <button className='btn btn-secondary'>Update</button>
                       </Form>
            }
          } 
      </Formik>
    </div>
  )
}

export default EditLead
