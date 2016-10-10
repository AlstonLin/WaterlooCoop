class HomePage extends React.Component {
  render(){
    return (
      <MainLayout title="Waterloo Coop"
        currentUser={this.props.currentUser}>
        <h4>Welcome to Waterloo Coop!</h4>
      </MainLayout>
    );
  }
}

HomePage.propTypes = {
  currentUser: React.PropTypes.object
};
