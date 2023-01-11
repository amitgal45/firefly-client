import MovieStore from './movie.store';

export class RootStore {
  MovieStore: MovieStore;

  constructor() {
    this.MovieStore = new MovieStore(this);
  }
}

export default new RootStore();
