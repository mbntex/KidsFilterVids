var AllowedSearchesDefaults = [
  {term: 'Mr. Rogers Neighborhood', buttonLabel: 'Mr. Rogers', image: 'Rogers.jpg', category: 'family', color: 'white' },
  {term: 'Garfield And Friends', buttonLabel: 'Garfield', image: 'Garfield.jpeg', category: 'funny', color: 'black' },
  {term: 'Daniel Tiger\'s Neighborhood', buttonLabel: 'Daniel Tiger', image: 'Daniel.jpeg', category: 'family',  color: 'black' },
  {term: 'Mr. Wizard Science', buttonLabel: 'Mr. Wizard', image: 'Wizard.jpeg', category: 'educational',  color: 'white' },
  {term: 'Disney Frozen', buttonLabel: 'Frozen', image: 'Frozen.jpeg', category: 'Disney', color: 'white' },
  {term: 'Sesame Street', buttonLabel: 'Sesame Street', image: 'Sesame.jpeg', category: 'family', color: 'black' },
  {term: 'Muppets', buttonLabel: 'Muppets', image: 'Kermit.jpeg', category: 'family', color: 'black' },
  {term: 'Reading Rainbow', buttonLabel: 'Reading Rainbow', image: 'ReadingRainbow.jpeg', category: 'educational',  color: 'black' },
  {term: 'Dora  The Explorer', buttonLabel: 'Dora', image: 'Dora.jpeg', category: 'educational',  color: 'black' },
  {term: 'Team Umizoomi', buttonLabel: 'Umizoomi', image: 'Umizoomi.jpeg',  category: 'educational', color: 'black' },
  {term: 'Dr. Seuss', buttonLabel: 'Dr. Seuss', image: 'drSeuss.jpg',  category: 'family', color: 'black' },
  {term: 'Pixar', buttonLabel: 'Pixar', image: 'pbirds.jpg',  category: 'family', color: 'white' },
  {term: 'Kittens', buttonLabel: 'Kittens', image: 'kitten.jpg',  category: 'family', color: 'white' },
  {term: 'Puppies', buttonLabel: 'Puppies', image: 'Puppies.jpg',  category: 'family', color: 'white' },
  {term: 'Monkeys', buttonLabel: 'Monkeys', image: 'Monkeys.jpg',  category: 'family', color: 'white' },
  {term: 'Magic Tricks', buttonLabel: 'Magic Tricks', image: 'Magic.jpg',  category: 'family', color: 'white' },
  {term: 'Sound Of Music', buttonLabel: 'Sound Of Music', image: 'SoM.jpg',  category: 'family', color: 'black' },
  {term: 'Mary Poppins', buttonLabel: 'Mary Poppins', image: 'MaryPoppins.jpg',  category: 'family', color: 'white'},
  {term: 'Moana', buttonLabel: 'Moana', image: 'Moana.jpg',  category: 'family', color: 'white' },
  {term: 'Tom and Jerry', buttonLabel: 'Tom & Jerry', image: 'TomAndJerry.jpg',  category: 'family', color: 'white' },
  {term: 'Fraggle Rock', buttonLabel: 'Fraggle Rock', image: 'Fraggles.jpg',  category: 'family', color: 'white' },
  {term: 'Strawberry Shortcake', buttonLabel: 'Strawberry Shortcake', image: 'Shortcake.png',  category: 'family', color: 'black' },
  {term: 'Blue Planet', buttonLabel: 'Blue Planet', image: 'earth.jpg',  category: 'family', color: 'white' },
  {term: 'Cat In The Hat', buttonLabel: 'Cat In The Hat', image: 'CatInHat.jpg',  category: 'family', color: 'white' },
  {term: 'Kids Crafts', buttonLabel: 'Kids Crafts', image: 'KidsCrafts.jpg',  category: 'family', color: 'white' },
  {term: 'Crafts for Kids', buttonLabel: 'Crafts for Kids', image: 'workingcraft.jpg',  category: 'family', color: 'white' },
  {term: 'This Old House Home Improvement', buttonLabel: 'Construction', image: 'hammer.jpg',  category: 'family', color: 'black' },
  {term: 'Good Bones home renovation', buttonLabel: 'Renovation', image: 'framing.jpg',  category: 'science', color: 'white' },
  {term: 'Kids Science Experiments', buttonLabel: 'Kids Science Experiments', image: 'Stars.png',  category: 'family', color: 'nova' },
  {term: 'Nova Science', buttonLabel: 'Nova Science', image: 'testexp.jpg',  category: 'family', color: 'white' },
  {term: 'Whales', buttonLabel: 'Whales', image: 'whale.jpg',  category: 'science', color: 'white' },
  {term: 'Bob Ross Painting', buttonLabel: 'Painting', image: 'painting.jpg',  category: 'science', color: 'white' },
  {term: 'Good Bones home renovation', buttonLabel: 'home renovation', image: 'framing.jpg',  category: 'science', color: 'white' }
]; 


// export default AllowedSearchesDefaults;
module.exports.AllowedSearchesDefaults = AllowedSearchesDefaults;