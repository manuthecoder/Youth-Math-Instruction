import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

export default function Index() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: green[900],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: green[50],
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Young Math Instruction
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: green[50],
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          We&apos;re working on this website. Stay tuned for updates!
        </Typography>
      </Box>
    </Box>
  );
}
