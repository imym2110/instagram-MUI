import { Box, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [2000]);
  return (
    <Box flex={4}>
      {loading ? (
        Array(10)
          .fill("")
          .map(() => {
            return (
              <Stack spacing={1}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Skeleton
                    variant="text"
                    height={100}
                    sx={{ borderRadius: "50%", width: "60px" }}
                  />
                  <Skeleton variant="text" height={80} width="20%" />
                </Box>

                <Skeleton variant="rectangular" height={300} />
              </Stack>
            );
          })
      ) : (
        <>
          <Post image="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post image="https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post image="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </>
      )}
    </Box>
  );
};

export default Feed;
