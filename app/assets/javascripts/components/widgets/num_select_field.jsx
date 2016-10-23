class NumSelectField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: props.initialValue,
      invalid: false
    };
    this.getValue = this.getValue.bind(this);
  }
  
  componentDidMount(){
    componentHandler.upgradeDom();
  }

  getValue(){
    var val = this.state.selected;
    if (val == null && this.props.required){
      this.setState({
        invalid: true
      });
      throw "Missing argument for SelectField!";
    }
    return val;
  }

  setValue(val){
    this.setState({
      selected: val
    });
  }
  
  render(){
    var divClass = "mdl-selectfield mdl-numselect ";
    if (this.state.invalid){
      divClass += "is-invalid";
    }
    return (
      <div className={divClass}
        ref="container">
        <h6>{this.props.label}</h6>
          {
            _.map(this.props.options, (val, i) => {
              var cls = "mdl-button mdl-js-button mdl-button--icon ";
              if (this.state.selected == val) {
                cls += "mdl-button--accent ";
              }
              return (
                <button className={cls}
                  key={"btn-" + i}
                  onClick={
                    () => {
                      this.setState({
                        selected: val,
                        invalid: false
                      });
                    }
                  }>
                  {val}
                </button>
              );
            })
          }
        <span className="mdl-selectfield__error">Select a value</span>
    </div>
    );
  }
}

NumSelectField.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  initialValue: React.PropTypes.string,
  required: React.PropTypes.bool
};

NumSelectField.defaultProps = {
  required: false
};
