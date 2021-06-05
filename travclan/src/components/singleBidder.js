import React, { useEffect , useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import arrow from '../assets/right.svg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const SingleBidder = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const fetchItem = await fetch(`https://intense-tor-76305.herokuapp.com/merchants`);
        
        const data = await fetchItem.json();
        setData(data);
    }

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

    function bidCalculator(bid){
        var tempMaxMin = [];
        bid.forEach(element => {
           tempMaxMin.push(element.amount);
        });

        if(tempMaxMin.length === 0){
            return 0; 
        }

        else{
            return props.toogleState ? Math.max(...tempMaxMin) : Math.min(...tempMaxMin);
        }
    
    }
    
    (() => {

        var tempArr = [];
        var tempObj = data;

        console.log(tempObj)

        for (let i = 0; i < tempObj.length; i++) {
            tempArr.push(bidCalculator(tempObj[i].bids));
        }

        for (let i = 0; i < tempObj.length; i++) {
            let min = i;
            for (let j = i + 1; j < tempObj.length; j++) {
                if (tempArr[j] < tempArr[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = tempArr[i];
                tempArr[i] = tempArr[min];
                tempArr[min] = tmp;

                let temp = tempObj[i];
                tempObj[i] = tempObj[min];
                tempObj[min] = temp;

            }
        }

    })();

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
                    {data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => (
                            <TableRow key={index}>
                               
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left"><img src={row.avatarUrl} alt="" className="userImage" /></TableCell>
                                <TableCell align="left">{row.firstname}</TableCell>
                                <TableCell align="left">{row.lastname}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.hasPremium.toString().toUpperCase()}</TableCell>
                                <TableCell align="left">{bidCalculator(row.bids)}</TableCell>
                                <TableCell align="left"><Link to={'/bidder/' + index}><img src={arrow} alt="" /></Link></TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>

    )
}

export default SingleBidder
