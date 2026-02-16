import {component} from 'react'
class App extends Component {
  state = {
    count : 0
  }


      
render() {
  return (
    <>
   
    <h1>count : {this.state.count}</h1>
    <button onclick={this.increase}>increment</button>
     </>
  )

}
}
export default  App