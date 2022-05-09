import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/meghshah612/e14c71c201257a9d6b842dd4293dbd68/raw/f40c8bb5e6f9d2cd2a26e53db06cce06d6ffc6f8/it-return.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Population = +d['return'] ;
      return d;
    };
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10));
    });
  }, []);
  
  return data;
};