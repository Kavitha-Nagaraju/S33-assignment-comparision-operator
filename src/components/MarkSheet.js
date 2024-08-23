import React,{useRef} from 'react'

function MarkSheet() {
    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hinInputRef = useRef();
    let mathInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef = useRef();
    let telSpanRef = useRef();
    let engSpanRef = useRef();
    let hinSpanRef = useRef();
    let mathSpanRef = useRef();
    let sciSpanRef = useRef();
    let socSpanRef = useRef();


  return (
    <div>
          <form>
              <div>
                  <label>FirstName</label>
                  <input ref={firstInputRef}></input>
                  <span></span>
              </div>
              <div>
                  <label>LastName</label>
                  <input ref={lastInputRef}></input>
                  <span></span>
              </div>
              <div>
                  <label>TeluguMarks</label>
                  <input ref={telInputRef} onChange={() => {
                      telSpanRef.current.innerHTML = telInputRef.current.value>=35? "😎":"🥲";
                 } }></input>
              <span ref={telSpanRef}></span>
            </div><div>
              <label>EnglishMarks</label>
              <input ref={engInputRef} onChange={()=>{
                 engSpanRef.current.style.backgroundColor=engInputRef.current.value>35?"green":"red";
                 engSpanRef.current.innerHTML = engInputRef.current.value>=35?"Pass":"Fail";
              }}></input>
              <span ref={engSpanRef}></span>
          </div><div>
              <label>HindhiMarks</label>
              <input ref={hinInputRef} onChange={()=>{
                hinSpanRef.current.style.backgroundColor = hinInputRef.current.value>35?"Green":"red";
                hinSpanRef.current.innerHTML = hinInputRef.current.value>=35? "Pass":"Fail";
              }}></input>
              <span ref={hinSpanRef}></span>
          </div><div>
              <label>MathsMarks</label>
              <input ref={mathInputRef} onChange={()=>{
                mathSpanRef.current.style.backgroundColor = mathInputRef.current.value>=35?"green":"red";
                mathSpanRef.current.innerHTML = mathInputRef.current.value>=35?"Pass":"Fail";
              }}></input>
              <span ref={mathSpanRef}></span>
          </div><div>
              <label>ScienceMarks</label>
              <input ref={sciInputRef} onChange={()=>{
                sciSpanRef.current.style.backgroundColor = sciInputRef.current.value>=35?"green":"red";
                sciSpanRef.current.innerHTML = if(sciInputRef.current.value>=35)
                  {
                    console.log("pass");
                  } 
                  else{
                    console.log("Fail");
                  }
              }}></input>
              <span ref={sciSpanRef}></span>
          </div><div>
              <label>SocialMarks</label>
              <input ref={socInputRef} onChange={()=>{
                socSpanRef.current.style.backgroundColor = socInputRef.current.value>=35? "green":"red";
                socSpanRef.current.innerHTML = socInputRef.current.value>=35? "green":"red";
              }}></input>
              <span ref={socSpanRef}></span>
          </div><div>
              <button type="button" onClick={() => {
                  let firstname = firstInputRef.current.value;
                  let lastname = lastInputRef.current.value;
                  let telmarks = Number(telInputRef.current.value);
                  let engmarks = Number(engInputRef.current.value);
                  let hinmarks = Number(hinInputRef.current.value);
                  let mathmarks = Number(mathInputRef.current.value);
                  let scimarks = Number(sciInputRef.current.value);
                  let socmarks = Number(socInputRef.current.value);
                  let total = telmarks + engmarks + hinmarks + mathmarks + scimarks + socmarks;
                  let perc = (total / 600) * 100;
                  resultParaRef.current.innerHTML = `${firstname}${lastname} got score ${total} in percentage ${perc.toFixed(2)}`;

              } }>Click here for result</button>
          </div><div>
              <p ref={resultParaRef}>Results</p>
          </div>
        </form>
      
    </div>
  )
}

export default MarkSheet

