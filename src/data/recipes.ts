export interface Recipe {
  title: string;
  image: string;
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  category: string;
  servings: number;
  prepTime: string;
  totalTime: string;
  calories: number;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  nutritionFacts?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  tags?: string[];
  date?: string;
  rating?: number;
}

export const recipes: Recipe[] = [
  {
    title: "Lemon Rosemary Chicken Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    cookingTime: "45 mins",
    prepTime: "15 mins",
    totalTime: "1 hour",
    difficulty: "Medium",
    description: "A bright and comforting soup that combines tender chicken, fresh herbs, and a lemony broth. Perfect for cold days or when you need a nourishing meal.",
    category: "Soups",
    servings: 6,
    calories: 285,
    ingredients: [
      "2 tablespoons olive oil",
      "1 large onion, diced",
      "3 carrots, sliced",
      "3 celery stalks, sliced",
      "4 garlic cloves, minced",
      "2 sprigs fresh rosemary",
      "2 lbs chicken breast",
      "8 cups chicken broth",
      "2 lemons, juiced",
      "2 cups kale, chopped",
      "1 cup orzo pasta (optional)",
      "Salt and pepper to taste",
      "1/4 cup fresh parsley, chopped",
      "1 tablespoon fresh thyme leaves"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat. Add onion, carrots, and celery. Cook until vegetables begin to soften, about 5 minutes.",
      "Add garlic and rosemary sprigs. Cook until fragrant, about 1 minute.",
      "Add chicken breast and broth. Bring to a boil, then reduce heat and simmer for 20-25 minutes until chicken is cooked through.",
      "Remove chicken and shred with two forks. Return to pot.",
      "If using orzo, add it now and cook for 8-10 minutes until al dente.",
      "Add lemon juice and kale. Cook until kale is wilted, about 3-4 minutes.",
      "Stir in fresh parsley and thyme.",
      "Season with salt and pepper to taste. Remove rosemary sprigs before serving.",
      "Garnish with additional lemon wedges and fresh herbs if desired."
    ],
    tips: [
      "For extra lemon flavor, add some lemon zest along with the juice",
      "Make it ahead: the flavor gets even better the next day",
      "For a gluten-free version, skip the orzo or use gluten-free pasta",
      "Store leftovers in an airtight container in the fridge for up to 4 days",
      "Freeze without the pasta for up to 3 months"
    ],
    nutritionFacts: {
      calories: 285,
      protein: 32,
      carbs: 18,
      fat: 12,
      fiber: 3
    },
    tags: ["Healthy", "High Protein", "Soup", "Winter", "Comfort Food"]
  },
  {
    title: "Brussels Sprouts with Gochujang Butter",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c",
    cookingTime: "20 mins",
    prepTime: "10 mins",
    totalTime: "30 mins",
    difficulty: "Easy",
    description: "A perfect blend of East meets West, these Brussels sprouts are roasted until crispy and tossed in a spicy-sweet Korean-inspired butter sauce. The gochujang adds a deep umami flavor while the butter creates a rich, glossy coating that makes these sprouts irresistible.",
    category: "Side Dishes",
    servings: 4,
    calories: 165,
    ingredients: [
      "1 pound Brussels sprouts, trimmed and halved",
      "2 tablespoons olive oil",
      "4 tablespoons unsalted butter, softened",
      "2 tablespoons gochujang (Korean red chili paste)",
      "1 tablespoon honey",
      "2 cloves garlic, minced",
      "1 tablespoon sesame oil",
      "1 teaspoon soy sauce",
      "1/2 teaspoon black pepper",
      "Salt to taste",
      "2 tablespoons toasted sesame seeds",
      "2 green onions, thinly sliced"
    ],
    instructions: [
      "Preheat your oven to 425°F (220°C). Line a large baking sheet with parchment paper.",
      "In a large bowl, toss the halved Brussels sprouts with olive oil, salt, and pepper until well coated.",
      "Arrange the Brussels sprouts cut-side down on the prepared baking sheet in a single layer.",
      "Roast for 20-25 minutes, or until the sprouts are crispy on the outside and tender on the inside, shaking the pan halfway through.",
      "While the sprouts are roasting, prepare the gochujang butter. In a small bowl, mix together the softened butter, gochujang, honey, minced garlic, sesame oil, and soy sauce until well combined.",
      "When the Brussels sprouts are done, transfer them to a large serving bowl.",
      "Add the gochujang butter mixture to the hot Brussels sprouts and toss until the butter is melted and the sprouts are evenly coated.",
      "Garnish with toasted sesame seeds and sliced green onions before serving."
    ],
    tips: [
      "For extra crispy Brussels sprouts, make sure they're completely dry before tossing with oil",
      "Adjust the amount of gochujang based on your preferred spice level",
      "You can make the gochujang butter ahead of time and store it in the refrigerator",
      "Look for bright green, tight Brussels sprouts for the best results",
      "Don't overcrowd the baking sheet to ensure proper caramelization"
    ],
    nutritionFacts: {
      calories: 165,
      protein: 4,
      carbs: 12,
      fat: 13,
      fiber: 4
    },
    tags: [
      "Vegetarian",
      "Korean-Inspired",
      "Spicy",
      "Side Dish",
      "Roasted Vegetables"
    ]
  },
  {
    title: "Classic Beef Bourguignon",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
    cookingTime: "2 hours 30 mins",
    prepTime: "30 mins",
    totalTime: "3 hours",
    difficulty: "Medium",
    description: "A rich and hearty French classic featuring tender beef slow-cooked in red wine with mushrooms, pearl onions, and bacon. This dish embodies the essence of French country cooking with its deep flavors and rustic charm.",
    category: "Main Dishes",
    servings: 6,
    calories: 520,
    ingredients: [
      "3 lbs beef chuck, cut into 2-inch cubes",
      "8 oz bacon, diced",
      "2 medium onions, diced",
      "3 carrots, sliced",
      "4 garlic cloves, minced",
      "1 bottle (750ml) dry red wine (Burgundy or Pinot Noir)",
      "2 cups beef stock",
      "2 tablespoons tomato paste",
      "1 bouquet garni (thyme, parsley, bay leaf)",
      "1 lb mushrooms, quartered",
      "1 lb pearl onions, peeled",
      "4 tablespoons butter",
      "3 tablespoons all-purpose flour",
      "Fresh parsley for garnish",
      "Salt and black pepper to taste"
    ],
    instructions: [
      "Pat the beef dry and season generously with salt and pepper.",
      "In a large Dutch oven, cook bacon over medium heat until crispy. Remove with a slotted spoon.",
      "Working in batches, brown the beef on all sides in the bacon fat. Transfer to a plate.",
      "In the same pot, sauté onions and carrots until softened. Add garlic and cook for 1 minute.",
      "Return beef and bacon to the pot. Add flour and cook for 2-3 minutes.",
      "Add wine, beef stock, tomato paste, and bouquet garni. Bring to a simmer.",
      "Cover and transfer to a preheated 325°F (165°C) oven. Cook for 2-2.5 hours until beef is tender.",
      "Meanwhile, sauté mushrooms and pearl onions in butter until golden.",
      "Add mushrooms and onions to the pot for the last 30 minutes of cooking.",
      "Adjust seasoning, remove bouquet garni, and garnish with fresh parsley before serving."
    ],
    tips: [
      "Choose a wine good enough to drink - it's crucial for the flavor",
      "For the most tender meat, cook until it easily breaks apart with a fork",
      "Make this dish a day ahead - the flavors improve overnight",
      "Serve with crusty bread, mashed potatoes, or egg noodles",
      "Don't skip browning the meat - it's essential for developing deep flavor"
    ],
    nutritionFacts: {
      calories: 520,
      protein: 45,
      carbs: 12,
      fat: 28,
      fiber: 3
    },
    tags: [
      "French Cuisine",
      "Comfort Food",
      "Slow Cooked",
      "Winter",
      "Special Occasion"
    ]
  },
  {
    title: "Incredible Arancini",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
    cookingTime: "45 mins",
    prepTime: "30 mins",
    totalTime: "1 hour 15 mins",
    difficulty: "Medium",
    description: "Crispy on the outside, creamy and cheesy on the inside, these Italian rice balls are the perfect way to transform leftover risotto into an incredible appetizer or main dish. Each bite delivers a delightful combination of textures and flavors.",
    category: "Appetizers",
    servings: 8,
    calories: 320,
    ingredients: [
      "4 cups cooked risotto, cooled",
      "2 eggs, beaten",
      "1 cup mozzarella cheese, diced",
      "1/2 cup Parmesan cheese, grated",
      "1/2 cup frozen peas, thawed",
      "2 cups breadcrumbs",
      "1 cup all-purpose flour",
      "2 eggs beaten with 2 tbsp water (for coating)",
      "Vegetable oil for frying",
      "Salt and black pepper to taste",
      "Marinara sauce for serving"
    ],
    instructions: [
      "Mix the cooled risotto with 2 beaten eggs, Parmesan cheese, and season with salt and pepper.",
      "Take a portion of risotto and flatten in your palm. Place a cube of mozzarella and a few peas in the center.",
      "Form into a ball, sealing the filling inside. Repeat with remaining risotto.",
      "Set up a breading station: flour, egg wash, and breadcrumbs in separate bowls.",
      "Coat each ball in flour, then egg wash, then breadcrumbs, ensuring even coverage.",
      "Heat oil in a deep pot to 350°F (175°C).",
      "Fry arancini in batches until golden brown, about 4-5 minutes.",
      "Drain on paper towels and season with salt while hot.",
      "Serve warm with marinara sauce for dipping."
    ],
    tips: [
      "Use cold risotto - it's easier to shape and holds together better",
      "Keep the size consistent for even cooking",
      "Don't overcrowd the frying pot to maintain oil temperature",
      "Double-coat in breadcrumbs for extra crispiness",
      "Can be made ahead and reheated in the oven"
    ],
    nutritionFacts: {
      calories: 320,
      protein: 12,
      carbs: 42,
      fat: 14,
      fiber: 2
    },
    tags: [
      "Italian",
      "Appetizer",
      "Fried",
      "Cheese",
      "Crowd Pleaser"
    ]
  },
  {
    title: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    cookingTime: "30 mins",
    prepTime: "20 mins",
    totalTime: "50 mins",
    difficulty: "Medium",
    description: "A fragrant and creamy Thai curry that perfectly balances sweet, spicy, and savory flavors. Made with homemade green curry paste, coconut milk, and your choice of protein, this dish brings the authentic taste of Thailand to your kitchen.",
    category: "Main Dishes",
    servings: 4,
    calories: 410,
    ingredients: [
      "4 tablespoons green curry paste",
      "2 cans (14 oz each) coconut milk",
      "2 chicken breasts, sliced (or tofu for vegetarian)",
      "1 eggplant, cubed",
      "2 bell peppers, sliced",
      "1 cup bamboo shoots",
      "4 kaffir lime leaves",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar or brown sugar",
      "1 cup Thai basil leaves",
      "2 tablespoons vegetable oil",
      "2 Thai chilies (optional)",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat oil in a large wok or pot over medium heat.",
      "Add curry paste and fry until fragrant, about 2-3 minutes.",
      "Add 1 can of coconut milk and simmer until oil separates.",
      "Add chicken (or tofu) and cook until nearly done.",
      "Pour in remaining coconut milk, fish sauce, and sugar.",
      "Add eggplant, bell peppers, and bamboo shoots.",
      "Simmer for 10-15 minutes until vegetables are tender.",
      "Stir in Thai basil leaves and kaffir lime leaves.",
      "Taste and adjust seasoning if needed.",
      "Serve hot over jasmine rice."
    ],
    tips: [
      "Use full-fat coconut milk for the best flavor and consistency",
      "Don't skip the kaffir lime leaves - they're essential for authentic flavor",
      "Adjust the amount of curry paste to control spiciness",
      "Add vegetables in order of cooking time needed",
      "Thai basil adds authentic flavor - regular basil can work in a pinch"
    ],
    nutritionFacts: {
      calories: 410,
      protein: 22,
      carbs: 18,
      fat: 32,
      fiber: 5
    },
    tags: [
      "Thai Cuisine",
      "Curry",
      "Spicy",
      "Asian",
      "Gluten-Free"
    ]
  },
  {
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    cookingTime: "15 mins",
    prepTime: "1 hour",
    totalTime: "1 hour 15 mins",
    difficulty: "Easy",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomato sauce on a perfectly crispy crust. This simple yet elegant pizza showcases the pure flavors of quality ingredients, making it a timeless favorite.",
    category: "Main Dishes",
    servings: 4,
    calories: 285,
    ingredients: [
      "3 1/2 cups (500g) bread flour",
      "2 tsp instant yeast",
      "2 tsp salt",
      "1 1/2 cups (350ml) warm water",
      "2 tbsp olive oil",
      "1 can (14oz) San Marzano tomatoes",
      "8 oz fresh mozzarella, sliced",
      "Fresh basil leaves",
      "Extra virgin olive oil for drizzling",
      "Sea salt to taste"
    ],
    instructions: [
      "Mix flour, yeast, and salt in a large bowl. Add water and olive oil, mix until combined.",
      "Knead dough for 10 minutes until smooth and elastic.",
      "Let rise in a covered bowl for 1 hour or until doubled in size.",
      "Preheat oven with pizza stone to 500°F (260°C).",
      "Divide dough into 2 portions and shape into 12-inch circles.",
      "Crush tomatoes by hand and spread on dough.",
      "Top with mozzarella slices.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Add fresh basil leaves, drizzle with olive oil, and sprinkle with sea salt."
    ],
    tips: [
      "Use high-quality ingredients for the best flavor",
      "Let dough come to room temperature before shaping",
      "Don't overload with toppings for the best results",
      "Preheat pizza stone for at least 30 minutes",
      "Fresh mozzarella should be patted dry before using"
    ],
    nutritionFacts: {
      calories: 285,
      protein: 12,
      carbs: 45,
      fat: 8,
      fiber: 2
    },
    tags: [
      "Italian",
      "Pizza",
      "Vegetarian",
      "Classic",
      "Quick Dinner"
    ]
  },
  {
    title: "Creamy Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    cookingTime: "35 mins",
    prepTime: "15 mins",
    totalTime: "50 mins",
    difficulty: "Medium",
    description: "A luxuriously creamy Italian risotto featuring a medley of wild mushrooms, Arborio rice, and Parmesan cheese. This comforting dish is the perfect balance of earthy mushrooms and rich, creamy texture.",
    category: "Main Dishes",
    servings: 4,
    calories: 420,
    ingredients: [
      "1 1/2 cups Arborio rice",
      "6 cups vegetable or chicken stock, heated",
      "1 lb mixed mushrooms (porcini, shiitake, cremini)",
      "1 medium onion, finely diced",
      "4 cloves garlic, minced",
      "1/2 cup white wine",
      "1/2 cup grated Parmesan cheese",
      "3 tablespoons butter",
      "2 tablespoons olive oil",
      "2 tablespoons fresh thyme",
      "Salt and black pepper to taste",
      "Truffle oil for drizzling (optional)"
    ],
    instructions: [
      "Heat stock in a saucepan and keep warm over low heat.",
      "In a large pan, sauté mushrooms in butter until golden. Set aside.",
      "In the same pan, sauté onion in olive oil until translucent.",
      "Add garlic and rice, cook until rice is lightly toasted.",
      "Add wine and stir until absorbed.",
      "Add hot stock one ladle at a time, stirring constantly until absorbed.",
      "Continue adding stock and stirring for about 18-20 minutes.",
      "When rice is al dente, stir in mushrooms, Parmesan, and thyme.",
      "Season with salt and pepper, and finish with a drizzle of truffle oil if using."
    ],
    tips: [
      "Keep the stock hot throughout cooking",
      "Stir constantly to develop creamy texture",
      "Don't rush - risotto takes patience",
      "Use room temperature wine",
      "Rice should be al dente when done"
    ],
    nutritionFacts: {
      calories: 420,
      protein: 12,
      carbs: 65,
      fat: 14,
      fiber: 4
    },
    tags: [
      "Italian",
      "Vegetarian",
      "Comfort Food",
      "Rice Dish",
      "Date Night"
    ]
  },
  {
    title: "Fresh Summer Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    cookingTime: "0 mins",
    prepTime: "15 mins",
    totalTime: "15 mins",
    difficulty: "Easy",
    description: "A vibrant and refreshing salad that celebrates summer produce at its peak. Featuring crisp mixed greens, juicy tomatoes, cucumber, and a light citrus vinaigrette, this salad is perfect for warm days.",
    category: "Salads",
    servings: 4,
    calories: 180,
    ingredients: [
      "6 cups mixed salad greens",
      "2 cups cherry tomatoes, halved",
      "1 English cucumber, sliced",
      "1 avocado, diced",
      "1/4 red onion, thinly sliced",
      "1/2 cup crumbled feta cheese",
      "1/4 cup mixed fresh herbs (basil, mint, parsley)",
      "1/4 cup extra virgin olive oil",
      "2 tablespoons lemon juice",
      "1 tablespoon honey",
      "Salt and pepper to taste",
      "Optional: toasted pine nuts"
    ],
    instructions: [
      "Wash and dry all produce thoroughly.",
      "In a large bowl, combine greens, tomatoes, cucumber, and red onion.",
      "Make the dressing: whisk together olive oil, lemon juice, honey, salt, and pepper.",
      "Just before serving, add avocado and herbs to the salad.",
      "Drizzle with dressing and toss gently.",
      "Top with crumbled feta and pine nuts if using.",
      "Serve immediately while fresh and crisp."
    ],
    tips: [
      "Use a salad spinner to ensure greens are completely dry",
      "Add avocado last to prevent browning",
      "Make extra dressing to keep on hand",
      "Season generously - salads need good seasoning",
      "Feel free to add grilled chicken or shrimp for a complete meal"
    ],
    nutritionFacts: {
      calories: 180,
      protein: 5,
      carbs: 12,
      fat: 14,
      fiber: 6
    },
    tags: [
      "Salad",
      "Healthy",
      "Summer",
      "Vegetarian",
      "Quick"
    ]
  },
  {
    title: "Breakfast Bowl",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2",
    cookingTime: "10 mins",
    prepTime: "10 mins",
    totalTime: "20 mins",
    difficulty: "Easy",
    description: "Start your day right with this nutritious and delicious breakfast bowl. Packed with protein, healthy fats, and fiber, this customizable bowl features creamy yogurt, crunchy granola, and fresh fruits.",
    category: "Breakfast",
    servings: 2,
    calories: 380,
    ingredients: [
      "2 cups Greek yogurt",
      "1 cup homemade granola",
      "2 tablespoons honey",
      "1 banana, sliced",
      "1 cup mixed berries",
      "2 tablespoons chia seeds",
      "2 tablespoons almond butter",
      "1/4 cup mixed nuts and seeds",
      "Fresh mint for garnish"
    ],
    instructions: [
      "Divide Greek yogurt between two bowls.",
      "Top each bowl with granola.",
      "Arrange sliced banana and berries on top.",
      "Sprinkle with chia seeds and nuts.",
      "Drizzle with honey and almond butter.",
      "Garnish with fresh mint if desired.",
      "Serve immediately while granola is still crunchy."
    ],
    tips: [
      "Use full-fat Greek yogurt for best taste and texture",
      "Make granola in advance and store in an airtight container",
      "Customize with seasonal fruits",
      "Warm the honey slightly for easier drizzling",
      "Prep ingredients the night before for a quick morning assembly"
    ],
    nutritionFacts: {
      calories: 380,
      protein: 18,
      carbs: 45,
      fat: 16,
      fiber: 8
    },
    tags: [
      "Breakfast",
      "Healthy",
      "Quick",
      "Vegetarian",
      "Meal Prep"
    ]
  },
  {
    title: "Overnight Chia Pudding",
    image: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2",
    cookingTime: "5 mins",
    prepTime: "5 mins",
    totalTime: "8 hours",
    difficulty: "Easy",
    description: "A nutritious and delicious breakfast that prepares itself overnight. Topped with fresh fruits and nuts.",
    category: "Breakfast",
    servings: 2,
    calories: 320,
    ingredients: [
      "1/2 cup chia seeds",
      "2 cups almond milk",
      "2 tbsp honey or maple syrup",
      "1/2 tsp vanilla extract",
      "Fresh fruits for topping",
      "Nuts and seeds for topping"
    ],
    instructions: [
      "Mix chia seeds, almond milk, sweetener, and vanilla in a bowl",
      "Cover and refrigerate overnight",
      "In the morning, stir well",
      "Top with fresh fruits and nuts",
      "Enjoy your healthy breakfast"
    ],
    tips: [
      "Use any milk alternative you prefer",
      "Add cocoa powder for chocolate version",
      "Prepare multiple servings for the week"
    ],
    nutritionFacts: {
      calories: 320,
      protein: 12,
      carbs: 42,
      fat: 14,
      fiber: 11
    },
    tags: ["Healthy", "Vegetarian", "Make Ahead", "No Cook"]
  },
  {
    title: "Fluffy Japanese Pancakes",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    cookingTime: "25 mins",
    prepTime: "15 mins",
    totalTime: "40 mins",
    difficulty: "Medium",
    description: "Ultra-fluffy, jiggly Japanese-style pancakes that are thick, soft, and melt in your mouth. Served with maple syrup, fresh berries, and a dusting of powdered sugar.",
    category: "Breakfast",
    servings: 4,
    calories: 220,
    ingredients: [
      "2 large eggs, separated",
      "1/4 cup milk",
      "1 tsp vanilla extract",
      "1/2 cup cake flour",
      "1/4 tsp baking powder",
      "2 tbsp sugar",
      "Pinch of cream of tartar",
      "Butter for cooking",
      "Maple syrup and berries for serving",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Separate eggs and bring to room temperature",
      "Mix egg yolks with milk and vanilla",
      "Sift flour and baking powder together",
      "Beat egg whites with cream of tartar until soft peaks form",
      "Gradually add sugar to whites and beat until stiff peaks form",
      "Fold egg yolk mixture into flour mixture",
      "Gently fold in egg whites in three additions",
      "Cook in metal rings on low heat with lid",
      "Flip carefully and cook other side",
      "Serve with toppings"
    ],
    tips: [
      "Use room temperature ingredients",
      "Don't overmix when folding in egg whites",
      "Cook on low heat for even cooking",
      "Use metal rings for perfect shape",
      "Cover while cooking for even heat distribution"
    ],
    nutritionFacts: {
      calories: 220,
      protein: 6,
      carbs: 32,
      fat: 8,
      fiber: 1
    },
    tags: ["Japanese", "Breakfast", "Sweet", "Fluffy"]
  },
  {
    title: "Crispy Spring Rolls",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    cookingTime: "30 mins",
    prepTime: "45 mins",
    totalTime: "1 hour 15 mins",
    difficulty: "Medium",
    description: "Crispy, golden spring rolls filled with vegetables, mushrooms, and glass noodles. Perfect as an appetizer or party snack, served with sweet chili sauce.",
    category: "Appetizers",
    servings: 12,
    calories: 180,
    ingredients: [
      "20 spring roll wrappers",
      "200g glass noodles, soaked and cut",
      "2 carrots, julienned",
      "200g cabbage, shredded",
      "100g mushrooms, finely chopped",
      "3 cloves garlic, minced",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "Salt and pepper to taste",
      "1 egg (for sealing)",
      "Oil for frying"
    ],
    instructions: [
      "Soak glass noodles in hot water until soft, drain and cut into shorter lengths",
      "Stir-fry vegetables and mushrooms with garlic until tender",
      "Mix in glass noodles, soy sauce, and sesame oil",
      "Place filling on spring roll wrapper and roll tightly",
      "Seal edges with beaten egg",
      "Deep fry until golden brown",
      "Serve hot with sweet chili sauce"
    ],
    tips: [
      "Keep wrappers covered to prevent drying",
      "Don't overfill the rolls",
      "Ensure oil is hot enough (180°C/350°F)",
      "Drain on paper towels to remove excess oil"
    ],
    nutritionFacts: {
      calories: 180,
      protein: 4,
      carbs: 28,
      fat: 6,
      fiber: 2
    },
    tags: ["Asian", "Appetizer", "Crispy", "Party Food"]
  },
  {
    title: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    cookingTime: "20 mins",
    prepTime: "15 mins",
    totalTime: "35 mins",
    difficulty: "Easy",
    description: "A healthy and filling quinoa bowl packed with Mediterranean flavors and fresh vegetables.",
    category: "Lunch",
    servings: 4,
    calories: 380,
    ingredients: [
      "1 cup quinoa",
      "2 cups vegetable broth",
      "1 cucumber, diced",
      "2 cups cherry tomatoes, halved",
      "1 red onion, sliced",
      "1 cup kalamata olives",
      "200g feta cheese",
      "Fresh parsley and mint",
      "Olive oil and lemon dressing"
    ],
    instructions: [
      "Cook quinoa in vegetable broth",
      "Chop all vegetables",
      "Mix cooked quinoa with vegetables",
      "Add olives and crumbled feta",
      "Dress with olive oil and lemon",
      "Garnish with fresh herbs"
    ],
    tips: [
      "Cook quinoa ahead of time",
      "Add grilled chicken for extra protein",
      "Use any vegetables in season"
    ],
    nutritionFacts: {
      calories: 380,
      protein: 12,
      carbs: 45,
      fat: 18,
      fiber: 6
    },
    tags: ["Healthy", "Vegetarian", "Mediterranean", "Meal Prep"]
  },
  {
    title: "Herb-Crusted Salmon",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
    cookingTime: "15 mins",
    prepTime: "10 mins",
    totalTime: "25 mins",
    difficulty: "Medium",
    description: "Perfectly cooked salmon with a crispy herb crust, served with roasted vegetables.",
    category: "Dinner",
    servings: 4,
    calories: 420,
    ingredients: [
      "4 salmon fillets",
      "1/2 cup fresh herbs (parsley, dill, chives)",
      "1/2 cup breadcrumbs",
      "2 tbsp Dijon mustard",
      "2 tbsp olive oil",
      "Lemon wedges",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Mix herbs with breadcrumbs",
      "Brush salmon with mustard",
      "Press herb mixture onto salmon",
      "Bake for 12-15 minutes",
      "Serve with lemon wedges"
    ],
    tips: [
      "Don't overcook the salmon",
      "Use fresh herbs for best flavor",
      "Pat fish dry before coating"
    ],
    nutritionFacts: {
      calories: 420,
      protein: 34,
      carbs: 12,
      fat: 28,
      fiber: 1
    },
    tags: ["Seafood", "Healthy", "Quick", "High Protein"]
  },
  {
    title: "Dark Chocolate Truffles",
    image: "https://images.unsplash.com/photo-1548741487-18d363dc4469",
    cookingTime: "30 mins",
    prepTime: "20 mins",
    totalTime: "4 hours",
    difficulty: "Medium",
    description: "Rich and decadent chocolate truffles made with high-quality dark chocolate and cream.",
    category: "Desserts",
    servings: 24,
    calories: 90,
    ingredients: [
      "400g dark chocolate (70% cocoa)",
      "1 cup heavy cream",
      "2 tbsp butter",
      "1 tsp vanilla extract",
      "Cocoa powder for coating",
      "Optional: nuts, coconut"
    ],
    instructions: [
      "Chop chocolate finely",
      "Heat cream until almost boiling",
      "Pour over chocolate and let sit",
      "Stir until smooth",
      "Chill for 4 hours",
      "Roll into balls",
      "Coat in cocoa powder"
    ],
    tips: [
      "Use good quality chocolate",
      "Chill hands while rolling",
      "Try different coatings"
    ],
    nutritionFacts: {
      calories: 90,
      protein: 1,
      carbs: 6,
      fat: 7,
      fiber: 1
    },
    tags: ["Chocolate", "Dessert", "Make Ahead", "Gift Worthy"]
  },
  {
    title: "Roasted Vegetable Lasagna",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
    cookingTime: "45 mins",
    prepTime: "30 mins",
    totalTime: "1 hour 15 mins",
    difficulty: "Medium",
    description: "Layers of roasted vegetables, rich tomato sauce, and creamy bechamel make this vegetarian lasagna irresistible.",
    category: "Vegetarian",
    servings: 8,
    calories: 380,
    ingredients: [
      "2 zucchini, sliced",
      "2 eggplants, sliced",
      "2 bell peppers",
      "Lasagna noodles",
      "4 cups tomato sauce",
      "3 cups bechamel sauce",
      "2 cups mozzarella",
      "1 cup parmesan",
      "Fresh basil"
    ],
    instructions: [
      "Roast vegetables until tender",
      "Make bechamel sauce",
      "Layer: sauce, pasta, vegetables",
      "Add cheeses between layers",
      "Bake at 375°F for 45 minutes",
      "Let rest before serving"
    ],
    tips: [
      "Salt eggplant before roasting",
      "Can be frozen before baking",
      "Use no-boil noodles to save time"
    ],
    nutritionFacts: {
      calories: 380,
      protein: 18,
      carbs: 42,
      fat: 16,
      fiber: 8
    },
    tags: ["Vegetarian", "Italian", "Comfort Food", "Make Ahead"]
  }
];

export const recipeCategories = [
  { 
    name: "Vegan Recipes", 
    count: "127",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389"
  },
  { 
    name: "Meal Prep Recipes", 
    count: "54",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  { 
    name: "Quick and Easy Recipes", 
    count: "434",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352"
  },
  { 
    name: "Pasta Recipes", 
    count: "123",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  },
  { 
    name: "Soup Recipes", 
    count: "69",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
  },
  { 
    name: "Most Popular Recipes", 
    count: "85",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  }
];
