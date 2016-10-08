this.HelloWorld = React.createClass({
  className: "HelloWorld",
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){
    return {
      text: "Text"
    }
  },
  render: function(){
    return <h1>{this.props.text}</h1>
  }
});
