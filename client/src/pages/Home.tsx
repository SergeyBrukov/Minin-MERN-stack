import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return <div onClick={() => navigate('/create')}>Home</div>;
};

export default Home;
