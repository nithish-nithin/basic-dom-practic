let body=document.getElementsByTagName('body')[0]
let h1 =document.createElement('h1')
h1.innerHTML='dom practic'
body.appendChild(h1)
h1.style.color='red'
h1.style.textAlign='center'
h1.style.fontSize='50px'
let p=document.createElement('p')
p.innerHTML='   Dynamic HTML, or DHTML, is a collection of technologies used together to create interactive and animated websites by using a combination of a static markup language (such as HTML), a client-side scripting language (such as JavaScript), a presentation definition language (such as CSS), and the Document Object Model (DOM).[1] The application of DHTML was introduced by Microsoft with the release of Internet Explorer 4 in 1997. Today, references to unobtrusive JavaScript coding (DOM Scripting) have replaced the usage of the term DHTMl'
body.appendChild(p)
p.style.fontSize='20px'
p.style.textAlign='justify'

 