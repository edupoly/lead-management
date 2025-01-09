import React from 'react'
import { useGetLeadDetailsByIdQuery } from '../services/leadsApi'
import { Link, useParams } from 'react-router-dom';

function LeadDetails() {
    var {id} = useParams();
    console.log({id})
   var {isLoading,data} =  useGetLeadDetailsByIdQuery(id);
   console.log(isLoading,data)
  return (
    <div>
        <Link to={`/dashboard/addremark/${id}`}><button className='btn btn-outline-primary ms-2 mb-2'>Add Remarks</button></Link>
        <h5 className='d-flex justify-content-center'> LEAD DETAILS </h5>
        
      
      {
        !isLoading && (<div className='d-flex container'>
            <div className='w-50 border border-secondary rounded p-2 me-2 shadow' style={{background: 'linear-gradient(109.6deg, rgb(185, 212, 242) 11.2%, rgb(244, 210, 226) 100.3%)'}}>
              <ul className='list-group'>
                <h5 className='list-group-item'>Name : {data.name}</h5>
                <h5 className='list-group-item'>Academics : {data.academics}</h5>
                <h5 className='list-group-item'>Course : {data.intrestedCourse}</h5>
              </ul>
              {/* <p>{data.email}</p>
              <p>{data.experience}</p> */}
            </div>
            <div className='w-50 border border-primary rounded p-2 shadow' style={{background: 'linear-gradient(109.6deg, rgb(185, 212, 242) 11.2%, rgb(244, 210, 226) 100.3%)'}}>
              {
                data?.remarks.map((r)=>{
                    return <li className='list-unstyled'>
                             <div>
                                {
                                    typeof(r) ==='string' && <p style={{backgroundColor:'#40E0D0'}} className='p-2 rounded'>{r}</p>
                                }
                             </div>
                             <div>
                                {
                                    typeof(r)==='object'&& <div className='d-flex justify-content-between mb-2 border border-light rounded p-1'>
                                      <div className='p-2 rounded' style={{backgroundColor:'#b9edee'}}>{r.response}</div>
                                      <div className='p-2 rounded' style={{backgroundColor:'#FFA07A'}}>{r.name}</div>
                                      <div className='p-2 rounded' style={{backgroundColor:'#79d666'}}>
                                            {new Date(r.timestamp).toLocaleTimeString()} &nbsp;&nbsp;
                                            {new Date(r.timestamp).toLocaleDateString()}
                                      </div>
                                    </div>
                                }
                             </div>
                           </li>
                })
              }
            </div>
        </div>)
      }
    </div>
  )
}

export default LeadDetails
