const express = require("express");
const path = require("path");
const app = express();
// const dogs = [
//   // {
//   //   id: 1,
//   //   name: "Tini",price:"",price:"",
//   //   breed: "CHIHUAHUA",
//   //   price: "1000",
//   //   description: "This is a crazy tiny dog with big alien eyes",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1605639156481-244775d6f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   // },
//   // {
//   //   id: 2,
//   //   name: "Butty",
//   //   breed: "CORGI",
//   //   price: "1500",
//   //   description: "This is a cute dog with a heart-shaped butt",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   // },
//   // {
//   //   id: 3,
//   //   name: "Pity",
//   //   breed: "PITBULL",
//   //   price: "2500",
//   //   description:
//   //     "A dangerous breed but everyone loves to have one of them cause they look cool",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1571868094976-6af3b50b43bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   // },
//   // {
//   //   id: 4,
//   //   name: "Puggy",
//   //   breed: "PUG",
//   //   price: "1700",
//   //   description:
//   //     "A sad looking dog that actually very energetic and love being cuddled",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1535909339361-ef56e179d637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   // },
//   // {
//   //   id: 5,
//   //   name: "Mally",
//   //   breed: "MALTESE",
//   //   price: "2000",
//   //   description: "A maltese dog",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1508532566027-b2032cd8a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsdGVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
//   // },
//   // {
//   //   id: 6,
//   //   name: "Dachy",
//   //   breed: "DASCHUND",
//   //   price: "2700",
//   //   description: "A dog looks like a sausage",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFzY2h1bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
//   // },
//   // {
//   //   id: 7,
//   //   name: "Ngao",
//   //   breed: "HUSKY",
//   //   price: "2500",
//   //   description: "A dog looks like a wolf",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
//   // },
//   // {
//   //   id: 8,
//   //   name: "Boxy",
//   //   breed: "BOXER",
//   //   price: "4700",
//   //   description: "A dog knows how to fight",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
//   // },
//   {
//     id: 1,
//     breed: "Affenpinscher",
//     name: "Max",
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11172.jpg",
//     price: "277",
//     description:
//       "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.",
//   },
//   {
//     id: 2,
//     breed: "Afghan Hound",
//     name: "Buddy",
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11182.jpg",
//     price: "888",
//     description:
//       "Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.",
//   },
//   {
//     id: 3,
//     breed: "African Hunting Dog",
//     name: "Charlie",
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg",
//     price: "234",
//     description:
//       "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg",
//     price: "641",
//     id: 4,
//     breed: "Airedale Terrier",
//     name: "Jack",

//     description:
//       "Apple and pear seeds contain arsenic, which may be deadly to dogs.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11136.jpg",
//     price: "436",
//     id: 5,
//     breed: "Akbash Dog",
//     name: "Cooper",

//     description:
//       "Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11148.jpg",
//     price: "436",
//     id: 6,
//     breed: "Akita",
//     name: "Rocky",

//     description: "Dogs have sweat glands in between their paws.",

//     description:
//       'In 2003, Dr. Roger Mugford invented the "wagometer," a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.',
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11200.jpg",
//     price: "672",
//     id: 7,
//     breed: "Alapaha Blue Blood Bulldog",
//     name: "Toby",

//     description:
//       'Dogs have three eyelids. The third lid, called a nictitating membrane or "haw," keeps the eye lubricated and protected.',
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11204.jpg",
//     price: "123",
//     id: 8,
//     breed: "Alaskan Husky",
//     name: "Tucker",

//     description:
//       "A dog’s shoulder blades are unattached to the rest of the skeleton to allow greater flexibility for running.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11223.jpg",
//     price: "323",
//     id: 9,
//     breed: "Alaskan Malamute",
//     name: "Jake",

//     description:
//       "Puppies are sometimes rejected by their mother if they are born by cesarean and cleaned up before being given back to her.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11281.jpg",
//     price: "55",
//     id: 10,
//     breed: "American Bulldog",
//     name: "Riley",

//     description:
//       'The phrase "raining cats and dogs" originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.',
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11635.jpg",
//     price: "15",
//     id: 11,
//     breed: "American Bully",
//     name: "Oliver",

//     description:
//       "During the Middle Ages, Great Danes and Mastiffs were sometimes suited with armor and spiked collars to enter a battle or to defend supply caravans.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11846.jpg",
//     price: "22",
//     id: 12,
//     breed: "American Eskimo Dog",
//     name: "Teddy",

//     description:
//       "Pekingese and Japanese Chins were so important in the ancient Far East that they had their own servants and were carried around trade routes as gifts for kings and emperors. Pekingese were even worshipped in the temples of China for centuries.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11849.jpg",
//     price: "200",
//     id: 13,
//     breed: "American Eskimo Dog (Miniature)",
//     name: "Duke",

//     description:
//       "The shape of a dog’s face suggests how long it will live. Dogs with sharp, pointed faces that look more like wolves typically live longer. Dogs with very flat faces, such as bulldogs, often have shorter lives.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_13199.jpg",
//     price: "250",
//     id: 14,
//     breed: "American Foxhound",
//     name: "Bear",

//     description:
//       "The ancient Mbaya Indians of the Gran Chaco in South America believed that humans originally lived underground until dogs dug them up.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_13222.jpg",
//     price: "142",
//     id: 15,
//     breed: "American Pit Bull Terrier",
//     name: "Bentley",

//     description:
//       "The Mayans and Aztecs symbolized every tenth day with the dog, and those born under this sign were believed to have outstanding leadership skills",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_13373.jpg",
//     price: "189",
//     id: 16,
//     breed: "American Staffordshire Terrier",
//     name: "Milo",

//     description:
//       "The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_12388.jpg",
//     price: "175",
//     id: 17,
//     breed: "American Water Spaniel",
//     name: "Bentley",

//     description:
//       "The American Kennel Club, the most influential dog club in the United States, was founded in 1884.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_1262.jpg",
//     price: "592",
//     id: 18,
//     breed: "Anatolian Shepherd Dog",
//     name: "Bailey",

//     description:
//       "The most popular male dog breeds are Max and Jake. The most popular female dog breeds are Maggie and Molly.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_2908.jpg",
//     price: "480",
//     id: 19,
//     breed: "Appenzeller Sennenhund",
//     name: "Riley",

//     description:
//       "Scholars have argued over the metaphysical interpretation of Dorothy’s pooch, Toto, in the Wizard of Oz. One theory postulates that Toto represents Anubis, the dog-headed Egyptian god of death, because Toto consistently keeps Dorothy from safely returning home.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_4054.jpg",
//     price: "427",
//     id: 21,
//     breed: "Australian Cattle Dog",
//     name: "Winston",

//     description:
//       "Weird dog laws include allowing police offers in Palding, Ohio, to bite a dog to quiet it. In Ventura County, California, cats and dogs are not allowed to have sex without a permit.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_4169.jpg",
//     price: "499",
//     id: 22,
//     breed: "Australian Kelpie",
//     name: "Dexter",

//     description:
//       "The first dog chapel was established in 2001. It was built in St. Johnsbury, Vermont, by Stephan Huneck, a children’s book author whose five dogs helped him recuperate from a serious illness.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9579.jpg",
//     price: "895",
//     id: 23,
//     breed: "Australian Shepherd",
//     name: "Cody",

//     description:
//       "Those born under the sign of the dog in Chinese astrology are considered to be loyal and discreet, though slightly temperamental.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9616.jpg",
//     price: "1050",
//     id: 24,
//     breed: "Australian Terrier",
//     name: "Buster",

//     description:
//       "Service dogs are trained to know when they are on duty. When their harness is on, they know it's business time. When you take it off, the pups immediately become playful and energetic.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9691.jpg",
//     price: "245",
//     id: 25,
//     breed: "Azawakh",
//     name: "Oscar",

//     description:
//       "The Mayans and Aztecs symbolized every tenth day with the dog, and those born under this sign were believed to have outstanding leadership skills.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9695.jpg",
//     price: "288",
//     id: 26,
//     breed: "Barbet",
//     name: "Lucky",

//     description:
//       "The ancient Mbaya Indians of the Gran Chaco in South America believed that humans originally lived underground until dogs dug them up.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9697.jpg",
//     price: "313",
//     id: 28,
//     breed: "Basenji",
//     name: "Leo",

//     description:
//       "The first dogs were self-domesticated wolves which, at least 12,000 years ago, became attracted to the first sites of permanent human habitation.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9792.jpg",
//     price: "263",
//     id: 29,
//     breed: "Basset Bleu de Gascogne",
//     name: "Zeus",

//     description:
//       "Laika, a Russian stray, was the first living mammal to orbit the Earth, in the Soviet Sputnik spacecraft in 1957. Though she died in space, her daughter Pushnika had four puppies with President John F. Kennedy’s terrier, Charlie.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1078.jpg",
//     price: "375",
//     id: 30,
//     breed: "Basset Hound",
//     name: "Louie",

//     description:
//       "The earliest European images of dogs are found in cave paintings dating back 12,000 years ago in Spain.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1106.jpg",
//     price: "381",
//     id: 31,
//     breed: "Beagle",
//     name: "Sam",

//     description:
//       'In ancient Greece, kennels of dogs were kept at the sanctuary of Asclepius at Epidaurus. Dogs were frequently sacrificed there because they were plentiful, inexpensive, and easy to control. During the July 25 celebration of the kunophontis "the massacre of dogs", dog sacrifices were performed to appease the ancestors of Apollo’s son, Linos, who was devoured by dogs..',
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg",
//     price: "300",
//     id: 32,
//     breed: "Bearded Collie",
//     name: "Harley",

//     description:
//       "Hollywood’s first and arguably best canine superstar was Rin Tin Tin, a five-day-old German Shepherd found wounded in battle in WWI France and adopted by an American soldier, Lee Duncan. He would sign his own contracts with his paw print.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1232.jpg",
//     price: "303",
//     id: 33,
//     breed: "Beauceron",
//     name: "Baxter",

//     description:
//       "In Egypt, a person bitten by a rabid dog was encouraged to eat the roasted liver of a dog infected with rabies to avoid contracting the disease. The tooth of a dog infected with rabies would also be put in a band tied to the arm of the person bitten. The menstrual blood of a female dog was used for hair removal, while dog genitals were used for preventing the whitening of hair.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1352.jpg",
//     price: "150",
//     id: 34,
//     breed: "Bedlington Terrier",
//     name: "Henry",

//     description:
//       "The breeds of 77 ancient Egyptian dogs have been recorded. The breeds refer to color and character, such as Blackie, Ebony, Good Herdsman, Reliable, and Brave One.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1381.jpg",
//     price: "105",
//     id: 36,
//     breed: "Belgian Malinois",
//     name: "Peanut",

//     description:
//       "Service dogs are trained to know when they are on duty. When their harness is on, they know it's business time. When you take it off, the pups immediately become playful and energetic.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_140.jpg",
//     price: "190",
//     id: 38,
//     breed: "Belgian Tervuren",
//     name: "Shadow",

//     description:
//       "In early Christian tradition, Saint Christopher, the patron saint of travelers, is sometimes depicted with a dog’s head.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1623.jpg",
//     price: "110",
//     id: 41,
//     breed: "Bernese Mountain Dog",
//     name: "Tank",

//     description:
//       "During the Renaissance, detailed portraits of the dog as a symbol of fidelity and loyalty appeared in mythological, allegorical, and religious art throughout Europe, including works by Leonardo da Vinci, Diego Velázquez, Jan van Eyck, and Albrecht Durer.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1690.jpg",
//     price: "100",
//     id: 42,
//     breed: "Bichon Frise",
//     name: "Ollie",

//     description:
//       "The earliest European images of dogs are found in cave paintings dating back 12,000 years ago in Spain.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_1701.jpg",
//     price: "20",
//     id: 43,
//     breed: "Black and Tan Coonhound",
//     name: "Joey",

//     description:
//       "During the Renaissance, detailed portraits of the dog as a symbol of fidelity and loyalty appeared in mythological, allegorical, and religious art throughout Europe, including works by Leonardo da Vinci, Diego Velázquez, Jan van Eyck, and Albrecht Durer.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_251.jpg",
//     price: "25",
//     id: 45,
//     breed: "Bloodhound",
//     name: "Bo",

//     description:
//       "In Croatia, scientists discovered that lampposts were falling down because a chemical in the urine of male dogs was rotting the metal.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_255.jpg",
//     price: "500",
//     id: 47,
//     breed: "Bluetick Coonhound",
//     name: "Otis",

//     description:
//       "Service dogs are trained to know when they are on duty. When their harness is on, they know it's business time. When you take it off, the pups immediately become playful and energetic.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-english/n02089973_2551.jpg",
//     price: "351",
//     id: 48,
//     breed: "Boerboel",
//     name: "Hank",

//     description:
//       "Service dogs are trained to know when they are on duty. When their harness is on, they know it's business time. When you take it off, the pups immediately become playful and energetic.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1787.jpg",
//     price: "122",
//     id: 50,
//     breed: "Border Collie",
//     name: "Roscoe",

//     description:
//       "When Lord Byron was informed that his dog was not allowed to come with him to Cambridge Trinity College, he retaliated by bringing a bear instead.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1790.jpg",
//     price: "355",
//     id: 51,
//     breed: "Border Terrier",
//     name: "Jasper",

//     description:
//       "It is a myth that dogs are color blind. They can actually see in color, just not as vividly as humans. It is akin to our vision at dusk.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_180.jpg",
//     price: "164",
//     id: 53,
//     breed: "Boston Terrier",
//     name: "Brody",

//     description:
//       "'Frito Feet' is the breed of the phenomenon in which the bacteria on a dog's paws cause them to smell like corn chips. Because a pup's feet are in constant contact with the ground, they pick up tons of microorganisms in their paws. When dogs cool off by sweating through the pads of their feet, the combo of moisture and bacteria releaces a nutty, popcorn-like aroma. Basically it's dog B.O.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1824.jpg",
//     price: "268",
//     id: 54,
//     breed: "Bouvier des Flandres",
//     name: "Marley",

//     description:
//       "Baks the blind boxer has a seeing eye goose breedd Buttons. Buttons the four-year-old goose leads her pup around everywhere either by hanging onto him with her neck, or by honking to tell him which way to go.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_183.jpg",
//     price: "634",
//     id: 55,
//     breed: "Boxer",
//     name: "Bandit",

//     description:
//       "An American Animal Hospital Association poll found that 33 of dog owners admit to talking to their dogs on the phone and leaving answering machine messages for them while away.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1863.jpg",
//     price: "733",
//     id: 56,
//     breed: "Boykin Spaniel",
//     name: "Boomer",

//     description:
//       'At the end of the Beatles’ song "A Day in the Life," a high-pitched dog whistle was recorded by Paul McCartney for his sheepdog.',
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1882.jpg",
//     price: "31",
//     id: 57,
//     breed: "Bracco Italiano",
//     name: "Ziggy",
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11006.jpg",
//     price: "266",

//     description:
//       "Every dog on earth likely descended from a species knows as the Tomarctus – a creature that roamed the earth over 15 million years ago.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1912.jpg",
//     price: "734",
//     id: 58,
//     breed: "Briard",
//     name: "Tyson",
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
//     price: "133",

//     description:
//       "In 1957, Laika became the first living being in space via an earth satellite and JFK’s terrier, Charlie, fathered 4 puppies with Laika’s daughter.",
//   },
//   {
//     imageUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1918.jpg",
//     price: "217",
//     id: 59,
//     breed: "Brittany",
//     name: "Simba",
//     imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
//     price: "255",

//     description:
//       "An elderly woman was saved by her 12-pound Yorkshire Terrier, who fought off an 80- pound Akita, and survived with only 9 stitches.",
//   },
// ];
const projects = [
  {
    id: 1,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Help-Stop-Illegal-Wildlife-Trafficking.jpg",
    title: " Help Stop Illegal Wildlife Trafficking ",
    desc: "Rescue cats from being euthanized at local shelter Summary NBCR Volunteers adopt cats through online adoption sites and our PetSmart Adoption Center. The majority of",
    time: "June 2, 2022",
    summary:
      "Mickaboo Companion Bird Rescue, based in Northern California, helps birds commonly kept as indoor pets by rescuing, rehabilitating (physically and behaviorally), and re-homing them. Most of these rescued birds come to us injured, abused, or neglected, or are very ill. We usually care for about 500 birds at a time, incurring veterinary bills of $30,000-$40,000 monthly. This project helps pay for those medical expenses.",
    challenge:
      "Many pets are given up because their owners are no longer able to care for them, financially or behaviorally. We rescue birds that are surrendered to us, that shelters turn away, that are found in empty apartments and foreclosed homes and even dumpsters, or that were released into the wild completely unable to survive on their own. Most animal shelters are designed to house cats and dogs, and are unable to accept or care for the needs of domesticated birds like parrots, thus needing to surrender",
    solution:
      "Those who surrender their birds to us are assured their former pet birds will receive the care and human interaction these intelligent, social creatures deserve. We have no central facility; we place these birds in foster homes until a suitable adoptive parent can be found. We are an all-volunteer organization, so virtually all (over 95%) of the money we raise goes toward veterinary costs and medical expenses, with the remainder for education and outreach.",
    impact:
      "Our goal is to medically rehabilitate each of our 300+ birds sufficiently so that they may be placed in qualified permanent homes. Over time, we believe our education and outreach efforts will reduce the number of birds surrendered to us for various reasons.",
  },
  {
    id: 2,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Rescue-cats-from-being-euthanized-at-local-shelter.jpg",
    title: "Rescue Cats From Being Euthanized At Local Shelter",
    desc: "Rescue cats from being euthanized at local shelter Summary NBCR Volunteers adopt cats through online adoption sites and our PetSmart Adoption Center. The majority of",
    time: "May 28, 2022",
    summary:
      "The wildlife trade is a multi-billion dollar industry that threatens endangered species’ survival and human health as zoonotic diseases such as COVID-19 emerge. Cambodia is both a wildlife source and transit country, and illegal trafficking was rampant in 2001 when the Wildlife Rapid Rescue Team (WRRT) was established to crack down on the trade. To date, WRRT has rescued over 69,000 live animals, apprehended over 7,700 traders, and confiscated large quantities of animal parts and contraband.",
    challenge:
      "The illegal wildlife trade is a growing criminal enterprise that leaves once flourishing forests barren, undermines governments and threatens human health. Millions of animals are victimized by traffickers each year, sold into the illegal pet trade, killed for meat/parts or kept alive in inhumane conditions. To combat this trade requires dedicated teams with the authority, skills and knowledge to enforce laws that protect wildlife, investigate and bust traders and safely handle rescued animals.",
    solution:
      "WRRT is a mobile unit established by Wildlife Alliance (WA) and the Cambodian Government to fight wildlife crime nationwide. The team’s military police, officials from the Forestry and the Fisheries Administrations, and WA managers work in concert with an informant network and utilize tips from the public to conducts undercover investigations into trafficking networks. WRRT intercepts wildlife shipments, builds solid court cases against offenders and rescues thousands of animals every year.",
    impact:
      "The WRRT’s ongoing presence and success are effectively suppressing the wildlife trade. By enforcing the rule of law, WRRT disrupts networks that traffic international contraband such as African ivory through Cambodia, ensures offenders are prosecuted, seizes goods, and saves animals. Long-term, this project both ensures that more wild animals remain in their native habitats by deterring people from poaching and trading and helps threatened wild populations rebound by releasing rescued animals.",
  },
  {
    id: 3,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Rescue-Unwanted-and-Abandoned-Companion-Birds.jpg",
    title: "Rescue Unwanted And Abandoned Companion Birds",
    desc: "Rescue Unwanted and Abandoned Companion Birds Summary Mickaboo Companion Bird Rescue, based in Northern California, helps birds commonly kept as indoor pets by rescuing, rehabilitating",
    time: "May 25, 2022",
    summary:
      "Lucas and four of his friends, all survivors of abuse, are now rehabilitated and have the chance of a lifetime! They can fly to the US and start the next chapter of their life. They can escape the shelter right before winter. There’s nothing for them in Azerbaijan. Please help us get them to New York where they can find their perfect family.",
    challenge:
      "Without this flight, Lucas, Scooby, Lurch, Domino and Abby, will never make it out of the shelter. It is impossible to adopt them out in Azerbaijan. No one will adopt an amputee, a paraplegic, a mixed breed, and a dog that has suffered in the past. Everyone wants a puppy. The situation is dire in Azerbaijan; new dogs are being rescued daily, and winter is right around the corner. All five live in a shelter with over 400 dogs.",
    solution:
      "They can be cherished for the rest of their life. Since the start of Covid-19, dogs have been unable to fly. We have found a cargo plane operated by Turkish Airlines that flies daily from Baku, Azerbaijan to New York JFK Airport. Due to the pandemic, prices have substantially increased. The airline charges based on weight ($49 per kg), and there are costs for their kennels, vaccines, passports, and microchips. This is their ONLY way out.",
    impact:
      "No dog belongs in the shelter. Their life can be completely transformed with just one 19 hour flight. This is a life saving changing mission for five waiting souls.",
  },
];
const team = [
  {
    id: 1,
    img: "https://hopedonors.org/wp-content/uploads/2021/09/Daniel-Martin-1.webp",
    name: "Daniel Martin",
    job: "Director",
  },
  {
    id: 2,
    img: "https://hopedonors.org/wp-content/uploads/2021/09/Manpreet-Chopra.webp",
    name: "David Nelson",
    job: "Chairman of the Board",
  },
  {
    id: 3,
    img: "https://hopedonors.org/wp-content/uploads/2021/09/David-Nelson-1.webp",
    name: "Manpreet Chopra",
    job: "Financial Officer",
  },
  {
    id: 4,
    img: "https://hopedonors.org/wp-content/uploads/2021/09/Richard-Brown-1.jpg",
    name: "James Smith",
    job: "Development Officer",
  },
  {
    id: 5,
    img: "https://hopedonors.org/wp-content/uploads/2021/09/Linda-Harris.jpg",
    name: "Linda Harris",
    job: "Marketing Officer",
  },
  {
    id: 6,
    img: "https://hopedonors.org/wp-content/uploads/2021/09/James-Smith.jpeg",
    name: "Richard Brown",
    job: "Volunteer officer",
  },
];
const animalRescue = [
  {
    id: 1,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Help-Stop-Illegal-Wildlife-Trafficking.jpg",
    summary:
      "The wildlife trade is a multi-billion dollar industry that threatens endangered species’ survival and human health as zoonotic diseases such as COVID-19 emerge. Cambodia is both a wildlife source and transit country, and illegal trafficking was rampant in 2001 when the Wildlife Rapid Rescue Team (WRRT) was established to crack down on the trade. To date, WRRT has rescued over 69,000 live animals, apprehended over 7,700 traders, and confiscated large quantities of animal parts and contraband.",
    challenge:
      "The illegal wildlife trade is a growing criminal enterprise that leaves once flourishing forests barren, undermines governments and threatens human health. Millions of animals are victimized by traffickers each year, sold into the illegal pet trade, killed for meat/parts or kept alive in inhumane conditions. To combat this trade requires dedicated teams with the authority, skills and knowledge to enforce laws that protect wildlife, investigate and bust traders and safely handle rescued animals.",
    solution:
      "WRRT is a mobile unit established by Wildlife Alliance (WA) and the Cambodian Government to fight wildlife crime nationwide. The team’s military police, officials from the Forestry and the Fisheries Administrations, and WA managers work in concert with an informant network and utilize tips from the public to conducts undercover investigations into trafficking networks. WRRT intercepts wildlife shipments, builds solid court cases against offenders and rescues thousands of animals every year.",
    impact:
      "The WRRT’s ongoing presence and success are effectively suppressing the wildlife trade. By enforcing the rule of law, WRRT disrupts networks that traffic international contraband such as African ivory through Cambodia, ensures offenders are prosecuted, seizes goods, and saves animals. Long-term, this project both ensures that more wild animals remain in their native habitats by deterring people from poaching and trading and helps threatened wild populations rebound by releasing rescued animals.",
    title: "Help Stop Illegal Wildlife Trafficking",
  },
  {
    id: 2,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Rescue-cats-from-being-euthanized-at-local-shelter.jpg  ",
    summary:
      "NBCR Volunteers adopt cats through online adoption sites and our PetSmart Adoption Center. The majority of pets relinquished to Animal Control are euthanized; sometimes the same day. Strays are usually given 3-5 days to be reclaimed by their Owner. If not reclaimed, they may be placed up for adoption. However, there are only so many cages so when they are full, pets are euthanized to make room for newcomers. NBCR strives to rescue cats from being euthanized and placing them in forever homes.",
    challenge:
      "Animal Shelters are constantly overwhelmed by the sheer number of pets brought to them, resulting in 60% being euthanized. NBCR rescues cats from city shelters thus preventing their unfortunate fate. After they are physically examined, spay/neutered, tested and vaccinated, they are placed with a foster family until they are adopted. As a result of our adoption program, we have placed on average 200 – 300 cats per year into wonderful homes.",
    solution:
      "NBCR cats are not available for adoption until after they are spay/neutered. This ensures our cats do not contribute to our Pet Overpopulation Crisis and by doing so, the number of cats entering shelters due to mating will decrease. Educating the public about the importance of spay/neuter, local resources and encouraging people to adopt instead of purchase from breeders will also decrease the number of homeless pets being euthanized.",
    impact:
      "Public awareness of the plight of a shelter cat has brought awareness to the general public about the consequences of not spay/neutering your pet. We encourage people to visit their local animal shelter to witness the severity of the crisis and to see all of the wonderful pets available that will soon be euthanized due to lack of space.",
    title: "Rescue Cats From Being Euthanized At Local Shelter",
  },
  {
    id: 3,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Rescue-Unwanted-and-Abandoned-Companion-Birds.jpg",
    summary:
      "Mickaboo Companion Bird Rescue, based in Northern California, helps birds commonly kept as indoor pets by rescuing, rehabilitating (physically and behaviorally), and re-homing them. Most of these rescued birds come to us injured, abused, or neglected, or are very ill. We usually care for about 500 birds at a time, incurring veterinary bills of $30,000-$40,000 monthly. This project helps pay for those medical expenses.",
    challenge:
      "Many pets are given up because their owners are no longer able to care for them, financially or behaviorally. We rescue birds that are surrendered to us, that shelters turn away, that are found in empty apartments and foreclosed homes and even dumpsters, or that were released into the wild completely unable to survive on their own. Most animal shelters are designed to house cats and dogs, and are unable to accept or care for the needs of domesticated birds like parrots, thus needing to surrender",
    solution:
      "Those who surrender their birds to us are assured their former pet birds will receive the care and human interaction these intelligent, social creatures deserve. We have no central facility; we place these birds in foster homes until a suitable adoptive parent can be found. We are an all-volunteer organization, so virtually all (over 95%) of the money we raise goes toward veterinary costs and medical expenses, with the remainder for education and outreach.",
    impact:
      "Our goal is to medically rehabilitate each of our 300+ birds sufficiently so that they may be placed in qualified permanent homes. Over time, we believe our education and outreach efforts will reduce the number of birds surrendered to us for various reasons.",
    title: "Rescue Unwanted And Abandoned Companion Birds",
  },
  {
    id: 4,
    img: "https://hopedonors.org/wp-content/uploads/2022/06/Help-Allen-His-Friends-Fly-to-USA.jpg",
    summary:
      "Allen and 14 of his friends are SURVIVORS. They’ve been through the unimaginable. That’s in the past now, and nothing but a life of color awaits them in USA. They have a chance of a lifetime to make a getaway from the shelter. In a few short weeks, they can start the next chapter of their life. Please help them board a plane destined for Chicago on May 6, 2021, where they can be adopted into loving families. See before and after photos here, https://www.triggercares.com",
    challenge:
      "There are currently 500 dogs living in GWARP’s shelter in Azerbaijan. Less than 1% has been adopted by the local public in over 5 years. Stray dogs are treated with abuse and malice. They are shot, tortured, & even burned with acid. They have no rights in Azerbaijan. Without this flight, Allen and his friends will never have a home. No one adopts an amputee or mixed breeds. The dogs have just made it through a freezing winter, & an intense summer awaits them if they don’t board this flight.",
    solution:
      "Allen and friends can be cherished for the rest of their life. Since January 2021, a total of 46 dogs and 3 cats have arrived to USA. They have never been happier. Dogs that have sat quietly in the shelter corner, are now smiling, running, and enjoying life as seen in the update videos from their forever homes in the United States. These are desperate animals in a desperate situation. This freedom flight is their ONLY way out.",
    impact:
      "No dog belongs in the shelter. Their life can be completely transformed with a 12 hour flight. This is a life saving mission for fifteen deserving and patiently waiting souls.",
    title: "Help Allen & His Friends Fly To US",
  },
  {
    id: 5,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Help-Lucas-Friends-Fly-to-USA.jpg",
    summary:
      "Lucas and four of his friends, all survivors of abuse, are now rehabilitated and have the chance of a lifetime! They can fly to the US and start the next chapter of their life. They can escape the shelter right before winter. There’s nothing for them in Azerbaijan. Please help us get them to New York where they can find their perfect family.",
    challenge:
      "Without this flight, Lucas, Scooby, Lurch, Domino and Abby, will never make it out of the shelter. It is impossible to adopt them out in Azerbaijan. No one will adopt an amputee, a paraplegic, a mixed breed, and a dog that has suffered in the past. Everyone wants a puppy. The situation is dire in Azerbaijan; new dogs are being rescued daily, and winter is right around the corner. All five live in a shelter with over 400 dogs.",
    solution:
      "They can be cherished for the rest of their life. Since the start of Covid-19, dogs have been unable to fly. We have found a cargo plane operated by Turkish Airlines that flies daily from Baku, Azerbaijan to New York JFK Airport. Due to the pandemic, prices have substantially increased. The airline charges based on weight ($49 per kg), and there are costs for their kennels, vaccines, passports, and microchips. This is their ONLY way out.",
    impact:
      "No dog belongs in the shelter. Their life can be completely transformed with just one 19 hour flight. This is a life saving changing mission for five waiting souls.",
    title: "Help Lucas & Friends Fly To US",
  },
  {
    id: 6,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Rescue-Orphaned-Injured-Animals-in-the-Amazon.jpg",
    summary:
      "Help care for 500 wild animals rescued from illegal trafficking in Bolivia. CIWY’s three wildlife sanctuaries provide veterinary care, rehabilitation, and whenever possible, reintroduction to the wild. // Sumario: Ayudar a cuidar a 500 animales salvajes rescatados del trafico ilegal en Bolivia. Los tres santuarios de vida silvestre de CIWY brindan atencion veterinaria, rehabilitacion y, cuando sea posible, reintroduccion a la naturaleza.",
    challenge:
      "Far too often, the magnificent animals of the Amazon fall victim to hunting and illegal trafficking. When CIWY rescues these animals, they are usually injured, malnourished, and lack the skills to survive in the wild. // Reto: Con demasiada frecuencia, los magnificos animales del Amazon son victimas de la caza y el trafico ilegal. Cuando CIWY rescata a estos animales, generalmente estan lesionados, desnutridos y carecen de las habilidades para sobrevivir en la naturaleza.",
    solution:
      "CIWY rescues hundreds of animals each year. The sanctuaries provide veterinary care, shelter, and love. Staff and volunteers work tirelessly to rehabilitate the animals and, whenever possible, reintroduce them to the wild. // Solucion: CIWY rescata cientos de animales cada ano. Los santuarios brindan atencion veterinaria, refugio y amor. El personal y los voluntarios trabajan incansablemente para rehabilitar a los animales y, siempre que sea posible, reintroducirlos en la naturaleza.",
    impact:
      "CIWY helps preserve the biodiversity of Amazonian fauna by rescuing a wide array of animals, including endangered species. CIWY also educates the public to respect wildlife and the environment. // Impacto a Largo Plazo: CIWY ayuda a preservar la biodiversidad de la fauna amazonica al rescatar una gran variedad de animales, incluidas las especies en peligro de extincion. CIWY tambien educa al publico a respetar la vida silvestre y el medio ambiente.",
    title: "Rescue Orphaned & Injured Animals In The Amazo",
  },
  {
    id: 7,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/End-animal-suffering-in-KCMO-urban-core-300x224.jpg",
    summary:
      "COH outreach ends suffering and overpopulation of animals through support and education to pet owners, rescue of abused and neglected animals, and medical care, foster and adoption of those animals to loving permanent homes. Outreach workers search daily for animals in the city’s most high risk neighborhoods, providing food, water, shelter, assistance with medical care and spay and neutering. In one year, COH provides support to over 1600 households, assisting nearly 3000 animals.",
    challenge:
      "Thousands of animals are euthanized in areas shelters every year as a result of unwanted litters and pets who are abandoned by owners who can’t provide for them. In an environment where dogs are chained in back yards for the purpose of “guarding” and spay and neutering is not understood, overpopulation and disease runs rampant. Outreach benefits the whole community by reducing overpopulation and preventing or ending needless suffering of animals through education and support to their owners.",
    solution:
      "Traditional and public means to respond to animals in need has only the capacity to respond to the most severe situations. COH fills the gap by searching for animals in high risk neighborhoods whose families need support to provide adequate care, and education to become responsible pet owners. Through outreach, COH provides animals with food, clean water, shelter, protection against fly bites and disease, and assists with spay and neutering, emergency and other medical care.",
    impact:
      "Over 1600 households will receive support to meet basic needs of their pets and over 3000 animals will be relieved of suffering, abuse, and neglect. Pet overpopulation will be reduced through the prevention of hundreds of unwanted litters. And the the long term impact for the community is a change in attitude and understanding about the humane care and treatment of animals.",
    title: "End Animal Suffering In KCMO Urban Cor",
  },
  {
    id: 8,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Franzisca-Vet-Clinic-Help-us-Help-Them-300x217.jpg",
    summary:
      "Franzisca Veterinary Clinic is a project of Animal Rescue Sofia. It is the only chance for treatment and survival of injured or ill stray dogs and cats from the region of Sofia in Bulgaria. The clinic is a rescue center where qualified and experienced vets save the lives of tens of sick or suffering stray animals every day. Yearly more than 1000 dogs and cats receive treatment for various injuries, chronic or infectious diseases, as well as common or highly-specialized surgery conditions.",
    challenge:
      "There are about 30000 stray dogs on the streets of Bulgaria, with around 3500 of them in the capital city of the country – Sofia. Official statistics about the number of stray cats in the country does not even exist. Every day hundreds of stray dogs and cats become victims of traffic incidents, poisoning, shooting, drowning and diseases. Little is done on the national level for either the treatment of the injured and the sick, or the humane approach in the decrease of the stray dog population.",
    solution:
      "Franzisca Vet Clinic is one of the very few initiatives that give a real chance for the injured, ill or suffering stray dogs and cats in the region of Sofia. The clinic works as a rescue center where our vets save the lives of tens of damaged or sick stray animals every day. We treat all sorts of traumas, inflicted by people or vehicles, chronic and infectious diseases, and do a variety of surgeries, thus helping more than 1000 animals a year to fully recover from their traumas and illnesses.",
    impact:
      "Through qualified veterinary treatment, stray animals that find help in Franzisca Vet Clinic will be relieved from their pain and suffering. This also prepares the ground for receiving any other developmental, behavioral or socialization support that they might need, which eventually improves their chances for adoption and life-long life off the streets. This, combined with obligatory castration of all incoming patients, contributes to the humane control and decrease of stray population.",
    title: "Franzisca Vet Clinic - Help Us Help The",
  },
  {
    id: 9,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Orangutan-Rescue-On-the-frontline-in-Sumatra.jpg",
    summary:
      "Sumatran orangutans are Critically Endangered, with only around 14,600 left in the wild. The greatest threat to their survival is the loss of their rain forest home – forest destruction for farmlands in Sumatra is happening on a massive scale. As a result, orangutans often become stranded in patches of forest surrounded by plantations. They are at risk of starvation, hunting and poaching. We rescue orangutans and work with farmers to help them protect their crops without harming wildlife.",
    challenge:
      "When orangutans get stranded in farmlands, they may raid the crops to find enough food to survive. This is bad news for both sides. For the farmers, raided or damaged crops can have a real impact on income. But for orangutans, the outcome can be catastrophic. They risk starvation and are exposed to higher levels of hunting and poaching. As a critically endangered species, these are risks the Sumatran orangutan could well do without.",
    solution:
      "The Orangutan Information Centre (OIC), our partners in Sumatra, work with farmers and plantation workers, providing training in various methods of Human-Orangutan Conflict prevention such as using noise to scare the orangutans off. The team is also regularly involved in rescuing orangutans being illegally kept as pets, or relocating orangutans found stranded in farmlands back into the forest.",
    impact:
      "As well as rescuing orangutans in danger we support the government in their law enforcement efforts for wildlife and ecosystem conservation. Government officials always accompany our team on each rescue or confiscation mission for illegally held captive orangutans, so there is close collaboration and capacity building actively in place. Our hope and intention is that we will be able to support government and communities alike to reduce encroachment of farmlands and protect the remaining forests.",
    title: "Orangutan Rescue: On The Frontline In Sumatr",
  },
  {
    id: 10,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Help-Care-for-Rescued-Animals-in-Cambodia-768x512.jpg",
    summary:
      "At Phnom Tamao Wildlife Rescue Center animals rescued from Cambodia’s illegal wildlife trade get the care they need to recover. Most are released into protected habitat after rehabilitation. Animals unsuitable for release are provided a permanent home. Captive-breeding programs for rare species enable animals to naturally bond and mate. New generations are released to bolster wild populations or to reintroduce species at sites where they were wiped out, such as the Angkor Temple Complex.",
    challenge:
      "Animals rescued from Cambodia’s illegal wildlife trade that have suffered injuries need specialized care to survive and recover – and some require expensive, lifelong care. Phnom Tamao is home to more than 1,200 rescued animals from over 100 species. Every month, newly rescued animals arrive and rehabilitated wildlife is released. No animal in need is ever turned away, including those such as Chhouk, an elephant who lost his foot to a snare as a calf and now walks with a prosthetic shoe.",
    solution:
      "This project increases survival rates for rescued animals through proper medical attention and quality care. Under the care of the Centre’s dedicated veterinarians and keepers, animals thrive on natural diets in large enclosures within a 6,000 acre forest. Suitable animals are released in protected areas. Individuals that require lifelong care are given a permanent home. Captive-breeding programs for threatened species ensure their offspring can be reintroduced to found new wild populations.",
    impact:
      "Your donations ensure rescued Cambodian wildlife is properly rehabilitated and either provided permanent sanctuary or released into well-protected habitat. Without the Centre, these animals would not survive. Released animals support the long-term recovery of wild populations. The Centre is visited by ~300,000 Cambodian visitors annually, fostering appreciation for their native fauna and demonstrating how wildlife should be treated humanely, in contrast with the cruelty of local zoos.",
    title: "Help Care For Rescued Animals In Cambodia",
  },
];
const animalShelters = [
  {
    id: 1,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/No-Kill-Sanctuary-for-Abused-Special-Needs-Cats-300x269.jpg",
    summary:
      "Our cage-less sanctuary provides abandoned, abused, homeless, and special need animals with the love, shelter, and medical attention that they desperately need. Since opening our doors in 2001, we have spearheaded the veterinary care, adoption, and placement of over 15,000 animals; partnered with 40 animal control agencies and high-kill animal shelters, lowering regional euthanasia rates by up to 90%; and facilitated millions of wet kisses. Sanctuary occupancy ranges from 30 to 50 residents.",
    challenge:
      "Every year in the US, over 6 million animals are surrendered to shelters; over 900,000 animals are euthanized. Thousands more are illegally released, abused, and forced to live under inhumane conditions. This national crisis requires consistent and unstinting attention, for, as Gandhi said, “the greatness of a nation and its moral progress can be judged by the way its animals are treated.” This project provides direct daily support and care of mistreated, abandoned, and special needs animals.",
    solution:
      "Our sanctuary currently provides care for approximately 30 permanent residents and has space to accommodate more. Through our partnerships with over 140 animal welfare organizations, we help find or provide transition housing for adoptable animals; work with local area shelters to take in special need cases that come into the shelter; provide emergency medical care and recovery treatment for animals transitioning from abuse, abandonment, or unsafe living conditions.",
    impact:
      "The long term impact of this project is to eliminate animal euthanasia. While we are regional – helping animals in MD, DC, VA – we serve animals from DE, PA, WV, Puerto Rico, Kuwait, and beyond and are part of national and international no-kill movement. In this respect, sick or special needs animals that come to the Rude Ranch sanctuary but are not adopted out are able to get sustained medical attention and to live out their lives in a loving and safe environment.",
    title: "No-Kill Sanctuary For Abused & Special Needs Cats.",
  },
  {
    id: 2,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/HELP-ALLEVIATE-MISERY-FOR-ANIMALS-IN-CAPE-TOWN-300x200.jpg",
    summary:
      "Every year, tens of thousands of unwanted animals are born into a life of misery, suffering, abuse and neglect in the impoverished communities of Cape Town. Our Project seeks to address this problem in Capricorn and surrounding settlements, home to +-25 000 people and an estimated +12 000 companion animals. Our objective is to sterilise 200 animals a month over a six month period, and provide primary health care (vaccination, worm and flea treatment, and in need, mange treatment).",
    challenge:
      "Our Project will address the massive animal overpopulation problem in Capricorn and surrounding settlements and provide primary health care. We already do service these areas, but with limited funding, cannot tackle the problem effectively and strive to reduce overpopulation and the resultant misery, abuse and neglect suffered by thousands of unwanted and untreated animals. Daily, we are faced with animals in a pitiful, emaciated condition; many have mange, are worm infested and unsterilised.",
    solution:
      "Our core aim will be to radically reduce the unwanted births of puppies and kittens in Capricorn, through sterilisation, and ensure that the residents have happy, healthy pets. By reducing the numbers of unwanted animals, the misery, suffering, abuse and neglect will be greatly lessened. Also, there will be far fewer stray animals, many of whom are starving and ill, wandering around the streets, spreading disease and creating a problem.",
    impact:
      "The impact of our sterilisation drive (1 200 animals to be sterilised), will be realized when the number of animals being born is greatly reduced and consequently less suffering, abuse and neglect encountered . Providing primary care for companion pets will result in healthier animals and therefore healthier communities, with a significant reduction in zoonotic diseases (the spread of diseases from animals to humans). The problem of stray animals will also be mitigated through sterilisation.",
    title: "HELP ALLEVIATE MISERY FOR ANIMALS IN CAPE TO.",
  },
  {
    id: 3,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Homeless-Animals-Hospital-in-Romania.jpg",
    summary:
      "The Homeless Animals Hospital is a new project launched by Romania Animal Rescue to provide veterinary help for homeless animals as well as for pets of the impoverished people in Romania. Homeless Animals Hospital project was awarded “Project of the Month” by GlobalGiving following a visit by their representative in February 2015.",
    challenge:
      "Thousands of homeless animals, being looked after by caretakers or shelters, and those owned by impoverished good people, are in need of medical care. Animals get hit by cars, need vaccines to prevent dreaded diseases, need treatment for infected wounds, amputations. RAR has taken on this project so that animals can live a good and decent life.",
    solution:
      "Romania Animal Rescue will provide veterinary care for these animals that would otherwise receive no help and suffer. We will be increasing our staff to take on this extra work as well, needing more vet techs and vets to provide additional veterinary care.",
    impact:
      "Animals will not suffer…they will receive the medications and help they need to live a decent and pain-free life as much as possible.",
    title: "Homeless Animals Hospital In Roman.",
  },
];
const animalSpay = [
  {
    id: 1,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Spay-and-Neuters-on-Dogs-Cats-in-Bucharest.jpg",
    summary:
      "Animal Spay and Neuter International has a team of vets that travel around the world spaying and neutering peoples pets. This is funded by donations and the operations are carried out free of charge. This in turn reduces the amount of stray dogs on the streets. Currently focusing on Romania ASNI will carry out the sterilisations at the Center of Hope Animal Hospital near Bucharest in Romania, which was built and is run by Romania Animal Rescue ASNI’s sister charity.",
    challenge:
      "Currently there are many stray dogs and cats on the streets in Piteasca and the villages around Bucharest. They are at risk of causing and or being involved in car accidents, leaving them on the streets with broken bones. Puppies are often left to their own devices on the streets and fields due to the owners not having the resources to care for them or spay the mother of the pups. The adult females are prone to illnesses such as tumours or pyometra of the uterus.",
    solution:
      "ASNI intends to sterilise dogs and cats that are owned by impoverished families reducing the amount of puppies and kittens born, and in turn avoiding litters being discarded in the local fields/streets. This will obviously prevent further unwanted births for the adult females and prevent pyometra and further complications such as mammary or uterine tumours.",
    impact:
      "UPDATE 10.12.20 : The project is being expanded due to the generosity of the public so we can help more animals than we initially hoped for. The project will spay and neuter as many animals as funding allows limiting the amount of animals an owner has to care for, and the likelihood of puppies being discarded. In turn this will reduce the amount of animals on the streets as strays.",
    title: "Spay And Neuters On Dogs-Cats In Bucharest",
  },
  {
    id: 2,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/SAVECats-A-MD-No-Kill-Community-Cat-Program-300x200.jpg",
    summary:
      "SAVECats provides free spay/neuter surgery, rabies vaccination, and ear tipping to community/feral/homeless cats in Anne Arundel County, MD. The goal of this project is to increase our geographic scope and level of veterinary assistance to low-income parts in Maryland and adjoining states. This way, we ensure full and proper vet care for the cats that come to us, help decreasing cat over-population and increasing cat quality of life. With your help, we can save all cats.",
    challenge:
      "Every day, across Maryland and the world, animals are abandoned, left homeless, or born feral. Animal overpopulation can increase the spread of zoonotic disease, frustrate social networks, and cause unnecessary euthanasia at animal shelters. In 2019, in Anne Arundel County alone, there were approximately 54,598 companion outdoor cats and 81,896 feral/community cats. We need to have an aggressive, proactive program to address this overpopulation problem.",
    solution:
      "SAVECats is the right program to solve the overpopulation problem. SAVECats, a program operated and funded through Rude Ranch Animal Rescue and its clinic, Spay Spa & Neuter Nook, has provided – and continues to provide – homeless companion and feral cats the spay/neuter surgeries, vaccinations, medical care, and sanctuary they desperately need – and promotes community cat awareness and advocacy.",
    impact:
      "In 2017, Anne Arundel County Animal Care and Control (AACACC) impounded and euthanized 503 feral/community cats. In 2019, AACACC impounded and euthanized 223 feral/community cats. This equates to a 55% decrease in recorded euthanasia numbers since SAVECats began — a direct result of SAVECats and a strong indication of its efficacy. We are confident that SAVECats can help adjacent communities reduce the overpopulation problem, increase cat quality of life, and promote a no-kill animal culture.",
    title: "SAVECats A MD No-Kill Community Cat Program",
  },
  {
    id: 3,
    img: "https://hopedonors.org/wp-content/uploads/2022/02/ph_7722_25859.jpg",
    summary:
      "Ongoing spay/neuter of street and owned dogs in Romania to humanely decrease the population of unwanted street, stray and abandoned dogs. Free sterilization, veterinary treatments, and veterinary training provided.",
    challenge:
      "There are thousands of abandoned dogs. The animals suffer from starvation, abuse, being hit by cars, and disease. The people suffer from the animals that roam in packs. Each unsterilized female dog and her offspring can potentially produce 67,000 offspring in 6 years (according to Dogs and Death Row, PETA, and numerous online resources). Humanely spaying/neutering keeps the animals from suffering and from running in packs or being aggressive.",
    solution:
      "This will decrease the suffering of animals born unwanted, abandonment, and in shelters. It will increase the value of the sterilized dog often and allow for more adoptions.People often abandon pregnant females, in heat females, and puppies. Spaying will stop this. Intact male dogs roam and impregnate the females. This will stop this. Neutering males also may decrease aggression.",
    impact:
      "The long term effects are that no more puppies will be born to suffer on the streets of Romania from these 3000 sterilized dogs. Roaming packs of dogs in communities will decrease. Fewer dogs/pups go to horrible shelters. Fewer abandonment of unwanted puppies, in heat females, and pregnant females. Males often have decreased aggression after sterilization. Dogs will not suffer from pyometra (https://en.wikipedia.org/wiki/Pyometra) mammary cancer, testicular cancer, or sticker tumors.",
    title: "Spay And Neuter For 3000 Dogs In Romania",
  },
];
const animalCare = [
  {
    id: 1,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Help-Low-Income-MD-VA-DC-Area-Get-Veterinary-Care.jpg",
    summary:
      "Throughout the United States, animals are in desperate need of medical care. This project provides free spay/neuter, vaccinations, and veterinary services to pets belonging to low-income and no-income individuals and families in impoverished areas of Maryland, Virginia, and DC metro area. We aim to help 50 owned dogs and 500 owned cats every year for 10 years. The Maryland Department of Agriculture Spay and Neuter Grant Program provided seed support for this project in 2019, 2020, and 2022.",
    challenge:
      "In Maryland, in Anne Arundel County (AAC) alone, five zip codes represent the highest surrender numbers for both dogs and cats to the county shelter. Not coincidentally, these zip codes are the most economically challenged areas in AAC. This problem exists in many surrounding counties and states, including DC and VA, where surrendered animals are usually not fixed and not vaccinated, and, unfortunately, often euthanized due to lack of funds or adoption options.",
    solution:
      "Working with our rescue partners and transportation volunteers, we will perform targeted spay/neuter, vaccinations, and veterinary services to these animals that would otherwise go without care. We will provide a much needed social service safety net to under-resourced, under-employed, and unemployed individuals and improve the health and quality of life of animals in low income communities, especially in light of the stresses of COVID.",
    impact:
      "Working with our rescue partners and transportation volunteers, we will perform targeted spay/neuter, vaccinations, and veterinary services to these animals that would otherwise go without care. We will provide a much needed social service safety net to under-resourced, under-employed, and unemployed individuals and improve the health and quality of life of animals in low income communities, especially in light of the stresses of COVID.",
    title: "Help Low Income MD-VA-DC Area Get Veterinary Car",
  },
  {
    id: 2,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Help-Suffering-Animals-Get-Medical-Treatment.jpg",
    summary:
      "The faster we can get to an animal in peril, the faster it can receive medical treatment. We get calls every day for animals in desperate situations. We do all we can, but with one vehicle, and limited spare in our intensive care unit, it can become days. A dedicated rescue vehicle is needed, as well as an upgrade to our intensive care and isolation units. We need to rescue animals quicker and increase our capacity to handle more animals due to the rapid increase in infectious diseases.",
    challenge:
      "At Lanta Animal Welfare, we receive many requests every day about animals in critical situations. Our current ‘1 vehicle’ severely limits our ability to help all the animals in need as does our growing service area. With the increase in infectious diseases, the calls are increasing. Our delayed response to animals, both to pick them up, and put them in the intensive care or isolation unit, means many die in terrible pain or suffer for days waiting for treatment.",
    solution:
      "A dedicated rescue ambulance and an upgraded Intensive Care and Isolation Unit will ensure that the suffering animals get the treatment they deserve. Our medical team will be able to quickly respond to the animal’s needs with immediate diagnosis and life-saving surgery on the spot. Our clinic will be able to treat more diseased animals. More lives will be saved, diseased animals can be isolated while they heal, and less animals will suffer while waiting for medical help.",
    impact:
      "Lanta Animal Welfare, with a dedicated equipped ambulance, and an improved clinic able to handle diseased animals, will be able to meet the animal rescue needs of the growing local community, what is now expanding to the mainland and surrounding islands. The locals will be more confident in our ability to relieve the pain and suffering of animals and turn to us when animals are in peril.",
    title: "Help Suffering Animals Get Medical Treatmen",
  },
  {
    id: 3,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Care-for-AWAREs-Ambassador-Animals.jpg",
    summary:
      "Atlanta Wild Animal Rescue Effort (AWARE) treats over 1,300 injured or orphaned wild animals yearly. The majority are able to be rehabilitated & returned to the wild. However, a small percentage have sustained severe injuries or have lost their fear of humans & cannot be released. Some of these animals become educational Ambassador Animals and help AWARE engage the public in lessons on how to peacefully co-exist with our wild neighbors. This project supports the care of our Ambassador Animals",
    challenge:
      "While most animals under AWARE’s care are able to be released to the wild following rehabilitation, a small percentage become permanent residents at the Center and are used as educational Ambassador Animals in our mission to educate the public on how to peacefully co-exist with our wild neighbors. Care for an Ambassador Animal can top $5,000 each year, depending on the species.",
    solution:
      "Funds will provide food, medical care, enclosure upgrades, and enrichment activities to keep our Ambassador Animals happy and healthy. Each Ambassador spends hours each week with volunteers dedicated to helping them thrive in captivity. Our Ambassadors travel the region to help illustrate the effects humans can have on wildlife when they are careless. Each Ambassador has its own distinctive personality, & each helps to deliver a different message on how to safeguard our wild neighbors.",
    impact:
      "Ambassadors’ participation in our educational programs allows community members to get an up close view of native Georgia wildlife that they may have only seen in books. This experience, combined with our message on how to peacefully co-exist with wildlife, helps the public form a personal commitment to preserving natural habitat. Our hope is that the experiences with our Ambassadors will result in a public dedicated to safe-guarding natural resources and caring for its inhabitants.",
    title: "Care For AWARE's Ambassador Animal",
  },
  {
    id: 4,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Food-for-Romanian-Animals.jpg",
    summary:
      "22 pounds of food costs between $6 and $7, and can feed 20 – 30 animals per day, depending on their size and season of the year (i.e. during freezing winter weather more food is needed). There are an estimated 2.5 millions stray dogs in Romania on the streets and in poor shelters, suffering from starvation,abandonment and neglect Romania Animal Rescue’s help includes spay/neuter, education,veterinary care, and food. We intend to bring that food source to them, with your valuable help.",
    challenge:
      "Under Communism, Romanian citizens were forced to relocate into cities to work in factories. Dogs were abandoned on the streets by those who could not house them in city apartments, and have been repopulating for the past 50 years. While Romania Animal Rescue has our massive spay/neuter program for dogs so that less puppies will be born to suffer, we feel obligated to help feed those who are already living on the streets, in shelters, and who are under guardianship of impoverished citizens.",
    solution:
      "Dogs on the streets will no longer need to eat trash or bones, and the caretakers of the strays and impoverished guardians will have a means to feed their beloved animals and not watch them suffer or die of starvation. Shelters will have more funds to update and repair their infrastructures if we can alleviate some of their food costs.",
    impact:
      "Countless people will benefit from this help……children as well as adults will no longer have to witness starving animals on a regular basis. Shelters will not have their animals suffer from starvation. This, combined with our spay/neuter program, will alleviate the suffering of thousands and potentially millions of animals who were born in the wrong place at the wrong time.",
    title: "Food For Romanian Animal",
  },
  {
    id: 5,
    img: "https://hopedonors.org/wp-content/uploads/2022/04/Provide-Vet-Care-to-Abandoned-Animals-300x225.jpg",
    summary:
      "This project, carried out by East Mississippi Animal Rescue, will target pet overpopulation and the heartworm epidemic in Mississippi by providing veterinary care, including heartworm treatment and spay/neuter surgeries, to abandoned animals in the East Central region of the state.",
    challenge:
      "More than 73,000 animals are euthanized each year in the state of Mississippi. Although we, along with other rescue groups in the state, are working hard to lower this number, pet overpopulation and abandonment is a growing problem. In addition to high euthanasia rates, Mississippi also has the highest rates nationwide of heartworm disease- a potentially fatal condition that is costly to treat, but can be prevented.",
    solution:
      "Through this project, we aim to provide spay/neuter surgeries to abandoned animals prior to adoption. By advocating for and enforcing spay/neuter surgeries, we target the pet overpopulation problem and in turn, hope to decrease the number of animals euthanized in Mississippi each year. This project will also allow us to provide treatment for animals diagnosed with heartworm disease.",
    impact:
      "We will provide, promote, and enforce spay/neuter surgeries for all adoptions through our organization, which will impact the high euthanasia and pet overpopulation rates in Mississippi. We will provide treatment for animals diagnosed with heartworms, allowing them to live longer lives free from a serious, potentially fatal disease.",
    title: "Provide Vet Care To Abandoned Animal",
  },
  {
    id: 6,
    img: "https://hopedonors.org/wp-content/uploads/2022/02/ph_8925_74528.jpg",
    summary:
      "APOPO is a global non-profit with Belgian roots that trains African giant pouched rats (nicknamed HeroRATs) to detect landmines or tuberculosis using their extraordinary sense of smell. APOPO’s scent detection technology has a massive potential to relieve human suffering and promote development when used in TB- and landmine-response, as well as in currently unexplored fields. APOPO has programs in Tanzania, Ethiopia, Mozambique, Angola, Cambodia and Zimbabwe.",
    challenge:
      "Landmines injure or kill innocent civilians every day and pose a structural barrier to development, long after war ends. Trained HeroRATs can quickly and accurately find landmines, significantly speeding up clearing minefields. Meanwhile of the 10 million new cases of tuberculosis (TB) yearly, 3 million people remain undiagnosed. APOPO’s HeroRATs quickly sniff out TB in human sputum samples, helping to find more TB-positive patients so partner clinics can get them on life-saving treatment.",
    solution:
      "Detection rats offer an efficient and accurate alternative to combat global humanitarian challenges. APOPO uses a readily available resource, and involves and employs local communities in the solution – thereby helping to initiate development and create positive social change. Our TB detection rats are at least as accurate as conventional routine microscopy, but up to 20 times faster. Our Mine detection rats can search 200m2 in 20 mins, with a metal detector this could take up to 4 days.",
    impact:
      "By creating local employment and encouraging development, APOPO provides a cost-effective solution to global humanitarian challenges. The work of our trained rats reduces landmine casualties, and enables communities to utilize their land for agricultural purposes or infrastructure development. Also, fast, effective TB diagnosis means patients can access treatment sooner, reducing the spread of the deadly virus and limiting the impact on the patient’s family and the wider community.",
    title: "Support APOPO's Rats In Their Life-Saving Mission",
  },
  {
    id: 7,
    img: "https://hopedonors.org/wp-content/uploads/2022/02/ph_10336_164076.jpg",
    summary:
      "Your donation will help a pet that belongs to a homeless person in the U.S., and Canada. We provide emergency veterinary care and pet food to the hundreds of thousands of pets that are companions to the homeless.",
    challenge:
      "There are thousands of homeless dogs living on the streets of Dharamsala, many of them sick, injured, or starving. Dharamsala Animal Rescue (DAR) works to implement a humane prevention program called ABC (animal birth control, sterilization and vaccination) along with animal rescue and adoption programs. The lack of government support for this issue, the amount of dogs, and rabies killing humans (approx 20k per year) creates the human/street dog conflict that exists today.",
    solution:
      "Dharamsala Animal Rescue’s mission is to end the human/street dog conflict by creating a humane and sustainable environment for animals with direct benefits to the people of Dharamsala, India. We provide several key programs to achieve our goals: spay/neuter, rabies vaccination, rescue and adoption, and community education for rabies safety and compassion. Dharamsala Animal Rescue has been running since 2009. Since that time, we have helped more than 17,500 animals.",
    impact:
      "Our vision: We strive to create a community where the people realize that the stray animal population can be managed with compassion and education. With mass sterilization and rabies vaccination programs we can create a healthy sustainable population of dogs. Through education and community interaction, we can teach people how to be kind to street dogs even they are afraid of them, eradicate rabies, and increase adoptions.",
    title: "Help Street Dogs In Dharamsala And Save Live",
  },
  {
    id: 8,
    img: "https://hopedonors.org/wp-content/uploads/2022/02/Veterinary-Care-for-Pets-of-the-Homeless.webp",
    summary:
      "Your donation will help a pet that belongs to a homeless person in the U.S., and Canada. We provide emergency veterinary care and pet food to the hundreds of thousands of pets that are companions to the homeless.",
    challenge:
      "Each year, 3.5 million experience homelessness in America according to the National Coalition for the Homeless. We estimate that 10-25% of homeless have pets, many are service animals The need for veterinary care is at an all-time high when a pet is injured or ill.",
    solution:
      "Our organization is important to the homeless people that need veterinary care for their companion pets. It is about the people who need help for their ill or injured pets. In some cases, the homeless survive with the daily responsibility of pet guardianship. There is scientific evidence that shows animals are good for us. From depression and post-traumatic stress disorder to heart health and autism, the human-animal bond has a powerful, measurable impact on people’s lives.",
    impact:
      "Everyday we receive calls to end the pain and suffering of pets that belong to the homeless. One pet at a time- we strive to reunite healthy, pain free pets back to their homeless guardians. In doing so we are also keeping communities safe from diseases. We are keeping the bond of animal/human love alive with your donation.",
    title: "Emergency Veterinary Care For Pets Of The Homeles",
  },
];
const news = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80",
    summary:
      "Your donation will help a pet that belongs to a homeless person in the U.S., and Canada. We provide emergency veterinary care and pet food to the hundreds of thousands of pets that are companions to the homeless.",
    challenge:
      "Each year, 3.5 million experience homelessness in America according to the National Coalition for the Homeless. We estimate that 10-25% of homeless have pets, many are service animals The need for veterinary care is at an all-time high when a pet is injured or ill.",
    solution:
      "Our organization is important to the homeless people that need veterinary care for their companion pets. It is about the people who need help for their ill or injured pets. In some cases, the homeless survive with the daily responsibility of pet guardianship. There is scientific evidence that shows animals are good for us. From depression and post-traumatic stress disorder to heart health and autism, the human-animal bond has a powerful, measurable impact on people’s lives.",
    impact:
      "Everyday we receive calls to end the pain and suffering of pets that belong to the homeless. One pet at a time- we strive to reunite healthy, pain free pets back to their homeless guardians. In doing so we are also keeping communities safe from diseases. We are keeping the bond of animal/human love alive with your donation.",
    title: "Rescue Sick & Injured Street Animals In India",
  },
];
app.use(express.static(path.join(__dirname + "/public")));
const PORT = process.env.PORT || 5000;

app.get("/projects", (req, res) => {
  res.status(200).json(projects);
});

// app.get("/v1/dogs", (req, res) => {
//   res.status(200).json(dogs);
// });
app.get("/team", (req, res) => {
  res.status(200).json(team);
});
app.get("/rescue", (req, res) => {
  res.status(200).json(animalRescue);
});
app.get("/shelters", (req, res) => {
  res.status(200).json(animalShelters);
});
app.get("/spay", (req, res) => {
  res.status(200).json(animalSpay);
});
app.get("/care", (req, res) => {
  res.status(200).json(animalCare);
});
app.get("/news", (req, res) => {
  res.status(200).json(news);
});
app.listen(PORT);
