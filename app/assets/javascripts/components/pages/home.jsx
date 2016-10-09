class HomePage extends React.Component {
  render(){
    var clickModal = () => {
      this.refs.dialog.show();
    };
    var hideModal = () => {
      this.refs.dialog.hide();
    };
    return (
      <MainLayout title="Waterloo Coop">
        <Button text={this.props.text}
          accent={true}
          onClick={clickModal} />
        <Dialog title="TITLE"
          ref="dialog"
          positiveText="Agree"
          positiveAction={hideModal}/>
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
