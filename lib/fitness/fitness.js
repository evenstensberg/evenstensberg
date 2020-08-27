import React from 'react';
import FitnessCard from './fitness-card';

import {getUser} from '../rest-api/retrieve-user';

export default function Fitness() {
    getUser();
  return (
    <FitnessCard/>
  );
}