import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  size?: number;
  color?: string;
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ size = 50, color = '#36d7b7', loading = true }) => {
  return <ClipLoader size={size} color={color} loading={loading} />;
};

export default Loader;