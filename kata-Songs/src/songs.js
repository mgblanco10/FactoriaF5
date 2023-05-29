const songs = require( "./data" );

//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map(songs => songs.artist);
    // console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    return array.filter(song => song.artist === artist);
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(songs){
    const titles = songs.map(song => song.title);
    const sortedTitles = titles.sort();
    const result = sortedTitles.slice(0,10);
    return result;
}
// OTRA FORMA con toUpperCase
// function orderAlphabetically(array) {
//     const sortedArray = [...array].sort((a, b) =>
//       a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : 0
//     );
//     const titlesArray = sortedArray.map(song => song.title);
//     return titlesArray.length < 3 ? titlesArray : titlesArray.slice(0, 10);
//   }

//OTRA OPCIÓN DE HACERLO QUE PASA TODO USANDO localeCompare
// function orderAlphabetically(array) {
//     const sortedArray = [...array].sort((a, b) => a.title.localeCompare(b.title));
//     const titlesArray = sortedArray.map(song => song.title);
//     return titlesArray.length < 3 ? titlesArray : titlesArray.slice(0, 10);
//   }


//Exercise 4: Order by year, ascending
function orderByYear(array) {
    const sortedArray = [...array].sort((a, b) =>
      a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
    );
    return sortedArray;
  }

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    return array.filter(song => song.genre.includes(genre));
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    return array.map(song => {
      const durationParts = song.duration.split(/min |sec/);
      const minutes = parseInt(durationParts[0]);
      const seconds = parseInt(durationParts[1]);
      const totalSeconds = minutes * 60 + seconds;
      return { ...song, duration: totalSeconds };
    });
  }
  

//Exercise 7: Get the longest song
function getLongestSong(array) {
    const convertedArray = minutsToSeconds(array);
    const longestDuration = Math.max(...convertedArray.map(song => song.duration));
    return convertedArray.filter(song => song.duration === longestDuration);
  }


//Exercise 8: Get the shortest song
//Write the getShortestSong() function

function getShortestSong(array){
    const convertedArray = minutsToSeconds(array);
    const shortestDuration = Math.min(...convertedArray.map(song => song.duration));
    return convertedArray.filter(song => song.duration === shortestDuration);
}




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong,
        getShortestSong
    };
};
