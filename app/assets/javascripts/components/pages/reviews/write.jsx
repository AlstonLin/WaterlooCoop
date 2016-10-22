class NewReviewWrite extends React.Component {
  constructor(props){
    super(props);
    this.submitReview = this.submitReview.bind(this);
  }

  submitReview(){
    try {
      var payload = {
        review: {
          job_id: this.props.job.id,
          rating: this.refs.ratingField.getValue(),
          difficulty: this.refs.difficultyField.getValue(),
          term: this.refs.termField.getValue(),
          salary: this.refs.salaryField.getValue(),
          content: this.refs.contentField.getValue(),
          year: this.refs.yearField.getValue()
        }
      };
    } catch (err){
      return;
    }
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
        <NumSelectField id="difficulty" 
          label="Interview Difficulty"
          options={[1, 2, 3, 4]}
          required
          ref="difficultyField"/>
        <br/>
        <NumSelectField id="rating"
          label="Job Rating"
          options={[1, 2, 3, 4]}
          required
          ref="ratingField"/> 
        <br/>
        <SelectField id="term"
          label="School Term"
          options={["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "4B+"]}
          ref="termField"
          required/>
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
