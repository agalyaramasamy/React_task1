function Welcome({val}) {
    return(
        <div>
               {val.map((val) => (
                <p> values : {val *2}</p> 
            ))}
        </div>
    
    );
  }
  export default Welcome;