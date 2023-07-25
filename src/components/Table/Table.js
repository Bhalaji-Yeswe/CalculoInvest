import styles from "./Table.module.css";
const Table = (props) =>{
    return(
        <table className={styles.result}>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Invested Capital</th>
            </tr>
            {
                props.outputData.map((data)=>(
                    <tr>
                        <td>{data.year}</td>
                        <td>{Math.round(data.savingsEndOfYear)}</td>
                        <td>{Math.round(data.yearlyInterest)}</td>
                        <td>{data.yearlyContribution}</td>
                    </tr>
                ))
            }
        </table>
    )
}
export default Table;