import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const MyCalendar = ({ tanggalHariIni }) => {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
      setValue(nextValue);
    }

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6 mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            <i className="bi-calendar3 me-2"></i>Kalender
          </h1>
          <span className="text-gray-600 text-sm">{tanggalHariIni}</span>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-3 mt-6">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    );
};

export default MyCalendar;
