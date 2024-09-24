function Valid2(props){
 return(
   <div id="card">
     {props.list.map((list)  => (
            <p> Values :{list} </p>
        ))}
    </div>
   ) }
    

export default Valid2;