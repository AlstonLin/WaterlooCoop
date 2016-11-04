class List extends React.Component {
  componentDidMount(){
    componentHandler.upgradeDom();
  }

  render(){
    return (
      <ul className="mdl-list">
        {this.props.children}
      </ul>
    );
  }
}
