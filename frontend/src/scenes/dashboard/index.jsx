import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CodeIcon from "@mui/icons-material/Code";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import ProgressCircle2 from "../../components/ProgressCircle1";
import { leaderboard, mockTransactions } from "../../data/mockData";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState(null);
  // Define setPercentile and setGitHubContribution
  const [setPercentile] = useState(null);
  const [ setGitHubContribution] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/username/21bcs2625`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
        setPercentile(data.percentile); 
        setGitHubContribution(data.githubContribution); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, []);
  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Resume
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {userData && (
          <>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={userData.codeforce.title}
                subtitle={userData.codeforce.subtitle}
                progress={userData.codeforce.progress}
                increase={userData.codeforce.increase}
                icon={<CodeIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
              />
            </Box>

            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={userData.codechef.title}
                subtitle={userData.codechef.subtitle}
                progress={userData.codechef.progress}
                increase={userData.codechef.increase}
                icon={<CodeIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
              />
            </Box>

            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={userData.leetcode.title}
                subtitle={userData.leetcode.subtitle}
                progress={userData.leetcode.progress}
                increase={userData.leetcode.increase}
                icon={<CodeIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
              />
            </Box>

            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={userData.hackerrank.title}
                subtitle={userData.hackerrank.subtitle}
                progress={userData.hackerrank.progress}
                increase={userData.hackerrank.increase}
                icon={<CodeIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
              />
            </Box>
            <Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={userData.atcoder.title}
    subtitle={userData.atcoder.subtitle}
    progress={userData.atcoder.progress}
    increase={userData.atcoder.increase}
    icon={
      <CodeIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    }
  />
</Box>

<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={userData.spoj.title}
    subtitle={userData.spoj.subtitle}
    progress={userData.spoj.progress}
    increase={userData.spoj.increase}
    icon={
      <CodeIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    }
  />
</Box>

<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={userData.codingNinjas.title}
    subtitle={userData.codingNinjas.subtitle}
    progress={userData.codingNinjas.progress}
    increase={userData.codingNinjas.increase}
    icon={
      <CodeIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    }
  />
</Box>

<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={userData.gfg.title}
    subtitle={userData.gfg.subtitle}
    progress={userData.gfg.progress}
    increase={userData.gfg.increase}
    icon={
      <CodeIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    }
  />
</Box>

          </>
        )}

        {/* ROW 2 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Contest Ratings</Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>BragIt Scale</Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Problem Solved</Typography>
            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>Top MNCs</Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box key={`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">{transaction.txId}</Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">{transaction.cost}</Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant="h5" fontWeight="600">Percentile</Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>87.97</Typography>
            <Typography>Percentile</Typography>
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant="h5" fontWeight="600">GitHub Contribution</Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle2 size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>48</Typography>
            <Typography>Contributions</Typography>
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>Job Profile Recommendation</Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box gridColumn="span 12" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>BragIt Leaderboard</Typography>
            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>Top Braggers</Typography>
          </Box>
          {leaderboard.map((transaction, i) => (
            <Box key={`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">{transaction.txId}</Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">{transaction.cost}</Box>
            </Box>
          ))}
        </Box>


      </Box>
    </Box>
  );
};

export default Dashboard;
