function findMovies(favoriteGenre){
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        },
    ];
    result = ''
    let filter = movies.filter((movie) => favoriteGenre.includes(movie.genre));
    result = filter;
    return result;
  };
  
function findTicketAvailability(movie, user) {
    [movie].map((tiket) => 
    tiket.soldTicket !== tiket.capacity && user.ticket + tiket.soldTicket <= tiket.capacity)
    return [0]; // TODO: replace this
}

function findRecommendation(user) {
    str = findMovies(user.favoriteGenre);
    result = '';
    let filter = str.filter((available) =>
    available.soldTicket !== available.capacity && user.ticket + available.soldTicket <= available.capacity);
    result = filter;
    return result;
}

  
  let hargaAction = 100000;
  let hargaMusical = 80000;
  let hargaRomance= 40000;
  let hargaHorror = 75000;
    
function generateRecommendation(user) {
    if (findRecommendation(user).length === 0){
        result = 'Tidak ada film yang sesuai kriteria'
    }
    else{
        result = findRecommendation(user).map((recom) => ({
            id: recom.id,
            name: recom.name,
            genre: recom.genre,
            totalPrice :
            recom.genre === "Action"
              ? hargaAction * user.ticket
              : recom.genre === "Musical"
              ? hargaMusical * user.ticket
              : recom.genre === "Romance"
              ? hargaRomance * user.ticket
              : recom.genre === "Horror"
              ? hargaHorror* user.ticket
              : "",
        }))
}
return result
}

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))


module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    // nerateRecommendation,
};