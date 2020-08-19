import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
const RepositoryContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 35px 0;
  &:first-of-type{
      margin-top: 15px;
  }	
`;
const RepoName =  styled.h2`
    color: #1a0dab;
    margin: 6px 0px;
    font-weight: normal;
    font-size: 20px;
`;
const RepoLink =  styled.a`
    color: #202124;
    display:flex;
    flex-direction:column;
    text-decoration:none;
    &:hover ${RepoName}{
        text-decoration: underline;
    }
`;
const RepoBody =  styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    color: #4d5156;
`;
function Repository(props: any) {
    const { repositories } = props;
    // const [pager, setPager] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    //   const tempData = [{}, {}, {}, {}];
    // const repositories = [
    //     {
    //         url: "https://github.com/riczaman/C_Programs",
    //         name: "C_Programs",
    //         createdAt: "2018-05-06T17:24:21Z",
    //         description: "Programs made with C."
    //     }
    // ]
    // console.log("repos: ", repositories);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = repositories?.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
    return (
        <>{
            currentPosts !== undefined &&
            <>
                {
                    currentPosts.map((repository:any, index:number) => (
                        <RepositoryContainer key={index}>
                            <RepoLink href={repository.url} target="_blank"><span>{repository.url}</span>
                            <RepoName>{repository.name}</RepoName>
                            </RepoLink>
                            <RepoBody>{new Date(repository.createdAt).toDateString()} - {repository.description}</RepoBody>
                        </RepositoryContainer>
                    ))}
                <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalAmount={repositories.length}
                paginate={paginate} />
            </>
        }
        </>
    );
}

export default Repository;
