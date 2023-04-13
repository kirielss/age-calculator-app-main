import { useState, useEffect } from "react"

function Display() {
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const yearToday = new Date(Date.now()).getFullYear();
    const monthToday = new Date(Date.now()).getMonth();
    const dayToday = new Date(Date.now()).getDate();
    let yearsCalc = yearToday - year - 1;
    if (monthToday > month || (monthToday === month) && (dayToday > day)) yearsCalc++;
    const monthsCalc = 12 + monthToday - month;
    const daysCalc = 31 + dayToday - day;
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [errorDay, setErrorDay] = useState(' ');
    const [errorMonth, setErrorMonth] = useState(' ');
    const [errorYear, setErrorYear] = useState(' ');
    function toggleDisplay() {
        setYears(yearsCalc);
        setMonths(monthsCalc);
        setDays(daysCalc);
    }
    function validate() {
        if (day > 31 || day < 1 || isNaN(day)) {
            setErrorDay('Invalid day');
            errorStyleOn(0);
        } else {
            setErrorDay(' ');
            errorStyleOff(0);
        }
        if (month > 12 || month < 1 || isNaN(month)) {
            setErrorMonth('Invalid month');
            errorStyleOn(1);
        } else {
            setErrorMonth(' ');
            errorStyleOff(1);
        }
        if (year > 2022 || year < 1900 || isNaN(year)) {
            setErrorYear('Invalid year');
            errorStyleOn(2);
        } else {
            setErrorYear(' ');
            errorStyleOff(2);
        }
    }

    function errorStyleOn(param: number) {
        document.getElementsByClassName("input-title")[param].classList.add('text-red-600');
        document.getElementsByClassName("input-box")[param].classList.add('border-red-600');
    }

    function errorStyleOff(param: number) {
        document.getElementsByClassName("input-title")[param].classList.remove('text-red-600');
        document.getElementsByClassName("input-box")[param].classList.remove('border-red-600');
    }

    useEffect(() => {
        validate();
    });

    return (
        <div className="bg-white p-5 shadow-2xl"	>
            <div className="m-5">
        <header className="flex" >
            <div className="input px-5 ">
                <h2 className="input-title">DAY</h2>
                <input className="border w-20 input-box" type="string" name="day" id="day" required onChange={(e) => setDay(Number(e.target.value))}/>
                <p className="text-red-600" id="errorDay">{errorDay}</p>
            </div>
            <div className="input px-5">
                <h2 className="input-title">MONTH</h2>
                <input className="border w-20 input-box" type="string" name="month" id="month" required onChange={(e) => setMonth(Number(e.target.value))} />
                <p className="text-red-600" id="errorMonth">{errorMonth}</p>
            </div>
            <div className="input px-5">
                <h2 className="input-title">YEAR</h2>
                <input className="border w-20 input-box" type="string" name="year" id="year" required onChange={(e) => setYear(Number(e.target.value))}/>
                <p className="text-red-600" id="errorYear">{errorYear}</p>
            </div>

            <button className="  p-5 border rounded-full h-12 w-12 text-white flex justify-center items-center text-3xl" onClick={() => toggleDisplay()}>
            ↓
            </button>
        </header>

        <section>
            <div className="output">
                <h1><span className="result ">{years === 0 ? '- -' : years}</span> years</h1>
            </div>
            <div className="output">
            <h1><span className="result ">{months === 0 ? '- -' : months}</span> months</h1>
            </div>
            <div className="output">
            <h1><span className="result ">{days === 0 ? '- -' : days}</span> days</h1>
            </div>
        </section>

        </div>
        </div>

        
    )
}

export default Display;