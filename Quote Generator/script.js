
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
let jsonData = " ";
let quoteData = " ";


const getQuotes = async () => {
	const api = "https://type.fit/api/quotes";
	try {
		let data = await fetch(api);
		jsonData = await data.json();
        
        let randNum = Math.floor(Math.random() * 17);
		quoteData = jsonData[randNum];
	    quotes.innerText = `${quoteData.text}`;

	    quoteData.author == null ?
		(author.innerText = "By unKnown") :
		(author.innerText = `By ${quoteData.author}`);

	} catch (error) {
		console.log(error.message);
	}

}
