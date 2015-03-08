var React = require('react/addons');
var GraphDate = require('../visualizations/GraphDate');
var ViewActionCreators = require('../actions/ViewActionCreators');

var GraphDateComponent = React.createClass({
  componentDidMount() {
    // wrap element in d3
    this.d3Wrapper = d3.select(this.getDOMNode());
    this.d3Wrapper.datum(this.props.data)
      .call(GraphDate.enter);
  },
  render() {
    return (
      <g className="GraphDate">
        <rect />
        <text>{this.props.data.formattedDate}</text>
      </g>
    );
  }
});

module.exports = GraphDateComponent;