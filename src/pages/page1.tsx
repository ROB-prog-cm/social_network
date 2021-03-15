import React, { memo } from 'react';
import App from '@components/app';
import styles from './styles.module.scss';
type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <App></App>
    </div>
  );
};

export default memo(SimpleForm);
