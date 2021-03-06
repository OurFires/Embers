import React from 'react';
import {emb} from "../tokens/embers-last/index";

const Button = () => {
  return (
    <>{JSON.stringify(emb({
        typography: ['titleHero', 'big', 'small', 'smallStrong'],
        color: ['primary', 'primarydark', 'red', 'teal']
    }))}</>
  );
 }

export default Button;
