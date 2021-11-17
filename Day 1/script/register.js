
console.log("Register page");
//Javascript objects

let salon={
    name:"Pet Salon",
    address:{
        street:"University",
        number: "855-k",
        zip: "55555",
        state: "AR",
        city: "Little Rock"

    },
    hours:{
        open: "9:00 am",
        close: "8:00 pm"
    },
    pets:[
        {
            name: "Scooby",
            age:2,
            gender: "Male",
            breed: "Dane",
            services: "Grooming",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
            name: "Scrappy",
            age:1,
            gender: "Male",
            breed: "Mixed",
            services: "Nails but",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
            name: "Buddy",
            age:6,
            gender: "Male",
            breed: "Mixed",
            services: "bath",
            owner: "Joe",
            phone: "555-555-5556"
        },
        {
            name: "Wayne",
            age:1,
            gender: "Male",
            breed: "Pit Bull Terrier",
            services: "Full Service",
            owner: "Eric",
            phone: "555-555-5987"
        }

    ]
}
console.log(salon.address.city);
console.log(salon.pets);

alert( "Registered Pets: " + salon.pets.length);

function simpleDisplay(){
    //Display Scooby on the console
    for(i=0; i<salon.pets.length; i++){
    console.log(salon.pets[i].name);
}
}
//call the function
simpleDisplay();



