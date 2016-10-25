class JobsIndexPage extends React.Component {
  render(){
    var items = [];
    console.log(JSON.stringify(this.props.jobs));
    for (let idx in this.props.jobs){
      let job = this.props.jobs[idx];
      items.push({
        title: job.company.name,
        primary: (
          <p>{job.title}</p>
        ),
        secondary: (
          <div>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
          </div>
        )
      });
    }
    
    return (
      <MainLayout title="Waterloo Coop"
        currentUser={this.props.currentUser}>
        <PaddedRow>
          <TextCenter>
            <h2>
              Waterloo Coop
            </h2>
          </TextCenter>
        </PaddedRow>
        <PaddedRow>
          <TextCenter>
            <h4>
              Browse Jobs
            </h4>
          </TextCenter>
        </PaddedRow>
        <PaddedRow>
          <List items={items}/>
        </PaddedRow>
      </MainLayout>
    );
  }
}

JobsIndexPage.propTypes = {
  currentUser: React.PropTypes.object,
  jobs: React.PropTypes.array.isRequired
};
