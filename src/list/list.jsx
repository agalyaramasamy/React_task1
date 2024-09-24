// function Listpoints2(props){
//     const myval=props.myval;
//     const rl=myval.map((listval) => {
//         console.log("done");
//         console.log(listval);
//         return <li>{listval}</li>
//     })
//     return (
//     <>
//     <div className="container">
//         <ul>{rl}</ul>
//     </div>
//     </>
//     )
// }
// export default Listpoints2;
function Listpoints1(){
    var arr=["apple","cherry","kiwi"];
    let arr2=arr.map((data) =>{
        console.log("newarray");
        console.log(data);
        data=data.slice(0,4);
        return <li>{data}</li>
    })
    return (
            <div>
            <ul>{arr2}</ul>
            </div>
       
    )
}
export default Listpoints1;
