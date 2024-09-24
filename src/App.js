// import logo from './logo.svg';
import './App.css';
import ClassComponent from './Classcomp';
import Abc from './loop';
import Classprops from './props';
import Classprops1 from './props1';
import Temp from './funcprops2';
import  Valid1 from './Functionprops/fnprops';
import Listpoints2 from './list/list';
import Listpoints1 from './list/list';
import Listpoints3 from './list/keys';
import Comp1 from './task1/comp1';


function App() {
  return (
 <>
 
{/* <Abc />
<ClassComponent />
<Classprops name="agalya"  age="25" ></Classprops>  */}
{/* sending argument to the classcomponent named Classprops */}
{/* <Classprops1 ></Classprops1>
 <Temp /> 
<Valid1 /> */}
{/* <Listpoints2 myval={[20,30,40,50]} ></Listpoints2> */}
{/* <Listpoints1></Listpoints1> */}
{/* <Listpoints3 ></Listpoints3> */}
<Comp1  newarr={ [123,456,789]}></Comp1>
</>

  )
}

export default App;
