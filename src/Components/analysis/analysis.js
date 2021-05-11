import React, { useState, useEffect } from "react";
import "./analysis.css";
import { BarChart } from "../../Common/Services/DataVisualization/datavis";
import Parse from "parse";

export function Analysis() {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const NbaTeamStatsObj = Parse.Object.extend("NBATeamStats");
        const query = new Parse.Query(NbaTeamStatsObj)
        query.find().then((objects) => {
            objects.forEach((row) => {
                const OREB = row.get("OREB");
                const BLKA = row.get("BLKA");
                const FGA = row.get("FGA");
                const BLK = row.get("BLK");
                const AST = row.get("AST");
                const FG_PCT = row.get("FG_PCT");
                const PLUS_MINUS = row.get("PLUS_MINUS");
                const DREB = row.get("DREB");
                const STL = row.get("STL");
                const L = row.get("L");
                const FGM = row.get("FGM");
                const PFD = row.get("PFD");
                const REB = row.get("REB");
                const PTS = row.get("PTS");
                const FT_PCT = row.get("FT_PCT");
                const FTA = row.get("FTA");
                const FG3_PCT = row.get("FG3_PCT");
                const PF = row.get("PF");
                const W = row.get("W");
                const W_PCT = row.get("W_PCT");
                const TOV = row.get("TOV");
                const FG3M = row.get("FG3M");
                const FTM = row.get("FTM");
                const TeamName = row.get("TeamName");
                const TeamID = row.get("TeamID");
                const TeamAbbr = row.get("TeamAbbr");

                const rowJson = {
                    "OREB": OREB,
                    "BLKA": BLKA,
                    "FGA": FGA,
                    "BLK": BLK,
                    "AST": AST,
                    "FG_PCT": FG_PCT,
                    "PLUS_MINUS": PLUS_MINUS,
                    "DREB": DREB,
                    "STL": STL,
                    "L": L,
                    "FGM": FGM,
                    "PFD": PFD,
                    "REB": REB,
                    "PTS": PTS,
                    "FT_PCT": FT_PCT,
                    "FTA": FTA,
                    "FG3_PCT": FG3_PCT,
                    "PF": PF,
                    "W": W,
                    "W_PCT": W_PCT,
                    "TOV": TOV,
                    "FG3M": FG3M,
                    "FTM": FTM,
                    "TeamName": TeamName,
                    "TeamID": TeamID,
                    "TeamAbbr": TeamAbbr
                }
                setRows(rows => [...rows, rowJson])
            })
        })
    }, [])

    return (
        <div>
            <h2>Team wins over the last 15 games</h2>
            <BarChart data={rows} />
        </div>
    );
}
export default Analysis;