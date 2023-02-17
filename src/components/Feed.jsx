import { Box } from "@mui/system";
import Post from "./Post";

const Feed = () => {
  const feeds = () => {
    const results = [];
    for (let i = 0; i < 5; i++) {
      results.push(<Post key={i} />);
    }
    return results;
  };

  return (
    <Box flex={4} p={2}>
      {feeds()}
    </Box>
  );
};

export default Feed;
