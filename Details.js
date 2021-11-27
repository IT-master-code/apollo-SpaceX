import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

const ALL_MISSIONS = gql`
  {
    launchesPast {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
      }
    }
  }
`;

function Details() {
  const { loading, error, data } = useQuery(ALL_MISSIONS);
  if (loading) return <p>Loading selected mission...</p>;
  if (error) return <p>Something went wrong</p>;
  console.log(data);
  return (
    <Container>
      <Content>
          <h3 style={{textAlign: "center", color: "darkgray"}}>Details of the mission</h3>
        {data.launchesPast.map((mission, id) => (
          <ul key={id}>
            <Wrap>
              <li>
                <h1>Name of the Mission: {mission.mission_name}</h1>
                <p>Rocket used: {mission.rocket.rocket_name}</p>
                <p>Launched local date: {mission.launch_date_local} </p>
                <p>Location: {mission.launch_site.site_name_long}</p>
                <p>Mission article link: {mission.links.article_link}</p>
                <p> Mission video link: {mission.links.video_link}</p>
              </li>
            </Wrap>
          </ul>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  h1 {
      color:white;
  }
  p{
      color: lightblue;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(1, minmax(0, 3fr));
  padding: 15px;
`;

const Wrap = styled.div`
  border: 3px solid blue;

  background-color: blue;
  min-height: 250px;
  li {
    list-style-type: none;
  }
`;

export default Details;
