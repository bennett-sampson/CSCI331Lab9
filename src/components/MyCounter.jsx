import React, {useState} from "react";



const MyCounter = (props) => {
    const [countState, setCountState] = useState[77];

    function incCount(){
        setCountState(countState + props.incBy);
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default MyCounter;


//ssh to server

//forever start -c "npm start" nameOfFolder (Lab9)
