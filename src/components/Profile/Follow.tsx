import React from 'react';
import styled from 'styled-components';
const FollowContainer =  styled.div`
    margin-top: 10px;
`;
const StyledLink = styled.a`
    text-decoration:none;
    color: #000000;
`;
const UserContainer =  styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px 0;
    border-bottom: 1px solid #ebebeb;
    align-items:center;
`;

const UserImage = styled.img`
border-radius: 50%;
`;
const UserLogin = styled.p`
    margin: 0;
    color: #696868;
    font-size: 17px;
    // text-decoration: underline;
`;
const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    &:hover ${UserLogin}{
        text-decoration: underline;
    }
`;
const UserName = styled.h2`
    margin: 0;
    font-size: 21px;
`;
const UserStats = styled.p`
    margin: 0 0 1px 0;
    color: #696868;
`;
const UserBio = styled.p`
    margin: 0;
`;
function Follow(props: any) {
    const {users} = props;
    // const users = [
    //     {
    //         name: "Ricky Zaman",
    //         avatarUrl: "https://avatars2.githubusercontent.com/u/36957507?u=f1ce635120a45e63081510a70367cee44c377919&v=4",
    //         login: "riczaman",
    //         bio: "Solutions-driven programmer with an eagerness to learn new languages. ",
    //         url: "https://github.com/riczaman",
    //         followers: {
    //             totalCount: 1
    //         },
    //         following: {
    //             totalCount: 6
    //         }
    //     }
    // ]
    return (
        <FollowContainer>
            {
            users !== undefined &&
            <>
                {
                    users.map((user:any, index:number) => (
                        <UserContainer key={index}>
                            <StyledLink href={user.url}>
                            <UserImage src={user.avatarUrl} alt={user.login + 'avatar'} height="50px" width="auto"/>
                            </StyledLink>
                            <StyledLink href={user.url}>
                            <UserInformation>
                                <UserName>{user.name}</UserName>
                                <UserLogin>@{user.login}</UserLogin>
                                <UserStats>{user.followers.totalCount} {user.followers.totalCount>1?"followers":"follower"} · {user.following.totalCount} following</UserStats>
                                <UserBio>{user.bio}</UserBio>
                            </UserInformation>
                            </StyledLink>
                        </UserContainer>
                    ))}
                {/* <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalAmount={repositories.length}
                paginate={paginate} /> */}
            </>
        }
        </FollowContainer>
    );
}

export default Follow;
