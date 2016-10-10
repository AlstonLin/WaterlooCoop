class Button extends React.Component {
  render(){
    baseClass = "mdl-button mdl-js-button mdl-button--raised ";
    colorClass = this.props.accent ? "mdl-button--accent " : "mdl-button--colored ";
    rippleClass = this.props.ripple ? "mdl-js-ripple-effect " : "";  
    return (
      <button
        className={baseClass + colorClass + rippleClass}
        onClick={this.props.onClick} >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  accent: React.PropTypes.bool,
  ripple: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

Button.defaultProps = {
  accent: false,
  ripple: true
};
