class Cell extends React.Component {
  render(){
    var className = "mdl-cell ";
    className += "mdl-cell--" + this.props.desktopWidth + "-col ";
    className += "mdl-cell--" + this.props.tabletWidth + "-col-tablet ";
    className += "mdl-cell--" + this.props.phoneWidth + "-col-phone ";
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

Cell.propTypes = {
  desktopWidth: React.PropTypes.number.isRequired,
  tabletWidth: React.PropTypes.number.isRequired,
  phoneWidth: React.PropTypes.number.isRequired,
};
