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
      
      // Editer le contenu de la balise 'main' en y ajoutant une section
      document.querySelector('main').innerHTML += `
        <section>
          <article>
            <h2>${item.name} <b>(${item.username})</b></h2>
            <ul>
              <li><a href="mailto:${item.email}">${item.email}</a></li>
              <li><a href="tel:${item.phone}">${item.phone}</a></li>
              <li>${item.address.street} ${item.address.suite} ${item.address.zipcode} ${item.address.city}</li>
            </ul>
          </article>

          <article>
            <h3>${item.company.name}</h3>
            <p>${item.company.catchPhrase}</p>
            <p>${item.company.bs}</p>
          </article>
        </section>
      `;
    }
  })
  .catch( fetchError => {
    // Bind request error
    console.log(fetchError)
  })
//