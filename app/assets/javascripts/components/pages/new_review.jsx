class NewReviewPage extends React.Component {
  constructor(props){
    super(props);
    // 1: Pick a Company, 2: Pick a Job, 3: Write the Review
    this.state = {
      part: 1
    };
  }

  render(){
    return (
      <MainLayout title="Add a Review"
        currentUser={this.props.currentUser}>
        <h4>Pick the Company of the Job you're reviewing</h4>
      </MainLayout>
    );
  }
}

NewReviewPage.propTypes = {
  currentUser: React.PropTypes.object
};
