class HomePage extends React.Component {
  render(){
    return (
        <MainLayout title="Waterloo Coop">
          <ButtonRipple text={this.props.text} onClick={
            function(){ console.log("CLICKED!");}
          } />
        </MainLayout>
    );
  }
}

HomePage.propTypes = {
  text: React.PropTypes.string.isRequired
};

HomePage.defaultProps = {
  text: "Text"
};
