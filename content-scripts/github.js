const githubLinks = [...document.querySelectorAll('a')];
githubLinks.forEach(checkLink);

function checkLink(a, index) {
	if (a.href.indexOf("github.com") === -1){
		a.setAttribute('target','_blank');
		console.log(a.href);		
	}
}

