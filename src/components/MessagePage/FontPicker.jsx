import styles from './FontPicker.module.css';
import { useState } from 'react';

const FontPicker = ({ onFontChange, font }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = e => {
    const { innerText } = e.target;
    onFontChange(innerText);
  };
  const fontList = [
    { id: 1, value: 'Noto Sans' },
    { id: 2, value: 'Pretendard' },
    { id: 3, value: '나눔명조' },
    { id: 4, value: '나눔손글씨 손편지체' },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>폰트 선택</h1>
      </div>
      <div
        className={showOptions ? styles.selectBox : styles.noSelectBox}
        onClick={() => setShowOptions(prev => !prev)}>
        <label className={styles.label}>{font}</label>
        <ul className={showOptions ? styles.selectShow : styles.selectNoShow}>
          {fontList.map(v => (
            <li key={v.id} className={styles.list} onClick={handleOnChangeSelectValue}>
              {v.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FontPicker;