walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var text = textNode.nodeValue;

	var replacedText = text.replace(/\bHacker\b/g, "Password getter");
	var replacedText = text.replace(/\bHackers\b/g, "Password getters");
	var replacedText = text.replace(/\bhacker\b/g, "password getter");
	var replacedText = text.replace(/\bhackers\b/g, "password getters");
	var replacedText = text.replace(/\bhacked\b/g, "got the password");
	var replacedText = text.replace(/\bHacked\b/g, "Got the password");
	var replacedText = text.replace(/\bhack\b/g, "password get");
	var replacedText = text.replace(/\bHack\b/g, "Password get");
	var replacedText = text.replace(/\bhacks\b/g, "password gets");
	var replacedText = text.replace(/\bHacks\b/g, "Password gets");
	var replacedText = text.replace(/\bhacking\b/g, "password getting");
	var replacedText = text.replace(/\bHacking\b/g, "Password getting");

	
	if (replacedText !== text) {
    	element.replaceChild(document.createTextNode(replacedText), node);
	}
}


