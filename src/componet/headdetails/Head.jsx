import MyComponent from '../stateSroll/Mycomponeet'
import './head.css'
function Head({tital,pragraph}) {
  return (
    <MyComponent>

   
    <div className="head">
        <div className="addres">
            <h2>{tital}</h2>
        </div>
        <p className="details">{pragraph}</p>
      
    </div>
     </MyComponent>
  )
}

export default Head
