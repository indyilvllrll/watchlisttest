
/* Add Anime Modal */
document.getElementById('addAnimeButton').addEventListener('click', function () {
    $('#addAnimeModal').modal('show');
});

let animeLibrary = [
    {
        id: 'ANI-00001',
        title: 'Attack on Titan',
        genre: 'Action, Drama, Fantasy',
        releaseDate: '2013',
        description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends as they join the military to fight the Titans.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00002',
        title: 'My Hero Academia',
        genre: 'Action, Superhero',
        releaseDate: '2016',
        description: 'In a world where individuals develop superpowers known as "Quirks," Izuku Midoriya, born without any Quirk, still aspires to become a hero and enrolls in U.A. High School to achieve his dream.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00003',
        title: 'Death Note',
        genre: 'Mystery, Psychological, Supernatural',
        releaseDate: '2006',
        description: 'Light Yagami discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. As he takes on the identity of "Kira," a battle of wits ensues with the genius detective known as L.',
        status: 'completed'
    },
    {
        id: 'ANI-00004',
        title: 'One Punch Man',
        genre: 'Action, Comedy, Superhero',
        releaseDate: '2015',
        description: 'Saitama, a hero who can defeat any opponent with a single punch, grows bored with the lack of challenge in his battles and seeks a worthy adversary.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00005',
        title: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2009',
        description: 'Brothers Edward and Alphonse Elric use alchemy in their quest to find the Philosopher\'s Stone and restore their bodies after a failed alchemical experiment.',
        status: 'completed'
    },
    {
        id: 'ANI-00006',
        title: 'Sword Art Online',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2012',
        description: 'Players find themselves trapped in a virtual reality MMORPG, and if they die in the game, they die in real life. Kirito must navigate this dangerous world to survive.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00007',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        genre: 'Action, Supernatural, Historical',
        releaseDate: '2019',
        description: 'Tanjiro Kamado seeks a cure for his sister, who has been turned into a demon, and joins the Demon Slayer Corps to fight against powerful demons and discover the truth behind their existence.',
        status: 'unlisted'
    },
    {
        id: 'ANI-00008',
        title: 'One Piece',
        genre: 'Action, Adventure, Comedy',
        releaseDate: '1999',
        description: 'Monkey D. Luffy and his diverse crew set sail on the Grand Line in search of the legendary treasure known as One Piece, encountering powerful foes and making new friends along the way.',
        status: 'unlisted'
    },
    {
        id: 'ANI-00010',
        title: 'Tokyo Ghoul',
        genre: 'Horror, Mystery, Supernatural',
        releaseDate: '2014',
        description: 'Kaneki, a college student, becomes a half-ghoul after a chance encounter with one. As he grapples with his new identity, he must navigate a world where ghouls prey on humans.',
        status: 'watchlist'
    },
    {
        id: 'ANI-00011',
        title: 'Hunter x Hunter',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2011',
        description: 'Gon Freecss sets out to become a Hunter and find his missing father. Along the way, he encounters friends and foes while uncovering the mysteries of the Hunter Association.',
        status: 'watchlist'
    }
];

let watchlist = [

    {
        id: 'ANI-00010',
        title: 'Tokyo Ghoul',
        genre: 'Horror, Mystery, Supernatural',
        releaseDate: '2014',
        description: 'Kaneki, a college student, becomes a half-ghoul after a chance encounter with one. As he grapples with his new identity, he must navigate a world where ghouls prey on humans.',
        status: 'watchlist'
    },
    {
        id: 'ANI-00011',
        title: 'Hunter x Hunter',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2011',
        description: 'Gon Freecss sets out to become a Hunter and find his missing father. Along the way, he encounters friends and foes while uncovering the mysteries of the Hunter Association.',
        status: 'watchlist'
    }
];

let ongoing = [
    {
        id: 'ANI-00001',
        title: 'Attack on Titan',
        genre: 'Action, Drama, Fantasy',
        releaseDate: '2013',
        description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends as they join the military to fight the Titans.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
    {
        id: 'ANI-00002',
        title: 'My Hero Academia',
        genre: 'Action, Superhero',
        releaseDate: '2016',
        description: 'In a world where individuals develop superpowers known as "Quirks," Izuku Midoriya, born without any Quirk, still aspires to become a hero and enrolls in U.A. High School to achieve his dream.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
    {
        id: 'ANI-00004',
        title: 'One Punch Man',
        genre: 'Action, Comedy, Superhero',
        releaseDate: '2015',
        description: 'Saitama, a hero who can defeat any opponent with a single punch, grows bored with the lack of challenge in his battles and seeks a worthy adversary.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
    {
        id: 'ANI-00006',
        title: 'Sword Art Online',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2012',
        description: 'Players find themselves trapped in a virtual reality MMORPG, and if they die in the game, they die in real life. Kirito must navigate this dangerous world to survive.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
];

let completed = [
    {
        id: 'ANI-00003',
        title: 'Death Note',
        genre: 'Mystery, Psychological, Supernatural',
        releaseDate: '2006',
        description: 'Light Yagami discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. As he takes on the identity of "Kira," a battle of wits ensues with the genius detective known as L.',
        dateStarted: '11/11/23',
        dateCompleted: '11/26/23',
        status: 'completed'
    },
    {
        id: 'ANI-00005',
        title: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2009',
        description: 'Brothers Edward and Alphonse Elric use alchemy in their quest to find the Philosopher\'s Stone and restore their bodies after a failed alchemical experiment.',
        dateStarted: '11/11/23',
        dateCompleted: '11/26/23',
        status: 'completed'
    },
];


function addAnime() {
    // Get form values
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const description = document.getElementById('description').value;

    // Validate if title is not null
    if (!title) {
        alert('Please enter a title for the anime.');
        return;
    }

    // Check if title already exists in the anime library
    const existingAnime = animeLibrary.find(anime => anime.title === title);
    if (existingAnime) {
        alert('An anime with the same title already exists in the library.');
        return;
    }

    // Generate anime ID (incremental)
    const animeID = `ANI-${String(10000 + animeLibrary.length + 1).slice(1)}`;

    // Add the new anime to the library
    animeLibrary.push({
        id: animeID,
        title: title,
        genre: genre,
        releaseYear: releaseYear,
        description: description,
        status: 'unlisted'
    });

    // Update the table
    renderAnimeLibraryTable();

    // Clear the form
    document.getElementById('addAnimeForm').reset();

    // Close the modal
    $('#addAnimeModal').modal('hide');
}

function renderAnimeLibraryTable() {
    const tableBody = document.getElementById('animeLibraryTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    animeLibrary.forEach(anime => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${anime.id}</td>
            <td>${anime.title}</td>
            <td>${anime.genre}</td>
            <td>${anime.releaseYear}</td>
            <td>${anime.description}</td>
            <td>${anime.status}</td>
        `;
    });
}

// Event listener for the "Add Anime" button
document.getElementById('addAnimeButton').addEventListener('click', () => {
    // Clear the form when the modal is opened
    document.getElementById('addAnimeForm').reset();
});

// Initialize the table when the page loads
window.onload = renderAnimeLibraryTable;













/*/////////////////////////////*/
/*const animeData = [
    {
        id: 'ANI-00003',
        title: 'Death Note',
        genre: 'Mystery, Psychological, Supernatural',
        releaseDate: '2006',
        description: 'Light Yagami discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. As he takes on the identity of "Kira," a battle of wits ensues with the genius detective known as L.',
        dateStarted: '11/11/23',
        dateCompleted: '11/26/23',
        status: 'completed'
    },
    {
        id: 'ANI-00005',
        title: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Action, Adventure, Fantasy',
        releaseDate: '2009',
        description: 'Brothers Edward and Alphonse Elric use alchemy in their quest to find the Philosopher\'s Stone and restore their bodies after a failed alchemical experiment.',
        dateStarted: '11/11/23',
        dateCompleted: '11/26/23',
        status: 'completed'
    },
];

const tableContainer = document.querySelector('#acc-table-completed-body');

// Function to generate a table row
function createTableRow(anime) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th class="align-middle" scope="row">${anime.id}</th>
        <td class="align-middle">${anime.title}</td>
        <td class="align-middle">${anime.genre}</td>
        <td class="align-middle">${anime.releaseDate}</td>
        <td class="align-middle">${anime.description}</td>
        <td class="align-middle">${anime.dateStarted}</td>
        <td class="align-middle">${anime.dateCompleted}</td>
        <td class="align-middle"><span class="badge rounded-pill text-bg-success">${anime.status}</span></td>
        <td class="col-lg-2 align-middle text-center">
            <button class="btn btn-info view-ticket" data-ticket-no="${anime.id}">view</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
        </td>
    `;
    return row;
}

// Function to render the table
function renderTable() {
    tableContainer.innerHTML = '';

    // Loop through animeData and append rows to the table
    animeData.forEach((anime) => {
        const row = createTableRow(anime);
        tableContainer.appendChild(row);
    });
}

// Call the renderTable function to initially render the table
renderTable();*/