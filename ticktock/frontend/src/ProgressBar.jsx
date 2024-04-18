import React, { useState, useEffect } from 'react'
 
const ProgressBar = ({bgcolor, height, start_time, end_time}) => {
    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState(new Date(start_time));
    const [end, setEnd] = useState(new Date(end_time));
    const [current, setCurrent] = useState(new Date(start_time));
  
    /**If the start time was in the past, update the progress and the current time to be correct */
    if (current.getTime() < start.getTime()) {
      const total = end.getTime() - start.getTime();
      const newCurrent = new Date(start.getTime());
      setCurrent(newCurrent);
      setProgress(((newCurrent.getTime() - start.getTime()) / total) * 100);
    }
    
    useEffect(() => {
      if (current.getTime() < end.getTime()) {
        const total = end.getTime() - start.getTime();
        const interval = setInterval(() => {
          const newCurrent = new Date(current.getTime() + 1000);
          setCurrent(newCurrent);
          setProgress(((newCurrent.getTime() - start.getTime()) / total) * 100);
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [current, start, end]);

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
       
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
 
export default ProgressBar;
