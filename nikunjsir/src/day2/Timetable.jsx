import React from 'react'
function Timetable() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">Class Timetable</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:00 to 08:55</td>
                <td>React (NV)</td>
                <td>AI/ML (CP)</td>
                <td>AI/ML (CP)</td>
                <td>React (SMS)</td>
                <td>TOC (AKK)</td>
              </tr>
              <tr>
                <td>08:55 to 09:45</td>
                <td>React (NV)</td>
                <td>TOC (AKK)</td>
                <td>AI/ML (CP)</td>
                <td>React (SMS)</td>
                <td>TOC (AKK)</td>
              </tr>
              <tr className="table-info">
                <td colSpan="6">TEA BREAK</td>
              </tr>
              <tr>
                <td>10:00 to 10:50</td>
                <td>.NET (PJT) / ADV. JAVA (NC)</td>
                <td>.NET (BD) / ADV. JAVA (NC)</td>
                <td>.NET (BD) / ADV. JAVA (NC)</td>
                <td>PD (DS) / DM (Lib) / EC (Lib)</td>
                <td>.NET (BD) / ADV. JAVA (Lib)</td>
              </tr>
              <tr>
                <td>10:50 to 11:40</td>
                <td>.NET (PJT) / ADV. JAVA (NC)</td>
                <td>.NET (BD) / ADV. JAVA (NC)</td>
                <td>.NET (BD) / ADV. JAVA (NC)</td>
                <td>PD (DS) / DM (Lib) / EC (Lib)</td>
                <td>ADV. JAVA (MV) / .NET (Lib)</td>
              </tr>
              <tr>
                <td>Class / Lab Location</td>
                <td>LL1 / LL5</td>
                <td>LL1 / LL5</td>
                <td>118</td>
                <td>118</td>
                <td>LL4</td>
              </tr>
              <tr className="table-warning">
                <td colSpan="6">LUNCH BREAK</td>
              </tr>
              <tr>
                <td>12:30 to 01:20</td>
                <td>PD (Lib) / DM (DD) / EC (RKI)</td>
                <td>React (NV)</td>
                <td>PD (Lib) / DM (DD) / EC (RKI)</td>
                <td>AI/ML (CP)</td>
                <td>ADV. JAVA (MV) / .NET (Lib)</td>
              </tr>
              <tr>
                <td>01:20 to 02:10</td>
                <td>PD (Lib) / DM (DD) / EC (RKI)</td>
                <td>PD (Lib) / DM (DD) / EC (RKI)</td>
                <td>PD (Lib) / DM (DD) / EC (RKI)</td>
                <td>AI/ML (CP)</td>
                <td>LL5</td>
              </tr>
              <tr>
                <td>Class / Lab Location</td>
                <td>214 / Elec. Machine Lab</td>
                <td>LL5</td>
                <td>214 / Elec. Machine Lab</td>
                <td>LL5</td>
                <td>LL5</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
}

export default Timetable