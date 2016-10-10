class CheckBox extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event){
    this.props.onCheckedChanged(event.target.value);
  }
  
  render(){
    var id = "checkbox-" + this.props.id;
    return (
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
        htmlFor={id}>
        <input type="checkbox"
          id={id}
          className="mdl-checkbox__input"
          defaultChecked={this.props.initialChecked}
          onChange={this.onChange} />
        <span className="mdl-checkbox__label">
          {this.props.label}
        </span>
      </label>
    );
  }
}

CheckBox.propTypes = {
  id: React.PropTypes.string.isRequired,
  onCheckedChanged: React.PropTypes.func.isRequired,
  initialChecked: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired
};
