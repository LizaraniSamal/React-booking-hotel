import {
  faBed,
  faBuilding,
  faCalendarDays,
  faCar,
  faHouse,
  faPerson,
  faPlane,
  faTaxi,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOnChange = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, dateRange, options } });
  };
  return (
    <>
      <div className="header">
        <div className={type == "list" ? "listMode" : "headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Single</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Double</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faHouse} />
              <span>Luxury</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faWaterLadder} />
              <span>Suite</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faBuilding} />
              <span>Villa</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discount? it's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels-unlock instant saving of 10% or
                more with a free Lamabooking account.
              </p>
              <button className="headerBtn">Sign in/Register</button>

              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => {
                      setOpenDate(!openDate);
                      setOpenOption(false);
                    }}
                    className="headerSearchText"
                  >{`${format(
                    dateRange[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(dateRange[0].endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDateRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      className="dateRangePicker"
                    />
                  )}
                </div>

                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() => {
                      setOpenOption(!openOption);
                      setOpenDate(false);
                    }}
                  >
                    {`${options.adult} adult .
                ${options.children} children . ${options.room}
                room`}
                  </span>
                  {openOption && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterBtn"
                            onClick={() => handleOnChange("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNo">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOnChange("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterBtn"
                            onClick={() => handleOnChange("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNo">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOnChange("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterBtn"
                            onClick={() => handleOnChange("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNo">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOnChange("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="headerSearchItem">
                  <button
                    className="headerBtn headerSearchBtn"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
