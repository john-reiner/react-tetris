import React from 'react'
import Score from './Score'

export default function leaderBoard() {
    
    const renderScores = () => {
        return this.props.scores.map(score => {
            return <Score userName={score.user_id} points={score.points} level={score.level} rows={score.rows} />
        })
    }


    return (
        <div>
            <table className="ui celled striped padded table">
                <tbody>
                    <tr>
                        <th>
                            <h3 className="ui center aligned header">User Name</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Score</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Level</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Rows</h3>
                        </th>
                    </tr>
                    {renderScores()}
                </tbody>
            </table>
        </div>
    )

}
