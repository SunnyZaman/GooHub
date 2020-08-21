import React from 'react';
import styled  from 'styled-components';
const NoResultsContatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 115px;
    margin-top: 35px;
    @media (max-width: 710px) {
        margin-left: 35px;
    }
`;
function NoResults(props:any) {
    const { query } = props
    return (
        <NoResultsContatiner>
            <p>Your search - <strong>{query}</strong> did not match any usernames.</p>
            <p>Suggestions:</p>
            <ul>
                <li>Make sure username is spelt correctly.</li>
                <li>Try a different username.</li>
                <li>Try more general usernames.</li>
            </ul>
        </NoResultsContatiner>
    );
}

export default NoResults;
