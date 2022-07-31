import Head from "next/head";
import styles from './styles/index.module.scss';
import MainContainer from '../pages/styles/components/MainContainer';


const Index = () => { 
  return (
      <MainContainer keywords={Index}>
        <h1>Головна сторінка</h1>
      </MainContainer>
  );
};

export default Index;