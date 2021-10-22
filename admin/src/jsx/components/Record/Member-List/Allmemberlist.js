import React, { Fragment, useState, useRef, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./MemberData";

const Allmemberlist = () => {

   const [member, setMember] = useState();
   // const [loading ,setLoading] 

   useEffect(() => {
      fetch("https://isoi-backend.herokuapp.com/api/admin/getallmembers", {
         method: "GET",
         headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
         }
      }).then(res => res.json())
         .then(data => {
            setMember(data)
         }).catch((e) => {
            alert(e);
         })
   }, [])

   console.log(member);

   const sort = 10;
   let jobPagination = Array(Math.ceil(data.profileTable.data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   const activePag = useRef(0);
   const jobData = useRef(
      data.profileTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      )
   );
   const [setdemo] = useState();
   const onClick = (i) => {
      activePag.current = i;

      jobData.current = data.profileTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      );
      setdemo(
         data.profileTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
         )
      );
   };
   return (
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Members Profile Data</h4>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {member && member.map((currElem) => (
                              <tr key={currElem._id}>
                                 <td key={currElem._id}><img
                                    className="rounded-circle"
                                    width="90"
                                    src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
                                    alt=""
                                 /></td>
                                 <td key={currElem._id}>{currElem.fName} {currElem.mName} {currElem.lName}</td>
                                 <td key={currElem._id}>{currElem.year ? currElem.year : "NA"}</td>
                                 <td key={currElem._id}>{currElem.gender}</td>
                                 <td key={currElem._id}>{currElem.duration}</td>
                                 <td key={currElem._id}>{currElem.phone}</td>
                                 <td key={currElem._id}>{currElem.email}</td>
                                 <td key={currElem._id}>{currElem.createdAt}</td>
                              </tr>
                           ))}
                           {/* {jobData.current.map((d, i) => (
                              <tr key={i}>
                                 {d.map((da, i) => (
                                    <Fragment key={i}>
                                       <td>
                                          {i === 0 ? (
                                             <img
                                                className="rounded-circle"
                                                width="90"
                                                src={da}
                                                alt=""
                                             />
                                          ) : (
                                             <Fragment>
                                                {da}
                                                {i === 8 && (
                                                   <div className="d-flex">
                                                      <Link
                                                         to="#"
                                                         className="btn btn-primary shadow btn-xs sharp mr-1"
                                                      >
                                                         <i className="fa fa-pencil"></i>
                                                      </Link>
                                                      <Link
                                                         to="#"
                                                         className="btn btn-danger shadow btn-xs sharp"
                                                      >
                                                         <i className="fa fa-trash"></i>
                                                      </Link>
                                                   </div>
                                                )}
                                             </Fragment>
                                          )}
                                       </td>
                                    </Fragment>
                                 ))}
                              </tr>
                           ))} */}
                        </tbody>
                        <tfoot>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </tfoot>
                     </table>
                  </div>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default Allmemberlist;
