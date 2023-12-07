import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "../../Context/Main/Main";
import About from "../../Context/About/About";
import CheckLists from "../../Context/CheckLists/CheckLists";
function RoutsContext()  {
    return (
                <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/about" element={<About/>} />
                        <Route path="/checkList" element={<CheckLists/>} />
                </Routes>
    )
}
export default RoutsContext;