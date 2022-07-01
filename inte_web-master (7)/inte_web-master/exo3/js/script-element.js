/* 
  Ajax request
  Use Ftech API to send GET ajax request
*/
  fetch(
    'https://jsonplaceholder.typicode.com/users', //=> URL to fetch & request header
    {
      method: 'GET'
    }
  )
  .then( rawResponse => rawResponse.json()) //=> Extract JSON data from the Fetch
  .then( jsonResponse => {
    // Create new 'ul' HTML tag
    let newUl = document.createElement('ul')

    // Loop on JSON data
    for(let item of jsonResponse){
      console.log(item)
      
      // Create new 'li' HTML tag
      let newLi = document.createElement('li');
      let newP = document.createElement('p');
      
      let newEmail = document.createElement('a');
      let newTel = document.createElement('a');

      // Add HTML content in the 'li' HTML tag
      newP.innerHTML = item.name;
      newEmail.innerText = item.email;
      newTel.innerText = item.phone;
      newEmail.setAttribute('href', 'mailto:' + item.email)
      newTel.setAttribute('href', 'tel:' + item.phone)

      newLi.appendChild(newP)
      newLi.appendChild(newEmail)
      newLi.appendChild(newTel)

      // Add 'li' HTML tag to 'ul'
      newUl.appendChild(newLi)
    }

    // At the end of the loop, add the 'ul' HTML tag in the body
    document.querySelector('body').appendChild(newUl)
  })
  .catch( fetchError => {
    // Bind request error
    console.log(fetchError)
  })
//