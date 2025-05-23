import React, { useState } from 'react'
import { useDeleteLeadMutation, useGetLeadsQuery, useLazyGetLeadsQuery } from '../services/leadsApi';
import { Link } from 'react-router-dom';

function LeadBoard() {
    var [search,setSearch] = useState('');
    var {isLoading,data} = useGetLeadsQuery();
    var [getAllLeadsFn] = useLazyGetLeadsQuery();
    console.log(isLoading,data)
     const [deleteFn] = useDeleteLeadMutation();
    function deleteLead(id){
        deleteFn(id).then((res)=>{console.log(res)

          getAllLeadsFn();
        })
    }

    function editLead(id){
        data?.map((a)=>{
            if(a._id == id){
                console.log(a)
            }
            return a;
        })
    }
   
    function filterLeads(l){
      console.log("Lead:",l)
      return l.intrestedCourse.toLowerCase().includes(search.toLowerCase())
      
    }

    var filteredLeads = data?.filter(filterLeads);
  return (
    <div className='table-responsive'>
      {/* <input type="text" className='form-control mb-2 mt-1 w-25' style={{marginLeft:'550px'}} value={search} onChange={(e)=> setSearch(e.target.value)} /> */}
      <table className='table table-bordered container text-center shadow'>
        <thead>
            <tr>
                <th className='bg-secondary text-light'>Id</th>
                <th className='bg-secondary text-light'>Name</th>
                <th className='bg-secondary text-light'>Course</th>
                <th className='bg-secondary text-light d-none d-md-table-cell'>Mobile</th>
                <th className='bg-secondary text-light d-none d-md-table-cell'>Academics</th>
                <th className='bg-secondary text-light d-none d-md-table-cell'>Experience</th>
                <th className='bg-secondary text-light' colSpan={2}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                isLoading && <h4>Loading...</h4>
            }
            { 
              !isLoading &&  filteredLeads?.map((d,i)=>{
                    return <tr key={i}>
                              <td>{d._id}</td>
                              <td>{d.name.toUpperCase()}</td>
                              <td>{d.intrestedCourse}</td>
                              <td className='d-none d-md-table-cell'>{d.mobile}</td>
                              <td className='d-none d-md-table-cell'>{d.academics}</td>
                              <td className='d-none d-md-table-cell'>{d.experience}</td>
                              <td className='d-flex gap-2'>
                                <button className='btn btn-danger' onClick={()=>{deleteLead(d._id)}}><i class="bi bi-x-square"></i></button>
                                {/* <Link to='/dashboard/edit'><button className='btn btn-primary ms-2' onClick={()=>{editLead(d._id)}}>Edit</button></Link> */}
                                <Link to={`/dashboard/leaddetails/${d._id}`}><button className='btn btn-info ms-2'><i class="bi bi-three-dots"></i></button></Link>
                              </td>
                           </tr>
                })
            }
            
        </tbody>
      </table>
    </div>
  )
}

export default LeadBoard
