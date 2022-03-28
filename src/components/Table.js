import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCurrentt, fetchGetOld } from '../redux/action/getData-action';

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: theme.palette.common.red,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(CharCode, Name, Previous, Value, NumCode, ID, Nominal) {
    return { CharCode, Name, Previous, Value, NumCode, ID, Nominal };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


export default function CustomizedTables() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const current = useSelector((state) => state.getDataReducer.getCurrentData);
    const old = useSelector((state) => state.getDataReducer.getOldData);
    console.log(current, "current-STATE");

    let arrCurrent = [];
    if (current.Valute) {
        arrCurrent = Object.values(current.Valute);
        console.log(arrCurrent, "arrCurrent");
    }

    useEffect(() => {
        dispatch(
            fetchGetCurrentt()
        );
        dispatch(
            fetchGetOld()
        );
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {/* <StyledTableCell>Name</StyledTableCell> */}
                        <StyledTableCell >CharCode</StyledTableCell>
                        <StyledTableCell >Value</StyledTableCell>
                        <StyledTableCell >Previous</StyledTableCell>
                        <StyledTableCell >NumCode</StyledTableCell>
                        <StyledTableCell >Nominal</StyledTableCell>
                        <StyledTableCell >ID</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {arrCurrent ? arrCurrent.map((obj) => (
                        <>
                            <StyledTableRow key={obj.Name} className="hoverItem">
                                {/* <StyledTableCell component="th" scope="row">
                                    {obj.Name}
                                </StyledTableCell> */}

                                <StyledTableCell >{obj.CharCode}</StyledTableCell>
                                <StyledTableCell >{obj.Value}</StyledTableCell>
                                <StyledTableCell >
                                    {(100.0 * (obj.Value - obj.Previous) / obj.Previous).toFixed(2)} %
                                </StyledTableCell>
                                <StyledTableCell >{obj.NumCode}</StyledTableCell>
                                <StyledTableCell >{obj.Nominal}</StyledTableCell>
                                <StyledTableCell >{obj.ID}</StyledTableCell>
                                <div className='miniModal'>
                                    {obj.Name}
                                </div>
                            </StyledTableRow>

                        </>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}