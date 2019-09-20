import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideNotification } from '../../actions/ui';
import style from './notification.scss';

class Notification extends PureComponent {
  onClose = () => {
    this.props.hideNotification();
  }

  render() {
    if (!this.props.notification.isShown) {
      return null;
    }
    return (
      <div className={style.notification}>
        {this.props.notification.messages.map((m) => <div key={m}>{m}</div>)}
        <button type="button" className={style.close} onClick={this.onClose}>&#10005;</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideNotification }, dispatch);
}

function mapStateToProps(state) {
  return {
    notification: state.ui.notification,
  };
}

Notification.propTypes = {
  notification: PropTypes.shape({
    isShown: PropTypes.bool.isRequired,
    messages: PropTypes.array.isRequired,
  }).isRequired,
  hideNotification: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
