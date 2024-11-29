import React, { useRef } from 'react'

function TenthMarks() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let engInputMarks = useRef();
    let socInputMarks = useRef();
    let telInputMarks = useRef();
    let matInputMarks = useRef();
    let phyInputMarks = useRef();
    let hinInputMarks = useRef();
    let resultLabelTotal = useRef();
  return (
    <div>
        <form>
      <div>
        <label>First Name</label>
        <input type="text" ref={firstNameInputRef}></input>
      </div>
      <div>
        <label>Last Name</label>
        <input  type="text" ref={lastNameInputRef} ></input>
      </div>
      <div>
        <label>English</label>
        <input type="number" ref={engInputMarks}></input>
      </div>
      <div>
        <label>Socail</label>
        <input type="number" ref={socInputMarks}></input>
      </div>
      <div>
        <label>Telugu</label>
        <input type="number" ref={telInputMarks}></input>
      </div>
      <div>
        <label>Maths</label>
        <input type="number" ref={matInputMarks}></input>
      </div>
      <div>
        <label>Physics</label>
        <input type="number" ref={phyInputMarks}></input>
      </div>
      <div>   
        <label>Hindi</label>
        <input type="number" ref={hinInputMarks}></input>
      </div>
      <div>
      <button type="button"  onClick={()=>{
        let engMarks=Number(engInputMarks.current.value);
        let socMarks=Number(socInputMarks.current.value);
        let telMarks=Number(telInputMarks.current.value);
        let matMarks=Number(matInputMarks.current.value);
        let phyMarks=Number(phyInputMarks.current.value);
        let hinMarks=Number(hinInputMarks.current.value);
        let total= engMarks+socMarks+telMarks+matMarks+phyMarks+hinMarks;
        let firstName = firstNameInputRef.current.value;
        let lastName = lastNameInputRef.current.value;
        resultLabelTotal.current.innerHTML =  `${firstName} ${lastName} Total marks are ${total}`;

        alert(`${firstName} ${lastName} Total marks are ${total}`);
        // console.log(total)
      }} >Calculate total </button>
      </div>
      <div>
        <label  ref={resultLabelTotal}  >Total Marks of</label>
      </div>
      </form>
    </div>  
  )
}

export default TenthMarks
