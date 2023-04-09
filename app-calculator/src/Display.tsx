import { useState } from "react"

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
    function toggleDisplay() {
        setYears(yearsCalc);
        setMonths(monthsCalc);
        setDays(daysCalc);
    }


    return (
        <div>
        <header>
            <div className="input">
                <h2>DAY</h2>
                <input type="number" name="day" id="day" min="1" max="31" required onChange={(e) => setDay(Number(e.target.value))}/>
            </div>
            <div className="input">
                <h2>MONTH</h2>
                <input type="number" name="month" id="month" min="1" max="12" required onChange={(e) => setMonth(Number(e.target.value))} />
            </div>
            <div className="input">
                <h2>YEAR</h2>
                <input type="number" name="year" id="year" min="1900" max="2022" required onChange={(e) => setYear(Number(e.target.value))}/>
            </div>

            <button onClick={() => toggleDisplay()}>Calculate</button>
        </header>

        <section>
            <div className="output">
                <h1><span className="result">{years === 0 ? '- -' : years}</span> years</h1>
            </div>
            <div className="output">
            <h1><span className="result">{months === 0 ? '- -' : months}</span> months</h1>
            </div>
            <div className="output">
            <h1><span className="result">{days === 0 ? '- -' : days}</span> days</h1>
            </div>
        </section>


        </div>

        
    )
}

export default Display;