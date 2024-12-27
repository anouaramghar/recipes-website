const StartHere = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Hero Section */}
        <section className="text-center mb-12">
          <h1 className="font-serif text-5xl text-olive mb-6">Welcome to Recipe Journey Haven</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your adventure in the kitchen begins here. Let us guide you through everything 
            you need to know to make the most of our platform.
          </p>
        </section>

        {/* Quick Start Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-olive mb-6">Quick Start Guide</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-olive">First Steps</h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                  <li>Browse our recipe collection by category or use the search bar</li>
                  <li>Click on any recipe to view detailed instructions</li>
                  <li>Save your favorite recipes to your personal collection</li>
                  <li>Adjust serving sizes to match your needs</li>
                  <li>Read through user reviews and tips</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-olive">Pro Tips</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>Read the entire recipe before starting</li>
                  <li>Check the "Notes" section for helpful variations</li>
                  <li>Look for make-ahead instructions</li>
                  <li>Review substitution suggestions</li>
                  <li>Check user comments for additional tips</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Difficulty Levels */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-olive mb-6">Understanding Recipe Difficulty Levels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif text-olive mb-3">Easy</h3>
              <div className="space-y-3 text-gray-600">
                <p>Perfect for beginners</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Simple ingredients</li>
                  <li>Basic cooking techniques</li>
                  <li>Minimal prep time</li>
                  <li>5-7 ingredients</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif text-olive mb-3">Medium</h3>
              <div className="space-y-3 text-gray-600">
                <p>For confident home cooks</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>More ingredients</li>
                  <li>Multiple cooking steps</li>
                  <li>Some technique required</li>
                  <li>8-12 ingredients</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif text-olive mb-3">Hard</h3>
              <div className="space-y-3 text-gray-600">
                <p>For experienced cooks</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Complex techniques</li>
                  <li>Longer preparation</li>
                  <li>Special equipment needed</li>
                  <li>12+ ingredients</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Kitchen Tools */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-olive mb-6">Essential Kitchen Tools</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-olive">Basic Equipment</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Sharp chef's knife</li>
                  <li>Cutting board</li>
                  <li>Measuring cups and spoons</li>
                  <li>Large mixing bowls</li>
                  <li>Basic pots and pans</li>
                  <li>Kitchen scale</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-olive">Nice to Have</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Stand mixer</li>
                  <li>Food processor</li>
                  <li>Instant-read thermometer</li>
                  <li>Dutch oven</li>
                  <li>Silicone baking mats</li>
                  <li>Immersion blender</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Cooking Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-olive mb-6">Common Cooking Terms</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-olive mb-4">Preparation Terms</h3>
                <dl className="space-y-3">
                  <dt className="font-semibold text-olive">Dice</dt>
                  <dd className="text-gray-600 ml-4">Cut into small, uniform cubes</dd>
                  
                  <dt className="font-semibold text-olive">Mince</dt>
                  <dd className="text-gray-600 ml-4">Cut into very small pieces</dd>
                  
                  <dt className="font-semibold text-olive">Julienne</dt>
                  <dd className="text-gray-600 ml-4">Cut into thin strips</dd>
                </dl>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-olive mb-4">Cooking Terms</h3>
                <dl className="space-y-3">
                  <dt className="font-semibold text-olive">Sauté</dt>
                  <dd className="text-gray-600 ml-4">Cook quickly in a small amount of fat</dd>
                  
                  <dt className="font-semibold text-olive">Braise</dt>
                  <dd className="text-gray-600 ml-4">Cook slowly in liquid after browning</dd>
                  
                  <dt className="font-semibold text-olive">Fold</dt>
                  <dd className="text-gray-600 ml-4">Gently combine ingredients without stirring</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-olive mb-6">Getting Help</h2>
          <div className="bg-sage/10 rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We're here to help you succeed in your culinary journey. Here's how to get assistance:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-olive">Community Support</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Comment on recipes</li>
                    <li>Join discussion forums</li>
                    <li>Share your experiences</li>
                    <li>Ask questions</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-olive">Direct Support</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Contact our support team</li>
                    <li>Check our FAQ section</li>
                    <li>Watch tutorial videos</li>
                    <li>Read cooking guides</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-serif text-olive mb-4">Ready to Start Cooking?</h2>
            <p className="text-gray-600 mb-6">
              Explore our collection of recipes and begin your culinary adventure today!
            </p>
            <div className="flex justify-center gap-4">
              <a href="/recipes" className="inline-flex items-center px-6 py-3 bg-olive text-white rounded-md hover:bg-sage transition-colors">
                Browse Recipes
              </a>
              <a href="/about" className="inline-flex items-center px-6 py-3 border-2 border-olive text-olive rounded-md hover:bg-olive hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartHere;