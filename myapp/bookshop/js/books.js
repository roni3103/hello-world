function buyFirstBook(itemName){
	//set cookie
	Cookies.set(itemName,1);
	console.log(itemName, Cookies.get(itemName));

}

function checkCookies(){
	//Check the cookies
	cky1=(Cookies.get('book1')=="" || Cookies.get('book1')==null)? 0:Cookies.get('book1');
	cky2=(Cookies.get('book2')=="" || Cookies.get('book2')==null)? 0:Cookies.get('book2');
	cky3=(Cookies.get('book3')=="" || Cookies.get('book3')==null)? 0:Cookies.get('book3');

	//change them to numbers
	prodCookie1=parseInt(cky1);
	prodCookie2=parseInt(cky2);
	prodCookie3=parseInt(cky3);
	prodCookie4=prodCookie1+prodCookie2+prodCookie3;
}

function pageTwoLoad(){
	//when this page loads
	checkCookies();


	//check the value of the cookie
	if(prodCookie3==0||prodCookie3==null)
	{
		console.log("display an empty basket");
		document.getElementById("emptyBasket").style.display="inline";
	}
	else
	{
		//do something else - but what?
		if(prodCookie1>0)
		{
			console.log("display the real basket");
			document.getElementById("cart1").style.display="inline";
		}
		else
		{
			console.log("nothing in book1 cookie");
		}
		
	};
}

