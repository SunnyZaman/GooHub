import React, { useState } from 'react';
import { GoogleLogo } from '../assets/images';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height:100%
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width:100%
`;
const Button = styled.button`
  background-color:#f2f2f2;
  padding:10px;
  margin:10px;
  color:#5F6368;
  font-size:14px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  &:hover{
    cursor: pointer;
    border: 1px solid #5F6368;
    color: #252626;
  }
`;
function Homepage() {
  const [isSearching, setSearching] = useState(false);
  // const history = useHistory();  
  // const search = () => {
  //   //   console.log("the search val: ", searchValue);
  //   if (searchValue.length > 0) {
  //     history.push('/profile/' + searchValue);
  //   }
  // }
  // const handleKeyDown = (event: any) => {
  //   if (event.key === "Enter") {
  //     search();
  //   }
  // }
  const handleClick = ()=>{
    setSearching(true);
  }
  return (
    <HomeWrapper>
      <img src={GoogleLogo} alt="Google logo" height="100px" width="auto" />
      <SearchBar isSearching={isSearching}/>
       {/* searchValue={searchValue} setSearchValue={setSearchValue}
         handleKeyDown={handleKeyDown} /> */}
      <ButtonContainer>
        {/* <Link to={searchValue.length > 0 ? "/profile" : "#"} tabIndex={-1}> */}
        <Button onClick={handleClick}>
          Google Search
        </Button>
        {/* </Link> */}
        <Button>I'm Feeling Lucky</Button>
      </ButtonContainer>
      <p>Google offered in: <a href="/">Francais</a></p>
    </HomeWrapper>
  );
}

export default Homepage;
