import React, { useState } from "react";

import api from "../axiosConfig";

import { useLocation, useNavigate } from "react-router-dom";



function ExperienceForm({ closeModal }) {
  
  const navigate=useNavigate();
  const [formData,setFormData]=useState({

    anonymous:false,
    company:"",
    role:"",
    gotOffer:false,
    rejectReason:"",
    location:""

});
const saveExperience = async () => {

    try {

        const response = await api.post("/anonymous/save", formData);

        alert("Experience Saved Successfully");

        navigate("/ExperianceForm2", {
            state: {
                experienceId: response.data.id
            }
        });

    } catch (error) {

        console.log(error);

        alert("Failed to save experience");

    }

};

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.6)"
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div
          className="modal-content border-0 shadow-lg"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px"
          }}
        >

          {/* Header */}
          <div className="modal-header border-0">
            <h4 className="fw-bold">Interview Experience</h4>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          {/* Body */}
          <div className="modal-body">

            <div className="row">

              {/* Anonymous */}
              <div className="col-12 mb-3">
                <label className="fw-semibold">Stay anonymous?</label><br />
               <input
type="radio"
checked={formData.anonymous}
onChange={()=>setFormData({...formData,anonymous:true})}
/>

Yes

<input
type="radio"
className="ms-3"
checked={!formData.anonymous}
onChange={()=>setFormData({...formData,anonymous:false})}
/>

No
              </div>

              {/* Company */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Company *</label>
               <input
className="form-control"
value={formData.company}
onChange={(e)=>setFormData({...formData,company:e.target.value})}
/>
              </div>

              {/* Role */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Role *</label>
             <input
className="form-control"
value={formData.role}
onChange={(e)=>setFormData({...formData,role:e.target.value})}
/>
              </div>

              {/* Offer */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Got Offer?</label><br />

                <input
type="radio"
checked={formData.gotOffer}
onChange={()=>setFormData({...formData,gotOffer:true})}
/>

Yes

<input
type="radio"
className="ms-3"
checked={!formData.gotOffer}
onChange={()=>setFormData({...formData,gotOffer:false})}
/>

No

               {!formData.gotOffer && (

    <textarea
        className="form-control mt-2"
        placeholder="Why rejected?"
        value={formData.rejectReason}
        onChange={(e)=>
            setFormData({
                ...formData,
                rejectReason:e.target.value
            })
        }
    />

)}
              </div>

              {/* Location */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Location</label>
                <select
className="form-control"
value={formData.location}
onChange={(e)=>setFormData({...formData,location:e.target.value})}
>

<option value="">Choose</option>
<option>India</option>
<option>USA</option>

</select>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer border-0">
           
          <button
className="btn btn-warning"
onClick={saveExperience}
>

Next

</button>
            <button className="btn btn-outline-secondary" onClick={closeModal}>
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;