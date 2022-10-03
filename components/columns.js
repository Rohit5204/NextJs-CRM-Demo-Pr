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
    Header: 'Toatl Count',
    accessor: 'count',
    // Filter: ColumnFilter
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    }
    // Filter: ColumnFilter
  },
];