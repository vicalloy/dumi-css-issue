import React from 'react';
import css from './index.css'

export default ({ title }: { title: string }) => <h1 className={css.red}>{title}</h1>;
