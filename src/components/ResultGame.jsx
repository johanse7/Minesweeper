import React, { useEffect } from 'react';
import { FaRegSadCry } from 'react-icons/fa';
import { IoMdHappy } from 'react-icons/io';
import '../assets/styles/components/ResultGame.scss';

const ResultGame = (props) => {
  const { win, message, unMountComponent } = props;
  useEffect(() => {
    debugger
    const timeoutAnmount = setTimeout(unMountComponent, 4000);
    return () => {
      clearTimeout(timeoutAnmount);
    };
  }, []);

  return (
    <div className="content-result-message animate-message" style={win ? { color: '#feb645' } : { color: '#FF0000' }}>
      <h1 className="animate-message">{message}</h1>
      {win ? <IoMdHappy /> : <FaRegSadCry />}
    </div>
  );
};

export default ResultGame;
