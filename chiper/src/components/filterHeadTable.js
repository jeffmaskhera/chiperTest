import React, { useState, useEffect, useRef } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import InputDummy from "./inputDummy";
import {formatFullDateYear} from "../tools/formatDate"

const FilterHeadTable = ({ handleFind, setDateInit, setDateFinish}) => {

    const [isFirstCalendar, setIsFirstCalendar] = useState(false);
    const [isSecondCalendar, setIsSecondCalendar] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());

    const [maxDate, setMaxDate] = useState(new Date());

    const openFirstCalendar =()=> {
        setIsFirstCalendar(!isFirstCalendar)
    }
    const openSecondCalendar =()=> {
        setIsSecondCalendar(!isSecondCalendar)
    }

    const handleChangeStartDate =(date)=> {
        setStartDate(date)
    }

    const handleChangeFinishDate =(date)=> {
        setFinishDate(date)
    }

    const createFind=()=> {
        setDateInit(formatFullDateYear(startDate))
        setDateFinish(formatFullDateYear(finishDate))
    }

    useEffect(()=>{
        setDateFinish(formatFullDateYear(new Date()))
    })


    return (
        <div className="filter-header-table">
            <input type="text" placeholder="finder" className="input" onChange={handleFind}/>

            <div className="content-inputs-dummy-reserve">
                <div className="relative">
                    <InputDummy date={startDate} placeHolder="Fecha inicial" handleClick={openFirstCalendar} />
                    {
                        isFirstCalendar ?
                            <div className="pos-calendar-absolute">
                                 <DatePicker
                                selected={startDate}
                                maxDate={maxDate}
                                onChange={(date) => handleChangeStartDate(date)}
                                locale="es"
                                dateFormat="P"
                                name="startDate"
                                autoComplete="off"
                                inline
                            />
                                <div className="btn-calendar-close" onClick={openFirstCalendar}>Seleccionar</div>
                            </div>
                            :
                            undefined
                    }
                </div>
                <h3>To</h3>
                <div className="relative">
                    <InputDummy date={finishDate} placeHolder="Fecha final" handleClick={openSecondCalendar}/>
                    {
                        isSecondCalendar ?
                            <div className="pos-calendar-absolute">
                                <DatePicker
                                    className={"contentDate__datePicker"}
                                    selected={finishDate}
                                    minDate={startDate}
                                    maxDate={maxDate}
                                    onChange={(date) => handleChangeFinishDate(date)}
                                    locale="es"
                                    dateFormat="P"
                                    name="finishDate"
                                    inline
                                />
                                <div className="btn-calendar-close" onClick={openSecondCalendar}>Seleccionar</div>
                            </div>
                            :
                            undefined
                    }
                </div>
                <div className="btn-small" onClick={createFind}>Find Cases</div>
            </div>

            {isFirstCalendar && ( <div className="total-close-calendar" onClick={openFirstCalendar}></div>)}
            {isSecondCalendar && ( <div className="total-close-calendar" onClick={openSecondCalendar}></div>)}

        </div>
    )

}

export default FilterHeadTable;
