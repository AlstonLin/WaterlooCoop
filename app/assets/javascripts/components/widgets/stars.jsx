class Stars extends React.Component {
  render(){
    var stars = [];
    for (let i = 0; i < this.props.numStars; i++){
      stars.push(<i className="material-icons" key={i}>star</i>);
    }
    return (
      <div>{stars}</div>
    );
  }
}

Stars.propTypes = {
  numStars: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};
