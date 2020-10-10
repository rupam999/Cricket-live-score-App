import React, { useEffect, useState } from 'react';
import { getAllMatches } from '../api/getAllMatches';

export const MainMatches = () => {
    const [allMatchData, setAllMatchData] = useState<any>();

    useEffect(() => {
        async function getMatchData() {
            const res = await getAllMatches();
            setAllMatchData(res);
        }
        getMatchData();
    }, []);

    return(
        <div dangerouslySetInnerHTML={{__html: allMatchData}}></div>
    );
}