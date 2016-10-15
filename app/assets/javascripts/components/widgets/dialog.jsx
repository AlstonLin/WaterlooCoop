class Dialog extends React.Component {
  constructor(props){
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount(){
    componentHandler.upgradeDom();
  }
  
  show(){
    this.refs.dialog.showModal();
  }

  hide(){
    this.refs.dialog.close();
  }
  
  render(){
    buttons = []
    if (this.props.rightButtonText){
      buttons.push(
        <button type="button"
          className="mdl-button close"
          onClick={this.props.rightButtonAction}
          key="btnNeg">
          {this.props.rightButtonText}
        </button>
      );
    }
    if (this.props.leftButtonText){
      buttons.push(
        <button type="button"
          className="mdl-button"
          onClick={this.props.leftButtonAction}
          key="btnPos">
          {this.props.leftButtonText}
        </button>
      );
    }
    return (
      <dialog className="mdl-dialog"
        ref="dialog">
        <h4 className="mdl-dialog__title">
          {this.props.title}
        </h4>
        <div className="mdl-dialog__content">
          {this.props.children}
        </div>
        <div className="mdl-dialog__actions">
          {buttons}
        </div>
      </dialog>
    );
  }
}

Dialog.propTypes = {
  title: React.PropTypes.string.isRequired,
  leftButtonText: React.PropTypes.string,
  leftButtonAction: React.PropTypes.func,
  rightButtonText: React.PropTypes.string,
  rightButtonAction: React.PropTypes.func
};
