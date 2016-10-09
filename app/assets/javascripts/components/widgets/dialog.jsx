class Dialog extends React.Component {
  constructor(props){
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show(){
    this.refs.dialog.showModal();
  }

  hide(){
    this.refs.dialog.close();
  }
  
  render(){
    buttons = []
    if (this.props.positiveText){
      buttons.push(
        <button type="button"
          className="mdl-button"
          onClick={this.props.positiveAction}
          key="btnPos">
          {this.props.positiveText}
        </button>
      );
    }
    if (this.props.negativeText){
      buttons.push(
        <button type="button"
          className="mdl-button close"
          onClick={this.props.negativeAction}
          key="btnNeg">
          {this.props.negativeText}
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
          <p>
            {this.props.children}
          </p>
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
  positiveText: React.PropTypes.string,
  positiveAction: React.PropTypes.func,
  negativeText: React.PropTypes.string,
  negativeAction: React.PropTypes.func
};
