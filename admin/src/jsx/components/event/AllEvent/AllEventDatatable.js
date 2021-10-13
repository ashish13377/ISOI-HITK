import React, { useState, useRef, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";

import data from "./eventstableData.js";
import { Link } from "react-router-dom";
import { setfreeEvents, setPaidEvents } from "../../../../redux/actions/index"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const AllEventDatatable = () => {
   const sort = 5;
   let jobPaggination = Array(Math.ceil(data.jobsTable.data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   const activePag = useRef(0);
   const jobData = useRef(
      data.jobsTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      )
   );
   const [setdemo] = useState();
   const onClick = (i) => {
      activePag.current = i;

      jobData.current = data.jobsTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      );
      setdemo(
         data.jobsTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
         )
      );
   };


   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false);



   useEffect(() => {
      dispatch(setfreeEvents());
      dispatch(setPaidEvents());
   }, [])

   const fevents = useSelector(state => state.freeEvents)
   console.log(fevents);
   const mevents = useSelector(state => state.paidEvent)
   console.log(mevents);



   return (
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">All Events Details</h4>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <div className="p-3">
                        <h4 className="h3 text-primary">Free Events</h4>
                     </div>
                     <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr role="row">
                              {data.jobsTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>

                        <tbody>
                           {fevents.map((currElem) => (
                              <tr key={currElem._id}>
                                 <td key={currElem._id}>{currElem.eventName}</td>
                                 <td key={currElem._id}>{currElem.eventDate}</td>
                                 <td key={currElem._id}>2</td>
                              </tr>
                           ))}
                        </tbody>
                       {!fevents && <p className="h4 m-4 ">No any Event's exist!</p>}
                        <tfoot>
                           <tr role="row">
                              {data.jobsTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </tfoot>
                     </table>
                  </div>
               </Table>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <div className="p-3">
                        <h4 className="h3 text-primary">Membership Events</h4>
                     </div>
                     <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr role="row">
                              {data.jobsTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {mevents.map((currElem) => (
                              <tr key={currElem._id}>
                                 <td key={currElem._id}>{currElem.eventName}</td>
                                 <td key={currElem._id}>{currElem.eventDate}</td>
                                 <td key={currElem._id}>23</td>
                              </tr>
                           ))}
                        </tbody>
                        {!mevents && <p className="h4 m-4 ">No any Event's exist!</p>}
                        <tfoot>
                           <tr role="row">
                              {data.jobsTable.columns.map((d, i) => (
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

export default AllEventDatatable;
