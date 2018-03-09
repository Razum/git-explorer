import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from '../../components/Autocomplete';
import { searchUsers } from '../../services/api';
import style from './home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  onChange = (searchTerm) => {
    this.searchTerm = searchTerm.trim();
    if (this.searchTerm) {
      searchUsers({ q: this.searchTerm, per_page: 10 })
        .then(data => this.setState({ items: data.items }));
    }
  }

  renderResults= (items) => {
    if (items.length) {
      return items.map(item => this.renderItem(item));
    }
    return this.searchTerm && <div className="center py4">No users found</div>;
  }

  renderItem({ login, avatar_url }) {
    const bgImage = { backgroundImage: `url(${avatar_url})` };
    return (
      <Link className={style.user} key={login} to={`/users/${login}`}>
        <div className={style.avatar} style={bgImage} />
        {login}
      </Link>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row row--center">
          <div className="col w-100 w-sm-75 w-md-66 pt5">
            <Autocomplete
              onChange={this.onChange}
              renderResults={this.renderResults}
              items={this.state.items}
              label="Find GitHub User"
              debounce={300}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
