class SelectField extends React.Component {
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
    var val = this.refs.input.value;
    if (val == "" && this.props.required){
      if (!this.refs.container.classList.contains("is-invalid")){
        this.refs.container.className += " is-invalid";
      }  
      throw "Missing argument for SelectField!";
    }
    return val;
  }

  setValue(val){
    this.refs.input.value = val;
    $(this.refs.wrapper).addClass("is-dirty");
  }
  
  render(){
    var id = "selectfield-" + this.props.id;
    return (
      <div className="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label"
        ref="container">
        <select className="mdl-selectfield__select"
          id={id}
          ref="input">
          {
            _.map([""].concat(this.props.options), (option, i) => {
              return (
                <option value={option}
                  key={"option" + i}
                  defaultValue={this.props.initialValue}
                  onChange={this.onChange}>
                  {option}
                </option>
              );
            })
          }
        </select>
        <label className="mdl-selectfield__label" htmlFor={id}>{this.props.label}</label>
        <span className="mdl-selectfield__error">Select a value</span>
    </div>
    );
  }
}

SelectField.propTypes = {
  id: React.PropTypes.string.isRequired,
  onValueChanged: React.PropTypes.func,
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  initialValue: React.PropTypes.string,
  required: React.PropTypes.bool
};

SelectField.defaultProps = {
  required: false
};
