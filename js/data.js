// fetch('../json/contry.json')
//     .then(result => result.json())
//     .then(console.log)

//sementara semuanya hard coded dulu aja, fetch jsonnya harus dri server

const countryList = [
    'Germany',
    'Indonesia',
    'China',
    'America',
    'Australia',
    'Brazil',
    'England',
    'Russia',
    'India',
]

const countryData = [
    {
        "id" : "ID",
        "name" : "Indonesia",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "A country with thousands wild island to explore!"
    },
    {
        "id" : "DE",
        "name" : "Germany",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "Country with a lot of to explore!"
    },
    {
        "id" : "CN",
        "name" : "China",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "The largest population country has tons to explore!"
    },
    {
        "id" : "US",
        "name" : "America",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "The world's third largest country in size and nearly the third largest in terms of population!"
    },
    {
        "id" : "AU",
        "name" : "Australia",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "Australia is the sixth biggest country in the world by land area, and is part of the Oceanic and Australasian regions!"
    },
    {
        "id" : "BR",
        "name" : "Brazil",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "Brazil is the world's fifth largest country. The country has about 209 million people!"
    },
    {
        "id" : "GB",
        "name" : "England",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "England is a country in Europe. It is a country with over sixty counties in it!"
    },
    {
        "id" : "RU",
        "name" : "Russia",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "Russia is a country that is in Eastern Europe and in North Asia. It is the largest country in the world by land area"
    },
    {
        "id" : "IN",
        "name" : "India",
        "fill" : am4core.color("#F05C5C"),
        "desc" : "As the second-most populous country, India has tons of beauty and culture to experience!"
    },
];

const place = [
    {
        "country" : "Indonesia",
        "place" : [
            {
                "name" : "Bali Island",
                "desc" : "A Heavenly island everybody could dream of!",
                "img" : "place_bali.jpg"
            },
            {
                "name" : "Thousand Island",
                "desc" : "Thousand island located near Jakarta, as it's name, it has thousand small islands for thousand journey!",
                "img" : "place_pulauseribu.jpg"
            },
            {
                "name" : "Borobudur Temple",
                "desc" : "Located on Yogyakarta, Central Java, Borobudur  is a 9th-century Mahayana Buddhist temple in Magelang Regency, not far from the town of Muntilan",
                "img" : "place_borobudur.jpg",
            },
            {
                "name" : "Raja Ampat",
                "desc" : "With one of the liveliest underwater scenes on the planet, this world-famous tropical paradise is home to over 530 species of coral, 700 species of mollusk, and 1,300 types of fish.",
                "img" : "place_rajaampat.jpg",
            },
            {
                "name" : "Mount Bromo",
                "desc" : "This volcano, often surrounded by smoke and a multi-colored sky, has become one of the most iconic sights from Indonesia. ",
                "img" : "place_bromo.jpg",
            }
        ]
    },
    {
        "country" : "Germany",
        "place" : [
            {
                "name" : "Berlin's Brandenburg Gate",
                "desc" : "Modeled on the Acropolis in Athens and built for King Frederick William II in 1791, the monumental sandstone Brandenburg Gate in Berlin's Mitte district was the city's first Neoclassical structure",
                "img" : "place_brandenburg.jpg"
            },
            {
                "name" : "Cologne Cathedral",
                "desc" : "located on the banks of the Rhine and is undoubtedly Cologne's most impressive landmark. ",
                "img" : "place_cologne.jpg"
            },
            {
                "name" : "Miniatur Wunderland",
                "desc" : "In the heart of the historic Port of Hamburg, the magnificent Miniatur Wunderland, the world's largest model railway, is an attraction that appeals equally to young and old alike.",
                "img" : "place_port-of-hamburg.jpg"
            },
            {
                "name" : "Berlin's Museum Island",
                "desc" : "Berlin's world-famous Museumsinsel, or Museum Island, lies between the River Spree and the Kupfergraben - a 400-meter-long canal off the river - and includes many of the city's oldest and most important museums.",
                "img" : "place_museum-island-berlin.jpg"
            },
            {
                "name" : "Bamberg and the Bürgerstadt",
                "desc" : "Located in the valley of the Regnitz, where the river divides into two arms, Bamberg, the old imperial city and the most important town in Upper Franconia, is one of the best preserved of Germany's many charming old towns and one of the best to explore on foot.",
                "img" : "place_bamberg-burgerstadt.jpg"
            }
        ]
    },
    {
        "country" : "China",
        "place" : [
            {
                "name" : "The Great Wall",
                "desc" : "One of the iconic symbols of China, the Great Wall is the longest wall in the world, an awe-inspiring feat of ancient defensive architecture.",
                "img" : "place_greatwall.jpg"
            },
            {
                "name" : "Terracotta Army",
                "desc" : "Located on Xi'an, the Terracotta Army has laid underground for more than 2,000 years.",
                "img" : "place_terracota.jpg"
            },
            {
                "name" : "Forbidden City",
                "desc" : "Located on Beijing, it was once a 'palace city' where ordinary people were forbidden entry.",
                "img" : "place_forbiddencity.jpg"
            },
            {
                "name" : "Yellow Mountains",
                "desc" : "Located near Shanghai, the Yellow Mountain Scenic Area woos travelers with its five wonders: sun rises, seas of clouds, oddly-shaped rocks, twisted pine trees, and hot springs.",
                "img" : "place_yellowmountain.jpg"
            },
            {
                "name" : "West Lake",
                "desc" : "Located on Hangzhou, West Lake was created after the Chinese love for garden-style parks for recreation.",
                "img" : "place_westlake.jpg"
            }
        ]
    },
    {
        "country" : "America",
        "place" : [
            {
                "name" : "Yosemite National Park",
                "desc" : `Located in the Sierra Nevada, Yosemite National Park is a vast stretch of wilderness that covers thousands of acres.`,
                "img" : "Yosemite.jpg"
            },
            {
                "name" : "Portland",
                "desc" : `Straddling the Willamette River in the shadow of the majestic Mount Hood, Portland is the largest city in Oregon as 
                          well as the third largest city of the US Pacific Northwest region.`,
                "img" : "portland.jpg"
            },
            {
                "name" : "New York City",
                "desc" : `The jewel in the crown of the USA when it comes to urban areas, New York is a megacity that is absolutely packed 
                          full of iconic places, areas, and buildings.`,
                "img" : "new_york_city.jpg"
            },
            {
                "name" : "Grand Canyon",
                "desc" : `Attracting millions of visitors every year, the Grand Canyon is one of those bucket list destinations in the USA. 
                          Located in northern Arizona, this massive natural wonder was carved by the Colorado River over a period of several 
                          million years.`,
                "img" : "grand_canyon.jpg"
            },
            {
                "name" : "San Francisco",
                "desc" : `Set on the tip of a peninsula, San Francisco is a beautiful city in northern California that is famous 
                          for a lot (and we really mean a lot) of things.`,
                "img" : "san_francisco.jpg"
            },
        ]
    },
    {
        "country" : "Australia",
        "place" : [
            {
                "name" : "Sydney Opera House",
                "desc" : `Shaped like huge shells or billowing sails, this famous building on Sydney's Bennelong Point graces the list 
                          of UNESCO World Heritage Sites and is one of the world's great architectural icons.`,
                "img" : "Opera-House.jpg"
            },
            {
                "name" : "Great Barrier Reef Marine Park",
                "desc" : `Great Barrier Reef Marine Park was established to protect its fragile ecosystems, which include more than 
                          3,000 coral reefs; 600 continental islands, including the beautiful Whitsunday group.`,
                "img" : "Great-Barrier.jpg"
            },
            {
                "name" : "Uluru-Kata Tjuta National Park",
                "desc" : `Deep in the heart of Australia's Red Centre, Uluru (formerly Ayers Rock), is one of the most photographed 
                          natural wonders in the country.`,
                "img" : "Uluru-Kata.jpg"
            },
            {
                "name" : "Sydney Harbour Bridge",
                "desc" : `Along with the Opera House, the Sydney Harbour Bridge is one of Australia's most famous tourist attractions. 
                          Affectionately called "the Coathanger," this impressive feat of construction is the largest steel arch bridge 
                          in the world.`,
                "img" : "Sydney-Harbour.jpg"
            },
            {
                "name" : "Blue Mountains National Park",
                "desc" : `A UNESCO World Heritage Site, beautiful Blue Mountains National Park lies 81 kilometers west of Sydney and is a 
                          popular day trip from the city.`,
                "img" : "Blue-Mountains-NP.jpg"
            },
        ]
    },
    {
        "country" : "Brazil",
        "place" : [
            {
                "name" : "Salvador",
                "desc" : `Located in the state of Bahia, Salvador has a phenomenal energy that’s notable even for Brazil.
                          Most known for being Portugal’s New World capital, it maintains a great deal of its colonial architecture 
                          and you’ll find the historic centre of the town in the Pelourinho neighbourhood.`,
                "img" : "Salvador.jpg"
            },
            {
                "name" : "Sugar Loaf, Rio de Janeiro",
                "desc" : `The easily recognized emblem of Rio de Janeiro, the rounded rock peak of Sugar Loaf juts out of a tree-covered promontory, 
                          rising 394 meters above the beaches and city.`,
                "img" : "Sugar-Loaf.jpg"
            },
            {
                "name" : "Cristo Redentor, Rio de Janeiro",
                "desc" : `With arms outstretched 28 meters, as if to encompass all of humanity, the colossal Art Deco statue of Christ, 
                          called Cristo Redentor (Christ the Redeemer), gazes out over Rio de Janeiro and the bay from the summit 
                          of Corcovado.`,
                "img" : "cristo-redentor.jpg"
            },
            {
                "name" : "Carnaval, Rio de Janeiro",
                "desc" : `Few shows match Rio's pre-Lenten Carnaval (Carnival) extravaganza for color, sound, action, and exuberance.`,
                "img" : "Carnaval.jpg"
            },
            {
                "name" : "Amazon Rain Forests",
                "desc" : `About 20 kilometers southeast of Manaus, the dark Rio Negro waters meet the light muddy water of the Rio Solimões, 
                          flowing side by side for about six kilometers before mixing as the Amazon.`,
                "img" : "Amazon-Forest.jpg",
            },
        ]
    },
    {
        "country" : "England",
        "place" : [
            {
                "name" : "London",
                "desc" : `London is a fascinating city laden with history, filled with museums and art galleries, beautiful green parks, 
                          fantastic shopping and dining, a vibrant theatre scene, and, of course, royalty.`,
                "img" : "london.jpg"
            },
            {
                "name" : "Scottish Highlands",
                "desc" : `The Scottish Highlands is the rugged northern and northwestern portion of Scotland. 
                          This is the Scotland conjured up by visions of tartan, kilts, lochs and Braveheart.`,
                "img" : "scottish-highlands.jpg"
            },
            {
                "name" : "Stonehenge",
                "desc" : `One of the most famous sites in the world, Stonehenge is composed of earthworks surrounding a 
                          circular setting of large standing stones in south west England.`,
                "img" : "stonehenge.jpg"
            },
            {
                "name" : "Edinburgh",
                "desc" : `Visitors to Edinburgh need to be prepared to experience history, from the cobblestone streets 
                          to Edinburgh Castle that is symbolic of Scotland’s capital.`,
                "img" : "edinburgh.jpg"
            },
            {
                "name" : "York",
                "desc" : `York is a walled city with a rich heritage located where the River Foss meets the River Ouse. 
                          An impressive number of attractions are packed into the space of this ancient city.`,
                "img" : "york.jpg"
            },
        ]
    },
    {
        "country" : "Russia",
        "place" : [
            {
                "name" : "Yekaterinburg",
                "desc" : `Yekaterinburg is an industrial city in the Ural Mountains that has many things going for it.`,
                "img" : "yekaterinburg.jpg"
            },
            {
                "name" : "Sochi",
                "desc" : `Sochi on the Black Sea is a great winter sports destination and, in fact, hosted the 2014 Winter Olympics.`,
                "img" : "sochi.jpg"
            },
            {
                "name" : "Veliky Novgorod",
                "desc" : `Founded in the 10th century, Veliky Novgorod is one of the oldest cities in Russia’s far north.`,
                "img" : "veliky_novgorod.jpg"
            },
            {
                "name" : "Vladivostok",
                "desc" : `Mountains and bays surround Vladivostok, making it a stunning beautiful city in Russia’s east.`,
                "img" : "vladivostok.jpg"
            },
            {
                "name" : "Nizhny Novgorod",
                "desc" : `Russia’s fifth largest city sits at the confluence of the Volga and Oka rivers.
                          The town began as a fortress in the 13th century.`,
                "img" : "nizhny_novgorod.jpg"
            },
        ]
    },
    {
        "country" : "India",
        "place" : [
            {
                "name" : "Leh-Ladakh",
                "desc" : "The land of majestic snow-capped mountains, serene alpine glacial lakes, enchanting valleys and ancient colourful Buddhist monasteries, Leh-Ladakh is one of the ‘must-visit’ destinations in India",
                "img" : "place_leh-ladakh.jpg"
            },
            {
                "name" : "Bir Billing",
                "desc" : "Comprising of more than ten paragliding spots, Bir Billing is one of those top 10 places to visit in India that has truly lived up to its name of paragliding capital of India.",
                "img" : "place_bir-billing.jpg"
            },
            {
                "name" : "Udaipur",
                "desc" : " Udaipur is called the Venice of the East, but the different Rajasthani hues of the city surely make it stand out. The City of Lakes has to be in your list of best places to travel in India.",
                "img" : "place_udaipur.jpg"
            },
            {
                "name" : "Agra",
                "desc" : "With tons of famous tourist attraction you can named, this is Agra, the land of Taj",
                "img" : "place_agra.jpg"
            },
            {
                "name" : "Mathura",
                "desc" : "Have some interesting historical and spiritual experience here, on the birth place of Lord Krishna",
                "img" : "place_mathura.jpg"
            }
        ]
    },
];

const food = [
    {
        "country" : "Indonesia",
        "food" : [
            {
                "name" : "Nasi Goreng",
                "desc" : "Indonesian Fried Rice and its reputation has taken the world by storm.",
                "img" : "food_nasigoreng.jpg"
            },
            {
                "name" : "Beef Rendang",
                "desc" : "This dish originated from Padang, Sumatra. Padang food is famous for its spicyness and richness in flavor. ",
                "img" : "food_rendang.jpg"
            },
            {
                "name" : "Indomie",
                "desc" : "Cost merely around 25 cents a pack and you get a quick and satisfying snack. It is none other than our very own Indonesian Instant Noodles! ",
                "img" : "food_indomie.jpg",
            },
            {
                "name" : "Martabak",
                "desc" : "As one of the most sought after food, Martabak, the Indonesian Pancake is the way too delicious! You can have either the sour version with vegetables and meat filling or the sweet version with chocolate/nuts fillings",
                "img" : "food_martabak.jpg",
            },
            {
                "name" : "Nasi Rawon",
                "desc" : "Originated in East Java, this is a dish made of beef stew with deep black soup color and rich taste",
                "img" : "food_nasirawon.jpg",
            }
        ]
    },
    {
        "country" : "Germany",
        "food" : [
            {
                "name" : "Königsberger klopse",
                "desc" : "Named after the former East Prussian capital of Königsberg (now Kaliningrad in Russia), this tasty dish of meatballs in a creamy white sauce with capers is beloved by grandmothers and chefs alike.",
                "img" : "food_klopse.jpg"
            },
            {
                "name" : "Maultaschen",
                "desc" : "Maultaschen from Swabia are a lot like ravioli but bigger. They are typically palm-sized, square pockets of dough with fillings that run the gamut from savory to sweet and meaty to vegetarian.",
                "img" : "food_maultaschen.jpg"
            },
            {
                "name" : "Spätzle",
                "desc" : "Spätzle are a kind of pasta, but the dough only consists of eggs, flour, salt and a hint of sparkling water (in order to fluff up the dough).",
                "img" : "food_spaetzle.jpg",
            },
            {
                "name" : "Currywurst",
                "desc" : "Invented in Berlin by Herta Heuwer in 1949 the Currywurst is usually made of a pork sausage either wrapped in ‘Darm’ or without Darm",
                "img" : "food_currywurst.jpg"
            },
            {
                "name" : "Sauerbraten",
                "desc" : "Sauerbraten is a dish that you will usually get served when visiting the grand parents or on a special occasion. To prepare a Sauerbraten you will need some high quality piece of beef and a lot of time.",
                "img" : "food_sauerbraten.jpg"
            }
        ]
    },
    {
        "country" : "China",
        "food" : [
            {
                "name" : "Sweet & Sour Pork",
                "desc" : "In China, the pork is lightly fried very rapidly at high heat, then dressed with the sauce",
                "img" : "food_sweetpork.jpg"
            },
            {
                "name" : "Ma Po Tofu",
                "desc" : "This dish is over 100 years old. A spicy dish of tofu with browned ground beef in a savory sauce topped with green onions, it is blissful on top of a hot mound of rice.",
                "img" : "food_mapotofu.jpg"
            },
            {
                "name" : "Dumpling",
                "desc" : "Chinese dumpling, also called Jiaozi, typically consist of a ground meat and/or vegetable filling wrapped into a thinly rolled piece of dough, which is one of the most important and traditional dishes in China",
                "img" : "food_dumpling.jpg"
            },
            {
                "name" : "Sichuan Shredded Chicken",
                "desc" : "Known as “you xiang rou si,” this spicy chicken stir-fry is something you won’t see in the states.",
                "img" : "food_sichuan.jpg"
            },
            {
                "name" : "Chinese barbecue",
                "desc" : "The smoky, meaty delights you’ll get are out of this world. Whatever you do, don’t miss out on these!",
                "img" : "food_bbq.jpg"
            }
        ]
    },
    {
        "country" : "India",
        "food" : [
            {
                "name" : "Indian Thali",
                "desc" : "Served on one massive plate, this is one set of food that make you experience the most of Indian foods",
                "img" : "food_thali.jpg"
            },
            {
                "name" : "Biryani",
                "desc" : "The basic yellow rice with meats, but it has tons of spice ready to shock your tongue!",
                "img" : "food_biryani.jpg"
            },
            {
                "name" : "Aloo Paratha",
                "desc" : "The Indian 'bread' made of aloo (potatoes) served with delicious potato chunks and spices.",
                "img" : "food_alooparatha.jpg"
            },
            {
                "name" : "Egg Curry",
                "desc" : "The name says it all, it's egg wrapped in curry sauce, but if it's India, it's nothing like you will experience in any other country.",
                "img" : "food_eggcurry.jpg"
            },
            {
                "name" : "Masala Dosa",
                "desc" : "Looks similar to a crepe but it's actually made from rice and beans and then smothered in butter.",
                "img" : "food_masaladosa.jpg"
            }
        ]
    },
    {
        "country" : "America",
        "food" : [
            {
                "name" : "American Hotdog",
                "desc" : `“Hot dog” means a whole, cured, cooked sausage that is skinless or stuffed in a casing, 
                          that may be known as a frankfurter, frank, furter, wiener, red hot, vienna, bologna, 
                          garlic bologna, or knockwurst, and that may be served in a bun or roll.`,
                "img" : "food_american-hotdog.jpg"
            },
            {
                "name" : "Apple Pie",
                "desc" : `An apple pie is a pie in which the principal filling ingredient is 
                          apple. It is often served with whipped cream, ice cream ("apple pie à la mode"), 
                          or cheddar cheese.`,
                "img" : "food_Apple_Pie.jpg"
            },
            {
                "name" : "Hamburger",
                "desc" : `A hamburger/burger is a sandwich consisting of one or more cooked patties of ground meat, 
                          usually beef, placed inside a sliced bread roll or bun.The patty may be pan fried, grilled, 
                          smoked or flame broiled.`,
                "img" : "food_burger.jpg"
            },
            {
                "name" : "Mac & Cheese",
                "desc" : `Macaroni and cheese. Macaroni and cheese—also called mac 'n' cheese in the US and Canadian English, 
                          macaroni cheese in the United Kingdom—is a dish of English origin,consisting of cooked macaroni pasta 
                          and a cheese sauce, most commonly cheddar.`,
                "img" : "food_Mac_And_Cheese.jpg"
            },
            {
                "name" : "Newyork Pizza",
                "desc" : `New York-style pizza is pizza made with a characteristically large hand-tossed thin crust, 
                          often sold in wide slices to go. The crust is thick and crisp only along its edge, yet soft, thin, 
                          and pliable enough beneath its toppings to be folded in half to eat.`,
                "img" : "food_newYork-Pizza.jpg"
            },
        ]
    },
    {
        "country" : "Australia",
        "food" : [
            {
                "name" : "Chicken Parmigiana",
                "desc" : `Chicken parmigiana, or chicken parmesan, is a dish that consists of breaded chicken breast covered 
                          in tomato sauce and mozzarella, parmesan, or provolone cheese.`,
                "img" : "food_Chicken-Parmigiana.jpg"
            },
            {
                "name" : "Lamington",
                "desc" : `A lamington is an Australian cake made from squares of butter cake or sponge cake coated in an 
                          outer layer of chocolate sauce and rolled in desiccated coconut.`,
                "img" : "food_lamington.jpg"
            },
            {
                "name" : "Meat Pie",
                "desc" : `An Australian or New Zealand meat pie is a hand-sized meat pie containing diced or minced meat and gravy, 
                          sometimes with onion, mushrooms, or cheese and often consumed as a takeaway food snack.`,
                "img" : "food_meat-pie.jpg"
            },
            {
                "name" : "Pavlova",
                "desc" : `Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova.
                          It is a meringue dessert with a crisp crust and soft, light inside, usually topped with 
                          fruit and whipped cream.`,
                "img" : "food_Pavlova.jpg"
            },
            {
                "name" : "Pumpkin Soup",
                "desc" : `Pumpkin soup is a usually 'bound' (thick) soup made from a purée of pumpkin. 
                          It is made by combining the meat of a blended pumpkin with broth or stock.`,
                "img" : "food_pumpkin-soup.jpg"
            },
        ]
    },
    {
        "country" : "Brazil",
        "food" : [
            {
                "name" : "Barbecued meat",
                "desc" : `Brazil and Argentina both claim to be South America’s barbecue champion.
                          And while each country takes a different approach to its meat, from the cuts to the accompaniments.`,
                "img" : "barbecued-meats.jpg"
            },
            {
                "name" : "Cachaça",
                "desc" : `Dating back to the 1500s, cachaça is made from fermented sugarcane juice and is best known as the fiery kick 
                          in caipirinhas – Brazil’s national cocktail.`,
                "img" : "caipirinhas.jpg"
            },
            {
                "name" : "Brigadeiros",
                "desc" : `Brazil’s answer to the chocolate truffle, brigadeiros are so simple to make that they quite literally 
                          get rolled out for kids’ parties nationwide.`,
                "img" : "brigadeiro.jpg"
            },
            {
                "name" : "Quindim",
                "desc" : `Another favourite from Bahia, quindim is a glossy yellow sweet treat made with nothing more than eggs, 
                          sugar and coconut (with butter a common addition).`,
                "img" : "quindim.jpg"
            },
            {
                "name" : "Feijoada",
                "desc" : `One of the few dishes eaten the length and breadth of Brazil, feijoada is a hearty stew of black beans, 
                          sausages and cuts of pork of varying quality – traditionally veering towards the lower end, with trotters 
                          and ears all going into the mix.`,
                "img" : "feijoada.jpg"
            },
        ]
    },
    {
        "country" : "England",
        "food" : [
            {
                "name" : "Cumberland Sausage",
                "desc" : `Cumberland sausage is a pork sausage that originated in the ancient county of Cumberland, England, now part of Cumbria.`,
                "img" : "cumberland_sausage.jpg"
            },
            {
                "name" : "English Breakfast",
                "desc" : `The "traditional" full English breakfast, treated as a dish rather than a meal, includes bacon, 
                          fried, poached or scrambled eggs, fried or grilled tomatoes, fried mushrooms, fried bread or buttered toast, 
                          and sausages`,
                "img" : "english_breakfast.jpg"
            },
            {
                "name" : "Lancashire Hotpot",
                "desc" : `Lancashire hotpot is a stew originating from Lancashire in the North West of England.`,
                "img" : "lanchashire_hotpot.jpg"
            },
            {
                "name" : "Roast Beef",
                "desc" : `Roast beef is a traditional English dish of beef which is roasted. Essentially prepared as a main meal, 
                          the leftovers are often used in sandwiches and sometimes are used to make hash.`,
                "img" : "Roast_Beef.jpg"
            },
            {
                "name" : "Yorkshire pudding",
                "desc" : `Yorkshire pudding is a common English side dish consisting of a baked pudding made from batter consisting 
                          of eggs, flour, and milk or water.`,
                "img" : "Yokshire.jpg"
            },
        ]
    },
    {
        "country" : "Russia",
        "food" : [
            {
                "name" : "Borscht",
                "desc" : `Borscht is a beet soup that originated in the Ukraine and was quickly adopted as a Russian specialty as well.`,
                "img" : "Borscht.jpg"
            },
            {
                "name" : "Shchi",
                "desc" : `Shchi is a typical cabbage soup made from either fresh or fermented cabbage.`,
                "img" : "Shchi.jpg"
            },
            {
                "name" : "Solyanka",
                "desc" : `Solyanka is a thick soup that is plentiful enough to be a meal in itself. 
                          This soup is made with various types of meat, including sausage, bacon, ham, and beef, 
                          as well as vegetables such as cabbage, carrots, onions, and potatoes.`,
                "img" : "Solyanka.jpg"
            },
            {
                "name" : "Ukha",
                "desc" : `If you like seafood, try ukha, a fish soup with a clear broth. 
                          Many different kinds of fish can be used to make this soup.`,
                "img" : "Ukha.jpg"
            },
            {
                "name" : "Pirozhki",
                "desc" : `These little baked or fried puff pastries are packed full of potatoes, meat, cabbage, or cheese.`,
                "img" : "Pirozhki.jpg"
            },
        ]
    },
]