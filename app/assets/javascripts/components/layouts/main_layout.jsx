class MainLayout extends React.Component {
  render(){
    var logout = function(){
      $.ajax({
        url: Routes.destroy_user_session_path(),
        type: 'DELETE',
        success: function(){
          location.reload();
        }
      });
    };
    var navLinks = this.props.currentUser ? [
        <a className="mdl-navigation__link"
          href="#"
          key="review">
          Write A Review
        </a>,
        <a className="mdl-navigation__link"
          onClick={logout}
          href="javascript:void(0)"
          key="logout">
          Logout
        </a>
      ] : [
        <a className="mdl-navigation__link"
          href={Routes.user_facebook_omniauth_authorize_path()}
          key="login">
          Log In with Facebook
        </a>,
      ];
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.title}</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            {navLinks}
          </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.props.title}</span>
          <nav className="mdl-navigation">
            {navLinks}
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
  title: React.PropTypes.string.isRequired,
  currentUser: React.PropTypes.object
}
