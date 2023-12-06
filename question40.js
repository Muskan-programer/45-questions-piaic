function makeAlbum(artist, title, tracks) {
    var Album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return Album,
    ;
}
var album1 = makeAlbum("Atif Aslam", "Tajdar-e-Haram");
var album2 = makeAlbum("Ali Zafar", "Balaghal-Ula Bi-Kamaalihi", 12);
var album3 = makeAlbum("Maher Zzin", "Rahmatun Lil 'Alameen");
console.log(album1);
console.log(album2);
console.log(album3);
