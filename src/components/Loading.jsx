import React, { Component } from 'react'
import loader from "./loading.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center mb-2 ' style={{ width: "100wh", height: "70vh" }}>
        <img src={loader} alt=".." style={{
          width: "130px", height: "130px", backgroundColor: " linear-gradient(to right, rgb(179, 17, 17), rgb(112, 112, 138))",
        }} />
      </div>
    )
  }
}
