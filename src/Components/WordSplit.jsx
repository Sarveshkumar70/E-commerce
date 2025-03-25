import React from 'react'

function WordSplit({title}) {
  const shortenByWords = (title, wordCount = 3) => {
    const words = title.split(' ');
    return words.length>wordCount?words.splice(0,wordCount).join(' '):title
  };

  return (
    <>{shortenByWords(title)}</>
  )
}

export default WordSplit