class FAB extends React.Component {
  render(){
    baseClass = "mdl-button mdl-js-button mdl-button--fab ";
    colorClass = this.props.accent ? "mdl-button--accent " : "";
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

FAB.propTypes = {
  accent: React.PropTypes.bool,
  ripple: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

FAB.defaultProps = {
  accent: true,
  ripple: true
};
