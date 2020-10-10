import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getParticularMatchDetails } from '../api/getParticularMatchDetails';

export const DetailScore = () => {
    const { matchID }: any = useParams();
    const [matchHeader, setMatchHeader] = useState<any>();
    const [smallTeamIntro, setTeamIntro] = useState<any>([]);
    const [currentScore, setCurrentScore] = useState<any>();
    const [miniScore, setMiniScore] = useState<any>('');
    const [batsmanStriker, setBatsmanStriker] = useState<any>({});
    const [batsmanNonStriker, setBatsmanNonStriker] = useState<any>({});
    const [commentry, setCommentry] = useState<any>();
    
    const getMatchInfo = async () => {
        const res = await getParticularMatchDetails(matchID);
        setMatchHeader(res.matchHeader);
        setTeamIntro(res.matchHeader.matchTeamInfo[res.matchHeader.matchTeamInfo.length - 1]);
        setCurrentScore(res.miniscore.batTeam);
        setBatsmanStriker(res.miniscore.batsmanStriker);
        setBatsmanNonStriker(res.miniscore.batsmanNonStriker);
        setMiniScore(res.miniscore);
        setCommentry(res.commentaryList);
    }

    useEffect(() => {
        getMatchInfo();
        setInterval(getMatchInfo, 10000);
    }, []);

    if(matchHeader && matchHeader.state === 'Preview') {
        return(
            <div>
                <a href="/">Main Menu</a>
                <p>Match is in Preview Mode</p>
            </div>
        );
    }

    return(
        <div>
            <a href="/">Main Menu</a>
            {matchHeader ? (!matchHeader.complete) ?
                <div>
                    <p>{smallTeamIntro.battingTeamShortName} : {currentScore ? currentScore.teamScore : null}/{currentScore ? currentScore.teamWkts : null}</p>
                    <p>overs {miniScore.overs}</p>
                    <p>Current Run Rate: {miniScore.currentRunRate}</p>
                    {miniScore.requiredRunRate ? <p>Require Run Rate {miniScore.requiredRunRate}</p> : null }
                    <p>Name: {batsmanStriker.batName} - Runs: {batsmanStriker.batRuns} - Balls: {batsmanStriker.batBalls} - 4: {batsmanStriker.batFours} - 6: {batsmanStriker.batSixes} - Strike Rate: {batsmanStriker.batStrikeRate}</p>
                    <p>Name: {batsmanNonStriker.batName} - Runs: {batsmanNonStriker.batRuns} - Balls: {batsmanNonStriker.batBalls} - 4: {batsmanNonStriker.batFours} - 6: {batsmanNonStriker.batSixes} - Strike Rate: {batsmanNonStriker.batStrikeRate}</p>
                    <p>Recent: {miniScore.recentOvsStats}</p>
                </div>
                : 
                <div>
                    <p>Match Finished</p>
                    <p>Wining Team: {matchHeader.result.winningTeam} won by {matchHeader.result.winByInnings ? <p>an innings and</p> :null} {matchHeader.result.winningMargin} runs</p>
                    <p>Player of the match: {matchHeader.playersOfTheMatch[0].fullName}</p>
                </div>
            : null}
            <p>Commentry</p>
            {commentry ?
                commentry.map((text, index) => <p key={index}>{text.commText}</p>)
            : null }
        </div>
    );
}