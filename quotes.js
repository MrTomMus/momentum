const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuete = document.querySelector('.change-quote')

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    let random = Math.floor(Math.random() * (data.length - 0) + 0);

    quote.textContent = data[random].text;
    author.textContent = data[random].author;

  }

  getQuotes();

  changeQuete.addEventListener('click', getQuotes);