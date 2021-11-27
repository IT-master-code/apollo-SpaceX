import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import "./App.css";

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

function AllMissions() {
  const { loading, error, data } = useQuery(ALL_MISSIONS);
  if (loading) return <p>Loading past missions....</p>;
  if (error) return <p>Something went wrong</p>;
  console.log(data);
  return (
    <Container>
      <Header>
        <h3
          style={{ textAlign: "center", fontSize: "35px", color: "darkgrey" }}
        >
          SPACE X
        </h3>
        <h6
          style={{ textAlign: "center", fontSize: "15px", color: "darkgrey" }}
        >
          All Missions
        </h6>
      </Header>

      <Content>
        {data.launchesPast.map((mission, id) => (
          <ul key={id}>
            <Wrap>
              <Flex>
                <div>
                  <p style={{ color: "grey", textAlign: "center" }}>
                    name of the mission:
                  </p>
                  <h1 style={{ textAlign: "center", color: "white" }}>
                    {mission.mission_name}
                  </h1>
                </div>

                <Button>
                  {/* <Link to={`/details/${mission.id}`}> */}
                  <button>details of the mission</button>
                  {/* </Link> */}
                </Button>
              </Flex>
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
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 3fr));
  padding: 15px;
`;

const Wrap = styled.div`
  border: 3px solid blue;

  background-color: blue;
  min-height: 250px;
`;

const Flex = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;


}
`;

const Button = styled.div`
  button {
    border-radius: 10px;
    padding: 5px;
    background-color: lightblue;
    &:hover {
      background-color: red;
      cursor: pointer;
      color: white;
    }
  }
`;

const Header = styled.div``;

export default AllMissions;
