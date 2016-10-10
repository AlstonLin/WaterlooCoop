class WidgetsPage extends React.Component {
  render(){
    var clickModal = () => {
      this.refs.dialog.show();
    };
    var hideModal = () => {
      this.refs.dialog.hide();
    };
    return (
      <MainLayout title="Waterloo Coop">
        <Badge badgeText="1">
          <Button
            onClick={clickModal}>
            <h5>{this.props.text}</h5>
          </Button>
        </Badge>
        <CheckBox id="test"
          onCheckedChanged={clickModal}
          initialChecked={true}
          label={"LABEL"} />
        <Dialog title="TITLE"
          ref="dialog"
          rightButtonText="Agree"
          rightButtonAction={hideModal}
          leftButtonText="Disagree"
          leftButtonAction={function(){}}>
          <h1>Content.</h1>
        </Dialog>

        <TextField id="text"
          onValueChanged={function(txt){console.log(txt);}}
          label="LABEL"/>
        <ToolTip text="THIS IS MY TEXT!">
          <FAB accent={false}
            onClick={function(){console.log("FABBB");}}>
            <h3>H</h3>
          </FAB>
        </ToolTip>
        <Loading/>
      </MainLayout>
    );
  }
}

WidgetsPage.propTypes = {
  text: React.PropTypes.string.isRequired
};

WidgetsPage.defaultProps = {
  text: "Text"
};
