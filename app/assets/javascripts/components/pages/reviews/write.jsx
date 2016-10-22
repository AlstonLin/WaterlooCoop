class NewReviewWrite extends React.Component {
  constructor(props){
    super(props);
    this.submitReview = this.submitReview.bind(this);
  }

  submitReview(){
    var payload = {
      review: {
        job_id: this.props.job.id,
        difficulty: this.refs.difficultyField.getValue(),
        rating: this.refs.ratingField.getValue(),
        salary: this.refs.salaryField.getValue(),
        content: this.refs.contentField.getValue(),
        year: this.refs.yearField.getValue()
      }
    };
    $.ajax({
      type: "POST",
      url: Routes.reviews_path(),
      data: payload,
      dataType: "text json",
      success: (data) => {
        this.props.onSubmitted(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render(){
    return (
      <div>
        <h6>Write Your Review</h6>
        <NumberField id="difficulty" 
          label="Difficulty to get the job"
          ref="difficultyField"/>
        <br/>
        <NumberField id="rating"
          label="Rate the job overall"
          ref="ratingField"/> 
        <br/>
        <NumberField id="salary"
          label="Weekly total compensation ($)"
          ref="salaryField"/> 
        <br/>
        <NumberField id="year"
          label="What year did you have this job"
          ref="yearField"/> 
        <br/>
        <TextArea id="content"
          label="Description"
          ref="contentField"/>
        <br/>
        <Button onClick={this.submitReview}>
          Submit
        </Button>
      </div>
    );
  }
}

NewReviewWrite.propTypes = {
  company: React.PropTypes.object.isRequired,
  job: React.PropTypes.object.isRequired,
  onSubmitted: React.PropTypes.func.isRequired
};
