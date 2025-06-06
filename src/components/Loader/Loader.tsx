import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderOverlay } from "./Loader.styled";
import { useTheme } from "styled-components";

interface LoaderProps {
  size?: number;
  color?: string;
  loading?: boolean;
  overlay?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 50,
  color,
  loading = true,
  overlay = true,
}) => {
  const theme = useTheme();
  const loaderColor = color || theme.colors.text;
  
  return (
    <>
      {overlay ? (
        <LoaderOverlay>
          <ClipLoader size={size} color={loaderColor} loading={loading} />
        </LoaderOverlay>
      ) : (
        <ClipLoader size={size} color={color} loading={loading} />
      )}
    </>
  );
};

export default Loader;
