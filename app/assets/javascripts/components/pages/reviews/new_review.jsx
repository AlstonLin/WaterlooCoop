class NewReviewPage extends React.Component {
  constructor(props){
    super(props);
    // 1: Pick a Company, 2: Pick a Job, 3: Write the Review
    this.state = {
      part: 0,
      company: null,
      job: null
    };
    this.renderPart.bind(this);
  }
  
  renderPart(){
    if (this.state.part == 0) {
      return (
        <NewReviewPickCompany
          onPick={
            (val) => {
              this.setState({
                part: 1,
                company: val
              });
            }
            }
          initialValue={this.state.company}/>
      );
    } else if (this.state.part == 1) {
      return (
        <NewReviewPickJob
          companyId={this.state.company.id}          
          onPick={
            (val) => {
              this.setState({
                part: 2,
                job: val
              });
            }
          }
          initialValue={this.state.job}/>
      );
    } else {
      return (
        <NewReviewWrite
          company={this.state.company}
          job={this.state.job}
          onSubmitted={
            (val) => {
              window.location.href = Routes.root_path;
            }
          }/>
      );
    }
  }
 
  render(){
    var pt = this.state.part;
    var titles = ["Pick a Company", "Pick a Job", "Write the Review"];
    return (
      <MainLayout title="Add a Review"
        currentUser={this.props.currentUser}>
        <Breadcrumbs>
          {
            _.map([0, 1, 2], (i) => {
              return (
                <a className={this.state.part < i ? "disabled" :
                  (this.state.part == i ? "active" : "")}
                  onClick={pt >= i ?
                    () => {
                      this.setState({
                        part: i
                      });
                    }
                    : null}
                  href="javascript:void(0)"
                  key={i}>
                    {titles[i]}
                </a>
              );
            })
          }
        </Breadcrumbs>
        {this.renderPart()}
      </MainLayout>
    );
  }
}

NewReviewPage.propTypes = {
  currentUser: React.PropTypes.object
};
