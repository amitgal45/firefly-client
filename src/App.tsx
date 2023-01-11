import { useCallback, useEffect } from 'react';
import './App.css';
import { SearchBox } from './UI/component/searchBox/searchBox.component';
import { MovieKeys, SortDirection, Table } from './UI/component/table';
import stores from './stores';
import { observer } from 'mobx-react';
const MovieStore = stores.MovieStore;
export interface IParams {
  page: number;
  limit: number;
  sortKey: MovieKeys;
  sortDirection: SortDirection;
  search: string;
  searchKey: MovieKeys;
}

function App() {
  const { searchParams, movies, Init, setSearchParams, count, error } =
    MovieStore;

  const sortColumn = (value: MovieKeys) => {
    if (searchParams.sortKey === value) {
      searchParams.sortDirection === 'desc'
        ? setSearchParams({ ...searchParams, sortDirection: 'asc' })
        : setSearchParams({ ...searchParams, sortDirection: 'desc' });
    } else {
      setSearchParams({ ...searchParams, sortKey: value });
    }
  };

  const setPage = (value: number) => {
    setSearchParams({ ...searchParams, page: value });
  };

  const callback = useCallback(() => {
    Init();
  }, [Init]);

  useEffect(() => {
    callback();
  }, [callback]);

  return (
    <div className="container mx-auto px-4 sm:px-8 h-full">
      <h1 className="text-2xl font-semibold leading-tight my-4">
        Movies Table By Amit Gal
      </h1>
      <SearchBox setSearchParams={setSearchParams} params={searchParams} />
      <Table
        count={count}
        params={searchParams}
        data={movies}
        setSortKey={sortColumn}
        setPage={setPage}
        setLimit={setPage}
      />
      {error}
    </div>
  );
}

export default observer(App);
