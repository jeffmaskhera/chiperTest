import React, {useState, useEffect} from 'react'

const InputDummyReserve = ({date, placeHolder, handleClick}) => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        if (isNaN(date)) {
            setCurrentDate(placeHolder)
        } else {
            let currentDate = date;
            let currentMonth = currentDate.getMonth() + 1;
            let validateCurrentMonth = '';
            if (currentMonth.toString().length === 1) {
                validateCurrentMonth = '0' + currentMonth;
            } else {
                validateCurrentMonth = currentMonth;
            }
            let currentDateParse = (currentDate.getDate().toString().length === 1 ? "0" + currentDate.getDate() : currentDate.getDate())  + '/' + (validateCurrentMonth) + '/' + currentDate.getFullYear();
            setCurrentDate(currentDateParse)
        }
    }, [date]);


    return (
        <div className="input-dummy-reserve" onClick={handleClick ? handleClick : undefined}>
            {currentDate}
            <div className="icon-dummy-reserve">
                <div className="fenix-icon-arrow2-down"></div>
            </div>
        </div>
    )
}
export default InputDummyReserve
