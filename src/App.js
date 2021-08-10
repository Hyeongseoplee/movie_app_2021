import React from 'react';

function Food ({fav, img}){
  return (
    <div>
    <h2>I love {fav}</h2>
    <img src={img}></img>
    </div>
  )
}

const foodILike = [
  {
    name : 'pizza',
    image : 
    'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
  },
  {
    name : 'hambuger',
    image : 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg'
  },
  {
    name : 'teokbboggi',
    image : 
    'https://www.seriouseats.com/thmb/5_nQbRarSToa5XMLW9aWQc2yTPM=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__03__20200302-tteokbokki-vicky-wasik-76b599db592144eebf475e88221ac05f.jpg'
  },
  {
    name : 'taco',
    image :
    'https://img.taste.com.au/w_-0kcUJ/taste/2016/11/aussie-style-beef-and-salad-tacos-86525-1.jpeg'
  }
] 

function App() {
  return (
    <div>
    {foodILike.map(food => <Food fav={food.name} img={food.image}/>)}
    </div>
  )
}
export default App; 
