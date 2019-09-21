import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { MdBlurOn, MdCloudUpload, MdExtension } from 'react-icons/md';
import Autocomplete from '../../components/Autocomplete';
import Tile from '../../components/Tile';
import { searchUsers } from '../../services/api';

const DELAY = 300;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchTerm: '',
    };
    this.delayedOnChange = debounce((searchTerm) => {
      if (searchTerm) {
        searchUsers({ q: searchTerm, per_page: 10 })
          .then((data) => this.setState({ items: data.items }));
      }
    }, DELAY);
  }

  onChange = (searchTerm) => {
    if (searchTerm) {
      this.setState({ searchTerm });
      this.delayedOnChange(searchTerm);
    } else {
      this.setState({ searchTerm, items: [] });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col w-100 py3">
            <Autocomplete
              onChange={this.onChange}
              items={this.state.items}
              value={this.state.searchTerm}
              label="Find GitHub User"
              debounce={300}
            />
          </div>
        </div>
        <div className="row mt4">
          <div className="col w-100 w-md-33">
            <Tile
              Icon={MdBlurOn}
              iconClass="blue"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              title="Lorem Ipsum is simply dummy text"
            />
          </div>
          <div className="col w-100 w-md-33">
            <Tile
              Icon={MdCloudUpload}
              iconClass="green"
              text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                words, consectetur, from a Lorem Ipsum passage, and going through the cites."
              title="Contrary to popular belief"
            />
          </div>
          <div className="col w-100 w-md-33">
            <Tile
              Icon={MdExtension}
              iconClass="orange"
              text="It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                look like readable English."
              title="It is a long established fact"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
