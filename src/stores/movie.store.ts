import {
  makeAutoObservable,
  reaction,
  IObservableArray,
  observable
} from 'mobx';
import { RootStore } from '.';
import { API_ENDPOINT } from '../common/consts';
import { IMovies } from '../common/interface/movies.interface';
import { MovieKeys, SortDirection } from '../UI/component/table';

export interface IParams {
  page: number;
  limit: number;
  sortKey: MovieKeys;
  sortDirection: SortDirection;
  search: string;
  searchKey: MovieKeys;
}

export default class MovieStore {
  private _rootStore: RootStore;
  private _error: string;
  private _searchParams: IParams;
  private _movies: IObservableArray<IMovies>;
  private _count: number = 0;
  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    this._searchParams = observable({
      page: 1,
      limit: 10,
      sortKey: 'title',
      sortDirection: 'asc',
      search: '',
      searchKey: 'title'
    });
    this._movies = observable([]);
    this._error = '';
    makeAutoObservable(this);
    reaction(() => this._searchParams, this._updateResults);
  }

  get movies() {
    return this._movies;
  }
  setMovies = (value: IMovies[]) => {
    this._movies.replace(value);
  };

  get searchParams() {
    return this._searchParams;
  }

  setSearchParams = (value: IParams) => {
    this._searchParams = { ...value };
  };

  get count() {
    return this._count;
  }

  setCount = (value: number) => (this._count = value);

  get error() {
    return this._error;
  }

  setError = (value: string) => {
    this._error = value;
  };
  private _updateResults = async (params: IParams) => {
    fetch(
      `${API_ENDPOINT}movie?page=${params.page}&limit=${params.limit}&sortKey=${params.sortKey}&search=${params.search}&searchKey=${params.searchKey}&sortDirection=${params.sortDirection}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong');
      })
      .then((value) => {
        this.setMovies(value.data);
        this.setCount(value.count);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  Init = async () => {
    try {
      let params = {
        page: 1,
        limit: 10,
        sortKey: 'title',
        sortDirection: 'asc',
        search: '',
        searchKey: 'title'
      };
      fetch(
        `${API_ENDPOINT}movie?page=${params.page}&limit=${params.limit}&sortKey=${params.sortKey}&search=${params.search}&searchKey=${params.searchKey}&sortDirection=${params.sortDirection}`
      )
        .then((res) => res.json())
        .then((value) => {
          this.setMovies(value.data);
          this.setCount(value.count);
        });
    } catch (err) {
      return;
    }
  };
}
