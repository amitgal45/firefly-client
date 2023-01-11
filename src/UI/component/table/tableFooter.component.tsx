import { observer } from 'mobx-react';
import * as React from 'react';
export interface ITableFooter {
  page:number;
  setPage:(value:number)=>void;
  setLimit:(value:number)=>void;
  count:number;
  limit:number;
}
export const TableFooter: React.FC<ITableFooter> = observer(({setLimit,setPage,page,count,limit}) => {
  return (
    
    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
      <span className="text-xs xs:text-sm text-gray-900">
        Showing {((page-1)*limit)+1} to {page*limit>count?count:page*limit} of {count} Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button disabled={page === 1} onClick={()=>setPage(--page)} className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l disabled:opacity-25">
          Prev
        </button>
        <button disabled={(page*limit >= count)} onClick={()=>setPage(++page)} className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r disabled:opacity-25">
          Next
        </button>
      </div>
    </div>
  );
});
