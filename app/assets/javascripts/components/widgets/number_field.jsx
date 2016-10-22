class NumberField extends React.Component {
  constructor(props){
    super(props);
    this.getValue = this.getValue.bind(this);
  }


  componentDidMount(){
    componentHandler.upgradeDom();
  }

  getValue(){
    return this.refs.input.value;
  }

  setValue(){
    this.refs.input.value = val;
    $(this.refs.wrapper).addClass("is-dirty");
  }

  render(){
    var id = "numberfield-" + this.props.id;
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text"
          id={id}
          ref="input"
          defaultValue={this.props.initialValue}
          onChange={this.onChange}
          pattern="-?[0-9]*(\.[0-9]+)?"/>
        <label className="mdl-textfield__label"
          htmlFor={id}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

NumberField.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  initialValue: React.PropTypes.number
};
