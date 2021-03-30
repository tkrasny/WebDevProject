import React from "react";
import "./analysis.css";

export function Analysis() {

    // TODO: retrieve real data for this instead of hard coding
    return (
        <div>
            <h1>Analysis</h1>
            <h3>Top 5 NBA Over Rates</h3>
            <table id="nbaovers" className="styled-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Over Record</th>
                    <th>Over %</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>1</td>
                    <td>New Orleans</td>
                    <td>30-16-0</td>
                    <td>65.2%</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Brooklyn</td>
                    <td>29-18-0</td>
                    <td>61.7%</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Indiana</td>
                    <td>27-17-1</td>
                    <td>61.4%</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Milwaukee</td>
                    <td>27-17-1</td>
                    <td>61.4%</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Denver</td>
                    <td>28-18-0</td>
                    <td>60.9%</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Analysis;