import { useState } from "react"

function Header() {
    const [days, setDays] = useState(0);
    const [months, setMonths] = useState(0);
    const [years, setYears] = useState(0);

    return (
        <div>
            <div className="input">
                <h2>DAY</h2>
                <input type="number" name="day" id="day" min="1" max="31" required onChange={(e) => setDays(Number(e.target.value))}/>
            </div>
            <div className="input">
                <h2>MONTH</h2>
                <input type="number" name="month" id="month" min="1" max="12" required onChange={(e) => setMonths(Number(e.target.value))} />
            </div>
            <div className="input">
                <h2>YEAR</h2>
                <input type="number" name="year" id="year" min="1900" max="2022" required onChange={(e) => setYears(Number(e.target.value))}/>
            </div>
        </div>
    )
}

export default Header