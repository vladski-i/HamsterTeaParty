import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchBar from './SearchBar'
import Grid from '@material-ui/core/Grid';


const columns = [
  { id: 'name', label: 'Poster', minWidth: 50, fontSize: 24},
  { id: 'code', label: 'Joke', minWidth: 100, fontSize: 24},
  { id: 'tags', label: 'Tags', minWidth: 150, fontSize: 24},
  { id: 'postedAt', label: 'Posted', minWidth: 80, fontSize: 24}
];

function createData(name, code, tags, postedAt) {
  let value = String(postedAt % 24) + 'h ago';
  console.log(value);
  return { name, code, tags, postedAt: value };
}

const rows = [
  createData('Tomi', 'This is some text that i thought is kinda funny', 'funny, happy', 3287263),
  createData('Ioana', 'Q: Why should you never date tennis players?' + '\n' + 'A: Love means nothing to them.', 'sad, pshyco', 9596961),
  createData('Danutu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.', 'funny, happy', 301340),
  createData('Mihai', 'This is some text that i thought is kinda funny', 'funny, happy', 3287263),
  createData('Dani', 'Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices', 'funny, happy', 9596961),
  createData('Ruby', 'Q: How do you weigh a millennial?\n\nA: In Instagrams.', 'not today, maybe tomorow', 301340),
  createData('Rosia', 'This is some text that i thought is kinda funny', 'racism', 3287263),
  createData('Montana', 'Q: Why should you never date tennis players?' + '\n' + 'A: Love means nothing to them.', 'ian&azteca, trap music', 9596961),
  createData('Daniel', 'Q: How do you weigh a millennial?\n\nA: In Instagrams.', 'sad, creepy, not today', 301340),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {  
    maxHeight: 600,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
<Grid container spacing={1}>
  
  <Grid item xs={12}>
          <SearchBar/>
      </Grid>

      <Grid item xs={12}>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,
                           fontSize: column.fontSize,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} 
                        style={{
                          fontWeight: (column.id == 'name') ? 'bold' : 'normal',
                          color: (column.id == 'name') ? 'blue' : 'default'
                          }}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Grid>
    </Grid>
  );
}
