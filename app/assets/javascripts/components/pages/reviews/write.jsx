class NewReviewWrite extends React.Component {
  render(){
    return (
      <div>
        <h6>Write Your Review</h6>
        <Button onClick={
            () => {
              this.props.onPick(1)
            }
          }>
          Done!
        </Button>
      </div>
    );
  }
}
