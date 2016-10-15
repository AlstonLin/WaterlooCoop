class Badge extends React.Component {
  componentDidMount(){
    componentHandler.upgradeDom();
  }
  
  render(){
    return (
      <span className="mdl-badge"
        data-badge={this.props.badgeText} >
        {this.props.children}
      </span>
    );
  }
}

Badge.propTypes = {
  badgeText: React.PropTypes.string.isRequired
};
