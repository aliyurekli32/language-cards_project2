import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
    const[showDesc,setShowDesc]= useState(false);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card" onClick={()=>{ setShowDesc(!showDesc)}}
    >
        {!showDesc &&(
      <Container  >
        <Image className="lang-logo"
          src={img}
          width="70%"
        ></Image>
        <h3 className="h5 display-6">{name}</h3>
      </Container>)}

       {showDesc && (<ol className="h-100">
            {options.map((item)=>{
                return(
                    <li className="h5 text-start">{item}</li>
                )
            })}
        </ol>)}

    </Container>
  );
};

export default Language;
