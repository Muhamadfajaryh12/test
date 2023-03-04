import React from "react";
import TestCard from "./TestCard";
function TestList({test}) {
  return (
<>
            {
                test.length?
                test.map((z)=>(
                    <TestCard {...z}/>
                )):"asdasd"
            }
</>
)
}
export default TestList