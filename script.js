let tag = document.querySelector('input');
let search = document.querySelector('button');
let photoContainer = document.querySelector('.photoContainer');
let api_key = 'a1281128dab78fdc345cd5fe4abe0468';

//line 10 is fetching the info we need from flickr and returns in json format. I set the limit to 500
search.onclick = () => {
	photoContainer.innerHTML = ''
	let myPhoto = []
	fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${tag.value}&format=json&nojsoncallback=1&per_page=500`)
	.then(data=>data.json())
	.then(res=>{
//set quantity to 500 and created a random array and in the for loop, I decided to set the limit of pictures displayed at any
//given time to 9.
		let qtyty = 499
		let randomArray=[]
//running setting the i to less than pictures, to be displayed at random
//as it loops through the pictures, the pictures are added to the empy list of random array in line 16.
		for(let i = 0; i<9; i++){
			randomArray.push(Math.round(Math.random()*qtyty)) //to ensure that only integers are in the random array
		}
		console.log(randomArray)
//To display only those photos from my list of the array of random photos
//map on line 26...Creates a new array with the result of calling a function for each array element

		myPhoto = randomArray.map(num=>res.photos.photo[num])
		console.log(myPhoto)
//format recommended in API documentation ... line 28
		myPhoto.forEach(photo=>{
			photoContainer.innerHTML += `
				<img src='https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg' alt='${photo.title}'/>
			`
		})
	})
}


