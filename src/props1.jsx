import React from "react" ;
import Classprops2 from './props2'
class Classprops1 extends React.Component{
    render(){
        let newobj= {name :"janvi" ,age:3}
        return(
            <div>
                <Classprops2 obj1={newobj} />

            </div>
        )
    }
}
export default Classprops1;