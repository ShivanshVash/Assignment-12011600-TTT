import React, { useState, useRef } from 'react';
import SubmitButton from './SubmitButton';
import { Bar } from 'react-chartjs-2';
import { saveAs } from 'file-saver';
import _ from 'lodash';
import Chart from 'chart.js/auto';

const App = () => {
  const [content, setContent] = useState('');
  const [wordFrequency, setWordFrequency] = useState([]);
  const [histogramData, setHistogramData] = useState(null);
  const chartContainer = useRef(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        'https://www.terriblytinytales.com/test.txt'
      );
      const data = await response.text();
      setContent(data);

      const words = data.split(/\s+/); // Split content by whitespace
      const wordCounts = _.countBy(words); // Count occurrence of each word

      const sortedWords = Object.keys(wordCounts).sort(
        (a, b) => wordCounts[b] - wordCounts[a]
      ); // Sort words by frequency

      const top20Words = sortedWords.slice(0, 20); // Select top 20 words

      const histogramLabels = top20Words;
      const histogramValues = top20Words.map((word) => wordCounts[word]);

      setWordFrequency(wordCounts);

      setHistogramData({
        labels: histogramLabels,
        datasets: [
          {
            label: 'Word Frequency',
            data: histogramValues,
            backgroundColor: 'rgba(75,192,192,0.6)',
          },
        ],
      });

      if (chartContainer.current) {
        new Chart(chartContainer.current, {
          type: 'bar',
          data: {
            labels: histogramLabels,
            datasets: [
              {
                label: 'Word Frequency',
                data: histogramValues,
                backgroundColor: 'rgba(75,192,192,0.6)',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const handleExport = () => {
    const csvContent =
      'Word,Frequency\n' +
      Object.entries(wordFrequency)
        .map(([word, count]) => `${word},${count}`)
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'word_frequency.csv');
  };

  return (
    <div>
      <h1>ASSIGNMENT Terribly Tiny Tales 12011600</h1>
      <h2>PART 1</h2>
      <SubmitButton onClick={handleClick} />
      <pre>{content}</pre>
      
      {histogramData && (
        <>
          <h2>Part 2</h2>
          <h2>Word Frequency Histogram</h2>
          <div>
      <Bar
        data={histogramData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
         <h2>Part 3</h2>
          <button onClick={handleExport}>Export</button>
        </>
      )}
    </div>
  );
};

export default App;










