import { Component } from "react";
import { connect } from "react-redux";


class Results extends Component {
  render() {
    return (
      <div>
        Results
      </div>
    )
  }
}

export default connect()(Results)