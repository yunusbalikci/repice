import React from 'react'
import { Link } from 'react-router-dom'

const data =
{
    "dishes": [
      {
        "name": "Grilled Salmon",
        "photo": "https://www.thespruceeats.com/thmb/HgM2h42z1HGEcSWkWk5CgAjDDpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-2216658-hero-01-a9c948f8a238400ebaafc0caf509c7fa.jpg",
        "category": "Fish"
      },
      {
        "name": "Oven Roasted Chicken",
        "photo": "https://www.inspiredtaste.net/wp-content/uploads/2017/10/Roasted-Chicken-with-Lemon-Recipe-1200.jpg",
        "category": "Chicken"
      },
      
      {
        "name": "Red Lentil Soup",
        "photo": "https://kathleenashmore.com/wp-content/uploads/2022/01/IMG_7058-scaled.jpg",
        "category": "Soup"
      },
      {
        "name": "Vegetable Quinoa Salad",
        "photo": "https://www.healthygffamily.com/wp-content/uploads/2018/03/IMG_3666.jpg",
        "category": "Salad"
      },
      {
        "name": "Grilled Meatballs",
        "photo": "https://assets.bonappetit.com/photos/5d150fac0faf4b0009a462e4/1:1/w_2560%2Cc_limit/Meatball-Skewers-NuacCham-lede.jpg",
        "category": "Meatballs"
      },
      {
        "name": "Vegetarian Pizza",
        "photo": "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
        "category": "Pizza"
      },
      {
        "name": "Cauliflower with Ground Beef",
        "photo": "https://paleogrubs.com/wp-content/uploads/2019/05/5a-cauliflower-paleo-ground-beef-casserole-1024x1024.jpg",
        "category": "Vegetable Dish"
      },
      {
        "name": "Baked Pasta",
        "photo": "https://www.recipetineats.com/wp-content/uploads/2020/03/Creamy-Pasta-Bake-with-Bow-Ties_0.jpg",
        "category": "Pasta"
      },
      {
        "name": "Chocolate Mousse",
        "photo": "https://marleysmenu.com/wp-content/uploads/2020/04/Boozy-Chocolate-Mousse-Featured-Image-1.jpg",
        "category": "Dessert"
      }
    ]
  }

function Categories() {
  return (
    <div id='repices' className='container font-roboto pt-10 pb-10'>
        <div className='bg-bg-repice-gray mt-32 mb-6'>
            <h1 className='text-gray-800 font-bold text-center p-2 text-5xl'>Repices</h1>
        </div>
        <div>
            <div className='grid grid-cols-3 gap-4 items-center'>
                {
                    data.dishes.map((dish, index) => {
                        return (
                            <Link key={index} to={`/category/${index}`} className='bg-bg-repice-gray cursor-pointer p-4 rounded-lg shadow-lg' >
                                <img src={dish.photo} alt={dish.name} className='w-72 h-72 object-cover items-center mx-auto' />
                                <p className='text-center mt-4 uppercase text-lg'>{dish.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}


export default Categories
