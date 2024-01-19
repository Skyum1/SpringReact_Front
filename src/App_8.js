import React, { useState } from "react";

const App = () => {

    const [text,setText] = useState("1212");
    const [edit, setEdit] = useState(false);

    let content = <div>
        {text}<button onClick={() => setEdit(true)}>수정</button></div>;

    if(edit) {
        content = <div>
        <input type='text'
          value={text}
          onChange={(e)=> {
            console.log(e.target.value);
            setText(e.target.value);
          }}>

        </input>

        <button onClick={() => setEdit(false)}>수정</button>
    </div>
    }
    return (
        <>
        {content}
        </>
        
    );
}

export default App;