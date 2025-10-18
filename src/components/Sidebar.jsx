import {
  faBars,
  faEdit,
  faMagnifyingGlass,
  faPlus,
  faSignOut,
  faStethoscope,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [hover, setHover] = useState(false);
  return (
    <nav className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full h-screen bg-blue-900 text-white fixed bottom-0 left-0 top-24 text-xl">
      <div className="flex flex-col grow items-start p-12 w-full max-md:pr-5">
        <div>
          <div className="flex flex-row items-center justify-center hover:underline">
            <Link className="" to="/dashboard">
              <FontAwesomeIcon
                icon={faBars}
                size="1x"
                style={{
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              Dashboard
            </Link>
          </div>
          <div className="mt-10 flex flex-row items-center justify-center hover:underline">
            <Link to="/patients">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="1x"
                style={{
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              Find Patient
            </Link>
          </div>
          <div className="mt-10 flex flex-row items-center justify-center hover:underline">
            <Link to="/review-patient">
              <FontAwesomeIcon
                icon={faEdit}
                size="1x"
                style={{
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              Review Patient
            </Link>
          </div>
          <div className="mt-10 flex flex-row items-center justify-center hover:underline">
            <Link to="/diagnose">
              <FontAwesomeIcon
                icon={faStethoscope}
                size="1x"
                style={{
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              Diagnose Patients
            </Link>
          </div>
          <div className="mt-7 flex flex-row items-center justify-center hover:underline">
            <Link to="/profile">
              <FontAwesomeIcon
                icon={faUserDoctor}
                size="1x"
                style={{
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 grow w-fit fixed bottom-12 p-12">
        <div className="flex flex-row items-center justify-center">
          <Link
            to={"/diagnose"}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            className="p-5 rounded-2xl border border-white border-solid max-md:pr-5 max-md:mt-10 hover:bg-white hover:text-blue-900"
          >
            Add Patient
            <FontAwesomeIcon
              icon={faPlus}
              size="1x"
              style={{
                color: hover ? "#1e3a8a" : "white",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link
            to={"/login"}
            className="font-bold max-md:mt-10 max-md:ml-2.5 hover:underline"
          >
            <FontAwesomeIcon
              icon={faSignOut}
              size="1x"
              style={{
                color: "white",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
