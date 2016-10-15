class TextField extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount(){
    componentHandler.upgradeDom();
  }
  
  onChange(event){
    this.props.onValueChanged(event.target.value);
  }
  
  render(){
    var id = "textfield-" + this.props.id;
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text"
          id={id}
          defaultValue={this.props.initialValue}
          onChange={this.onChange}/>
        <label className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
}

TextField.propTypes = {
  id: React.PropTypes.string.isRequired,
  onValueChanged: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  initialValue: React.PropTypes.string
};
