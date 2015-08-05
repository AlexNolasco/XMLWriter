function demo() {
    var xw = new XMLWriter('UTF-8');
    xw.formatting = 'indented'; //add indentation and newlines
    xw.indentChar = ' '; // indent with spaces
    xw.indentation = 2; //add 2 spaces per level

    xw.writeStartDocument();
    xw.writeStartElement('items');
    xw.writeComment('button');
    xw.writeStartElement('item');
    xw.writeAttributeString('id', 'item-1');
    xw.writeAttributeString('enabled', 'true');
    xw.writeStartElement('code');
    xw.writeCDATA('<button>Save</button>');
    xw.writeEndElement();
    xw.writeElementString('description', 'a save button');
    xw.writeEndElement();

    xw.writeComment('image');	
    xw.writeStartElement('item');
    xw.writeAttributeString('id', 'item-2');
	xw.writeRawAttributeString('data-test','this is a raw attribute string use carefully');
    xw.writeAttributeString('enabled', 'false');
    xw.writeStartElement('code');
    xw.writeCDATA('<img src="photo.gif" alt="me" />');
    xw.writeEndElement();
    xw.writeElementString('description', 'a pic of myself!');
    xw.writeEndElement();

    xw.writeComment('link');
    xw.writeStartElement('item');
    xw.writeAttributeString('id', 'item-3');
    xw.writeAttributeString('enabled', 'true');
    xw.writeStartElement('code');
    xw.writeCDATA('<a href="http://google.com">Google</a>');
    xw.writeEndElement();
    xw.writeElementString('description', 'a link to Google');
    xw.writeEndElement();

    xw.writeEndElement();
    xw.writeEndDocument();

    var asString = "";

    if (typeof XMLSerializer !== 'undefined') {
        asString = new XMLSerializer().serializeToString(xw.getDocument());
    } else {
        asString = xw.getDocument().xml;
    }
    alert(asString);
}