import { observer } from "mobx-react";
import { FC } from "react"
import { IParams } from "../../../App";
import { IMovies } from "../../../common/interface/movies.interface";
import { TableBody } from "./tableBody.component"
import { TableFooter } from "./tableFooter.component"
import { TableHeader } from "./tableHeader.component"

export interface ITable{
  data:IMovies[];
  params:IParams;
  setSortKey:(value:MovieKeys)=>void;
  setPage:(value:number)=>void;
  setLimit:(value:number)=>void;
  count:number;
} 

export type MovieKeys = keyof IMovies;
export type SortDirection = 'asc' | 'desc';

export const Table:FC<ITable> = observer(({data,params,setSortKey,setPage,setLimit,count})=>{
    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <TableHeader onChange={(value)=>{
                  setSortKey(value)}} sortValue={params.sortKey} />
                <TableBody data={data} />
              </table>
              <TableFooter setPage={setPage} page={params.page} setLimit={setLimit} count={count} limit={params.limit} />
            </div>
          </div>
    )
})