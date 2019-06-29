// jshint esversion : 6
const defaultLibrary = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003" },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952" }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library = defaultLibrary) {
  for (let play in library.playlists) {
    console.log(`${library.playlists[play].id}: ${library.playlists[play].name} - ${library.playlists[play].tracks.length} tracks`);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library = defaultLibrary) {
  for (let track in library.tracks) {
    console.log(`${library.tracks[track].id}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
  }
};


// prints a track, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
const printTrack = function(track, library = defaultLibrary) {
  console.log(`${library.tracks[track].id}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId, library = defaultLibrary) {
  console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`);
  for (let track of library.playlists[playlistId].tracks) {
    console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
  }
};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId, library = defaultLibrary) {
  library.playlists[playlistId].tracks.push(trackId);
};



// generates a unique id
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};



// adds a track to the library
const addTrack = function(name, artist, album, library = defaultLibrary) {
  let trackID = 't' + generateUid();
  library.tracks[trackID] = {
    'id': trackID,
    'name': name,
    'artist': artist,
    'album': album
  };
};

// adds a playlist to the library
const addPlaylist = function(name,library = defaultLibrary) {
  let playlistID = 'p' + generateUid();
  library.playlists[playlistID] = {
    'id' : playlistID,
    'name' : name,
    'tracks' : []
  };
};


// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
const printSearchResults = function(query, library = defaultLibrary) {
  const queries = query.toLowerCase().split(' ');
  for (let q of queries) {
    for (let track in library.tracks) {
      let match = false;
      if (library.tracks[track].name.toLowerCase().search(q) > -1) {
        match = true;
      } else if (library.tracks[track].artist.toLowerCase().search(q) > -1) {
        match = true;
      } else if (library.tracks[track].album.toLowerCase().search(q) > -1) {
        match = true;
      }
      if (match) {
        printTrack(track, library);
      }
    }
  }

};
