import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Pricing from "./components/Pricing";


import "./App.css";


const accordionData = [
  {
    title: "Automated Catering and Event Scheduling",
    content: "Feast by the Fleet offers Food Truck Vendors the ability to be hands off of their catering/event scheduling. By setting up a daily, weekly, and/or monthly schedule, your company will display availability options 24/7. ",
  },
  {
    title: "SEO optimization for Vendors",
    content:
      "With Feast by the Fleet, we offer not only catering scheduling options, but brand design/development, website development, and social media marketing. Through meticulous planning and online presence development, we deliver bolstering google rankings to build brand awareness and increase sales.",
  },
  {
    title: "Consistent Updates to Company Profiles",
    content: "Weekly scheduled meetings between Vendor and Feast by the Fleet to establish changes to menu items, prices, descriptions, upcoming events and so much more. (Only Available in our Gold-Standard Package)",
  },
];

const carouselData = [
  {
    image: "./images/Downtown Event Truck.jpeg",
    title: "Feel Good FoodsTruck",
    description: "Downtown Indianapolis Food Festival",
  },
  {
    image: "./images/Farmers Market Truck.jpeg",
    title: "Los Tacos Tiempo",
    description: "Zesty Hispanic Flavors come alive at the Indiana State Fair",
  },
  {
    image: "./images/Freedom Fest Truck.jpeg",
    title: "Fred's Fried Hoosier Loins",
    description: "The Hoosier classic Fried Pork Tenderloin served hot and fresh at the Carmel Food Festival",
  },
  {
    image: "./images/Luis's Kebabs.jpeg",
    title: "Luis's Kebabs",
    description: "An immunity sweeping the community, You have to try out Chicken, Pork or Steak",
  },
  {
    image: "./images/Nightlife Truck.jpeg",
    title: "Insomnia Eats",
    description: "Bring in the Nightlife Traffic in Downtown BroadRipple",
  },
  {
    image: "./images/Pink_Pastries_Truck.jpeg",
    title: "Pink Pastries Truck",
    description: "Downtown Indianapolis During Cupcake Week",
  },
  {
    image: "./images/AI Truck Theme.jpeg",
    title: "Animated Graphical Design Work",
    description: "Showcase your Truck in Video Game Themes, Bubbly Theme, Anime, and so much more",
  },
];


function App() {
  return (
<div className="flex flex-col min-h-screen">
      <Header
        backgroundPic="background1.jpeg"
        fontFamily="'Great Vibes', cursive"
      />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
      <section className="w=full md:w-1/3 sm:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">What We Offer to Our Food Truck Vendors</h2>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </section>
          <section className="md:w-1/2 sm:w-50%">
            <h2 className="text-2xl font-semibold mb-4">Vendors Through Indy</h2>
            <Carousel items={carouselData} />
          </section>
          </div>
          <section className="md:w-100% sm:w-50%">
         <Pricing 
        brandImg= "./images/Feast_Fleet_Logo.png"
        review = "Our ability to get daily tasks done for our Food Truck was difficult enough, let alone workout scheduling for catering and events and developing an online presence. With Feast by the Fleet we were able to get our name out their easier, setup a brand identity, and even coordinate event scheduling 24 hours a day. We check our events each morning and prepare the night prior to events, allowing us ample time to focus on our business needs."
        reviewName = "Judith Black"
        reviewTitle= "CEO of Seoul FoodTruck"
        reviewImg= "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
         </section>

          
          </main>
      <Footer
        year = "2024"
        company = "Feast by the Fleet"
        twitterLink =  "#"
        instaLink = "#"
      >
      </Footer>
    </div>
  );
}

export default App;

