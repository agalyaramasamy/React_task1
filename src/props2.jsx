import React from "react" ;
class Classprops2 extends React.Component{
    render(){
        return(
        <div>
            <h1>Your name is {this.props.obj1.name}
                Your age is {this.props.obj1.age}
            </h1>
        </div>
        )
    }
}
export default Classprops2;