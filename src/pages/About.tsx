const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="font-serif text-5xl text-olive mb-6">About Recipe Journey Haven</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Embark on a culinary adventure with Recipe Journey Haven, where every dish tells a story 
            and every meal creates a memory.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-serif text-olive">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Recipe Journey Haven was born in 2023 from a simple yet powerful idea: to create a space 
              where food enthusiasts could come together to explore, learn, and share their culinary passions. 
              What started as a small collection of family recipes has grown into a vibrant community of 
              food lovers from around the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our founder, inspired by countless hours spent in their grandmother's kitchen, envisioned 
              a platform that would preserve traditional recipes while embracing modern cooking techniques 
              and dietary preferences. Today, Recipe Journey Haven stands as a testament to that vision, 
              offering a carefully curated collection of recipes that blend tradition with innovation.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-serif text-olive">Our Mission</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                At Recipe Journey Haven, we believe that cooking is one of life's greatest pleasures and 
                a powerful way to connect with others. Our mission is threefold:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-olive">Inspire</h3>
                  <p className="text-gray-600">
                    To spark creativity in the kitchen and encourage culinary exploration through diverse, 
                    accessible recipes and cooking techniques.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-olive">Educate</h3>
                  <p className="text-gray-600">
                    To provide comprehensive cooking knowledge and skills that empower home cooks at every 
                    level of expertise.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-olive">Connect</h3>
                  <p className="text-gray-600">
                    To foster a supportive community where food lovers can share experiences, tips, and 
                    their love for cooking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-serif text-olive">What Sets Us Apart</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-olive">Recipe Excellence</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Triple-tested recipes ensuring reliable results</li>
                  <li>Detailed step-by-step instructions with photos</li>
                  <li>Ingredient substitution suggestions</li>
                  <li>Scaling options for different serving sizes</li>
                  <li>User reviews and cooking tips</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-olive">Community Features</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Recipe sharing and collaboration</li>
                  <li>Monthly cooking challenges</li>
                  <li>Live cooking workshops</li>
                  <li>Personal recipe collections</li>
                  <li>Expert Q&A sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-3xl font-serif text-olive">Our Values</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-olive">Quality & Authenticity</h3>
                <p className="text-gray-600">
                  Every recipe undergoes rigorous testing and validation. We believe in preserving 
                  authentic flavors while making recipes accessible for modern kitchens.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-olive">Sustainability</h3>
                <p className="text-gray-600">
                  We promote sustainable cooking practices, seasonal ingredients, and mindful 
                  consumption to support environmental consciousness.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-olive">Inclusivity</h3>
                <p className="text-gray-600">
                  Our recipes cater to diverse dietary preferences and restrictions, ensuring 
                  everyone can find dishes that suit their needs.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-olive">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new cooking techniques and technologies while respecting traditional 
                  methods and cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join & Contact Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-olive">Join Our Culinary Community</h2>
          <div className="bg-sage/10 rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-olive">Get Involved</h3>
                <p className="text-gray-600 leading-relaxed">
                  There are many ways to become part of our growing community:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Share your favorite recipes and cooking stories</li>
                  <li>Participate in our monthly cooking challenges</li>
                  <li>Join our virtual cooking workshops</li>
                  <li>Subscribe to our weekly newsletter for latest updates</li>
                  <li>Follow us on social media for daily inspiration</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-olive">Connect With Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  We love hearing from our community! Reach out to us through:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-olive text-white rounded-md hover:bg-sage transition-colors">
                    <span className="mr-2">📸</span> Instagram
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-olive text-white rounded-md hover:bg-sage transition-colors">
                    <span className="mr-2">📘</span> Facebook
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-olive text-white rounded-md hover:bg-sage transition-colors">
                    <span className="mr-2">📌</span> Pinterest
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-olive text-white rounded-md hover:bg-sage transition-colors">
                    <span className="mr-2">✉️</span> Newsletter
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-gray-600 text-center italic">
                  "Cooking is like love. It should be entered into with abandon or not at all." 
                  <br />
                  <span className="text-sm">- Harriet Van Horne</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;