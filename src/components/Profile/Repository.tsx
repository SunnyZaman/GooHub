import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';

function Repository() {
    const [pager, setPager]= useState({});
    return (
        <>
        <p>Repository oof</p>
        <Pagination pager={pager}/>
        </>
    );
}

export default Repository;
