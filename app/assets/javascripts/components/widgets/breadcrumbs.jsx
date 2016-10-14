class Breadcrumbs extends React.Component {
  render(){
    return (
      <div className="breadcrumb flat">
        {this.props.children}
      </div>
    )
  }
}
