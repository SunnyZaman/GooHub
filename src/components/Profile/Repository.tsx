import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';

function Repository() {
    const [pager, setPager]= useState({});
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
    return (
        <>
        <p>Repository oof</p>
        <Pagination currentPage={currentPage} postsPerPage={postsPerPage}/>
        </>
    );
}

export default Repository;
