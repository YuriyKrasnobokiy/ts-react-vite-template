import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderOverlay } from "./Loader.styled";

interface LoaderProps {
  size?: number;
  color?: string;
  loading?: boolean;
  overlay?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 50,
  color = "#36d7b7",
  loading = true,
  overlay = true,
}) => {
  return (
    <>
      {overlay ? (
        <LoaderOverlay>
          <ClipLoader size={size} color={color} loading={loading} />
        </LoaderOverlay>
      ) : (
        <ClipLoader size={size} color={color} loading={loading} />
      )}
    </>
  );
};

export default Loader;
