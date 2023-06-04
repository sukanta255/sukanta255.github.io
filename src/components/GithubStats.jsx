import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/githubstats.css";
import GithubCalender from "react-github-calendar";
import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react";

export const GithubStats = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="githubstats"
      style={{
        "--bglightstats": light ? "#edf2f8" : "#0a192f",
        "--bglight2stats": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "#edf2f8" : "#0a192f",
      }}
    >
      {/* <p>Sta<span>tis</span>tics <SiGithub id='gitStIc' fontSize={'25px'} style={{ transition: "none", '--icColor': light ? "black" : "white" }} /></p> */}
      <p>
        Statistics
      </p>
      <div id="statCont">
        <div data-aos="zoom-in">
          {!light ? (
            <img src="https://github-readme-stats.vercel.app/api?username=sukanta255&theme=vue-dark&show_icons=true&hide_border=true&count_private=true&bg_color=0a192f" />
          ) : (
            <img src="https://github-readme-stats.vercel.app/api?username=sukanta255&theme=flag-india&show_icons=true&hide_border=true&count_private=true&title_color=blue&text_color=black&bg_color=edf2f8" />
          )}
        </div>
        <div data-aos="zoom-in">
          {light ? (
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sukanta255&theme=flag-india&show_icons=true&hide_border=true&layout=compact&title_color=blue&text_color=black&bg_color=edf2f8" />
          ) : (
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sukanta255&theme=vue-dark&show_icons=true&hide_border=true&layout=compact&bg_color=0a192f" />
          )}
        </div>
      </div>
      <div className="calender" data-aos="zoom-in">
        <Box fontWeight={"bold"}>
          <Center p={"12"}>
            <Heading size={"md"} style={{ color: light ? "black" : "white" }}>
              My GitHub Calender
            </Heading>
          </Center>
          <GithubCalender
            username="sukanta255"
            blockSize={18}
            blockMargin={5}
            fontSize={16}
            color={"green"}
            style={{ color: light ? "black" : "white" }}
          />
        </Box>
      </div>
    </div>
  );
};
