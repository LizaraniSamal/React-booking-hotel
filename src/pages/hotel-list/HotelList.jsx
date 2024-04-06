import React, { useState } from "react";
import "./HotelList.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dateRange, setDateRange] = useState(location.state.dateRange);
  const [options, setOptions] = useState(location.state.options);
  // console.log(dateRange);

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
                <span>{`${format(dateRange[0].startDate, "MM/dd/yyyy")} to ${
                  (dateRange[0].endDate, "MM/dd/yyyy")
                } `}</span>
                {/* <DateRange
                      onChange = {}
                    /> */}
              </div>
            </div>
            <div className="listResult"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
