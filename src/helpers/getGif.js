export const getGif = async (category) => {
        
    const url="https://api.giphy.com/v1/gifs/search?api_key=";
    const key="Cb2aDPhpHqVCLxzG55vsbIa3FeqPlQtw";

    const url2=`${url}${key}&q=${ encodeURI(category)}&limit=10`;
    const resp = await fetch(url2);
    const {data} = await resp.json();

    const gifs = data.map( (img) => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}     
