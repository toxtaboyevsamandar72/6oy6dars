import React, { useState } from "react";

function MyFormData() {
  function handlesubmit(event) {
    event.preventDefault();
    const result = new FormData(event.target);
    console.log(result.get("todoText"));
  }

  return (
    <div className="base-container flex justify-center">
      <form onSubmit={handlesubmit} className=" w-full max-w-96">
        <div className=" flex gap-20">
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs"
          />

          <select name="brand" className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              mashinna brandini tanlang
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyFormData;
