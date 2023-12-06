function makeAlbum(artist: string,title: string, tracks?: number): object{
    const Album = {
        artist: artist,
        title: title,
    };

    if (tracks!== undefined){
        Album ['tracks'] = tracks;
    }

    return Album
}

const album1 = makeAlbum("Atif Aslam","Tajdar-e-Haram");
const album2 = makeAlbum("Ali Zafar", "Balaghal-Ula Bi-Kamaalihi", 12);
const album3 = makeAlbum("Maher Zzin","Rahmatun Lil 'Alameen");


console.log(album1);
console.log(album2);
console.log(album3);


