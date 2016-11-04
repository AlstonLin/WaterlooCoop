class ListPrimary extends React.Component {
  render(){
    return (
      <span className="mdl-list__item-primary-content">
        <span>{this.props.title}</span>
        <span className="mdl-list__item-text-body">
          {this.props.children}
        </span>
      </span>
    );
  }
}

ListPrimary.propTypes = {
  title: React.PropTypes.string.isRequired
};
