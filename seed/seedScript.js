// upload negara yang terdapat pada web ke database
const Destination = require('../models/destination')
const mongoose = require('mongoose')

mongoose.connect(('mongodb+srv://Querencia:Kelompok5@cluster0.ocilh.mongodb.net/Querencia?retryWrites=true&w=majority'), (err, res)=> {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Database terhubung untuk seeding!')
        }
})

const destinations = [
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'Indonesia',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'Japan',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'United States',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'United Kingdom',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'Malaysia',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'Philippines',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'France',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'Saudi Arabia',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'United Arab Emirates',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'China',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'South Korea',
    }),
    new Destination({
        imagePath: 'img/indonesia.jpg',
        name: 'Italy',
    })
]

var done = 0
for (var i=0; i< destinations.length; i++) {
    destinations[i].save((err, res) => {
        done++;
        if (done ==destinations.length) {
            console.log('Destinasi berhasil diupload!')
            exit();
        }
    })
}

function exit()
{
    mongoose.disconnect();
}