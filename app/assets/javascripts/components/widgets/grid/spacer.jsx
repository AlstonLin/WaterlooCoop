class Spacer extends React.Component {
  render(){
    return (
      <Cell desktopWidth={this.props.desktopWidth}
        tabletWidth={this.props.tabletWidth}
        phoneWidth={this.props.phoneWidth} />
    );
  }
}  

Spacer.propTypes = {
  desktopWidth: React.PropTypes.number.isRequired,
  tabletWidth: React.PropTypes.number.isRequired,
  phoneWidth: React.PropTypes.number.isRequired,
};
