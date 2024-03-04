// Detail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const data =
{
    "dishes": [
      {
        "name": "Grilled Salmon",
        "photo": "https://www.thespruceeats.com/thmb/HgM2h42z1HGEcSWkWk5CgAjDDpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-2216658-hero-01-a9c948f8a238400ebaafc0caf509c7fa.jpg",
        "category": "Fish",
        "recipe": "Grilled Salmon is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of salmon, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the grill to medium-high heat. In a small bowl, combine the garlic, rosemary, thyme, salt, and pepper. Rub the mixture all over the salmon. Place the salmon on the grill. Grill for 4 minutes on each side, or until the salmon is cooked through. Serve hot."
      },
      {
        "name": "Oven Roasted Chicken",
        "photo": "https://www.inspiredtaste.net/wp-content/uploads/2017/10/Roasted-Chicken-with-Lemon-Recipe-1200.jpg",
        "category": "Chicken",
        "recipe": "Oven Roasted Chicken is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of chicken, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the oven to 375°F. In a small bowl, combine the garlic, rosemary, thyme, salt, and pepper. Rub the mixture all over the chicken. Place the chicken in a roasting pan. Roast for 1 hour, or until the chicken is golden brown and the juices run clear. Let the chicken rest for 10 minutes before carving."
      },
      
      {
        "name": "Red Lentil Soup",
        "photo": "https://kathleenashmore.com/wp-content/uploads/2022/01/IMG_7058-scaled.jpg",
        "category": "Soup",
        "recipe": "Red Lentil Soup is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of lentil, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "In a large pot, heat the olive oil over medium heat. Add the onion, carrot, and celery and cook until softened, about 5 minutes. Add the garlic, cumin, coriander, and cayenne and cook for 1 minute. Add the lentils, tomatoes, and broth. Bring to a boil, then reduce the heat to low. Simmer for 20 minutes, or until the lentils are tender. Season with salt and pepper. Serve hot."
      },
      {
        "name": "Vegetable Quinoa Salad",
        "photo": "https://www.healthygffamily.com/wp-content/uploads/2018/03/IMG_3666.jpg",
        "category": "Salad",
        "recipe": "Vegetable Quinoa Salad is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of quinoa, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the oven to 375°F. In a large bowl, combine the quinoa, water, and salt. Transfer the mixture to a baking dish. Cover with foil and bake for 20 minutes. Remove the foil and bake for an additional 10 minutes, or until the quinoa is tender. Let cool. In a large bowl, combine the cooked quinoa, cucumber, tomatoes, red onion, parsley, mint, olive oil, lemon juice, salt, and pepper. Toss to combine. Serve at room temperature or chilled."
      },
      {
        "name": "Grilled Meatballs",
        "photo": "https://assets.bonappetit.com/photos/5d150fac0faf4b0009a462e4/1:1/w_2560%2Cc_limit/Meatball-Skewers-NuacCham-lede.jpg",
        "category": "Meatballs",
        "recipe": "Grilled Meatballs is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of meat, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the oven to 375°F. In a large bowl, combine the ground beef, bread crumbs, Parmesan, parsley, garlic, salt, and pepper. Mix until well combined. Form the mixture into 1-inch meatballs. Place the meatballs on a baking sheet. Bake for 20 minutes, or until the meatballs are cooked through. Serve hot."
      },
      {
        "name": "Vegetarian Pizza",
        "photo": "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
        "category": "Pizza",
        "recipe": "Vegetarian Pizza is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of pizza dough, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the oven to 375°F. Roll out the pizza dough on a floured surface to a 12-inch round. Transfer the dough to a baking sheet. Spread the pizza sauce over the dough, leaving a 1-inch border. Top with the mozzarella, bell pepper, onion, and olives. Bake for 20 minutes, or until the crust is golden brown and the cheese is melted and bubbly. Serve hot."
      },
      {
        "name": "Cauliflower with Ground Beef",
        "photo": "https://paleogrubs.com/wp-content/uploads/2019/05/5a-cauliflower-paleo-ground-beef-casserole-1024x1024.jpg",
        "category": "Vegetable Dish",
        "recipe": "Cauliflower with Ground Beef is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of cauliflower, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the oven to 375°F. Cook the cauliflower in a large pot of boiling salted water for 5 minutes. Drain and set aside. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes. Add the ground beef and cook until browned, about 5 minutes. Add the tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 10 minutes. In a large bowl, combine the cooked cauliflower and the meat sauce. Transfer the mixture to a 9x13-inch baking dish. Bake for 20 minutes, or until the cheese is melted and bubbly. Serve hot."
      },
      {
        "name": "Baked Pasta",
        "photo": "https://www.recipetineats.com/wp-content/uploads/2020/03/Creamy-Pasta-Bake-with-Bow-Ties_0.jpg",
        "category": "Pasta",
        "recipe": "Baked Pasta is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of pasta, 1 cup of lemon, 1 cup of salt, 1 cup of pepper, 1 cup of butter",
        "making" : "Preheat the oven to 375°F. Cook the pasta according to the package directions. Drain and set aside. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes. Add the ground beef and cook until browned, about 5 minutes. Add the tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 10 minutes. In a large bowl, combine the cooked pasta and the meat sauce. Stir in the mozzarella and Parmesan cheese. Transfer the mixture to a 9x13-inch baking dish. Bake for 20 minutes, or until the cheese is melted and bubbly. Serve hot."
      },
      {
        "name": "Chocolate Mousse",
        "photo": "https://marleysmenu.com/wp-content/uploads/2020/04/Boozy-Chocolate-Mousse-Featured-Image-1.jpg",
        "category": "Dessert",
        "recipe": "Chocolate Mousse is a simple and delicious dish. It is a great source of protein and omega-3 fatty acids. It is also a great source of vitamins and minerals. It is a healthy and nutritious dish",
        "Ingredients": "1 cup of chocolate, 1 cup of milk, 1 cup of sugar, 1 cup of cream, 1 cup of butter",
        "making": "Melt the chocolate in a double boiler. Add the milk and sugar and stir until the sugar is dissolved. Remove from the heat and let it cool. Whip the cream until stiff peaks form. Fold the whipped cream into the chocolate mixture. Pour into serving dishes and refrigerate for at least 2 hours before serving." 
      }
    ]
  }


function Detail() {
  const { id } = useParams();
  const selectedDish = data.dishes[id];

  if (!selectedDish) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <Header></Header>
      <div className='container font-roboto'>
        <div className="grid grid-cols-2 mt-10 w-full h-full grid-rows-1 gap-4">
            <div className='w-11/12 h-72'>
              <img src={selectedDish.photo} className='h-72 object-fill w-96 rounded-md shadow-md' alt={selectedDish.name} />
            </div>
            <div className='font-roboto px-3 pr-1 w-full h-auto bg-bg-repice-gray bg-opacity-65 rounded-md shadow-md' >
              <h2 className='mt-5 uppercase text-center  text-3xl'>{selectedDish.name}</h2>
              <p className='mt-2 m-2'>{selectedDish.recipe}.</p>
            </div>
        </div>
        <div className='flex space-x-8 mt-10 text-center'>
          <p className='bg-gray-100 w-auto h-8 pt-1 p-4 rounded-md'>Category</p>
          <p className='bg-green-100 w-auto p-4 h-8 pt-1 whitespace-nowrap rounded-md'>{selectedDish.category}</p>
        </div>
        <div className='mt-4'>
            <p className='mt-5'>Ingredients:{selectedDish.Ingredients}</p>
            <p className='mt-6 bg-green-50 p-6 shadow-md'>How to make it  : {selectedDish.making}</p>
          </div>
          <div className='bg-gray-100 w-10/12 mx-auto mt-10 mb-5 h-20 rounded-md shadow-md flex'>
              <img src="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png" className='w-8 h-8 mt-6 ml-4' alt="" />
              <p className='mt-7 ml-3'>This is a great recipe. I will definitely make it again.</p>
          </div>
          
      </div>
      
    </div>
  );
}

export default Detail;
