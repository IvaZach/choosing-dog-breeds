import { fetchDogByBreed } from 'api';
import { BreedSelect } from 'components/BreedSelect/BreedSelect';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import { HTTP_ERROR_MSG } from 'constants';
import { DogDetails } from 'DogDetails';
import { DogSkeleton } from 'DogSkeleton';
import { ErrorMessage } from 'ErrorMessage';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    dog: null,
    loading: false,
    error: '',
  };

  fetchDog = async breedId => {
    try {
      this.setState({ loading: true, error: null });
      const fetchedDog = await fetchDogByBreed(breedId);
      this.setState({ dog: fetchedDog });
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { dog, error, loading } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.fetchDog} />
        {dog && !loading && <DogDetails dog={dog} />}
        {loading && <DogSkeleton/>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <GlobalStyle />
      </Layout>
    );
  }
}
