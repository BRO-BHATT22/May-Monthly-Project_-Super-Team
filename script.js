const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Dribbling', 'Passing', 'Shooting'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography: 'blurb and stuff'
    },
    {
        name: 'Lionel Messi Jr.',
        position: 'Mid-Fielder',
        skills: ['Dribbling', 'Passing', 'Shooting'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography: 'blurb and stuff'
    },
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Dribbling', 'Passing', 'Shooting'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography: 'blurb and stuff'
    },
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Dribbling', 'Passing', 'Shooting'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography: 'blurb and stuff',
    },
]

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')


    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

            //styling card based on position:
            let backgroundColor






        //Create a list of skills with the <li> tags
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = `
    <div class = "card">
    <div class = "card-header"> ${member.name}</div>
    <div class = "card-body">
        <p><strong> Position:</strong> ${member.position}</p>
        <p><strong> Skills:</strong>
        <ul>
         ${skillsList}</p>
         </ul>
         <p><strong> strengths:</strong> ${member.strengths}</p>
         <p><strong> weaknesses:</strong> ${member.weaknesses}</p>
         <p><strong> blurb:</strong> ${member.biography}</p>



        </div>
    </div>

    `



        teamCardsContainer.appendChild(card)
    })
}
window.onload = generateTeamCards()