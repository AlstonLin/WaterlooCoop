class ListItem extends React.Component {
  render(){
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        {this.props.children}
      </li>
    );
  }
}
