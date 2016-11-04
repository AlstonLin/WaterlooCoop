class ListSecondary extends React.Component {
  render(){
    return (
      <span className="mdl-list__item-secondary-content">
        {this.props.children}
      </span>
    );
  }
}
