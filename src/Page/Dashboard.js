import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';


// import React from 'react';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import NoteAddIcon from '@material-ui/icons/NoteAdd';
// import SearchIcon from '@material-ui/icons/Search';
// import AssignmentIcon from '@material-ui/icons/Assignment';

const options = [
    {
        icon: <PersonAddIcon style={{ fontSize: 100, color: 'white', transform: 'scale(1.1)' }} />,
        text: 'Add a new client',
        url:"/new-client"
    },
    {
        icon: <NoteAddIcon style={{ fontSize: 100, color: 'white', transform: 'scale(1.1)' }} />,
        text: 'Add a new project',
        url:"/project-form"
    },
    {
        icon: <SearchIcon style={{ fontSize: 100, color: 'white', transform: 'scale(1)' }} />,
        text: 'Search',
        url:"/new-search"
    },
    {
        icon: <AssignmentIcon style={{ fontSize: 100, color: 'white', transform: 'scale(1)' }} />,
        text: 'Reports',
        url:"/search-result"
    },
];



const Dashboard = () => {
//   const options = [
//     { icon: <PersonAddIcon style={{ fontSize: 90, color: 'white' }} />, text: 'Add a new client' },
//     { icon: <NoteAddIcon style={{ fontSize: 90, color: 'white' }} />, text: 'Add a new project' },
//     { icon: <SearchIcon style={{ fontSize: 90,fontWeight:"bold", color: 'white' }} />, text: 'Search' },
//     { icon: <AssignmentIcon style={{ fontSize: 90, color: 'white' }} />, text: 'Reports' },
//   ];

const navigate= useNavigate()
const handleClickClient = ()=>{
  navigate("/new-client",)
}

const handleClickProject = ()=>{
  navigate("/project-form",)
}

  return (
    <Box
      sx={{
        // minHeight: '100vh',
        // background: 'linear-gradient(to bottom, #e0e7ff, #f8fafc)',
        display: 'flex',
        flexDirection:"column",
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: '20px',
      }}
    >

    
      <Box sx={{
        my:{xs:"10%",sm:"10%",md:"10"},
        display: 'flex',
        // height:{lg:"75vh"},
        // flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
        }}>
      <Grid container spacing={3} justifyContent="center" sx={{
        px:{sm:5,lg:15},
        display: 'flex',
        // flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        {options.map((option, index) => (
          <Grid item xs={12} sm={4} md={3} key={index} >
            <Card
              sx={{
                backgroundColor: '#0A74DA',
                textAlign: 'center',
                height: '230px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                cursor:"pointer"
              }}
            >
              <CardContent onClick={()=>{navigate(option.url)}}>
                {option.icon}
                <Typography variant="h6">{option.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
      
    </Box>
  );
};

export default Dashboard;
