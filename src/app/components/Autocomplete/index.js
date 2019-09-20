import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './autocomplete.scss';

class Autocomplete extends PureComponent {
  onChange = (evt) => {
    this.props.onChange(evt.target.value);
  }

  get results() {
    const { items, value } = this.props;
    if (!items.length && value.length) {
      return <div className="center py4">No users found</div>;
    }
    if (!value.length) {
      return null;
    }
    return <div className={style.results}>{items.map((item) => this.renderItem(item))}</div>;
  }

  renderItem({ login, avatar_url }) {
    const bgImage = { backgroundImage: `url(${avatar_url})` };
    return (
      <Link className={style.item} key={login} to={`/users/${login}`}>
        <div className={style.avatar} style={bgImage} />
        {login}
      </Link>
    );
  }

  render() {
    const { value, label, placeholder } = this.props;
    return (
      <div className={style.autocomplete}>
        <label className={style.label} htmlFor="autocomplete">{label}</label>
        <input
          id="autocomplete"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
        />
        {this.results}
      </div>
    );
  }
}

Autocomplete.propTypes = {
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Autocomplete.defaultProps = {
  label: '',
  placeholder: '',
};

export default Autocomplete;
