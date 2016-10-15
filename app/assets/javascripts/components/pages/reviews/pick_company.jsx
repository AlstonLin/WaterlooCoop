class NewReviewPickCompany extends React.Component {
  constructor(props){
    super(props);
    this.addCompany = this.addCompany.bind(this)
  }

  addCompany(){
  }

  render(){
    return (
      <div>  
        <h6>Pick the Company of the Job you're reviewing</h6>
        <TextField id="company"
          label="Company" 
          onValueChanged={
            (val) => {
              console.log(val);
            }
          } />
        <br/>
        <Button onClick={
            () => {
              this.refs.dialog.show();
            }
          }>
          Add Company
        </Button>
        <Button onClick={
            () => {
              this.props.onPick(1);
            }
          }>
          Next
        </Button>
        <Dialog title="Add Company"
          ref="dialog"
          rightButtonText="Add"
          rightButtonAction={this.addCompany}
          leftButtonText="Cancel"
          leftButtonAction={
            () => {
              this.refs.dialog.hide();
            }
          } />
      </div>
    );
  }
}

NewReviewPickCompany.propTypes = {
  onPick: React.PropTypes.func.isRequired
}
