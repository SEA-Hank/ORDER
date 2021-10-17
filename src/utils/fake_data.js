let fakeData = {
  "/getTitle": { title: "Fake Seafood Restaurant" },
  "/getfoodlist": {
    Appetizers: [
      {
        id: 1,
        name: "Cozze E Vongole",
        description: "Mussels and Manila Clams, White Wine Garlic",
        price: 17.0,
        img: "/images/appetizers/1.jpeg",
      },
      {
        id: 2,
        name: "Piatto Misto",
        description: "Italian Charcuterie, Cheese and Olives",
        price: 17.0,
        img: "/images/appetizers/2.jpeg",
      },
      {
        id: 3,
        name: "Bruschetta",
        description: "Your Choice of Mushrooms or Tomatoes",
        price: 9.95,
        img: "/images/appetizers/3.jpeg",
      },
    ],
    "Salads And Soup": [
      {
        id: 4,
        name: "Caprese",
        description:
          "Vine ripe tomatoes, Extra Virgin Olive Oil, Fresh basil, Balsamic di Modena",
        img: "/images/salads/4.jpeg",
        price: 12.75,
      },
      {
        id: 5,
        name: "Insalata di Cesare",
        description: "Classic Caesar, House dressing, Croutons",
        img: "/images/salads/5.jpeg",
        price: 6.5,
      },
      {
        id: 6,
        name: "Pera E Gorgonzola",
        description: "Organic Mixed Greens, Italian Gorgonzola, Anjou Pears",
        img: "/images/salads/6.jpeg",
        price: 7.0,
      },
    ],
    "Italian Classics": [
      {
        id: 7,
        name: "Pollo Marsala",
        description: "Boneless Chicken Breast, Sweet Marsala, Mushrooms",
        img: "/images/italian/7.jpeg",
        price: 22.25,
      },
      {
        id: 8,
        name: "Pollo Piccata",
        description: "Boneless Chicken Breast, White wine, Lemon and Capers",
        img: "/images/italian/8.jpeg",
        price: 22.25,
      },
      {
        id: 9,
        name: "Pollo Parmigiana",
        description: "Breaded Boneless Chicken Breast, Mozzarella, Pomodoro",
        img: "/images/italian/8.jpeg",
        price: 24.5,
      },
    ],
    "Veal Dishes": [
      {
        id: 10,
        name: "Vitello Piccata",
        description: "White wine, Lemon and Capers",
        img: "/images/veal/10.jpeg",
        price: 24.95,
      },
      {
        id: 11,
        name: "Vitello Marsala",
        description: "Mushrooms and Sweet Marsala",
        img: "/images/veal/11.jpeg",
        price: 24.95,
      },
      {
        id: 12,
        name: "Veal Parmigiana",
        description: "Breaded Veal, Pomodoro, Mozzarella",
        img: "/images/veal/12.jpeg",
        price: 26.5,
      },
    ],
    Pasta: [
      {
        id: 13,
        name: "Linguini Vongole",
        description: "Fresh Manila Clams, Pinot Grigio, Garlic, Chillie Flakes",
        img: "/images/pasta/13.jpeg",
        price: 17.25,
      },
      {
        id: 14,
        name: "Farfalle al Salmone",
        description: "Smoked Salmon bites, Cream and Peas",
        img: "/images/pasta/14.jpeg",
        price: 16.75,
      },
      {
        id: 15,
        name: "Farfalle Alla Marianna",
        description:
          "Black Forrest Ham, roasted Jalapeños, Bellpepper and cream",
        img: "/images/pasta/15.jpeg",
        price: 16.5,
      },
    ],
    wine: [
      {
        id: 16,
        name: "Moscato Giallo, Lovo",
        description: "Moscato Giallo, Lovo",
        img: "",
        price: 10.0,
      },
      {
        id: 17,
        name: "Rose, Treveri WA",
        description: "Rose, Treveri WA",
        img: "",
        price: 9.5,
      },
      {
        id: 18,
        name: "Prosecco, Millesimato",
        description: "Prosecco, Millesimato",
        img: "",
        price: 9.5,
      },
    ],
  },
  "/getcategories": [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Salads & Soup" },
    { id: 3, name: "Italian Classics" },
    { id: 4, name: "Veal Dishes" },
    { id: 5, name: "Pasta" },
    { id: 6, name: "Wine List" },
  ],
  "/ordersubmit": {
    orderNumber: "12345",
  },
};
export default fakeData;
