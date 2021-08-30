import React from 'react'

const Log = (props) => {
    const { flightNumber, type, mission,  details, rocket, crew, launchDate, launchPad, payloadType, customers, orbit, payloadMass, landSuccess, launchSuccess, img, webcast } = props;
  
    return (
      <div className="log masonry-item">
        <h3>
          {type} - {mission}
        </h3>
        <img src={img} alt="Mission Badge" />
  
        {type === "Upcoming" ? 
          <>
            <h4>
                <strong>{mission}</strong> will use the <strong>{rocket}</strong> and
                launch on <strong>{launchDate.dateGB}</strong> at{" "}
                <strong>{launchDate.time12HourGB}</strong>
            </h4>
            <p className="details">{details}</p>
          </>
         : 
          <p className="details">{details}</p>
        }
  
        <ul>
          <li>
            <strong>Flight Number:</strong> {flightNumber}
          </li>
          <li>
            <strong>Rocket:</strong> {rocket}
          </li>
          <li>
            <strong>Crew:</strong> {crew}
          </li>
          <li>
            <strong>Launch Date:</strong> {launchDate.dateGB} -{" "}
            {launchDate.time12HourGB}
          </li>
          <li>
            <strong>launch Pad:</strong> {launchPad}
          </li>
          <li>
            <strong>Customer:</strong> {customers}
          </li>
          <li>
            <strong>Orbit:</strong> {orbit}
          </li>
          <li>
            <strong>Payload Type:</strong> {payloadType}
          </li>
          <li>
            <strong>Payload Mass:</strong> {payloadMass}
          </li>
          {type !== "Upcoming" && 
            <>
              <li>
                  <strong>Land Success:</strong> <span className={landSuccess ? "yes" : "no"}>{landSuccess ? "Yes" : "No" || "N/A"}</span>
              </li>
              <li>
                <strong>Launch Success:</strong> <span className={landSuccess ? "yes" : "no"}>{landSuccess ? "Yes" : "No" || "N/A"}</span>
              </li>
            </>
          }
        </ul>
            <a className={webcast ? "webcast-button" : "webcast-button disabled"}href={webcast || ""} target={webcast ? "_blank" : "_self"} rel="noreferrer">
                {webcast ? "Watch Stream" : "Stream Not Available"}
            </a>
      </div>
    );
};
  
export default Log
