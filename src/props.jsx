import React from "react" ;
class Classprops extends React.Component{
    render(){
        let name2={name : "agalya",age:26}
        return(
            <>
            <div>
                {console.log(this.props)}
                <h1>Your name is {this.props.name} {this.props.age} </h1>
            </div>
            </>
        );
    }
}
export default Classprops;