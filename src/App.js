import logo from "./logo.svg";
import { Box } from "@mui/material";
import "./App.css";
import Header from "./Header/Header";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { blogData } from "./data/data";
import AddForm from "./AddForm/AddForm";

function App() {
  const [expanded, setExpanded] = React.useState("Blog Title 1");
  const [showForm, setShowForm] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="App">
      <Header />
      <Box className="App__BlogSection">
        {blogData.map((blog) => (
          <Accordion
            expanded={expanded === blog.title}
            onChange={handleChange(blog.title)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {blog.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#f4f4f4" }}>
              <img src={blog.image} width={500} height={300} alt="" />
              <Typography sx={{ textAlign: "justify", whiteSpace: "pre-wrap" }}>
                {blog.body}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        {showForm ? (
          <AddForm openModal={showForm} setShowForm={setShowForm} />
        ) : null}
        <Fab
          color="secondary"
          aria-label="add"
          sx={{ position: "fixed", zIndex: 2, top: "90%", left: "90%" }}
          onClick={() => setShowForm(!showForm)}
        >
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
}
//white-space: pre-wrap; /* or pre-line *
export default App;
