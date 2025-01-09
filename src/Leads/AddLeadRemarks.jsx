import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useAddLeadRemarkMutation, useLazyGetLeadsQuery } from '../services/leadsApi'
import { useNavigate, useParams } from 'react-router-dom';
function AddLeadRemarks() {
    var navigate = useNavigate();
    var {id} = useParams();
    var [addRemarkFn] = useAddLeadRemarkMutation();
    // var [getLeadsDetailsFn] = useLazyGetLeadsQuery();
    var initialValues = { response:'',name:'' }
    var onSubmit = (values)=>{
        console.log(values);
        addRemarkFn({values,id}).then((res)=>{console.log(res)});
        
    }
  return (
    <div>
      <Formik initialValues={initialValues}  onSubmit={onSubmit}>
        {
            ()=>{
                return <div className='border border-secondary rounded p-4 w-50 shadow' style={{marginLeft:'380px'}}>
                  <h3 className='d-flex justify-content-center'>ADD REMARKS</h3>
                  <Form>
                    <Field name='response' className='form-control p-2 mt-3'/><br /><br />
                    <Field name='name' className='form-control p-2'/><br />
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
