import React from "react";

export default function Err(){



    return(
        <div className="indent" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{textAlign: "center"}}>Page Not Found 404</h1>
                <div style={{width: "70%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 20}}>
                    <img src="/images/cukoGabacho.png" style={{width: "100%", margin: "0 auto"}}/>
                </div>
            </div>

        </div>
    )
}