function Listpoints3(){

    let arr3=[100,200,300,400,500];
    var arr4=arr3.map((val3,index) => {
        console.log(val3);
        return <li>{index+1}{val3}</li>
    })
    return(
        <div> <ul>{arr4}</ul>
            </div>
            )

    
}
export default Listpoints3;