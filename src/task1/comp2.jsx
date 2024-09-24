
function Comp2({value})
{
    let arr5=value.map((data) => {
        console.log(data);
        return <li>{data}</li>
    })
    return(
        <div>
            <ul>{arr5}</ul>
        </div>
    )
    }
export default Comp2;