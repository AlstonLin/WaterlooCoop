class ButtonRipple extends React.Component {
  render(){
    return (
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

ButtonRipple.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};
