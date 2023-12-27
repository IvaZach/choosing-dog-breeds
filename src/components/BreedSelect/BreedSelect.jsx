import { fetchBreeds } from 'api';
import { HTTP_ERROR_MSG } from 'constants';
import { ErrorMessage } from 'ErrorMessage';
import { Component } from 'react';
import Select from 'react-select';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: null });
      const fetchedBreeds = await fetchBreeds();
      this.setState({ breeds: fetchedBreeds });
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { breeds, loading, error } = this.state;
    const { onSelect } = this.props;

    const options = breeds.map(breed => {
      return {
        value: breed.id,
        label: breed.name,
      };
    });
    return (
      <div>
        <Select
          options={options}
          isLoading={loading}
          onChange={option => onSelect(option.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}
