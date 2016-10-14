class NewReviewPickCompany extends React.Component {
  render(){
    return (
      <div>  
        <h6>Pick the Company of the Job you're reviewing</h6>
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

NewReviewPickCompany.propTypes = {
  onPick: React.PropTypes.func.isRequired
}
