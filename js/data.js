// fetch('../json/contry.json')
//     .then(result => result.json())
//     .then(console.log)

//sementara semuanya hard coded dulu aja, fetch jsonnya harus dri server

const countryList = [
    ['Country'],
    ['Germany'],
    ['Indonesia'],
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
    }
]