class ToolTip extends React.Component {
  render(){
    var baseClass = "mdl-tooltip ";
    var sizeClass = this.props.large ? "mdl-tooltip--large " : "";
    return (
      <div className={baseClass + sizeClass}
        htmlFor={this.props.forId}>
        {this.props.text}
      </div>
    );
  }
}

ToolTip.propTypes = {
  large: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
  forId: React.PropTypes.string.isRequired
};

ToolTip.defaultProps = {
  large: false
};
