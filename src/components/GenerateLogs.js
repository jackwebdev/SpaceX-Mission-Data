import React, { useState, useEffect } from "react";
import Masonry from "masonry-layout";

import Log from "./Log";
import SkeletonLog from "./SkeletonLog";

const GenerateLogs = () => {
    const [upcoming, setUpcoming] = useState(0);
    const [past, setPast] = useState(0);

    // console.log("upcoming", upcoming);
    // console.log("past", past);
    
    useEffect(() => {
        const fetchLaunches = async () => {
            // Get the upcoming launch.
            await getData(
              {
                query: {
                  upcoming: true,
                },
                options: {
                  populate: ["rocket", "launchpad", "payloads"],
                  sort: {
                    flight_number: "asc",
                  },
                  limit: 1,
                },
              },
              setUpcoming
            );
            setMasonry();
            // Get past launches.
            await getData(
                {
                  query: {
                    upcoming: false,
                  },
                  options: {
                    populate: ["rocket", "launchpad", "payloads", "cores"],
                    sort: {
                      flight_number: "desc",
                    },
                    limit: 100,
                  },
                },
                setPast
              );
            setMasonry();
        }

        fetchLaunches();
        setMasonry();
    }, []);

  return (
    <div className="logs">
      {upcoming
        ? <Log
          key={upcoming[0].id}
          flightNumber={upcoming[0].flight_number}
          details={upcoming[0].details}
          type="Upcoming"
          mission={upcoming[0].name}
          rocket={upcoming[0].rocket.name}
          crew={upcoming[0].crew.length > 0 ? upcoming[0].crew.length : "No crew" }
          launchDate={timeConverter(upcoming[0].date_unix)}
          launchPad={upcoming[0].launchpad.full_name || "TBA"}
          payloadType={upcoming[0].payloads[0].type || "N/A"}
          customers={upcoming[0].payloads[0].customers.length ? upcoming[0].payloads[0].customers : "N/A"}
          orbit={upcoming[0].payloads[0].orbit || "N/A"}
          payloadMass={upcoming[0].payloads[0].mass_kg || "N/A"}
          landSuccess=""
          launchSuccess=""
          img={upcoming[0].links.patch.small || "/SpaceX-Mission-Data/images/geostationary_orbit.png"}
          webcast={upcoming[0].links.webcast}
        />
        : <SkeletonLog />
      }
      {past 
        ? past.map((result, i) => {
            let type = i === 0 ? "Latest" : "Past";
            return (
                <Log
                    key={result.id}
                    flightNumber={result.flight_number}
                    type={type}
                    mission={result.name}
                    details={result.details}
                    rocket={result.rocket.name}
                    crew={result.crew.length > 0 ? result.crew.length : "No crew" }
                    launchDate={timeConverter(result.date_unix)}
                    launchPad={result.launchpad.full_name || "TBA"}
                    payloadType={result.payloads[0].type || "N/A"}
                    customers={result.payloads[0].customers.length ? result.payloads[0].customers : "N/A"}
                    orbit={result.payloads[0].orbit || "N/A"}
                    payloadMass={result.payloads[0].mass_kg ? `${result.payloads[0].mass_kg} kg` : "N/A"}
                    landSuccess={result.cores[0].landing_success}
                    launchSuccess={result.success}
                    img={result.links.patch.small || "/SpaceX-Mission-Data/images/geostationary_orbit.png"}
                    webcast={result.links.webcast}
                />
            )
        })
        : <>
            <SkeletonLog />
            <SkeletonLog />
            <SkeletonLog />
            <SkeletonLog />
            <SkeletonLog />
          </>
      }
    </div>
  );
};

// Helpers
const timeConverter = (apiData) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let newDate = new Date();
    newDate.setTime(apiData * 1000);
    let dateStringGB = newDate.toLocaleDateString('en-GB', options);
    let time12Hour = newDate.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true });
    // let timeGB = `${dateStringGB} - ${time12Hour}`;
    return { "dateGB": dateStringGB, "time12HourGB": time12Hour };
}

const getData = async (query, setState) => {
    return fetch("https://api.spacexdata.com/v5/launches/query",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(query)
            })
            .then(res => res.json())
            .then(result => {
                    // console.log("result", result.docs);
                    setState(result.docs);
                }
            )
            .catch(error => {
                console.log("Error", error);
            });
}

const setMasonry = () => {
    new Masonry(".logs", {
        itemSelector: ".masonry-item",
        horizontalOrder: true,
        gutter: 20,
        fitWidth: true
    });
}
export default GenerateLogs;
