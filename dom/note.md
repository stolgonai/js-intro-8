## ACCESSING DOM ELEMENTS

#### getElementById

- Access elements by their id property
- If not element found, returns `null`

#### getElementsByClassName

- Access elements by their class property
- if element(s) exist return HTMLCollection with elements
- if not, returns empty HTMLCollection
- Think HTMLCollection as a regular array.

### getElementsByTagName

- Access elements by their tag name
- if element(s) exist returns HTMLCollection with elements
- if not, returns empty HTMLCollection
- Think HTMLCollection as a regular array.

### querySelector()

- Universal way of accessing an element. Ex: id, class, tag, etc
- Returns single element(nodes)
- If it encouters multiple elements with same property, returns the first one

### querySelectorAll()

- Universal way of accessing an elements. Ex: id, class, tag, etc
- Returns NodeList of elements(nodes)
- If not found, retuns empty NodeList

## STYLING ELEMENTS

- Every node/element contains object called CSSStyleDeclaration that contains all CSS properties of that node/element.
- You can change those css values

## innerHTML

- Every DOM node has the innerHTML property.
- innerHTML has all the HTML and content of its children.
- It can be used to view or change the HTML of a node.
- You can also use `innerText` or `textContent` similarly
- We can also add html content using innerHTML.Ex: `articleEl.innerHTML = "<h2>Article Heading</h1>"`

## Traversing Dom

DOM treee contains all kinds of nodes: elements, whitespaces, and comments

### childNodes

- returns NodeList of all nodes

#### children

- Returns HTML Collection of only elements (no whitespaces, comments..)

#### Other useful node methods

- firstChild, lastChild
- previousSibling, nextSibling

#### Other useful element methods

- firstElementChild, lastElementChild
- previousElementSibling, lastElementSibling

### Create element in the DOM

- `createElement`
- To add a content to a newly created elmnt use either `innert`
