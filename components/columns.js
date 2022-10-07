import { format } from 'date-fns';
//import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    // Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Paltform Name',
    accessor: 'platform',
    // Filter: ColumnFilter
  },
  {
    Header: 'Assign',
    accessor: 'assign',
    // Filter: ColumnFilter
  },
  {
    Header: 'Status',
    accessor: 'status',
    // Cell: ({ value }) => {
    //   return format(new Date(value), 'dd/MM/yyyy');
    // }
    // Filter: ColumnFilter
  },
];