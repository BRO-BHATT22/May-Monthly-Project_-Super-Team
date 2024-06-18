const teamMembers = [
  {
    rank: '1.',
    name: 'New Jersey',
    status: 'good standing',
    attractions: ['Jersey Shore', 'Liberty State Park', 'Atlantic City'],
    strengths: 'Education and Healthcare',
    weaknesses: 'Traffic Congestion',
    biography: 'New Jersey, known as the Garden State, offers a blend of urban excitement and rural charm. It boasts top-notch education systems, vibrant cultural scenes, and beautiful coastal areas.',
    image: 'nj.jpg',
  },
  {
    rank: '2.',
    name: 'California',
    status: 'not so good standing',
    attractions: ['Hollywood', 'Golden Gate Bridge', 'Disneyland'],
    strengths: 'Innovation and Diversity',
    weaknesses: 'High Cost of Living',
    biography: 'California is a leader in technology, entertainment, and agriculture. Its diverse landscapes include beaches, forests, and mountains, making it a top destination for both residents and tourists.',
    image: 'ca.jpg',
  },
  {
    rank: '3.',
    name: 'Texas',
    status: 'not so good standing',
    attractions: ['The Alamo', 'Space Center Houston', 'Big Bend National Park'],
    strengths: 'Economic Growth and Low Taxes',
    weaknesses: 'Extreme Weather',
    biography: 'Texas is known for its rich history, strong economy, and unique culture. It offers a variety of landscapes and activities, from bustling cities to scenic national parks.',
    image: 'tx.jpg',
  },
  {
    rank: '4.',
    name: 'New York',
    status: 'good standing',
    attractions: ['Statue of Liberty', 'Central Park', 'Times Square'],
    strengths: 'Cultural Influence and Economic Powerhouse',
    weaknesses: 'High Cost of Living',
    biography: 'New York is a global hub for finance, arts, and culture. The state offers everything from the bustling streets of NYC to the serene landscapes of upstate New York.',
    image: 'ny.jpg',
  },
  {
    rank: '5.',
    name: 'Florida',
    status: 'good standing',
    attractions: ['Walt Disney World', 'Miami Beach', 'Everglades National Park'],
    strengths: 'Tourism and Climate',
    weaknesses: 'Hurricane Risk',
    biography: 'Florida is famous for its warm weather, beautiful beaches, and major attractions. It’s a popular destination for tourists and retirees alike.',
    image: 'fl.jpg',
  },
  {
    rank: '6.',
    name: 'Illinois',
    status: 'good standing',
    attractions: ['Millennium Park', 'Willis Tower', 'Navy Pier'],
    strengths: 'Agriculture and Education',
    weaknesses: 'High Taxes',
    biography: 'Illinois, with Chicago as its crown jewel, is known for its cultural contributions, economic strength, and rich agricultural regions.',
    image: 'il.jpg',
  },
  {
    rank: '7.',
    name: 'Virginia',
    status: 'good standing',
    attractions: ['Colonial Williamsburg', 'Shenandoah National Park', 'Virginia Beach'],
    strengths: 'History and Education',
    weaknesses: 'Traffic Congestion',
    biography: 'Virginia offers a rich history, top-rated educational institutions, and diverse landscapes from beaches to mountains.',
    image: 'va.jpg',
  },
  {
    rank: '8.',
    name: 'Washington',
    status: 'good standing',
    attractions: ['Space Needle', 'Mount Rainier', 'Pike Place Market'],
    strengths: 'Tech Industry and Natural Beauty',
    weaknesses: 'High Cost of Living',
    biography: 'Washington is known for its thriving tech industry, stunning natural landscapes, and vibrant cities like Seattle.',
    image: 'wa.jpg',
  },
  {
    rank: '9.',
    name: 'Colorado',
    status: 'not so good standing',
    attractions: ['Rocky Mountain National Park', 'Denver Art Museum', 'Mesa Verde'],
    strengths: 'Outdoor Recreation and Quality of Life',
    weaknesses: 'High Altitude',
    biography: 'Colorado is renowned for its outdoor activities, stunning mountain scenery, and high quality of life.',
    image: 'co.jpg',
  },
  {
    rank: '10.',
    name: 'Massachusetts',
    status: 'good standing',
    attractions: ['Freedom Trail', 'Harvard University', 'Cape Cod'],
    strengths: 'Education and Healthcare',
    weaknesses: 'High Cost of Living',
    biography: 'Massachusetts is a leader in education and healthcare, with a rich history and a variety of cultural and natural attractions.',
    image: 'ma.jpg',
  },
  {
    rank: '11.',
    name: 'North Carolina',
    status: 'good standing',
    attractions: ['Great Smoky Mountains', 'Biltmore Estate', 'Outer Banks'],
    strengths: 'Diverse Economy and Natural Beauty',
    weaknesses: 'Hurricane Risk',
    biography: 'North Carolina offers a mix of mountains, beaches, and thriving cities, along with a diverse economy and rich cultural heritage.',
    image: 'nc.jpg',
  },
  {
    rank: '12.',
    name: 'Oregon',
    status: 'good standing',
    attractions: ['Crater Lake', 'Portland', 'Columbia River Gorge'],
    strengths: 'Environmental Stewardship and Outdoor Activities',
    weaknesses: 'High Cost of Living',
    biography: 'Oregon is known for its commitment to the environment, stunning natural beauty, and vibrant cultural scenes in cities like Portland.',
    image: 'or.jpg',
  },
  
]

function generateTeamCards (){
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
      const card = document.createElement('div')
      card.classList.add('col-md-4')

      //styling card based on status:
      let backgroundColor = ''

      switch(member.status.toLowerCase()){
          case 'good standing':
              backgroundColor = '#00FF00'// orange for forward
              break
          case 'not so good standing':
              backgroundColor = '#FF0000'// orange for forward
              break    

      }   



      //Create a list of skills with the <li> tag
      const attractionsList = member.attractions.map(attractions => `<li> ${attractions} </li>`).join('')
      card.innerHTML = `

      </div><div class = "card h-100">
              <div class = "card-header" style="background-color: ${backgroundColor}">             
              <h3><b>${member.rank}</b> ${member.name} </h3></div>
              <div class = "card-body">
              <img style="width: 200px" src=${member.image} style="justify-content-center">
                  <p><strong>Status:</strong> ${member.status}</p>
                  <p><strong>Attractions:</strong>
                      <ul>
                      ${attractionsList}
                      </ul>
                  <p><strong>Strengths:</strong> ${member.strengths}</p>
                  <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                  <p><strong>Biography:</strong> ${member.biography}</p>
              </div>
          </div>
          
      `
      teamCardsContainer.appendChild(card)
  })
  
}

window.onload = generateTeamCards()