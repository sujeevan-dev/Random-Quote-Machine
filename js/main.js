var randomQuote = {
    		quotes: [

{
	quote: "\"Lawless are they that make their wills their law.\""
},

{ 
	quote: "\"Expectation is the root of all heartache.\""
},

{ 
	quote: "\"I say there is no darkness but ignorance.\""
},

{ 
	quote: "\"Nothing is good or bad, but thinking makes it so.\""
},

{ 
	quote: "\"Make not your thoughts your prison.\""
},

{ 
	quote: "\"Brevity is the soul of wit.\""
},

{ 
	quote: "\"Love all, trust a few, do wrong to none.\""
},

{ 
	quote: "\"One may smile, and smile, and be a villain.\""
},

{ 
	quote: "\"No legacy is so rich as honesty.\""
},

{ 
	quote: "\"Have more than you show, speak less than you know.\""
},

{ 
	quote: "\"Give every man thy ear, a few man thy voice.\""
},

{ 
	quote: "\"God has given you one face, and you make yourself another.\""
},

{ 
	quote: "\"Hell is empty adn all the devils are here.\""
},

{ 
	quote: "\"The course of true love never did run smooth...\""
},

{ 
	quote: "\"We are such stuff as dreams are made on.\""
},

{ 
	quote: "\"When words fail, music speaks.\""
},

{ 
	quote: "\"We know what we are, but know not what we may be.\""
},

{ 
	quote: "\"We are such stuff as dreams are made on.\""
},

{
	quote: "\"A little more than kin, and less than kind.\""
},

{
	quote: "\"The eyes are the window to your soul.\""
}

    	]
    
}

var quote = " ";
    	

    	//functions

    	var chooseRanQuote = function () {
    		var randNum = Math.floor (Math.random() * (randomQuote.quotes.length - 0) + 0);
    		quote = randomQuote.quotes[randNum].quote;

    	}


    	var displayQuote = function () {
    		$('.btn').on('click', function () {
    			$('.randomQuote').html(quote);
    			chooseRanQuote();
    		});
    	}

    	chooseRanQuote();
    	displayQuote();

  