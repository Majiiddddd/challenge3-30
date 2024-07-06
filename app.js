
var btn = document.getElementById("button");
btn.addEventListener('click' , generate)

function generate(){
    var quotes = { 
        "Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."', 
        "Pierce Brown" :  '"Man cannot be freed by the same injustice that enslaved it."', 
        "Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."', 
        "Madeline Miller" : '"Bury us, and mark our names above. Let us be free."'
    }

    
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}

    
