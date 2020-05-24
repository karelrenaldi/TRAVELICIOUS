// fetch('../json/contry.json')
//     .then(result => result.json())
//     .then(console.log)

//sementara semuanya hard coded dulu aja, fetch jsonnya harus dri server

const countryList = [
    'Germany',
    'Indonesia',
    'China'
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
            },
            {
                "name" : "Miniatur Wunderland and the Historic Port of Hamburg",
                "desc" : "In the heart of the historic Port of Hamburg, the magnificent Miniatur Wunderland, the world's largest model railway, is an attraction that appeals equally to young and old alike.",
                "img" : "port-of-hamburg.jpg"
            },
            {
                "name" : "Berlin's Museum Island",
                "desc" : "Berlin's world-famous Museumsinsel, or Museum Island, lies between the River Spree and the Kupfergraben - a 400-meter-long canal off the river - and includes many of the city's oldest and most important museums.",
                "img" : "museum-island-berlin.jpg"
            },
            {
                "name" : "Bamberg and the Bürgerstadt",
                "desc" : "Located in the valley of the Regnitz, where the river divides into two arms, Bamberg, the old imperial city and the most important town in Upper Franconia, is one of the best preserved of Germany's many charming old towns and one of the best to explore on foot.",
                "img" : "bamberg-burgerstadt.jpg"
            }
        ]
    },
    {
        "country" : "China",
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
    }
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
        "country" : "China",
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
    }
]