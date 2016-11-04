class JobsIndexPage extends React.Component {
  render(){
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
          <List>
            {
              _.map(this.props.jobs, (job, idx) => {
                return (
                  <a key={idx}
                    href={Routes.job_path(job.id)}>
                    <ListItem>
                      <ListPrimary title={job.company.name}>
                        {job.title}
                      </ListPrimary>
                      <ListSecondary>
                        <div>
                          <i className="material-icons">star</i>
                          <i className="material-icons">star</i>
                          <i className="material-icons">star</i>
                        </div>
                      </ListSecondary>
                    </ListItem>
                  </a>
                );
              })
            }
          </List>
        </PaddedRow>
      </MainLayout>
    );
  }
}

JobsIndexPage.propTypes = {
  currentUser: React.PropTypes.object,
  jobs: React.PropTypes.array.isRequired
};
