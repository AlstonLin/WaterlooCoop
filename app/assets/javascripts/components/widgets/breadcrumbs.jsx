class Breadcrumbs extends React.Component {
  componentDidMount(){
    componentHandler.upgradeDom();
  }
  
  render(){
    return (
      <div className="breadcrumb flat">
        {this.props.children}
      </div>
    )
  }
}
