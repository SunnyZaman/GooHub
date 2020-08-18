import React, { useState } from 'react';
import styled from 'styled-components';
import { LeftChevron, RightChevron } from '../assets/images';
const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
`;
const CustomLabel = styled.span`
    color: #4285f4;
    border-bottom: 1px solid transparent;
    &:hover{
        border-bottom: 1px solid #4285f4;
    }
`;
const ChevronButton = styled.button`
    padding:0;
    margin-top: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: none;
    outline:none;
    cursor:pointer;
    color: #4285f4;
    background: #fff;
    & img{
        filter: invert(57%) sepia(69%) saturate(4869%) hue-rotate(201deg) brightness(98%) contrast(94%);
    }
    &:hover ${CustomLabel}{
        border-bottom: 1px solid #4285f4;
    }
`;
const PageButton = styled.button`
    padding:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: none;
    outline:none;
    cursor:pointer;
    color: #fbbd09;
    background: #fff;
    &:hover ${CustomLabel}{
        border-bottom: 1px solid #4285f4;
    }
    &:disabled {
        cursor:default;
        ${CustomLabel}{
        border-bottom: 1px solid transparent;
        color: #000000;
        }
    }
`;

const Letter: any = styled.span`
    font-size: 32px;
    font-weight: 700;
    color: ${(props: any) => props.color};
`;
function Pagination(props: any) {
    const { currentPage, postsPerPage, totalAmount, paginate } = props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalAmount / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const checkNextPage = (page:any) =>{
        if(page===endIndex){
            const newEndIndex = endIndex + 1;
            const newStartIndex = startIndex + 1;
            console.log("new start: ", newStartIndex);
            if(newEndIndex<=totalAmount){
                setStartIndex(newStartIndex);
                setEndIndex(newEndIndex);
            }
        }
    }
    const checkPreviousPage = (page:any) =>{

        
        if(page-1===startIndex){
            const newEndIndex = endIndex - 1;
            const newStartIndex = startIndex - 1;
            // console.log("current page: ", page, startIndex);
            console.log("new start: ", newStartIndex);
            
            if(newStartIndex>=0){
                setStartIndex(newStartIndex);
                setEndIndex(newEndIndex);
            }
        }
    }
    const setPage = (page: any) => {
        console.log(page, " ", startIndex, " ", endIndex);
        
        checkNextPage(page);
        checkPreviousPage(page);
        paginate(page);
        // handle when page goes to last item, or first item
    }
    // const pages:any = [];
    // const pager = () => { 
    //     for (let i = currentPage; i < Math.min(currentPage + 11, pageNumbers.length); i++) {
    //      pages.push(
    //         <PageButton key={i} disabled={currentPage === i} onClick={() => setPage(i)}>
    //         <Letter color={currentPage === i ? "#EA4436" : "#FBBD06"}>o</Letter>
    //         <CustomLabel>{i}</CustomLabel>
    //     </PageButton>
    //      ); 
    //     } 
    //     return pages; 
    // }
    return (
        <>
            {
                pageNumbers.length > 1 &&
                <PaginationContainer>
                    {
                        currentPage !== 1 &&
                        (<ChevronButton aria-label="Previous Button" onClick={() => setPage(currentPage - 1)}>
                            <img src={LeftChevron} alt="Left Chevron" height="20px" width="auto" />
                            <CustomLabel>Previous</CustomLabel>
                        </ChevronButton>)
                    }
                    <Letter color="#4285F5">G</Letter>
                    {
                        // <>
                        // {pager}
                        // </>
                        pageNumbers.slice(startIndex, endIndex).map(number => (
                            <PageButton key={number} disabled={currentPage === number} onClick={() => setPage(number)}>
                                <Letter color={currentPage === number ? "#EA4436" : "#FBBD06"}>o</Letter>
                                <CustomLabel>{number}</CustomLabel>
                            </PageButton>
                        ))
                        }
                    <Letter color="#4285F5">h</Letter><Letter color="#EA4436">u</Letter><Letter color="#34A952">b</Letter>
                    {
                        currentPage !== pageNumbers.length &&
                        (<ChevronButton aria-label="Next Button" onClick={() => setPage(currentPage + 1)}>
                            <img src={RightChevron} alt="Right Chevron" height="20px" width="auto" />
                            <CustomLabel>Next</CustomLabel>
                        </ChevronButton>
                        )
                    }
                </PaginationContainer>
            }
        </>
    );
}

export default Pagination;
