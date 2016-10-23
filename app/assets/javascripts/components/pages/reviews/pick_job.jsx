class NewReviewPickJob extends React.Component {
  constructor(props){
    super(props);
    this.addJob = this.addJob.bind(this)
  }

  addJob(){
    try {
      var payload = {
        job: {
          title: this.refs.titleField.getValue(),
          industry: this.refs.typeField.getValue(),
          company_id: this.props.companyId
        }
      };
    } catch (ignored){
      return;
    }
    $.ajax({
      type: "POST",
      url: Routes.jobs_path(),
      data: payload,
      dataType: "text json",
      success: (data) => {
        this.refs.dialog.hide();
        this.refs.job.setValue(data);
      },
      error: (err) => {
        console.log("ERROR: " + JSON.stringify(err));
      }
    });
  }

  render(){
    return (
      <div>  
        <h6>Pick the Job that you're reviewing</h6>
        <AutoCompleteTextField id="job"
          label="Job"
          ref="job"
          sourcePath={Routes.company_jobs_path({id: this.props.companyId})}
          displayKey="title"
          initialValue={this.props.initialValue}/>
        <br/>
        <Button onClick={
            () => {
              this.refs.dialog.show();
            }
          }>
          Add Job
        </Button>
        <Button onClick={
            () => {
              var val = this.refs.job.getValue();
              if (val){
                this.props.onPick(val);
              }
            }
          }>
          Next
        </Button>
        <Dialog title="Add Job"
          ref="dialog"
          rightButtonText="Add"
          rightButtonAction={this.addJob}
          leftButtonText="Cancel"
          leftButtonAction={
            () => {
              this.refs.dialog.hide();
            }
          } >
          <TextField id="title"
            label="Job Title"
            ref="titleField"/>
          <SelectField id="type"
            label="Type"
            options={["Software", "Hardware", "Business"]}
            ref="typeField"
            required/>
        </Dialog>
      </div>
    );
  }
}

NewReviewPickJob.propTypes = {
  onPick: React.PropTypes.func.isRequired,
  companyId: React.PropTypes.number.isRequired,
  initialValue: React.PropTypes.object
};
