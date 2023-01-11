import { observer } from 'mobx-react';
import * as React from 'react';
import { IMovies } from '../../../common/interface/movies.interface';
import { TableRow } from './tableRow.component';
export interface ITableBody {
  data:IMovies[]
}
export const TableBody: React.FC<ITableBody> = observer(({data}) => {
  
  return (
    <tbody>
      {data.map((value:IMovies)=><TableRow key={value.id} data={value} />)}
    </tbody>
  );
});
