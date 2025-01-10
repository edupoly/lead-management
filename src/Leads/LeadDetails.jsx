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
      <div className='d-flex justify-content-around'>

        <h5 className=''> LEAD DETAILS </h5>
        <Link to={`/dashboard/addremark/${id}`}><button className='btn btn-outline-primary ms-2 mb-2'>Add Remarks</button></Link>
        
      </div>
      
      {
        !isLoading && (<div className='   d-flex container'>
            <div className=' card w-50  p-2 me-2 shadow' style={{background:'white'}}>
              <ul className='list-group'>
                <h5 className='list-group-item'>Name : {data.name}</h5>
                <h5 className='list-group-item'>Academics : {data.academics}</h5>
                <h5 className='list-group-item'>Course : {data.intrestedCourse}</h5>
                <h5 className='list-group-item'>Moblie Number  : {data.mobile}</h5>
                <h5 className='list-group-item'>Email   : {data.email}</h5>
                <h5 className='list-group-item'>Mode   : {data.mode}</h5>
                <h5 className='list-group-item'>Address   : {data.address}</h5>
              </ul>
              {/* <p>{data.email}</p>
              <p>{data.experience}</p> */}
            </div>
            <div className='w-50 border border-primary rounded p-2 shadow bg-light' style={{background: 'white'}}>
              {
                data?.remarks.map((r)=>{
                    return <li className='list-unstyled'>
                             <div>
                                {
                                    typeof(r) ==='string' && <p style={{backgroundColor:'white'}} className='p-2 rounded'>{r}</p>
                                }
                             </div>
                             <div>
                                {
                                    typeof(r)==='object'&& <div className='d-flex justify-content-between mb-2 border border-light rounded p-1'>
                                      <div className='p-2 rounded text-dark' style={{backgroundColor:'white'}}>{r.response}</div>
                                      <div className='p-2 rounded text-dark' style={{backgroundColor:'white'}}>{r.name}</div>
                                      <div className='p-2 rounded text-dark' style={{backgroundColor:'white'}}>
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
