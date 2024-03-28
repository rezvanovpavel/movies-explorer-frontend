const Maximum_Width = 1280;
const Medium_Width = 990;
const Minimum_Width = 768;
const Movies_Maximum = 16; 
const Movies_Medium = 12;
const Movies_Small = 8;
const Movies_Minimum = 5;
const Still_Movies_Maximum = 4;
const Still_Movies_Medium = 3;
const Still_Movies_Minimum = 2;

function setdDsplayMovies() {
    const countingMovies = { movies: Movies_Maximum, still: Still_Movies_Maximum };

    if (window.innerWidth < Maximum_Width) {
        countingMovies.movies = Movies_Medium;
        countingMovies.still = Still_Movies_Medium;
    }

    if (window.innerWidth < Medium_Width) {
        countingMovies.movies = Movies_Small;
        countingMovies.still = Still_Movies_Minimum;
    }

    if (window.innerWidth < Minimum_Width) {
        countingMovies.movies = Movies_Minimum;
        countingMovies.still = Still_Movies_Minimum;
    }
    return countingMovies;
};

export {
    Maximum_Width,
    Medium_Width,
    Minimum_Width,
    Movies_Maximum,
    Movies_Medium,
    Movies_Small,
    Movies_Minimum,
    Still_Movies_Maximum,
    Still_Movies_Medium,
    Still_Movies_Minimum,
    setdDsplayMovies
};