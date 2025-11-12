import React from 'react';

const sampleNews = [
  { id: 1, title: 'Space has a smellf', text: 'Astronauts say that after going into outer space, their spacesuits smell something like metal, burntsteak, or hot metal. This is due to ozone and ions that are formed in the vacuum.' },
  { id: 2, title: 'Stars dont twinkle in space', text: 'They twinkle only for us on Earth because the light is distorted by the atmosphere. In space, shine steadily.' },
  { id: 3, title: 'The Moon is moving away', text: 'Every year, the Moon moves away from us by about 3.8 cm. It used to be much closer and look gigantic.' },
];

export default function News(){
  return (
    <div>
      <h1>News</h1>
      <div className='news-list'>
        {sampleNews.map(n=>(
          <article key={n.id} style={{padding:8, borderBottom:'1px solid #eee'}}>
            <h3>{n.title}</h3>
            <p>{n.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
