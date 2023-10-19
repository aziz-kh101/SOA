import React, { useCallback, useEffect, useState } from "react";
import CenterContainer from "../@Components/CenterContainer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getNoteData, getPresenceData } from "../@services/StatisticsService";
import { Container } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

function Statistics(props) {
  const [presenceData, setPresenceData] = useState({});
  const [noteData, setNotData] = useState({});
  const [loading, setLoading] = useState(true);

  const getPresentLabel = useCallback((value) => {
    return value.present === 0 ? "absent" : "present";
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const presenceResponse = await getPresenceData();
        const noteResponse = await getNoteData();

        console.log(presenceResponse, noteResponse);

        setPresenceData({
          labels: [
            getPresentLabel(presenceResponse[0]),
            getPresentLabel(presenceResponse[1]),
          ],
          datasets: [
            {
              label: "Presence Count",
              data: [presenceResponse[0].count, presenceResponse[1].count],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
              responsive: true,
            },
          ],
        });

        setNotData({
          labels: [noteResponse[0].status, noteResponse[1].status],
          datasets: [
            {
              label: "Pass Count",
              data: [noteResponse[0].count, noteResponse[1].count],
              backgroundColor: [
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: ["rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
              borderWidth: 1,
              responsive: true,
            },
          ],
        });

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [getPresentLabel]);
  return (
    !loading && (
      <CenterContainer>
        <Container
          sx={{
            display: "grid",
            position: "relative",
            gap: "20px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Container sx={{ position: "relative" }}>
            <Pie data={presenceData} />
          </Container>

          <Container sx={{ position: "relative" }}>
            <Pie data={noteData} />
          </Container>
        </Container>
      </CenterContainer>
    )
  );
}

export default Statistics;
