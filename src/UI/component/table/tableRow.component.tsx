import * as React from 'react';

export interface ITableRow<T=any> {
  data: T;
}
export const TableRow: React.FC<ITableRow> = ({ data }) => {
  return (
    <tr>
      
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
        {data.id}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
        {data.title}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
        {data.rank}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
        {data.year}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
        {data.director}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
        {data.actors}
      </td>
    </tr>
  );
};
