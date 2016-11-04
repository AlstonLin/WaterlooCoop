class JobShowPage extends React.Component {
  render(){
    var job = this.props.job;
    var company = job.company;
    return (
      <MainLayout title={this.props.job.title + " at " + this.props.job.company.name}
        currentUser={this.props.currentUser} >
        <PaddedRow>
          <TextCenter>
            <h3>The Company</h3>
            <h6>
              Name: {company.name}<br/>
              Description: {company.description}<br/>
              location: {company.location}<br/>
              {company.url ? company.url : ""}<br/>
            </h6>
            <h3>The Job</h3>
            <h6>
              Title: {job.title}<br/>
              Tndustry: {job.industry}<br/>
            </h6>
            <h3>Reviews</h3>
            <h6>
              TODO: Maybe use cards (make a MDL Card widget)
              {
                _.map(this.props.job.reviews, (review, idx) => {
                  return (
                    <div key={idx}>
                      <h4>REVIEW</h4>
                      <h6>
                        Interview Difficulty
                        <Stars numStars={review.difficulty}
                          total={review.difficulty}/>
                        Job Rating
                        <Stars numStars={review.rating}
                          total={review.rating}/>
                        Salary: ${review.salary}<br/>
                        {() => {
                          if (review.stipend){
                            return (
                              <div>
                                Stipend: {review.stipend}<br/>
                              </div>
                            );
                          } else {
                            return null;
                          }
                        }()}
                        Year of Employment: {review.year}<br/>
                        School Term: {review.term}<br/>
                        Posted: {(new Date(review.created_at)).toDateString()}<br/>
                      </h6>
                    </div>
                  );
                })
              }
            </h6>
          </TextCenter>
        </PaddedRow>
      </MainLayout>    
    );
  }
}

JobShowPage.propTypes = {
  currentUser: React.PropTypes.object,
  job: React.PropTypes.object.isRequired
};
