import React from 'react';


export const CardDetails = ({ name, year_published, min_players, max_players, max_playtime, description_preview, image_url, primary_publisher, categories, rules_url}) => {
  // const displayCategories = categories.map(category => <li>{category}</li>)
  return (
    <section>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>Year Published: {year_published}</p>
      <p>Min Players: {min_players}</p>
      <p>Max Players: {max_players}</p>
      <p>Max Playtime: {max_playtime}</p>
      <p>{description_preview}</p>
      <p>Primary Publisher: {primary_publisher}</p>
      {/* <ul>
        {displayCategories}
      </ul> */}
      <p>Rules: {rules_url}</p>
    </section>
  )
}

export default CardDetails;