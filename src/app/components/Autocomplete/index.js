import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import style from './autocomplete.scss';

class Autocomplete extends PureComponent {
  constructor(props) {
    super();
    this.state = {};
    this.delayedOnChange = debounce(evt => this.props.onChange(evt.target.value), props.debounce);
  }

  onChange = (evt) => {
    evt.persist();
    this.delayedOnChange(evt);
  }

  onSelect = (item) => {
    this.props.onSelect(item);
  }

  get results() {
    const { items, renderResults, renderItem } = this.props;
    if (renderResults) {
      return <div className={style.results}>{renderResults(items)}</div>;
    }
    if (!items.length) {
      return null;
    }
    return <div className={style.results}>{items.map(item => renderItem(item))}</div>;
  }

  render() {
    return (
      <div className={style.autocomplete}>
        <label className={style.label} htmlFor="autocomplete">{this.props.label}</label>
        <input id="autocomplete" type="text" placeholder={this.props.placeholder} onChange={this.onChange} />
        {this.results}
      </div>
    );
  }
}

Autocomplete.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  renderItem: PropTypes.func,
  renderResults: PropTypes.func.isRequired,
  debounce: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })),
};

Autocomplete.defaultProps = {
  label: '',
  placeholder: '',
  debounce: 1000,
  onChange() {
  },
  onSelect() {
  },

  renderItem: item => <div onSelect={() => this.onSelect(item)}>{item.label}</div>,
  items: [],
};

export default Autocomplete;
