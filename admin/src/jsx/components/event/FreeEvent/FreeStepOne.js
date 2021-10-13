import React, { useState } from "react";
import MemberMetarialTime from "../MemberEvent/MemberMetarialTime";
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from "axios";

const FreeStepOne = () => {

   


   const [eventName, setEventName] = useState();
   const [eventDescription, setEventDescription] = useState();
   const [eventPoster, setEventPoster] = useState();
   const [date, setDate] = useState();
   const [time, setTime] = useState();
   const [venue, setVenue] = useState();
   const [contactName, setContactName] = useState();
   const [contactEmail, setContactEmail] = useState();
   const [contactPhone, setContactPhone] = useState();
   const [contactDesignation, setContactDesignation] = useState();


   const imageUpload = (e) => {
      console.log(e.target.files[0]);
      setEventPoster(e.target.files[0]);
   }



   const sendData = async (e) => {
      e.preventDefault();

      const d = new Date(date);
      const t = new Date(time);
      const eventDate = d.toLocaleDateString();
      const eventTime = t.toLocaleTimeString();

      console.log(eventPoster + "=" + eventPoster.name);
      const formdata = new FormData();
      formdata.append("myFile", eventPoster, eventPoster.name);
      formdata.append("eventName", eventName)
      formdata.append("eventDescription", eventDescription)
      formdata.append("eventDate", eventDate)
      formdata.append("eventTime", eventTime)
      formdata.append("venue", venue)
      formdata.append("contactName", contactName)
      formdata.append("contactEmail", contactEmail)
      formdata.append("contactPhone", contactPhone)
      formdata.append("contactDesignation", contactDesignation)


      

      const headers = {
         "Content-Type": "application/json",
         "Authorization": "Bearer " + localStorage.getItem("jwt")
      }

      try {
         const res = await axios.post("https://isoi-backend.herokuapp.com/api/admin/free-event", formdata, { headers: headers });

         if (res.status == 201) {
            alert("Event Created!")

         } else {
            alert("Something went wrong!")
         }

      } catch (error) {
         alert("Something went wrong!");
      }


   }

   return (
      <section>
         <div className="row">
            <div className="p-3">
               <h4 className="h2 text-primary">Event Info</h4>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Name*</label>
                  <input
                     type="text"
                     name="eventName"
                     className="form-control"
                     onChange={(e) => setEventName(e.target.value)}
                     value={eventName}
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Description*</label>
                  <textarea style={{ marginTop: "0px", marginBottom: "0px", height: "158px" }} type="textarea"
                     className="form-control"
                     onChange={(e) => setEventDescription(e.target.value)}
                     value={eventDescription}
                     name="eventDescription"
                  >

                  </textarea>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Poster*</label>
                  <input style={{ paddingTop: "13px", content: "Select some files", }}
                     type="file"
                     name="myFile"
                     className="form-control"
                     required
                     onChange={imageUpload}
                  />
               </div>
            </div>
            <div className="p-3">
               <h4 className="h2 text-primary">Event Details</h4>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Date*</label>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <DatePicker
                        autoOk
                        label=""
                        name="eventDate"
                        clearable
                        format="dd/MM/yyyy"
                        value={date}
                        onChange={setDate}
                     />
                  </MuiPickersUtilsProvider>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Time*</label>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <TimePicker
                        autoOk
                        label=""
                        name="eventTime"
                        value={time}
                        onChange={setTime}
                     />
                  </MuiPickersUtilsProvider>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Venue*</label>
                  <input
                     type="text"
                     name="venue"
                     className="form-control"
                     onChange={(e) => setVenue(e.target.value)}
                     value={venue}
                     required
                  />
               </div>
            </div>
            <div className="p-3">
               <h4 className="h2 text-primary">Contact Details</h4>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Contact Name*</label>
                  <input
                     type="text"
                     name="contactName"
                     className="form-control"
                     onChange={(e) => setContactName(e.target.value)}
                     value={contactName}
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Cantact Email*</label>
                  <input
                     type="email"
                     name="contactEmail"
                     id="inputGroupPrepend2"
                     aria-describedby="inputGroupPrepend2"
                     className="form-control"
                     onChange={(e) => setContactEmail(e.target.value)}
                     value={contactEmail}
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Contact Phone*</label>
                  <input
                     type="text"
                     name="contactPhone"
                     className="form-control"
                     onChange={(e) => setContactPhone(e.target.value)}
                     value={contactPhone}
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Contact Designation*</label>
                  <input
                     type="text"
                     name="contactDesignation"
                     className="form-control"
                     onChange={(e) => setContactDesignation(e.target.value)}
                     value={contactDesignation}
                     required
                  />
               </div>
            </div>
            <button onClick={sendData} style={{
               background: "#DD2F6E",
               borderWidth: "0px",
               color: "#fff",
               borderRadius: "4px",
               fontSize: "17px",
               fontWeight: "600",
               padding: "0.55em 2em",
               marginLeft: "1rem"
            }}>Create Event</button>
         </div>
      </section>
   );
};

export default FreeStepOne;
