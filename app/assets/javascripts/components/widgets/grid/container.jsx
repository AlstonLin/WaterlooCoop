class PaddedRow extends React.Component {
  render(){
    return (
      <Row>
        <Spacer desktopWidth={2}
          tabletWidth={1}
          phoneWidth={0}/>
        <Cell desktopWidth={8}
          tabletWidth={6}
          phoneWidth={4}>
          {this.props.children}
        </Cell>
        <Spacer desktopWidth={2}
          tabletWidth={1}
          phoneWidth={0}/>
      </Row>
    );
  }
}
