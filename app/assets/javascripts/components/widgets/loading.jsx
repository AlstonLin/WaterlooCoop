class Loading extends React.Component {
  componentDidMount(){
    componentHandler.upgradeDom();
  }
  
  render(){
    return (
      <div className="mdl-spinner mdl-js-spinner is-active">
      </div>
    );
  }
}
