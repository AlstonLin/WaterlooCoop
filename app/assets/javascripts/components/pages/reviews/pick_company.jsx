class NewReviewPickCompany extends React.Component {
  constructor(props){
    super(props);
    this.addCompany = this.addCompany.bind(this)
  }

  addCompany(){
    var payload = {
      company: {
        name: this.refs.nameField.getValue(),
        description: this.refs.descriptionField.getValue(),
        url: this.refs.urlField.getValue(),
        location: this.refs.locationField.getValue()
      }
    };
    $.ajax({
      type: "POST",
      url: Routes.companies_path(),
      data: payload,
      dataType: "text json",
      success: (data) => {
        this.refs.dialog.hide();
        this.refs.company.setValue(data);
      },
      error: (err) => {
        console.log("ERROR: " + JSON.stringify(err));
      }
    });
  }

  render(){
    return (
      <div>  
        <h6>Pick the Company of the Job you're reviewing</h6>
        <AutoCompleteTextField id="company"
          label="Company"
          ref="company"
          sourcePath={Routes.autocomplete_companies_path()}
          displayKey="name"/>
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
              var val = this.refs.company.getValue();
              this.props.onPick(val.id);
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
              this.addCompany();
            }
          } >
          <TextField id="name"
            label="Name"
            ref="nameField"/>
          <TextField id="description"
            label="Description"
            ref="descriptionField"/>
          <TextField id="url"
            label="Company Website URL"
            ref="urlField"/>
          <TextField id="location"
            label="Location"
            ref="locationField"/>
        </Dialog>
      </div>
    );
  }
}

NewReviewPickCompany.propTypes = {
  onPick: React.PropTypes.func.isRequired
}
