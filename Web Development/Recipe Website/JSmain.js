// This program is designed to be a dynamic food/recipe browser. The user can choose a selection of either Breakfast, Lunch, Dinner to see
// what types of food items this program has on hand. The user can choose a fourth option to display all of the choices the program has to offer.
// The user can also choose aditional filtering selections to fine tune what type of dishes they would like to browse through.
// If the user wants to search for a specific dish, they can use the search bar on the main menu Once the user has selected a dish, 
// a page will display all of the ingredients necessary to create that dish as well as the instructions on how to make it.

// Chase Crawford did the Backend development
// Jonah Higgins did the Frontend development
// Connor Guess did the Frontend development

// This is the blueprint for the dish items
class Item{
    constructor(picture,name,ingrediants,how2make,attribute1,attribute2,attribute3,attribute4,attribute5,attribute6, attribute7){
        this.picture = picture;
        this.name = name;
        this.ingrediants = ingrediants;
        this.how2make = how2make;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
        this.attribute4 = attribute4;
        this.attribute5 = attribute5;
        this.attribute6 = attribute6;
        this.attribute7 = attribute7;
    }
}
// This is where all of the dish items pictures will be placed
var FoodPicture = [
    "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593619566002-8bf042dd1cfb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664392140212-bad0ee2c2634?auto=format&fit=crop&q=80&w=1930&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?auto=format&fit=crop&q=80&w=1961&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?auto=format&fit=crop&q=80&w=1958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1669687759693-52ba5f9fa7a8?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/95315215/photo/sausage-biscuit-sandwich.jpg?s=1024x1024&w=is&k=20&c=WoualT7VvP75DwC-DpWdlqhhxKj8kb3eHw1HhKCOJTI=",
    "https://media.istockphoto.com/id/1310454166/photo/image-of-green-pea-and-spinach-spanish-tortilla-frittata-with-chopped-potato-and-bacon-in-non.jpg?s=2048x2048&w=is&k=20&c=q3XQBpxjNcYt6rejsvMPtsDgeMp0fuuHB_3bqFXc008=",
    "https://media.istockphoto.com/id/992927546/photo/delicious-and-healthy-broccoli-bites-with-cheddar-cheese-egg-and-thyme-close-up-horizontal.jpg?s=2048x2048&w=is&k=20&c=qo7OZ_MxczeGholRdt2IDwlr9qYt9zutkm_t1acwBEc=",
    "https://media.istockphoto.com/id/1396734602/photo/crustless-sausage-and-peppers-omelet.jpg?s=2048x2048&w=is&k=20&c=f9cqDOg_-x_Y1TzFvtiJC2ZUtd_K1cMwUJawdZcWI-4=",
    "https://images.unsplash.com/photo-1632217471220-a661da2ae319?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1584970922591-5b91e5f927a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615865417491-9941019fbc00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588556008426-af415581d44b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1617990590988-895fe6cbabda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609770424775-39ec362f2d94?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1595117796900-e3bb784ea0db?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627286400579-027de47e9e73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
// This is where all of the ingredients will be places
var Item1Ingre = ["1 cup all-purpose flour", "2 tablespoons sugar", "1 teaspoon baking powder","1/2 teaspoon baking soda","1/4 teaspoon salt","3/4 to 1 cup buttermilk (or regular milk)","1 large egg","2 tablespoons melted butter or vegetable oil","Optional: 1 teaspoon vanilla extract","Chocolate chips, blueberries, sliced bananas, or other mix-ins as desired."]
var Item2Ingre = ["2 to 4 large eggs (adjust based on your preference and the number of servings)", "2 tablespoons milk or cream (optional, for creamier eggs)", "Salt and pepper, to taste","1 tablespoon butter or cooking oil (for cooking)","Shredded cheese, chopped herbs (e.g., chives, parsley), diced tomatoes, or other vegetables of your choice"]
var Item3Ingre = ["2 cups all-purpose flour", "2 tablespoons sugar", "1 tablespoon baking powder","1/2 teaspoon salt","1 3/4 cups milk","1/3 cup vegetable oil or melted butter","2 large eggs","1 teaspoon vanilla extract"]
var Item4Ingre = ["2 slices of your favorite bread (white, whole wheat, multigrain, etc.)", "4-6 slices of cooked turkey (you can use leftover roasted turkey or sliced deli turkey)", "Mayonnaise or mustard (or both, according to your preference)","Lettuce leaves","Tomato slices"]
var Item5Ingre = ["You can use store-bought pizza dough or make your own. Follow the instructions on the packaging or use your favorite pizza dough recipe", "1 cup pizza sauce (store-bought or homemade)", "2 cups shredded mozzarella cheese (or a blend of mozzarella and cheddar)","About 1 cup of sliced pepperoni","1-2 tablespoons for brushing the crust","Red pepper flakes, dried oregano, grated Parmesan cheese"]
var Item6Ingre = ["1 pound ground beef (preferably 80% lean, 20% fat for juicier burgers)", "Salt and pepper, to taste", "Slices of your favorite cheese (cheddar, American, Swiss, etc.)","4 burger buns","Ketchup, mustard, mayonnaise","Lettuce leaves","Tomato slices","Onion slices (raw or grilled, as preferred)","Sliced dill pickles","Bacon, avocado slices, sautéed mushrooms, etc."]
var Item7Ingre = ["2 boneless steaks (such as ribeye, New York strip, or sirloin), about 1 inch thick", "Salt and pepper, to taste", "Optional: Olive oil or clarified butter for cooking"]
var Item8Ingre = ["2 pounds fresh tomatoes, quartered (or use canned whole tomatoes)", "1 large onion, chopped", "3 cloves garlic, minced","4 cups vegetable broth","2 tablespoons tomato paste","1 teaspoon dried basil","1 teaspoon dried oregano","1/2 teaspoon dried thyme","Salt and pepper to taste","1 cup heavy cream","2 tablespoons butter","2 tablespoons olive oil"]
var Item9Ingre = ["9-12 lasagna noodles (oven-ready or pre-cooked according to package instructions)", "1 pound ground beef or Italian sausage", "1 onion, finely chopped","3 cloves garlic, minced","1 can (28 ounces) crushed tomatoes","1 can (15 ounces) tomato sauce","2 tablespoons tomato paste","1 teaspoon dried oregano","1 teaspoon dried basil","Salt and pepper, to taste","2 cups ricotta cheese","1 egg","1/2 cup grated Parmesan cheese","2 tablespoons fresh parsley, chopped","2 cups shredded mozzarella cheese"]
var Item10Ingre = ["4 large biscuits (store-bought or homemade)", "4 sausage patties (pre-cooked or cook according to package instructions)", "4 large eggs","4 slices of your favorite cheese (cheddar, American, or any melting cheese)","To season eggs"]
var Item11Ingre = ["3 eggs","1/4 cup fresh spinach, chopped","2 tablespoons feta cheese, crumbled","Salt and pepper, to taste","1 tablespoon olive oil"]
var Item12Ingre = ["1 cup broccoli, finely chopped","1/2 cup cheddar cheese, shredded","1/4 cup red bell pepper, finely diced","1/4 cup green onions, finely chopped","6 large eggs","1/4 cup milk (or a non-dairy alternative)","Salt and pepper, to taste","Cooking spray or muffin liners"]
var Item13Ingre = ["1 lb keto-friendly breakfast sausages, casings removed","1 cup bell peppers, diced (any color)","1 cup spinach, chopped","1 cup cherry tomatoes, halved","8 large eggs","1/2 cup heavy cream","1 cup shredded cheddar cheese","Salt and pepper, to taste","Chopped chives for garnish (optional)"]
var Item14Ingre = ["1 ripe avocado","2 slices of your favorite bread (choose whole-grain or gluten-free for a healthier option)","Salt and pepper, to taste","Optional toppings: red pepper flakes, cherry tomatoes, microgreens, sesame seeds, or a drizzle of balsamic glaze"]
var Item15Ingre = ["1 cup old-fashioned oats","1 3/4 cups almond milk (unsweetened)","Pinch of salt","Optional toppings: sliced bananas, berries, nuts, seeds, maple syrup, or a drizzle of almond butter"]
var Item16Ingre = ["1 cup quinoa (rinsed and drained)","2 cups water or vegetable broth","1 cup cherry tomatoes (halved)","1 cucumber (diced)","1 bell pepper (any color, diced)","1/4 cup red onion (finely chopped)","1/4 cup fresh parsley or cilantro (chopped)","1/4 cup feta cheese (optional)","2 tablespoons olive oil","1 tablespoon lemon juice","Salt and pepper to taste"]
var Item17Ingre = ["1 large cucumber, diced","4 medium-sized tomatoes, diced","1 red onion, thinly sliced","1 cup Kalamata olives, pitted","1 cup feta cheese, crumbled","1 green bell pepper, diced (optional)","1/4 cup fresh parsley, chopped","1/3 cup extra-virgin olive oil","3 tablespoons red wine vinegar","1 teaspoon dried oregano","Salt and pepper to taste"]
var Item18Ingre = ["2 boneless, skinless chicken breasts","Salt and pepper to taste","Olive oil for brushing","1/2 cup mayonnaise","2 tablespoons grated Parmesan cheese","2 tablespoons lemon juice","1 teaspoon Dijon mustard","2 cloves garlic, minced","Salt and pepper to taste","Romaine lettuce, washed and chopped","Grated Parmesan cheese","Croutons (optional, or use keto-friendly alternatives)"]
var Item19Ingre = ["1 can (15 oz) black beans or lentils, drained and rinsed","1 tablespoon olive oil","1 small onion, finely chopped","2 cloves garlic, minced","1 teaspoon ground cumin","1 teaspoon smoked paprika","Salt and pepper to taste","Corn tortillas","Shredded lettuce","Diced tomatoes","Sliced avocado or guacamole","Salsa","Chopped cilantro","Lime wedges"]
var Item20Ingre = ["1 cup dried green or brown lentils, rinsed and drained","1 onion, finely chopped","2 carrots, peeled and diced","2 celery stalks, diced","3 cloves garlic, minced","1 can (14 oz) diced tomatoes","6 cups vegetable broth","1 teaspoon ground cumin","1 teaspoon ground coriander","1/2 teaspoon smoked paprika","1/2 teaspoon dried thyme","Salt and black pepper to taste","2 tablespoons olive oil","Juice of 1 lemon (optional, for serving)","Fresh parsley or cilantro for garnish (optional)"]
var Item21Ingre = ["1 pound boneless, skinless chicken breasts, cooked and shredded","1 cup shredded cheddar cheese","1 cup shredded Monterey Jack cheese","1 cup diced bell peppers (any color)","1/2 cup diced red onion","1/4 cup chopped fresh cilantro","1 teaspoon ground cumin","1 teaspoon chili powder","1/2 teaspoon garlic powder","Salt and pepper to taste","8 medium-sized flour tortillas","Olive oil or cooking spray for cooking"]
var Item22Ingre = ["4 salmon fillets","2 tablespoons olive oil","2 tablespoons fresh lemon juice","2 teaspoons lemon zest","2 cloves garlic, minced","1 tablespoon fresh dill, chopped","Salt and pepper to taste","Lemon slices for garnish (optional)"]
var Item23Ingre = ["1 1/2 cups Arborio rice","4 cups vegetable broth (kept warm on the stove)","1 cup dry white wine","1 medium onion, finely chopped","2 cloves garlic, minced","2 cups mushrooms (cremini or button), sliced","1/2 cup Parmesan cheese, grated","2 tablespoons unsalted butter","2 tablespoons olive oil","Salt and black pepper to taste","Fresh parsley, chopped (for garnish)"]
var Item24Ingre = ["1 pound large shrimp, peeled and deveined","4 tablespoons unsalted butter","4 cloves garlic, minced","1/2 cup chicken or vegetable broth","Juice of 1 lemon","Zest of 1 lemon","Salt and pepper to taste","Fresh parsley, chopped, for garnish"]
var Item25Ingre = ["1 cup coconut flour","1 cup coconut milk","1 cup water","1/4 teaspoon salt","Mixed salad greens (lettuce, spinach, arugula)","Shredded carrots","Cucumber, julienned","Red bell pepper, thinly sliced","Avocado, sliced","Fresh herbs (mint, cilantro, basil)","Sesame seeds for garnish","3 tablespoons soy sauce or tamari (for a gluten-free option)","1 tablespoon rice vinegar","1 tablespoon maple syrup or agave nectar","1 teaspoon sesame oil","1 clove garlic, minced","1 teaspoon grated ginger"]
var Item26Ingre = ["8 ounces (about 225g) of spaghetti (check for dairy-free options)","2 tablespoons olive oil","1 medium onion, finely chopped","2 cloves garlic, minced","1 can (28 ounces) crushed tomatoes","1 teaspoon dried oregano","1 teaspoon dried basil","1/2 teaspoon red pepper flakes (optional, for some heat)","Salt and black pepper to taste","Fresh basil or parsley for garnish (optional)"]
var Item27Ingre = ["1 pound ground beef","1 small onion, finely chopped","2 cloves garlic, minced","1 tablespoon chili powder","1 teaspoon cumin","1/2 teaspoon paprika","1/2 teaspoon oregano","Salt and pepper to taste","1/2 cup beef broth","Taco shells or tortillas","Shredded lettuce","Diced tomatoes","Shredded cheese (cheddar or Mexican blend)","Sour cream","Salsa","Chopped cilantro","Lime wedges"]
// This is where all of the "how to make" steps will be placed
var Item1how2make = ["In a large mixing bowl, whisk together the dry ingredients.", "In another bowl, whisk together the wet ingredients","Pour the wet ingredients into the dry ingredients and stir until just combined. It's okay if there are a few lumps","Heat a griddle or non-stick skillet over medium heat. Grease it with a bit of butter or oil","Pour 1/4 cup portions of batter onto the griddle for each pancake","Cook until bubbles form on the surface of the pancake and the edges look set","Flip the pancake and cook until the other side is golden brown","Repeat with the remaining batter"];
var Item2how2make = ["Crack the eggs into a bowl", "Whisk the eggs with a fork or whisk until the yolks and whites are well combined","If using, add the milk or cream to the beaten eggs","Season with salt and pepper to taste","Heat a non-stick skillet or frying pan over medium-low heat","Add the butter or cooking oil to the pan and let it melt or heat","Pour the beaten eggs into the pan","Allow the eggs to set slightly on the bottom, and then gently stir with a spatula","Continue stirring occasionally, allowing the eggs to cook evenly","If using any optional add-ins like cheese, herbs, or vegetables, add them when the eggs are partially set","Cook until the eggs are no longer runny but still moist. Be careful not to overcook","Transfer the scrambled eggs to a plate immediately","Garnish with additional herbs or toppings if desired"];
var Item3how2make = ["Preheat your waffle iron according to the manufacturer's instructions", "In a large mixing bowl, whisk together the flour, sugar, baking powder, and salt","In another bowl, whisk together the milk, vegetable oil or melted butter, eggs, and vanilla extract","Pour the wet ingredients into the bowl with the dry ingredients","Stir until just combined. It's okay if there are a few lumps; overmixing can make the waffles tough","Once the waffle iron is hot, lightly grease it with cooking spray or a small amount of oil","Pour an appropriate amount of batter onto the center of the preheated waffle iron, spreading it evenly","Close the waffle iron and cook according to the manufacturer's instructions, usually for about 5 minutes, until the waffles are golden brown and crisp","Carefully remove the waffles from the iron and place them on a plate","Repeat the process with the remaining batter","Serve the waffles warm with your favorite toppings, such as maple syrup, whipped cream, fresh fruit, or a dusting of powdered sugar"];
var Item4how2make = ["Place the two slices of bread on a clean surface.", "Spread a thin layer of mayonnaise and/or mustard on one or both slices of bread, depending on your taste","Place the turkey slices on one slice of bread. If you're using deli slices, ensure they cover the bread evenly","Add a layer of lettuce leaves on top of the turkey","Place tomato slices over the lettuce","If you're using cheese, place a slice or two on top of the tomato","Add any additional optional ingredients like pickles, red onion slices, or avocado","Place the second slice of bread on top, condiment side down","If desired, you can cut the sandwich in half diagonally or straight across","Serve immediately and enjoy your classic turkey sandwich!"];
var Item5how2make = ["Preheat your oven according to the pizza dough instructions or to around 475°F (245°C)", "Roll out the pizza dough on a floured surface to your desired thickness. If you're using a pre-made crust, follow the package instructions","Place the rolled-out dough on a pizza stone or baking sheet","Spread the pizza sauce evenly over the dough, leaving a small border around the edges for the crust","Sprinkle the shredded mozzarella cheese over the sauce","Distribute the pepperoni slices evenly across the pizza","If you like, sprinkle red pepper flakes, dried oregano, or grated Parmesan cheese over the top for extra flavor","Lightly brush the outer edge of the crust with olive oil to achieve a golden brown finish","Bake the pizza in the preheated oven according to the pizza dough instructions or until the crust is golden and the cheese is melted and bubbly","Once out of the oven, let the pizza rest for a few minutes before slicing","Slice the pizza into wedges or squares and serve hot"];
var Item6how2make = ["Preheat your grill or a stovetop pan over medium-high heat", "Season the ground beef with salt and pepper","Divide the beef into 4 equal portions and shape them into burger patties","Place the patties on the preheated grill or pan. Cook for about 4-5 minutes per side for medium doneness, or adjust based on your preference","During the last minute of cooking, place a slice of cheese on each patty. Cover the grill or pan to allow the cheese to melt","If desired, lightly toast the burger buns on the grill or in a toaster","Spread condiments (ketchup, mustard, mayonnaise) on the bottom half of each bun","Place a lettuce leaf on top of the condiments","Add the cooked patty with melted cheese","Top with tomato slices, onion slices, pickles, and any other desired toppings","If you're adding bacon, avocado, or other extras, place them on top","Place the top half of the bun on the toppings to complete the burger","Serve the cheeseburgers hot and enjoy"];
var Item7how2make = ["Remove the steaks from the refrigerator about 30 minutes before cooking to allow them to come to room temperature. This helps them cook more evenly", "Pat the steaks dry with paper towels to remove excess moisture","Season both sides of the steaks generously with salt and pepper","Heat a heavy skillet or cast-iron pan over high heat. If you're using an oven-safe skillet, preheat your oven to 400°F (200°C)","Rub the steaks with a little olive oil or clarified butter","Place the steaks in the hot pan. Sear for 2-3 minutes on each side to develop a nice crust","Use a meat thermometer to check the internal temperature. The USDA recommends:145°F (63°C) for medium-rare, 160°F (71°C) for medium, 170°F (77°C) for well-done","Allow the steaks to rest for at least 5 minutes before slicing","Slice the steak against the grain into thin slices"];
var Item8how2make = ["If using fresh tomatoes, preheat the oven to 400°F (200°C). Toss the quartered tomatoes with olive oil, salt, and pepper. Roast in the oven for about 25-30 minutes until they are softened and slightly caramelized", "In a large pot, heat the olive oil over medium heat. Add chopped onions and cook until translucent. Add minced garlic and cook for an additional minute until fragrant","If using roasted fresh tomatoes, add them to the pot. If using canned tomatoes, add them along with their juices. Stir in tomato paste","Add dried basil, dried oregano, dried thyme, salt, and pepper. Stir well to combine","Pour in the vegetable broth. Bring the mixture to a boil, then reduce the heat to low, cover, and simmer for about 15-20 minutes to allow the flavors to meld","Use an immersion blender to blend the soup until smooth","Return the soup to low heat. Stir in the heavy cream and add the butter. Cook for an additional 5 minutes, stirring occasionally until the soup is heated through","Taste the soup and adjust the seasoning as needed with more salt and pepper","Ladle the tomato bisque into bowls. Garnish with fresh basil or parsley, croutons, a drizzle of olive oil, or a dollop of sour cream if desired"];
var Item9how2make = ["Preheat your oven to 375°F (190°C)", "Cook the lasagna noodles according to the package instructions. If using oven-ready noodles, you can skip this step","In a large skillet, brown the ground beef or Italian sausage over medium heat. Drain excess fat","Add chopped onion and minced garlic to the skillet and sauté until softened","Stir in crushed tomatoes, tomato sauce, tomato paste, dried oregano, dried basil, salt, and pepper. Simmer for 15-20 minutes, allowing the flavors to meld","In a bowl, combine ricotta cheese, egg, grated Parmesan cheese, chopped parsley, salt, and pepper. Mix well","In a 9x13-inch baking dish, spread a thin layer of meat sauce","Place a layer of lasagna noodles on top of the sauce","Spread half of the ricotta cheese mixture over the noodles","Add another layer of meat sauce","Repeat the process: noodles, ricotta, meat sauce","Finish with a final layer of lasagna noodles and a generous layer of meat sauce","Sprinkle shredded mozzarella cheese evenly over the top","Cover the baking dish with aluminum foil and bake in the preheated oven for 25-30 minutes","Remove the foil and bake for an additional 10-15 minutes or until the cheese is melted and bubbly, and the edges are golden brown","Allow the lasagna to rest for about 10 minutes before slicing and serving"];
var Item10how2make = ["Preheat your oven according to the biscuit package or biscuit recipe instructions", "Cook the sausage patties according to the package instructions if they are not pre-cooked","If using store-bought biscuits, bake them according to the package instructions. If making homemade biscuits, bake them until they are golden brown","While the biscuits are baking, cook the eggs. You can scramble them or cook them as fried eggs, depending on your preference","Season the eggs with salt and pepper to taste","Slice the biscuits in half","Place a cooked sausage patty on the bottom half of each biscuit","Top the sausage with a cooked egg","Place a slice of cheese on top of the egg","Place the top half of the biscuit on the cheese to complete the sandwich","Serve the sausage, egg, and cheese biscuits warm"];
var Item11how2make = ["Crack the eggs into a bowl","Chop the fresh spinach","Crumble the feta cheese","Beat the eggs in the bowl until well mixed","Season with salt and pepper to taste","Heat olive oil in a non-stick skillet over medium heat","Add the chopped spinach to the skillet and sauté for a couple of minutes until it wilts","Pour the beaten eggs over the sautéed spinach in the skillet","Allow the eggs to set around the edges. As they set, gently lift the edges with a spatula, allowing the uncooked eggs to flow underneath","Once the eggs are mostly set but still a bit runny on top, sprinkle the crumbled feta cheese evenly over one-half of the eggs","Carefully fold the other half of the eggs over the cheese using the spatula","Cook for an additional minute or until the cheese melts and the eggs are cooked to your liking","Slide the sunny spinach scramble onto a plate and serve hot"]
var Item12how2make = ["Preheat your oven to 350°F (175°C)","Finely chop the broccoli, red bell pepper, and green onions","In a mixing bowl, whisk together the eggs and milk. Season with salt and pepper","Add the chopped broccoli, red bell pepper, green onions, and shredded cheddar cheese to the egg mixture. Mix well to combine","Grease a muffin tin with cooking spray or line it with muffin liners","Spoon the egg and vegetable mixture evenly into the muffin cups, filling each cup about 2/3 full","Bake in the preheated oven for 18-20 minutes or until the muffins are set and a toothpick inserted into the center comes out clean","Allow the muffins to cool in the tin for a few minutes before transferring them to a wire rack to cool completely","Once cooled, enjoy these Broccoli Cheddar Breakfast Muffins as a delicious and portable breakfast option!"]
var Item13how2make = ["Preheat your oven to 375°F (190°C)","In a skillet over medium heat, cook the sausage until browned and cooked through. Break it into crumbles as it cooks. Remove excess grease","In the same skillet, add diced bell peppers and cook until slightly softened. Add chopped spinach and cook until wilted. Stir in halved cherry tomatoes and cook for an additional minute. Remove from heat","In a bowl, whisk together eggs and heavy cream. Season with salt and pepper","Grease a baking dish and spread the cooked sausage at the bottom. Layer the cooked vegetables on top of the sausage","Pour the whisked egg and cream mixture over the sausage and vegetables","Sprinkle shredded cheddar cheese evenly over the top","Bake in the preheated oven for 25-30 minutes or until the eggs are set, and the top is golden brown","Garnish with chopped chives if desired. Allow the casserole to cool slightly before slicing and serving",""]
var Item14how2make = ["Cut the ripe avocado in half and remove the pit. Scoop the avocado flesh into a bowl","Mash the avocado using a fork until it reaches your desired level of creaminess. You can leave it slightly chunky or make it smooth","Season the mashed avocado with salt and pepper to taste. You can also add a squeeze of fresh lemon or lime juice for extra flavor","Toast the slices of bread to your preferred level of crispiness. You can use a toaster, toaster oven, or even a pan on the stovetop","Spread the mashed avocado evenly over the toasted bread slices","Get creative with your toppings. You can sprinkle red pepper flakes for a bit of heat, add halved cherry tomatoes, garnish with microgreens, or sprinkle sesame seeds on top","For an extra touch, you can drizzle a bit of balsamic glaze over the top. This adds a sweet and tangy flavor","Serve your avocado toast immediately while the bread is still warm. Enjoy it as a quick and nutritious breakfast"]
var Item15how2make = ["In a saucepan, combine the old-fashioned oats, almond milk, and a pinch of salt. Stir to combine","Place the saucepan over medium heat and bring the mixture to a gentle simmer. Stir occasionally to prevent sticking","Once the mixture is simmering, reduce the heat to low and let the oats cook for about 5-7 minutes, or until they reach your desired level of thickness. Stir occasionally","Once the oatmeal is cooked, remove the saucepan from the heat. Add your favorite toppings, such as sliced bananas, berries, nuts, seeds, a drizzle of maple syrup, or almond butter","Stir the toppings into the oatmeal and serve it warm","Enjoy your delicious and dairy-free oatmeal with almond milk!"]
var Item16how2make = ["In a medium saucepan, combine quinoa and water or vegetable broth","Bring to a boil, then reduce heat to low, cover, and simmer for about 15 minutes or until the quinoa is cooked and water is absorbed","Remove from heat and let it sit, covered, for 5 minutes. Fluff the quinoa with a fork and let it cool to room temperature","While the quinoa is cooling, prepare the vegetables. Dice the cucumber, bell pepper, cherry tomatoes, and finely chop the red onion. Chop the fresh parsley or cilantro","In a large bowl, combine the cooked quinoa, diced vegetables, and chopped herbs","In a small bowl, whisk together olive oil, lemon juice, salt, and pepper. Adjust the seasoning to taste","Pour the dressing over the quinoa and vegetables. Toss everything together until well combined","Chill the quinoa salad in the refrigerator for at least 30 minutes before serving to allow the flavors to meld","Serve chilled and enjoy!"]
var Item17how2make = ["Wash and chop the cucumber, tomatoes, red onion, and bell pepper (if using) into bite-sized pieces","In a large salad bowl, combine the chopped vegetables: cucumber, tomatoes, red onion, Kalamata olives, and bell pepper","Crumble the feta cheese over the vegetables. You can adjust the amount of feta according to your preference","In a small bowl, whisk together the extra-virgin olive oil, red wine vinegar, dried oregano, salt, and pepper. Adjust the seasoning to taste","Pour the dressing over the salad ingredients in the bowl","Using salad tongs or two large spoons, gently toss the salad to ensure that the dressing coats all the ingredients evenly","Sprinkle chopped fresh parsley over the salad as a garnish","Serve the Greek salad immediately, or refrigerate for a short time if you prefer it chilled"]
var Item18how2make = ["Season the chicken breasts with salt and pepper","Preheat the grill or grill pan over medium-high heat","Brush the chicken with olive oil","Grill the chicken for about 6-7 minutes per side or until the internal temperature reaches 165°F (74°C)","Let the chicken rest for a few minutes before slicing it into strips","In a bowl, whisk together mayonnaise, grated Parmesan cheese, lemon juice, Dijon mustard, minced garlic, salt, and pepper","Adjust the seasoning to taste. You can add more lemon juice or Parmesan cheese if desired","In a large bowl, toss the chopped romaine lettuce with some of the Caesar dressing until well-coated","Arrange the dressed lettuce on serving plates","Top the salad with grilled chicken strips","Drizzle more Caesar dressing over the chicken","Sprinkle with additional grated Parmesan cheese","Add croutons if desired or use keto-friendly crouton alternatives","Serve the Grilled Chicken Caesar Salad immediately, and enjoy!"]
var Item19how2make = ["In a skillet over medium heat, add olive oil","Add chopped onions and sauté until translucent","Add minced garlic and sauté for an additional 1-2 minutes until fragrant","Stir in the black beans or lentils, cumin, smoked paprika, salt, and pepper","Cook the mixture for about 5-7 minutes, stirring occasionally, until heated through and well combined","Heat the corn tortillas on a dry skillet or in the oven until warm and pliable","Spoon the prepared filling into each tortilla","Top with shredded lettuce, diced tomatoes, sliced avocado or guacamole, salsa, and chopped cilantro","Squeeze lime wedges over the tacos before serving for a burst of freshness","Feel free to customize your tacos with additional toppings like vegan cheese, pickled jalapeños, or hot sauce according to your taste preferences"]
var Item20how2make = ["Heat olive oil in a large pot over medium heat","Add chopped onions, carrots, and celery. Sauté for about 5 minutes until the vegetables start to soften","Add minced garlic and sauté for an additional 1-2 minutes until fragrant","Stir in ground cumin, ground coriander, smoked paprika, dried thyme, salt, and black pepper. Cook for 1-2 minutes to toast the spices","Add rinsed lentils, diced tomatoes, and vegetable broth to the pot. Bring the mixture to a boil","Reduce heat to low, cover the pot, and let it simmer for about 25-30 minutes or until the lentils are tender","Taste and adjust the seasoning if necessary","If you prefer a creamier texture, you can use an immersion blender to partially blend the soup, leaving some lentils whole for texture","Squeeze in lemon juice for a bright and fresh flavor (optional)","Serve hot, garnished with fresh parsley or cilantro if desired"]
var Item21how2make = ["Cook the chicken breasts by boiling, grilling, or pan-frying until fully cooked. Shred the chicken using two forks","In a bowl, combine the shredded chicken with cumin, chili powder, garlic powder, salt, and pepper. Mix well to ensure the chicken is evenly seasoned","Lay out four tortillas and divide the shredded cheese evenly among them","Place the seasoned shredded chicken over the cheese on each tortilla","Sprinkle diced bell peppers, red onion, and chopped cilantro over the chicken","Top each tortilla with a bit more cheddar and Monterey Jack cheese","Place a second tortilla on top of each assembled tortilla, creating a sandwich-like structure","Heat a large skillet or griddle over medium heat. You can add a little olive oil or use cooking spray to prevent sticking","Carefully transfer a quesadilla to the hot skillet and cook for 2-3 minutes on each side or until the tortillas are golden brown and the cheese is melted","Repeat the process for the remaining quesadillas","Once cooked, remove the quesadillas from the skillet and let them rest for a minute before slicing them into wedges","Serve hot with your favorite toppings such as salsa, guacamole, sour cream, or additional fresh cilantro"]
var Item22how2make = ["Preheat your oven to 400°F (200°C)","Pat the salmon fillets dry with paper towels","Place the fillets on a baking sheet lined with parchment paper or lightly greased","In a small bowl, whisk together the olive oil, fresh lemon juice, lemon zest, minced garlic, chopped dill, salt, and pepper","Brush the salmon fillets with the prepared marinade, ensuring they are evenly coated","Allow the salmon to marinate for at least 15-20 minutes to let the flavors infuse","Place the baking sheet in the preheated oven and bake for about 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork","Cooking time may vary depending on the thickness of the fillets","Once the salmon is done, remove it from the oven","Garnish with additional fresh dill and lemon slices if desired","Serve the baked salmon with your favorite sides, such as steamed vegetables, quinoa, or a fresh salad"]
var Item23how2make = ["In a large pan, heat 1 tablespoon of olive oil over medium heat","Add the sliced mushrooms and cook until they release their moisture and become golden brown. Set aside","In the same pan, add another tablespoon of olive oil","Add the chopped onions and cook until they become translucent","Add minced garlic and cook for an additional 1-2 minutes until fragrant","Add Arborio rice to the pan and cook for 1-2 minutes, stirring constantly until the edges of the rice are translucent","Pour in the dry white wine and stir until most of the liquid has evaporated","Start adding the warm vegetable broth one ladle at a time, stirring frequently","Wait until most of the liquid is absorbed before adding the next ladle of broth","Continue this process until the rice is creamy and cooked to al dente texture. This typically takes about 18-20 minutes","Stir in the sautéed mushrooms, allowing them to heat through","Stir in the butter and grated Parmesan cheese, creating a creamy and rich texture","Season with salt and black pepper to taste","Garnish with chopped fresh parsley","Optionally, you can add extra Parmesan on top when serving"]
var Item24how2make = ["Ensure the shrimp are peeled and deveined. Pat them dry with a paper towel","In a large skillet, melt 2 tablespoons of butter over medium-high heat","Add the shrimp to the skillet and cook for 2-3 minutes per side, or until they turn pink. Remove the shrimp from the skillet and set aside","In the same skillet, add the remaining 2 tablespoons of butter","Add minced garlic and sauté for about 1 minute until fragrant. Be careful not to burn the garlic","Pour in the chicken or vegetable broth to deglaze the pan, scraping up any browned bits from the bottom","Squeeze the juice of one lemon into the skillet","Add the lemon zest as well. Stir the mixture","Return the cooked shrimp to the skillet and toss them in the garlic butter lemon sauce","Season the shrimp with salt and pepper to taste. Stir to coat the shrimp evenly with the sauce","Cook for an additional 1-2 minutes until the shrimp are heated through and coated with the sauce","Garnish with fresh chopped parsley","Serve the lemon garlic butter shrimp over cauliflower rice, zucchini noodles, or on its own"]
var Item25how2make = ["In a bowl, mix the coconut flour, coconut milk, water, and salt until you have a smooth batter","Heat a non-stick skillet over medium heat. Pour a small amount of the batter onto the skillet, spreading it thinly to make a round wrap","Cook for 1-2 minutes on each side until the edges start to crisp. Repeat with the remaining batter","In the center of each coconut wrap, layer a handful of mixed salad greens, shredded carrots, julienned cucumber, sliced red bell pepper, avocado slices, and fresh herbs","In a small bowl, whisk together soy sauce, rice vinegar, maple syrup, sesame oil, minced garlic, and grated ginger","Drizzle the sauce over the filling in each wrap","Sprinkle sesame seeds on top","Fold in the sides of the coconut wrap and then roll it up, securing the ends","Slice the wraps in half diagonally and serve immediately"]
var Item26how2make = ["Bring a large pot of salted water to a boi","Cook the spaghetti according to the package instructions until al dente","Drain and set aside","In a large skillet, heat the olive oil over medium heat","Add the chopped onion and cook until it becomes translucent, about 3-5 minutes","Add the minced garlic and cook for an additional 1-2 minutes until fragrant","Pour in the crushed tomatoes, dried oregano, dried basil, and red pepper flakes (if using)","Season with salt and black pepper to taste","Stir the sauce well and bring it to a simmer","Reduce the heat to low and let the sauce simmer for about 15-20 minutes, allowing the flavors to meld and the sauce to thicken","Once the sauce has reached your desired consistency, add the cooked spaghetti to the skillet","Toss the spaghetti in the sauce until well coated and heated through","Transfer the spaghetti and sauce to serving plates","Garnish with fresh basil or parsley if desired"]
var Item27how2make = ["In a large skillet over medium heat, cook the ground beef until browned and cooked through, breaking it apart with a spoon as it cooks","Drain excess fat if necessary","Add chopped onions and garlic to the skillet, and sauté until the onions are soft and translucent","Stir in the chili powder, cumin, paprika, oregano, salt, and pepper. Cook for an additional 2-3 minutes to allow the spices to meld with the meat","Pour in the beef broth, and let it simmer until the mixture thickens slightly. Adjust seasoning to taste.","While the beef is cooking, prepare your taco toppings. Dice tomatoes, shred lettuce, grate cheese, and chop cilantro. Place these ingredients in separate bowls for easy assembly","Warm the taco shells or tortillas according to package instructions","Spoon the seasoned beef mixture into each taco shell","Add your desired toppings: lettuce, tomatoes, cheese, sour cream, salsa, and cilantro","Serve the beef tacos with lime wedges on the side for squeezing over the top"]
// This is the instances of the class will be placed. These are the individual dishes are created
var item1 = new Item(FoodPicture[0],"Pancakes",Item1Ingre,Item1how2make,"Breakfast","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Dairy-Free","Nut-Free");
const item2 = new Item(FoodPicture[1],"Scrambled Eggs",Item2Ingre,Item2how2make,"Breakfast","Has Gluten","Vegetarian","Keto","Non-Vegan","Dairy-Free","Nut-Free");
const item3 = new Item(FoodPicture[2],"Waffles", Item3Ingre,Item3how2make,"Breakfast","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free");
const item4 = new Item(FoodPicture[3],"Turkey Sandwich",Item4Ingre,Item4how2make,"Lunch","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Dairy-Free","Nut-Free");
const item5 = new Item(FoodPicture[4],"Pepperoni Pizza",Item5Ingre,Item5how2make,"Lunch","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free");
const item6 = new Item(FoodPicture[5],"Cheese Burger", Item6Ingre,Item6how2make,"Lunch","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free");
const item7 = new Item(FoodPicture[6],"Steak",Item7Ingre,Item7how2make,"Dinner","Gluten-Free","Non-Vegetarian","Keto","Non-Vegan","Dairy-Free","Nut-Free");
const item8 = new Item(FoodPicture[7],"Tomato Bisque Soup", Item8Ingre,Item8how2make,"Dinner","Has Gluten","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free");
const item9 = new Item(FoodPicture[8],"Lasagna", Item9Ingre,Item9how2make,"Dinner","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free");
const item10 = new Item(FoodPicture[9],"Sausage Egg Cheese Biscuit", Item10Ingre,Item10how2make,"Breakfast", "Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free")
const item11 = new Item(FoodPicture[10],"Sunny Spinach Scramble", Item11Ingre, Item11how2make,"Breakfast","Gluten-Free","Vegetarian","Keto","Non-Vegan","Has Dairy","Nut-Free")
const item12 = new Item(FoodPicture[11],"Broccoli Cheddar Breakfast Muffins", Item12Ingre, Item12how2make,"Breakfast","Gluten-Free","Vegetarian","Keto","Non-Vegan","Has Dairy","Nut-Free")
const item13 = new Item(FoodPicture[12],"Keto Sausage and Egg Casserole", Item13Ingre,Item13how2make,"Breakfast","Gluten-Free","Non-Vegetarian","Keto","Non-Vegan","Dairy-Free","Nut-Free")
const item14 = new Item(FoodPicture[13],"Avocado Toast",Item14Ingre,Item14how2make,"Breakfast","Has Gluten","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item15 = new Item(FoodPicture[14],"Oatmeal with Almond Milk",Item15Ingre,Item15how2make, "Breakfast","Gluten-Free","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item16 = new Item(FoodPicture[15],"Quinoa Salad",Item16Ingre,Item16how2make,"Lunch","Gluten-Free","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item17 = new Item(FoodPicture[16],"Greek Salad",Item17Ingre,Item17how2make,"Lunch","Gluten-Free","Vegetarian","Non-Keto","Non-Vegan","Has Diary","Nut-Free")
const item18 = new Item(FoodPicture[17],"Caesar Salad",Item18Ingre,Item18how2make,"Lunch","Gluten-Free","Non-Vegetarian","Keto","Non-Vegan","Has Dairy","Has Nuts")
const item19 = new Item(FoodPicture[18],"Vegan Tacos",Item19Ingre,Item19how2make,"Lunch","Gluten-Free","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item20 = new Item(FoodPicture[19],"Lentil Soup",Item20Ingre,Item20how2make,"Lunch","Gluten-Free","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item21 = new Item(FoodPicture[20],"Chicken Quesadillas",Item21Ingre,Item21how2make,"Lunch","Has Gluten","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free")
const item22 = new Item(FoodPicture[21],"Baked Salmon with Lemon and Dill",Item22Ingre,Item22how2make,"Dinner","Gluten-Free","Non-Vegetarian","Keto","Non-Vegan","Dairy-Free","Nut-Free")
const item23 = new Item(FoodPicture[22],"Mushroom Risotto", Item23Ingre,Item23how2make,"Dinner","Gluten-Free","Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free")
const item24 = new Item(FoodPicture[23],"Lemon Garlic Butter Shrimp",Item24Ingre,Item24how2make,"Dinner","Gluten-Free","Non-Vegetarian","Keto","Non-Vegan","Has Dairy","Nut-Free")
const item25 = new Item(FoodPicture[24],"Coconut Salad Wraps",Item25Ingre,Item25how2make,"Dinner","Has Gluten","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item26 = new Item(FoodPicture[25],"Spaghetti",Item26Ingre,Item26how2make,"Dinner","Has Gluten","Vegetarian","Non-Keto","Vegan","Dairy-Free","Nut-Free")
const item27 = new Item(FoodPicture[26],"Beef Taco",Item27Ingre,Item27how2make,"Dinner","Gluten-Free","Non-Vegetarian","Non-Keto","Non-Vegan","Has Dairy","Nut-Free")
var AllItems = [];
AllItems.push(item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,
    item17,item18,item19,item20,item21,item22, item23,item24,item25,item26, item27);
console.log(AllItems)

// This is the references of all of the checkboxes and radiobuttons
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const checkbox5 = document.getElementById("checkbox5");
const checkbox6 = document.getElementById("checkbox6");
const radiobutton1 = document.getElementById("radiobutton1")
const radiobutton2 = document.getElementById("radiobutton2")
const radiobutton3 = document.getElementById("radiobutton3");
const radiobutton4 = document.getElementById("radiobutton4");

const allRadioButtons = [radiobutton1,radiobutton2,radiobutton3,radiobutton4]
const allCheckBoxes = [checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6]

// This is the references of all of the regular buttons
const button1 = document.getElementById("Pancakes")
const button2 = document.getElementById("ScrambledEggs")
const button3 = document.getElementById("Waffles")
const button4 = document.getElementById("TurkeySandwich")
const button5 = document.getElementById("PepperoniPizza")
const button6 = document.getElementById("CheeseBurger")
const button7 = document.getElementById("Steak")
const button8 = document.getElementById("TomatoBisqueSoup")
const button9 = document.getElementById("Lasagna")
const button10 = document.getElementById("SausageEggCheeseBiscuit")
const button11 = document.getElementById("SunnySpinachScramble")
const button12 = document.getElementById("BroccoliCheddarBreakfastMuffins")
const button13 = document.getElementById("KetoSausageandEggCasserole")
const button14 = document.getElementById("AvocadoToast")
const button15 = document.getElementById("OatmealwithAlmondMilk")
const button16 = document.getElementById("QuinoaSalad")
const button17 = document.getElementById("GreekSalad")
const button18 = document.getElementById("CaesarSalad")
const button19 = document.getElementById("VeganTacos")
const button20 = document.getElementById("LentilSoup")
const button21 = document.getElementById("ChickenQuesadillas")
const button22 = document.getElementById("BakedSalmonwithLemonandDill")
const button23 = document.getElementById("MushroomRisotto")
const button24 = document.getElementById("LemonGarlicButterShrimp")
const button25 = document.getElementById("CoconutSaladWraps")
const button26 = document.getElementById("Spaghetti")
const button27 = document.getElementById("BeefTaco")
var AllDishButtons = []
AllDishButtons.push(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,
    button12,button13,button14,button15,button16,button17,button18,button19,button20,button21,button22,button23,
    button24,button25,button26,button27)
// This is the spot of the initial hashmap that will be updated once the Filter function has been completed
var HashMap1 = new Map()

var UpdatedAllItems = []; 
// This is the reference of the grid on the main page. It is where all of the dish buttons will be displayed
var imageGrid = document.getElementById("imageGrid");
// This function helps to show the checkboxes on the second drop down menu on the main page. 
var expanded = false;
function showCheckboxes(){
    var checkboxes = document.getElementById("checkboxes");
    if(!expanded){
        checkboxes.style.display = "block";
        expanded = true;
    }
    else{
        checkboxes.style.display = "none";
        expanded = false;
    }
}
// This function helps to show the radio buttons on the first drop down menu of the main page
var pressed = false;
function showRadiobuttons(){
    var radioButtons = document.getElementById("radioButtons");
    if(!pressed){
        radioButtons.style.display = "block";
        pressed = true;
    }
    else{
        radioButtons.style.display = "none";
        pressed = false;
    }
}
// This function helps with the direct search of an item in the program
function directSearch(text){
    imageGrid.innerHTML = "";
    test.innerHTML = ""
    for(var i = 0; i < allCheckBoxes.length; i++){
        CB = allCheckBoxes[i];
        CB.checked = false;
    }
    for(var i = 0; i <allRadioButtons.length; i++){
        RB = allRadioButtons[i];
        RB.checked = false;
    }
    HashMap1.clear();
    for (var i = 0; i <AllDishButtons.length; i++){
        var ButtonItem = AllDishButtons[i];
        if(ButtonItem.value.toLowerCase().includes(text.toLowerCase())){
            imageGrid.append(ButtonItem);
        }
        if(text == "All" || text == "all"){
            imageGrid.append(ButtonItem);
        }
        if(text == ""){
            imageGrid.innerHTML=""
        }
    }
}
// This function is the logic behind every radio button on the first drop down menu on the main page
function WhatTypeOfDish(value){
    HashMap1.clear();
    UpdatedAllItems.length = 0
    imageGrid.innerHTML=""
    if(value === "Breakfast"){
        test.innerHTML = ""
        for(var i = 0; i < allCheckBoxes.length; i++){
            CB = allCheckBoxes[i];
            CB.checked = false;
        }
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i];
            if(radiobutton1.value === object.attribute1){
                UpdatedAllItems.push(AllItems[i])
                console.log(AllItems[i])
            }
        }
        for(var i = 0; i < AllDishButtons.length; i++){
            var ButtonItem = AllDishButtons[i];
            if(radiobutton1.value === AllItems[i].attribute1){
                imageGrid.append(ButtonItem)
            }
        }
    }
    if(value === "Lunch"){
        test.innerHTML = ""
        for(var i = 0; i < allCheckBoxes.length; i++){
            CB = allCheckBoxes[i];
            CB.checked = false;
        }
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i]
            if(radiobutton2.value === object.attribute1){
                UpdatedAllItems.push(AllItems[i])
                console.log(AllItems[i])
            }
        }
        for(var i = 0; i < AllDishButtons.length; i++){
            var ButtonItem = AllDishButtons[i];
            if(radiobutton2.value === AllItems[i].attribute1){
                imageGrid.append(ButtonItem)
            }
        }
    }
    if(value === "Dinner"){
        test.innerHTML = ""
        for(var i = 0; i < allCheckBoxes.length; i++){
            CB = allCheckBoxes[i];
            CB.checked = false;
        }
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i]
            if(radiobutton3.value === object.attribute1){
                UpdatedAllItems.push(AllItems[i])
                console.log(AllItems[i])
            }
        }
        for(var i = 0; i < AllDishButtons.length; i++){
            var ButtonItem = AllDishButtons[i];
            if(radiobutton3.value === AllItems[i].attribute1){
                imageGrid.append(ButtonItem)
            }
        }
    }
    if(value === "All"){
        test.innerHTML = ""
        for(var i = 0; i < allCheckBoxes.length; i++){
            CB = allCheckBoxes[i];
            CB.checked = false;
        }
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i]
            UpdatedAllItems.push(AllItems[i])
            console.log(AllItems[i])
            
        }
        for(var i = 0; i < AllDishButtons.length; i++){
            var ButtonItem = AllDishButtons[i];
            imageGrid.append(ButtonItem)
        }
    }
    console.log(UpdatedAllItems)
}
// This function handles the filtering operations. Its a scoring system on what closely matches the users preferences.
// Once this function is done, the initial hashmap gets udpated
function Filter(attribute, name, HashMap1, UserFilterInputs){
    imageGrid.innerHTML = "";
    test.innerHTML = "";
    var score = 0;
    for(var i = 0; i <UserFilterInputs.length; i++){
        if(attribute.includes(UserFilterInputs[i])){
            score += 1;
        }

    }
    return  HashMap1.set(name,score);
}
// This function monitors which checkbox is pushed and will then call the Filter function above. Once the Filter function is
// done, this function will then sort the intitial hashmap and then place the corresponding dish objects into an array. This
// function will then call the changeHTML function and input the array
function updateSelectedValues(value) {
    const selectedValues = [];
    if(checkbox1.checked){
        selectedValues.push(checkbox1.value)
    }
    if(checkbox2.checked){
        selectedValues.push(checkbox2.value)
    }
    if(checkbox3.checked){
        selectedValues.push(checkbox3.value)
    }
    if(checkbox4.checked){
        selectedValues.push(checkbox4.value)
    }
    if(checkbox5.checked){
        selectedValues.push(checkbox5.value)
    }
    if(checkbox6.checked){
        selectedValues.push(checkbox6.value)
    }
    console.log(selectedValues);
    for(var i =0; i<UpdatedAllItems.length; i++){
        Filter([UpdatedAllItems[i].attribute1, UpdatedAllItems[i].attribute2, UpdatedAllItems[i].attribute3, 
                UpdatedAllItems[i].attribute4, UpdatedAllItems[i].attribute5,UpdatedAllItems[i].attribute6,UpdatedAllItems[i].attribute7], 
                UpdatedAllItems[i].name, HashMap1, selectedValues)
            }

     
     var HashMap2 = new Map([...HashMap1.entries()].sort((a, b) => b[1] - a[1]));
     var TopFilteredChoices = [...HashMap2.keys()]
     var DisplayedDishes = []
     for(var i = 0; i<TopFilteredChoices; i++){
        var object = TopFilteredChoices[i];
        if(object === AllItems.name){
            DisplayedDishes.push(AllItems)
        }
     }
     console.log(HashMap2)
     console.log(TopFilteredChoices)
     changeHTML(TopFilteredChoices,AllDishButtons,imageGrid);

  }
// This function takes in the array from the updatedSelectedValues function and will then place the dishes onto the grid onto the main page
function changeHTML(Array, AllDishButtons, imageGrid) {
    imageGrid.innerHTML = "";
    for (const item of Array) {
        var matchingButton = AllDishButtons.find(button => button.value === item);
        if (matchingButton) {
            imageGrid.appendChild(matchingButton);
        }
    }
}
// This function will handle what happens when the user clicks on a dish item on the main page. It will take the user to another
// page and will then populate the page with data that pertains only to the dish item that was selected.
function DishProfilePage(value) {
    var inputInstance;
    for (var i = 0; i < AllItems.length; i++) {
        var instance = AllItems[i];
        if (value === instance.name) {
            inputInstance = instance;
        }
    }
    console.log(value + " "+ JSON.stringify(inputInstance));
    var myObject = inputInstance;
    localStorage.setItem("myObject", JSON.stringify(myObject));
    window.location.href = "DishProfile.html";
}
    if (window.location.href.includes("DishProfile.html")) {
        var storedObject = localStorage.getItem("myObject");
        if (storedObject) {
        var myObject = JSON.parse(storedObject);
        var displayDivPicture = document.getElementById("picture");
        var displayDivName = document.getElementById("name");
        var displayDivIngre = document.getElementById("ingredients")
        var displayDivHow2Make = document.getElementById("how2make");
        var displayDiv1 = document.getElementById("attribute1");
        var displayDiv2 = document.getElementById("attribute2");
        var displayDiv3 = document.getElementById("attribute3");
        var displayDiv4 = document.getElementById("attribute4");
        var displayDiv5 = document.getElementById("attribute5");
        var displayDiv6 = document.getElementById("attribute6");
        var displayDiv7 = document.getElementById("attribute7");
        displayDivPicture.src = myObject.picture
        displayDivName.innerHTML = `<p>${myObject.name}</p>`;
        myObject.ingrediants.forEach(function (item){
            const li = document.createElement('li');
            li.textContent = item;
            displayDivIngre.appendChild(li);
        });
        myObject.how2make.forEach(function (item){
            const li = document.createElement('li');
            li.textContent = item;
            displayDivHow2Make.appendChild(li);
        })
        displayDiv1.innerHTML = `<p>${myObject.attribute1}</p>`;
        displayDiv2.innerHTML = `<p>${myObject.attribute2}</p>`;
        displayDiv3.innerHTML = `<p>${myObject.attribute3}</p>`;
        displayDiv4.innerHTML = `<p>${myObject.attribute4}</p>`;
        displayDiv5.innerHTML = `<p>${myObject.attribute5}</p>`;
        displayDiv6.innerHTML = `<p>${myObject.attribute6}</p>`;
        displayDiv7.innerHTML = `<p>${myObject.attribute7}</p>`;
    }
    if(window.location.href.includes("index.html")){
        for(var i = 0; i < allCheckBoxes.length; i++){
            CB = allCheckBoxes[i];
            CB.checked = false;
        }
        for(var i = 0; i <allRadioButtons.length; i++){
            RB = allRadioButtons[i];
            RB.checked = false;
        }
    }
}
// This function covers the logic behind the rate button on the Dish Profile page. 
function DishScore(){
    let input = prompt("From 1 to 5 how would you rate this dish?");
    document.getElementById("PromptText").innerHTML = input

    if(input > 5){
        input = prompt("Please enter a valid number, From 1 to 5 how would you rate this dish?")
    }
    if(input < 1){
        input = prompt("Please enter a valid number, From 1 to 5 how would you rate this dish?")
    }
    if(input >= 1 && input <= 5){
        input = alert("Thank you for your input!")
    }
    else{
        input = prompt("Please enter a valid number, From 1 to 5 how would you rate this dish?")
    }
}
// Sources
// How to sort a HashMap based on ONLY the values  was found on this website: https://www.geeksforgeeks.org/how-to-sort-a-map-in-javascript/
// ChatGPT helped me moddify my directsearch function to make it where it can effectively search for the item requested. This bit of the if statement: ButtonItem.value.toLowerCase().includes(text.toLowerCase())
// Some images are sourced from the website https://unsplash.com/. For the sake of college project submission I must state I do not own these images.
// Some images are sourced from the website https://www.istockphoto.com/.  For the sake of college project submission I must state I do not own these images.
// The ingredients lists and how to make steps were sourced from ChatGPT. For the sake of college project submission I must state I do not own these recipes and or creation methods.