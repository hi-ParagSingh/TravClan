import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { Button } from '@material-ui/core';
import arrow from '../assets/right.svg'
import user from '../assets/user.png'
const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const SingleBidder = (props) => {

    var apiRes = [
        {
            userId: 101,
            imageSrc: user,
            firstName: 'Parag',
            lastName: "Singh",
            email: "psparag1997@gmail.com",
            phone: "+918295921803",
            hasPremium: true,
            bids: [11111, 145555, 1121212]
        },
        {
            userId: 102,
            imageSrc: user,
            firstName: 'Parag',
            lastName: "Singh",
            email: "psparag1997@gmail.com",
            phone: "+918295921803",
            hasPremium: true,
            bids: [11111, 145555, 1121212]
        },
        {
            userId: 103,
            imageSrc: user,
            firstName: 'Parag',
            lastName: "Singh",
            email: "psparag1997@gmail.com",
            phone: "+918295921803",
            hasPremium: true,
            bids: [11111, 145555, 1121212]
        },
        {
            userId: 104,
            imageSrc: user,
            firstName: 'Parag',
            lastName: "Singh",
            email: "psparag1997@gmail.com",
            phone: "+918295921803",
            hasPremium: true,
            bids: [11111, 145555, 1121212]
        },
        {
            userId: 105,
            imageSrc: user,
            firstName: 'Parag',
            lastName: "Singh",
            email: "psparag1997@gmail.com",
            phone: "+918295921803",
            hasPremium: true,
            bids: [11111, 145555, 1121212]
        },
    ];

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, apiRes.length - page * rowsPerPage);


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Contact</TableCell>
                        <TableCell align="left">Premium Member</TableCell>
                        <TableCell align="left">{props.toogleState ? 'Highest Bid' : 'Lowest Bid'}</TableCell>
                        <TableCell align="left">All Bids</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {apiRes
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="left"><img src={row.imageSrc} alt="" srcset="" className="userImage"/></TableCell>
                                <TableCell align="left">{row.firstName}</TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.hasPremium.toString().toUpperCase()}</TableCell>
                                <TableCell align="left">{props.toogleState ? Math.max(...row.bids) : Math.min(...row.bids)}</TableCell>
                                <TableCell align="left"><Button variant="text"><img src={arrow} alt="" /></Button></TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={apiRes.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>

    )
}

export default SingleBidder
