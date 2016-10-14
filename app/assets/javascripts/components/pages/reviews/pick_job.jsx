class NewReviewPickJob extends React.Component {
  render(){
    return (
      <div>
        <h6>Pick the Job that you're reviewing</h6>
        <Button onClick={
            () => {
              this.props.onPick(1)
            }
          }>
          Next
        </Button>
      </div>
    );
  }
}
