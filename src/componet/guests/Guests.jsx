import Head from "../headdetails/Head"
import MyComponent from "../stateSroll/Mycomponeet"
import Tugguests from "./Tagguests"

function Guests() {
  return (
    <div className="guests">
      <div className="countenr">
        <MyComponent>
                  <Head tital={'What Our Guests Say'} pragraph={'Deconer why decring constently chose for ter exculation language accomadation around the word lorem hi it good very nice am happuy'}/>

        </MyComponent>

        <div style={{padding:"50px 0px 150px 0px"}} className="gridgustes">
            <Tugguests/>
        </div>
      </div>
    </div>
  )
}

export default Guests
