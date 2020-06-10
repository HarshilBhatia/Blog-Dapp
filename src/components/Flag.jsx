import React from 'react'
import quote from "../Images/quote.png"
export default function Flag() {
    return (
        <div>
            
        <div
          style={{
            backgroundColor: "#0A3D62",
            width: "100%",
            height: "300px",
            padding: "70px 120px",
            color: "White",
            fontSize: "25px",
            margin: "50px 0px",
          }}
        >
          <img src={quote} style={{ width: "80px" }} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          beatae itaque dolorum pariatur minus totam voluptatum animi voluptate,
          quod quo nobis molestiae impedit ipsum voluptas.
        </div>
        <div style={{ height: "300px" }}></div>
        </div>
    )
}
