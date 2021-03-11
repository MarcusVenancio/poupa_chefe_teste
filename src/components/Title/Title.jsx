import React from 'react';
import { useTheme } from '../../context/ThemeContext';

import './index.scss';

export const Title = ({title}) => {
  const { theme } = useTheme();

  return (
    <h1 className={`title ${theme}`}>{title}</h1>
  )
}
