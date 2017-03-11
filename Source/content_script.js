var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            text = text.replace(/Hacker/, 'Password getter');
            text = text.replace(/Hackers/, 'Password getters');
            text = text.replace(/hacker/, 'password getter');
            text = text.replace(/hackers/, 'password getters');
            text = text.replace(/hacked/, 'got the password');
            text = text.replace(/Hacked/, 'Got the password');
            text = text.replace(/hack/, 'password get');
            text = text.replace(/Hack/, 'Password get');
            text = text.replace(/hacks/, 'password gets');
            text = text.replace(/Hacks/, 'Password gets');
            text = text.replace(/hacking/, 'password getting');
            text = text.replace(/Hacking/, 'Password getting');

            node.nodeValue = text;
        }
    }
}