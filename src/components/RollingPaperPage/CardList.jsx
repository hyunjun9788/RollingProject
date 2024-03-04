import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';
import { useState, useEffect } from 'react';
import { getMessage } from '../../apis/rollingPaperAPI';

const RollingPage = () => {
  const [message, setMessage] = useState([]);

  const fetchData = async id => {
    const response = await getMessage(id);
    setMessage(response);
  };

  useEffect(() => {
    fetchData(4138);
  }, []);

  // console.log('Message:', message[0]);

  return (
    <div className={styles.cardList}>
      <div className={styles.cardContainer}>
        <AddCard />
        {message && message.map(message => <Card key={message.id} mode={'normal'} messageInfo={message} />)}
      </div>
    </div>
  );
};

export default RollingPage;
