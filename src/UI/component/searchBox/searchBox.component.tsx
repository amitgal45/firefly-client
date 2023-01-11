import { observer } from 'mobx-react';
import * as React from 'react';
import { IParams } from '../../../App';
import { TextInput } from '../input/textInput.component';
import { MovieKeys } from '../table';
export interface ISearchBox {
  setSearchParams: (value: IParams) => void;
  params: IParams;
}
export const SearchBox: React.FC<ISearchBox> = observer(
  ({ setSearchParams, params }) => {
    const [input, setInput] = React.useState<string>('');
    const [searchKey, setSearchKey] = React.useState<MovieKeys>('title');
    const handleOnSubmit = () => {
      setSearchParams({ ...params, search: input, page: 1, searchKey });
    };
    return (
      <div className="w-full py-0.5">
        <div className="flex justify-center p-6 gap-x-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 px-5 rounded-lg">
            <select
              required
              onChange={(e) =>
                setSearchParams({
                  ...params,
                  limit: Number(e.target.value),
                  page: 1
                })
              }
              id="underline_select"
              className="bg-transparent  
          font-semibold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4.5"
            >
              <option hidden>Pick Limit</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="flex bg-gray-100 p-4 w-72 rounded-lg">
            <TextInput
              type={
                searchKey !== 'year' && searchKey !== 'rank' ? 'text' : 'number'
              }
              onChange={setInput}
              placeholder={'Search value'}
            />
          </div>
          <div className="flex bg-gray-100 px-5 rounded-lg">
            <select
              required
              onChange={(e) => setSearchKey(e.target.value as MovieKeys)}
              id="underline_select"
              className="bg-transparent  
          font-semibold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4.5"
            >
              <option hidden>Type a Search key</option>
              <option value="id">Id</option>
              <option value="title">Title</option>
              <option value="rank">Rank</option>
              <option value="year">Year</option>
              <option value="director">Director</option>
            </select>
          </div>

          <button
            className="flex justify-center bg-gray-800 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            onClick={handleOnSubmit}
          >
            <span className="self-center">Search</span>
          </button>
        </div>
      </div>
    );
  }
);
