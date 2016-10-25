class List extends React.Component {
  componentDidMount(){
    componentHandler.upgradeDom();
  }

  render(){
    return (
      <ul className="mdl-list">
        {
          _.map(this.props.items, (item, i) => {
            return (
              <li className="mdl-list__item mdl-list__item--three-line"
                key={"item-" + i}>
                <span className="mdl-list__item-primary-content">
                  <span>{item.title}</span>
                  <span className="mdl-list__item-text-body">
                    {item.primary}
                  </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  {item.secondary}
                </span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      primary: React.PropTypes.node.isRequired,
      secondary: React.PropTypes.node
    })
  ).isRequired
};
