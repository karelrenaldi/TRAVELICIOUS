// fetch('../json/contry.json')
//     .then(result => result.json())
//     .then(console.log)

//sementara semuanya hard coded dulu aja, fetch jsonnya harus dri server

const countryList = [
    ['Country'],
    ['Germany'],
    ['Indonesia'],
    ['America'],
    ['Australia'],
    ['England'],
    ['Ghana'],
    ['Japan'],
];

const countryData = [
    {
        "country" : "Indonesia",
        "code" : "ID",
        "desc" : "A country with thousands wild island to explore!"
    },
    {
        "country" : "Germany",
        "code" : "DE",
        "desc" : "Country with a lot of to explore!"
    },
    {
        "country" : "America",
        "code" : "",
        "desc" : " the world's third largest country in size and nearly the third largest in terms of population!"
    }
];

const place = [
    {
        "country" : "Indonesia",
        "place" : [
            {
                "name" : "Bali Island",
                "desc" : "A Heavenly island everybody could dream of!",
                "img" : "bali.jpg"
            },
            {
                "name" : "Thousand Island",
                "desc" : "Thousand island located near Jakarta, as it's name, it has thousand small islands for thousand journey!",
                "img" : "pulauseribu.jpg"
            }
        ]
    },
    {
        "country" : "Germany",
        "place" : [
            {
                "name" : "Berlin's Brandenburg Gate",
                "desc" : "Modeled on the Acropolis in Athens and built for King Frederick William II in 1791, the monumental sandstone Brandenburg Gate in Berlin's Mitte district was the city's first Neoclassical structure",
                "img" : "brandenburg.jpg"
            },
            {
                "name" : "Cologne Cathedral",
                "desc" : "located on the banks of the Rhine and is undoubtedly Cologne's most impressive landmark. ",
                "img" : "cologne.jpg"
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
                "desc" : "Indonesian special fried rice with tons of spice in it!",
                "img" : "nasigoreng.jpg"
            },
            {
                "name" : "Rendang",
                "desc" : "World number one dish!",
                "img" : "rendang.jpg"
            },
            {
                "name" : "Nasi Goreng",
                "desc" : "Indonesian special fried rice with tons of spice in it!",
                "img" : "nasigoreng.jpg"
            },
            {
                "name" : "Rendang",
                "desc" : "World number one dish!",
                "img" : "rendang.jpg"
            }
        ]
    },
    {
        "country" : "Germany",
        "food" : [
            {
                "name" : "Königsberger klopse",
                "desc" : "Named after the former East Prussian capital of Königsberg (now Kaliningrad in Russia), this tasty dish of meatballs in a creamy white sauce with capers is beloved by grandmothers and chefs alike.",
                "img" : "klopse.jpg"
            },
            {
                "name" : "Maultaschen",
                "desc" : "Maultaschen from Swabia are a lot like ravioli but bigger. They are typically palm-sized, square pockets of dough with fillings that run the gamut from savory to sweet and meaty to vegetarian.",
                "img" : "maultaschen.jpg"
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
                "img" : "../img/America-Food/american-hotdog.jpg"
            },
            {
                "name" : "Apple Pie",
                "desc" : `An apple pie is a pie in which the principal filling ingredient is 
                          apple. It is often served with whipped cream, ice cream ("apple pie à la mode"), 
                          or cheddar cheese.`,
                "img" : "../img/America-Food/Apple_Pie.jpg"
            },
            {
                "name" : "Hamburger",
                "desc" : `A hamburger/burger is a sandwich consisting of one or more cooked patties of ground meat, 
                          usually beef, placed inside a sliced bread roll or bun. 
                          The patty may be pan fried, grilled, smoked or flame broiled.`,
                "img" : "../img/America-Food/burger.jpg"
            },
            {
                "name" : "Mac & Cheese",
                "desc" : `Macaroni and cheese. Macaroni and cheese—also called mac 'n' cheese in the US and Canadian English, 
                          macaroni cheese in the United Kingdom—is a dish of English origin, 
                          consisting of cooked macaroni pasta and a cheese sauce, most commonly cheddar.`,
                "img" : "../img/America-Food/Mac_And_Cheese.jpg"
            },
            {
                "name" : "Newyork Pizza",
                "desc" : `New York-style pizza is pizza made with a characteristically large hand-tossed thin crust, 
                          often sold in wide slices to go. The crust is thick and crisp only along its edge, yet soft, thin, 
                          and pliable enough beneath its toppings to be folded in half to eat.`,
                "img" : "../img/America-Food/newYork-Pizza.jpg"
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
                "img" : "../img/Australia-Food/Chicken-Parmigiana.jpg"
            },
            {
                "name" : "Lamington",
                "desc" : `A lamington is an Australian cake made from squares of butter cake or sponge cake coated in an 
                          outer layer of chocolate sauce and rolled in desiccated coconut. The thin mixture is absorbed 
                          into the outside of the sponge cake and left to set, giving the cake a distinctive texture. 
                          A common variation has a layer of cream or strawberry jam between two lamington halves.`,
                "img" : "../img/Australia-Food/lamington.jpg"
            },
            {
                "name" : "Meat Pie",
                "desc" : `An Australian or New Zealand meat pie is a hand-sized meat pie containing diced or minced meat and gravy, 
                          sometimes with onion, mushrooms, or cheese and often consumed as a takeaway food snack.`,
                "img" : "../img/Australia-Food/meat-pie.jpg"
            },
            {
                "name" : "Pavlova",
                "desc" : `Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova.
                          It is a meringue dessert with a crisp crust and soft, 
                          light inside, usually topped with fruit and whipped cream.`,
                "img" : "../img/Australia-Food/Pavlova.jpg"
            },
            {
                "name" : "Pumpkin Soup",
                "desc" : `Pumpkin soup is a usually 'bound' (thick) soup made from a purée of pumpkin. 
                          It is made by combining the meat of a blended pumpkin with broth or stock.`,
                "img" : "../img/Australia-Food/pumpkin-soup.jpg"
            },
        ]
    },
]