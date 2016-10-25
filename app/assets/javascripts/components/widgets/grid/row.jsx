class Row extends React.Component {
  render(){
    return (
      <div className="content-grid mdl-grid">
        {this.props.children}
      </div>
    );
  }
}
