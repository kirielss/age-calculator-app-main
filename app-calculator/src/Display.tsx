import { useState } from "react"

function Display() {
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const yearToday = Date.prototype.getFullYear();
    const monthToday = Date.prototype.getMonth();
    const dayToday = Date.prototype.getDay();
    const yearsCalc = yearToday - year;
    const monthsCalc = monthToday - month;
    const daysCalc = dayToday - day;
    let years: number | string = "- -"
    let months: number | string = "- -"
    let days: number | string = "- -"
    function toggleDisplay() {
        years = yearsCalc;
        months = monthsCalc;
        days = daysCalc;
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
                <h1><span className="result">{years}</span> years</h1>
            </div>
            <div className="output">
            <h1><span className="result">{months}</span> months</h1>
            </div>
            <div className="output">
            <h1><span className="result">{days}</span> days</h1>
            </div>
        </section>


        </div>

        
    )
}

export default Display;