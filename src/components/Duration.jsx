import React from 'react';

/**
 * @source https://github.com/cookpete/react-player/blob/master/src/demo/Duration.js
 * @param className
 * @param seconds
 * @returns {JSX.Element}
 * @constructor
 */
export default function Duration({seconds}) {
  return (
      <time dateTime={`P${Math.round(seconds)}S`}>
        {format(seconds)}
      </time>
  );
}

function format(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

function pad(string) {
  return ('0' + string).slice(-2);
}
