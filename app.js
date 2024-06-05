const movieList=[
    {MovieName:'God must be Crazy', price: 15},
    {MovieName:'Commando', price: 10},
    {MovieName:'Wakanda', price: 7},
    {MovieName:'Three idiots', price: 5},
];

const pickMovie=document.querySelector('.movie-select');
const seats=document.querySelectorAll('.row  .seat:not(.occupied)');
const count=document.querySelector('.count');
const total=document.querySelector('.total');
const allSeatsNumber=document.querySelectorAll('.seat');
const screen=document.getElementById('screen-app');
 

//populate list
movieList.forEach((movie)=>{

    const optionList=document.createElement('option');
    optionList.value=movie.MovieName;
    optionList.innerHTML=`${movie.MovieName} $${movie.price}`;
    pickMovie.appendChild(optionList);

});


// Function to get the price of the selected movie
function getSelectedMoviePrice() {
    const selectedMovie = pickMovie.value;
    const movie = movieList.find(m => m.MovieName === selectedMovie);
    return movie ? movie.price : 0;
}

// Initialize actionPrice with the price of the initially selected movie
let actionPrice = getSelectedMoviePrice();

// Add event listener for movie selection change
pickMovie.addEventListener('change', () => {
    actionPrice = getSelectedMoviePrice();
    seatCount(); // Update the total price based on the new movie price
});
  //update movie price and seats




//add seats 
let allSeatsTaken=[];

seats.forEach((seat)=>{

    seat.addEventListener('click', (e)=>{
         const isSelected=e.target.classList.contains('selected');

         if(!isSelected){
            seat.classList.add('selected');
         }
          else{
            seat.classList.remove('selected');
          }
          seatCount ();

        
    });
    
});
 function seatCount(){
    const seatsSelected=document.querySelectorAll('.row  .seat.selected');
    const elseatsSelected=seatsSelected.length;

    count.innerHTML=elseatsSelected;
    total.innerHTML=elseatsSelected*actionPrice;
    

 }
