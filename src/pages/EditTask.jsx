import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../assets/images/back-icon.png";
import Dropdown from "../components/Dropdown";

const EditTask = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="d-flex gap-2 text-start">
        <img
          style={{ cursor: "pointer" }}
          onClick={handleGoBack}
          src={backIcon}
          alt=""
        />
        <p className="fs-3 fw-semibold mb-0">Edit Task</p>
      </div>

      <form action="" className="d-flex flex-column gap-5 py-5">
        <div className=" position-relative">
          <label
            htmlFor=""
            className=" position-absolute start-0 ms-3 px-2 text-secondary fw-semibold bg-white"
          >
            Task Title
          </label>
          <input
            className="w-100 border p-3 rounded-3 ps-4"
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
          />
        </div>

        <div className="position-relative">
          <label
            htmlFor=""
            className=" position-absolute start-0 ms-3 px-2 text-secondary fw-semibold bg-white"
          >
            Description
          </label>
          <textarea
            placeholder="Breifly describe your task"
            className="w-100 border p-3 rounded-3 ps-4"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className=" position-relative">
          <label
            htmlFor=""
            className=" position-absolute start-0 ms-3 px-2 text-secondary fw-semibold bg-white"
          >
            Tags
          </label>
          <Dropdown />
        </div>

        <button className="w-100 btn bg-purple text-white fw-semibold">
          Done
        </button>
      </form>

      <Link>Back To Top</Link>
    </div>
  );
};

export default EditTask;
