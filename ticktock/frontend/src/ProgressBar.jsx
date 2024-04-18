import React, { useState, useEffect } from 'react'
 
const ProgressBar = ({bgcolor, height, start_time, end_time}) => {
    // console.log(start_time, end_time)
    const [start, setStart] = useState(new Date(start_time));
    const [end, setEnd] = useState(new Date(end_time));
    const [current, setCurrent] = useState(new Date(start_time));
    const [progress, setProgress] = useState(0);

    // Make the first useEffect happen on page load
    useEffect(() => {
        const now = new Date()
        if (now.getTime() > end.getTime()) {
            setProgress(100);
            return;
        }
        if (now.getTime() < start.getTime()) {
            setProgress(0);
            return;
        }
        const total = end.getTime() - start.getTime();
        const current = now.getTime() - start.getTime();
        const progress = (current / total) * 100;
        setProgress(progress);
        setCurrent(new Date(now));
    }, []);
    
    // Make a use effect to update the progress bar from the start time to the end time
    // Starting with the progress bar at the current position it should be based on current time
    useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date()
          if (now.getTime() > end.getTime()) {
              setProgress(100);
              return;
          }
          if (now.getTime() < start.getTime()) {
              setProgress(0);
              return;
          }
          const total = end.getTime() - start.getTime();
          const current = now.getTime() - start.getTime();
          const progress = (current / total) * 100;
          setProgress(progress);
          setCurrent(new Date(now));
      }, 1000);
      return () => clearInterval(interval);
  }, [start, end]);

    const Parentdiv = {
        height: height,
        width: '90%',
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
        <span style={progresstext}>{`${Math.floor(progress)}%`}</span>
      </div>
    </div>
    )
}
 
export default ProgressBar;
