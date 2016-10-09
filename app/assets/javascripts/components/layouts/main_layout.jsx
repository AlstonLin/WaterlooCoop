class MainLayout extends React.Component {
  render(){
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.props.title}</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="#">Write A Review</a>
              <a className="mdl-navigation__link" href="#">Logout</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.props.title}</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="#">Write A Review</a>
            <a className="mdl-navigation__link" href="#">Logout</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">{this.props.children}</div>
        </main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  title: React.PropTypes.string.isRequired
}
