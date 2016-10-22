class TextArea extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  
  componentDidMount(){
    componentHandler.upgradeDom();
  }
  
  onChange(event){
    if (this.props.onValueChanged){
      this.props.onValueChanged(event.target.value);
    }
  }

  getValue(){
    return this.refs.input.value; 
  }

  setValue(val){
    this.refs.input.value = val;
    $(this.refs.wrapper).addClass("is-dirty");
  }
  
  render(){
    var id = "textarea-" + this.props.id;
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input"
          type="text"
          rows="5"
          id={id}
          ref="input"
          defaultValue={this.props.initialValue}
          onChange={this.onChange}/>
        <label className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
}

TextArea.propTypes = {
  id: React.PropTypes.string.isRequired,
  onValueChanged: React.PropTypes.func,
  label: React.PropTypes.string.isRequired,
  initialValue: React.PropTypes.string
};
