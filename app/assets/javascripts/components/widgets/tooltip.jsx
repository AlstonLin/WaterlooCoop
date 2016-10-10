class ToolTip extends React.Component {
  render(){
    var divId = _.uniqueId("tooltip-content");
    var baseClass = "mdl-tooltip ";
    var sizeClass = this.props.large ? "mdl-tooltip--large " : "";
    return (
      <div>
        <div id={divId}
          style={{display: "inline-block"}}>
          {this.props.children}
        </div>
        <div className={baseClass + sizeClass}
          htmlFor={divId}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

ToolTip.propTypes = {
  large: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
};

ToolTip.defaultProps = {
  large: false
};
