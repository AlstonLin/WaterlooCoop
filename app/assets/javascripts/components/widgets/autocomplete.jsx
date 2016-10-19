class AutoCompleteTextField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.initialValue
    };
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    // If there's an initial value
    if (props.initialValue){
      $(this.refs.wrapper).addClass("is-dirty");
    }
  }
  
  componentDidMount(){
    componentHandler.upgradeDom();
    // Defines the source for typeahead
    var sourceJSON = {
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
    };
    // No queries if it's prefetched
    if (this.props.prefetch){
      sourceJSON.remote = {
        url: this.props.sourcePath,
      };
    } else {
      sourceJSON.remote = {
        url: this.props.sourcePath + "?query=%QUERY",
        wildcard: "%QUERY"
      };
    }
    // Sets the typeahead
    $(this.refs.input).typeahead({
      hint: true,
      highlight: true,
      minLength: 2
    }, {
      name: 'source',
      source: new Bloodhound(sourceJSON),
      displayKey: this.props.displayKey
    });
    // Value listener
    $(this.refs.input).on('typeahead:selected', (e, data) => {
      this.setState({
        value: data
      });
    });
  }

  onChange(event){
    if (this.state.value){
      this.setState({
        value: null
      });
    }
    if (this.props.onValueChanged){
      this.props.onValueChanged(event.target.value);
    }
  }

  getValue(){
    return this.state.value; 
  }

  setValue(val){
    $(this.refs.input).val(val[this.props.displayKey]);
    this.setState({
      value: val
    });
    $(this.refs.wrapper).addClass("is-dirty");
  }
  
  render(){
    var id = "autotextfield-" + this.props.id;
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
          ref="wrapper">
        <input className="mdl-textfield__input" type="text"
          id={id}
          ref="input"
          defaultValue={this.props.initialValue ?
            this.props.initialValue[this.props.displayKey] : null}
          onChange={this.onChange}/>
        <label className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
}

AutoCompleteTextField.propTypes = {
  id: React.PropTypes.string.isRequired,
  onValueChanged: React.PropTypes.func,
  label: React.PropTypes.string.isRequired,
  sourcePath: React.PropTypes.string.isRequired,
  prefetch: React.PropTypes.bool.isRequired,
  displayKey: React.PropTypes.string.isRequired,
  initialValue: React.PropTypes.object
};
