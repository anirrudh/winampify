import SpotifyApiService from "./api";
import {
  ArtistData,
  Items,
  Search,
  AlbumData,
  TrackItems,
  AlbumItems,
  TrackData,
  ArtistItems
} from "./types";

// input: URI of an artist (string)
// output: name of artist (string)
export const getArtistData = async (URI: string) => {
  const response: ArtistData = await SpotifyApiService.get(`artists/${URI}`);
  return response;
};

// input: URI of a track
// output: artist: string, name: string, duration: number
export const getTrackData = async (URI: string) => {
  const response: TrackData = await SpotifyApiService.get(`tracks/${URI}`);
  return response;
};

export const getAlbumData = async (id: string) => {
  const response: AlbumData = await SpotifyApiService.get(`albums/${id}`);
  return response;
};

export const getAlbumsFromArtist = async (artistId: string) => {
  const response: AlbumItems = await SpotifyApiService.get(
    `artists/${artistId}/albums?include_groups=album%2Csingle`
  );
  return response.items;
};

export const getTracksFromAlbum = async (albumId: string) => {
  const response: TrackItems = await SpotifyApiService.get(
    `albums/${albumId}/tracks`
  );
  return response.items;
};

export const getTopArtistsFromMe = async () => {
  const response: ArtistItems = await SpotifyApiService.get("me/top/artists");
  return response.items;
};

export const getFollowedArtistsFromMe = async () => {
  const response = await SpotifyApiService.get("me/following?type=artist");
  const items: ArtistData[] = response.artists.items;
  return items;
};

export const getMyRecentlyPlayed = async () => {
  const response: Items = await SpotifyApiService.get(
    "me/player/recently-played"
  );
  return response.items;
};

export const getMyLibraryAlbums = async () => {
  const response: Items = await SpotifyApiService.get("me/albums");
  return response.items;
};

export const getMyLibraryTracks = async () => {
  const response: Items = await SpotifyApiService.get("me/tracks");
  return response.items;
};

export const getSearchResult = async (
  search: string,
  scope: string,
  offset: string
) => {
  const response: Search = await SpotifyApiService.get(
    `search?q=${search}&type=${scope}&offset=${offset}`
  );
  return response;
};

export const getUserInfos = async () => {
  const response: any = await SpotifyApiService.get("me");
  return response;
};

// TODO: Work In Progress
/* export const getPlaylist = (tracks, user, URI, offset) => {
 fetch(
    `https://api.spotify.com/v1/users/${user}/playlists/${URI}/tracks?offset=${offset}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(response => response.res())
    .then(json => {
      const items = json.items;
      if (items[0].track.id !== null) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].track !== null)
            tracks.push({
              artist: items[i].track.artists[0].name,
              duration: items[i].track.duration_ms / 1000,
              name: items[i].track.name,
              uri: items[i].track.id,
              index: i + offset
            });
        }
        if (tracks.length === offset + 100)
          getPlaylist(token, tracks, user, URI, offset + 100, (err, res) =>
            callback(err, res)
          );
        else callback(null, tracks);
      } else callback(tracks);
    })
    .catch(err => {
      console.log(err);
    });
    export const getTracksFromPlaylist = (token, playlist, callback) => {
  const offset = 0;
  let user;
  let URI;
  let tracks = [];
  const p = playlist.split(":");
  if (p.length === 5) {
    user = p[2];
    URI = p[4];
  }
  if (p.length === 4) {
    user = p[1];
    URI = p[3];
  }
  if (p.length === 3) {
    tracks = [];
    URI = p[2];
    getTracksFromAlbum(URI).then(res => console.log(res));
  } else {
    console.log("Work In Progress Here");
  } /* TODO: getPlaylist(token, tracks, user, URI, offset, (err, res) =>
      callback(err, res)
    ); };
*/
