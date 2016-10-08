class HomePage extends React.Component {
  render(){
    return (
      <ButtonRipple text={this.props.text} onClick={function(){ console.log("CLICKED!"); } } />
    );
  }
}

HomePage.propTypes = {
  text: React.PropTypes.string.isRequired
};

HomePage.defaultProps = {
  text: "Text"
};
