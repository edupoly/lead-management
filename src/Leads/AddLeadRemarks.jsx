import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useAddLeadRemarkMutation, useLazyGetLeadsQuery } from '../services/leadsApi'
import { useNavigate, useParams } from 'react-router-dom';
function AddLeadRemarks() {
    var navigate = useNavigate();
    var {id} = useParams();
    var [addRemarkFn] = useAddLeadRemarkMutation();
    // var [getLeadsDetailsFn] = useLazyGetLeadsQuery();
     var navigate=useNavigate()
    var initialValues = { response:'',name:'' }
    var onSubmit = (values)=>{
        console.log(values);
        addRemarkFn({values,id}).then((res)=>{console.log(res)});
        navigate(`/dashboard/leaddetails/${id}`)
        
    }
  return (
    <div>
      <Formik initialValues={initialValues}  onSubmit={onSubmit}>
        {
            ()=>{
                return <div className='border border-secondary rounded p-4 w-50 shadow' style={{marginLeft:'380px'}}>
                  <h3 className='d-flex justify-content-center'>ADD REMARKS</h3>
                  <Form>
                    <Field name='response' className='form-control p-2 mt-3' placeholder="type of  Reason"   /><br /><br />
                    <Field name='name' className='form-control p-2' placeholder='Enter your Name'  /><br />
                    <button className='btn btn-success px-5' style={{marginLeft:'290px'}}>Submit</button>
                  </Form>
                </div>
            }
        }
      </Formik>
    </div>
  )
}

export default AddLeadRemarks
