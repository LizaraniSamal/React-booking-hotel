import React, { useState } from "react";
import "./HotelList.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearhItem from "../../components/searchItem/SearhItem";
const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dateRange, setDateRange] = useState(location.state.dateRange);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  //console.log(dateRange);

  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="isItem">
                <label>Destination</label>
                <input type="text" placeholder={destination} />
              </div>

              <div className="isItem">
                <label>Check-in date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  dateRange[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(dateRange[0].endDate, "MM/dd/yyyy")} `}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDateRange([item.selection])}
                    minDate={new Date()}
                    ranges={dateRange}
                  />
                )}
              </div>
              <div className="isItem">
                <label>Options</label>
                <div className="lsItemOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput"></input>
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput"></input>
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    ></input>
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    ></input>
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    ></input>
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              <SearhItem />
              <SearhItem />
              <SearhItem />
              <SearhItem />
              <SearhItem />
              <SearhItem />
              <SearhItem />
              <SearhItem />
              <SearhItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
