import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id : 1,
    name : 'pizza',
    image : 
    'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
  },
  {
    id : 2,
    name : 'hambuger',
    image : 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg',
    rating : 3.8
  },
  {
    id : 3,
    name : 'teokbboggi',
    image : 
    'https://www.seriouseats.com/thmb/5_nQbRarSToa5XMLW9aWQc2yTPM=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__03__20200302-tteokbokki-vicky-wasik-76b599db592144eebf475e88221ac05f.jpg',
    rating : 3.0
  },
  {
    id : 4,
    name : 'taco',
    image :
    'https://img.taste.com.au/w_-0kcUJ/taste/2016/11/aussie-style-beef-and-salad-tacos-86525-1.jpeg',
    rating : 4.9
  }
] 

function Food({name, picture, rating}) {
  return (
    <div>
    <h1>I love {name}</h1>
    <h2>rating : {rating} / 5.0</h2>
    <img src={picture} alt={name}></img>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image : PropTypes.string,
  rating : PropTypes.number
}

function App() {
    return (
      <div>
      <h2>hello!</h2>
      {foodILike.map((each) => {
        return <Food 
                key={each.id}
                name={each.name} 
                picture={each.image} 
                rating={each.rating}/>
      })}
      </div>
  ) 
}

export default App; 
