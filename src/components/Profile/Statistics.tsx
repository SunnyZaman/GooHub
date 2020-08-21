import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from '../Chart';
// import Contributions from '../Contributions';
import GitHubCalendar from "github-calendar";
import "../../assets/style/github-calendar-responsive.css";
const StatisticsContainer = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
const ProfileContainer = styled.div`
    width: 30%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center
`;
const ChartContainer = styled.div`
    width: 70%;
`;
const StatsContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
`;
const Stat = styled.div`
    background: #f0f0f0;
    border-radius: 12px;
    margin: 5px;
    border: 1px solid #a09e9e;
    padding: 11px;
`;
const Bold = styled.span`
    font-weight: 600;
`;
const ContributionsContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
`;
const ContributionsHeader = styled.h2`
    font-size: 18px;
`;
function Statistics(props: any) {
    const { repositories, followers, following, avatar, totalContributions, login } = props;
    const [chartData, setChartData] = useState({});
    // const [contributionsData, setContributionsData] = useState([]);
    const adjustColor = (color: any, amount: any) => {
        return '#' + color.replace(/^#/, '').replace(/../g, (color: any) => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }
    // const getContributions = () =>{
    //     const userContributions:any = [];
    //     if(contributions!==undefined){
    //         contributions.weeks.forEach((week:any)=>{
    //             week.contributionDays.forEach((day:any)=>{
    //                 userContributions.push(day);
    //             })
    //         })
    //     }
    //     console.log("user contributions", userContributions)
    //     setContributionsData(userContributions);
    // }
    useEffect(() => {
        if (login !== undefined) {
            GitHubCalendar(".calendar", login, { responsive: true, global_stats: false, tooltips: true });
        }
    }, [login]);

    useEffect(() => {
        // getContributions();
        const labels: any = [];
        const values: any = [];
        const backgroundColors: any = [];
        const borderColors: any = [];
        const languageData: any = [];
        if (repositories !== undefined && repositories.length > 0) {
            repositories.forEach((repository: any) => {
                const languageNodes = repository.languages.nodes;
                languageNodes.forEach((language: any) => {
                    if (language.color !== null) {
                        const index = languageData.findIndex((value: any) => value?.Language === language.name)
                        if (languageData.length === 0 || index === -1) {
                            languageData.push({
                                Language: language.name,
                                Color: language.color,
                                AdjustedColor: adjustColor(language.color, -60),
                                Count: 1
                            });
                        }
                        else {
                            languageData[index].Count++;
                        }
                    }
                })
            })
        }
        languageData.forEach((data: any) => {
            labels.push(data.Language);
            backgroundColors.push(data.Color);
            borderColors.push(data.AdjustedColor);
            values.push(data.Count);
        })
        setChartData({
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        })

    }, [repositories]);
    return (
        <StatisticsContainer>
            <ProfileContainer>
                <img src={avatar} alt={'user avatar'} height="auto" width="100%" />
                <StatsContainer>
                    <Stat>Followers: <Bold>{followers}</Bold></Stat>
                    <Stat>Following: <Bold>{following}</Bold></Stat>
                </StatsContainer>
            </ProfileContainer>
            <ChartContainer>
                <Chart data={chartData} title={"Your Top Languages"} />
            </ChartContainer>
            <ContributionsContainer>
                <ContributionsHeader>{totalContributions} contributions made in the last year</ContributionsHeader>
                < div className="calendar"></div>
            </ContributionsContainer>
        </StatisticsContainer>
    );
}

export default Statistics;
