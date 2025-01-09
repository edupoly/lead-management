import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777' }),
  endpoints: (builder) => ({
    getLogin: builder.query({
      query: () => `/`,
    }),
    addUser:builder.mutation({
      query:(user) =>({
        url:'/login',
        method:'POST',
        body:user
      })
    }),
    userSignup:builder.mutation({
        query:(user) =>({
          url:'/signup',
          method:'POST',
          body:user
      })
    }),
    addLead:builder.mutation({
      query:(lead) =>({
        url:'/addlead',
        method:'POST',
        body:lead,
        headers:{
          authorization:window.localStorage.getItem('token')
        }
      })
    }),
    getLeads:builder.query({
        query:()=>({
            url:'',
            headers:{
                authorization:window.localStorage.getItem('token')
            }
        })
    }),
    deleteLead:builder.mutation({
      query:(id)=>({
          url:`/deletelead/${id}`,
          method:'DELETE',
          headers:{
            authorization:window.localStorage.getItem('token')
          }
      })
    }),
    editLead:builder.mutation({
      query:(id)=>({
          url:`/addremark/${id}`,
          method:'PUT',
          headers:{
            authorization:window.localStorage.getItem('token')
          }
      })
    }),
    getLeadDetailsById:builder.query({
      query:(id)=>({
        url:`/leaddetails/${id}`,
        headers:{
          authorization:window.localStorage.getItem('token')
        }
      })
    }),
    addLeadRemark:builder.mutation({
      query:({values,id})=>({
          url:`/addremark/${id}`,
          method:'PUT',
          body:values,
          headers:{
            authorization:window.localStorage.getItem('token')
          }
      })
    }),
  }),
})


export const { useGetLoginQuery,useAddUserMutation,useUserSignupMutation,useGetLeadsQuery,useAddLeadMutation,useDeleteLeadMutation,useGetLeadDetailsByIdQuery,useAddLeadRemarkMutation,useLazyGetLeadsQuery } = leadsApi