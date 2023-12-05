
/* Add Anime Modal */
document.getElementById('addAnimeButton').addEventListener('click', function () {
    $('#addAnimeModal').modal('show');
});

let animeLibrary = [
    {
        id: 'ANI-00001',
        title: 'Attack on Titan',
        genre: 'Action, Drama, Fantasy',
        releaseYear: '2013',
        description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends as they join the military to fight the Titans.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00002',
        title: 'My Hero Academia',
        genre: 'Action, Superhero',
        releaseYear: '2016',
        description: 'In a world where individuals develop superpowers known as "Quirks," Izuku Midoriya, born without any Quirk, still aspires to become a hero and enrolls in U.A. High School to achieve his dream.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00003',
        title: 'Death Note',
        genre: 'Mystery, Psychological, Supernatural',
        releaseYear: '2006',
        description: 'Light Yagami discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. As he takes on the identity of "Kira," a battle of wits ensues with the genius detective known as L.',
        status: 'completed'
    },
    {
        id: 'ANI-00004',
        title: 'One Punch Man',
        genre: 'Action, Comedy, Superhero',
        releaseYear: '2015',
        description: 'Saitama, a hero who can defeat any opponent with a single punch, grows bored with the lack of challenge in his battles and seeks a worthy adversary.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00005',
        title: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2009',
        description: 'Brothers Edward and Alphonse Elric use alchemy in their quest to find the Philosopher\'s Stone and restore their bodies after a failed alchemical experiment.',
        status: 'completed'
    },
    {
        id: 'ANI-00006',
        title: 'Sword Art Online',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2012',
        description: 'Players find themselves trapped in a virtual reality MMORPG, and if they die in the game, they die in real life. Kirito must navigate this dangerous world to survive.',
        status: 'ongoing'
    },
    {
        id: 'ANI-00007',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        genre: 'Action, Supernatural, Historical',
        releaseYear: '2019',
        description: 'Tanjiro Kamado seeks a cure for his sister, who has been turned into a demon, and joins the Demon Slayer Corps to fight against powerful demons and discover the truth behind their existence.',
        status: 'unlisted'
    },
    {
        id: 'ANI-00008',
        title: 'One Piece',
        genre: 'Action, Adventure, Comedy',
        releaseYear: '1999',
        description: 'Monkey D. Luffy and his diverse crew set sail on the Grand Line in search of the legendary treasure known as One Piece, encountering powerful foes and making new friends along the way.',
        status: 'unlisted'
    },
    {
        id: 'ANI-00010',
        title: 'Tokyo Ghoul',
        genre: 'Horror, Mystery, Supernatural',
        releaseYear: '2014',
        description: 'Kaneki, a college student, becomes a half-ghoul after a chance encounter with one. As he grapples with his new identity, he must navigate a world where ghouls prey on humans.',
        status: 'watchlist'
    },
    {
        id: 'ANI-00011',
        title: 'Hunter x Hunter',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2011',
        description: 'Gon Freecss sets out to become a Hunter and find his missing father. Along the way, he encounters friends and foes while uncovering the mysteries of the Hunter Association.',
        status: 'watchlist'
    }
];

let watchlist = [

    {
        id: 'ANI-00010',
        title: 'Tokyo Ghoul',
        genre: 'Horror, Mystery, Supernatural',
        releaseYear: '2014',
        description: 'Kaneki, a college student, becomes a half-ghoul after a chance encounter with one. As he grapples with his new identity, he must navigate a world where ghouls prey on humans.',
        status: 'watchlist'
    },
    {
        id: 'ANI-00011',
        title: 'Hunter x Hunter',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2011',
        description: 'Gon Freecss sets out to become a Hunter and find his missing father. Along the way, he encounters friends and foes while uncovering the mysteries of the Hunter Association.',
        status: 'watchlist'
    }
];

let ongoing = [
    {
        id: 'ANI-00001',
        title: 'Attack on Titan',
        genre: 'Action, Drama, Fantasy',
        releaseYear: '2013',
        description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends as they join the military to fight the Titans.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
    {
        id: 'ANI-00002',
        title: 'My Hero Academia',
        genre: 'Action, Superhero',
        releaseYear: '2016',
        description: 'In a world where individuals develop superpowers known as "Quirks," Izuku Midoriya, born without any Quirk, still aspires to become a hero and enrolls in U.A. High School to achieve his dream.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
    {
        id: 'ANI-00004',
        title: 'One Punch Man',
        genre: 'Action, Comedy, Superhero',
        releaseYear: '2015',
        description: 'Saitama, a hero who can defeat any opponent with a single punch, grows bored with the lack of challenge in his battles and seeks a worthy adversary.',
        dateStarted: '12/1/23',
        status: 'ongoing'
    },
    {
        id: 'ANI-00006',
        title: 'Sword Art Online',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2012',
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
        releaseYear: '2006',
        description: 'Light Yagami discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. As he takes on the identity of "Kira," a battle of wits ensues with the genius detective known as L.',
        dateStarted: '11/11/23',
        dateCompleted: '11/26/23',
        status: 'completed'
    },
    {
        id: 'ANI-00005',
        title: 'Fullmetal Alchemist: Brotherhood',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2009',
        description: 'Brothers Edward and Alphonse Elric use alchemy in their quest to find the Philosopher\'s Stone and restore their bodies after a failed alchemical experiment.',
        dateStarted: '11/11/23',
        dateCompleted: '11/26/23',
        status: 'completed'
    },
];

// Add new anime to the library
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
    const animeID = `ANI-${String(100000 + animeLibrary.length + 2).slice(1)}`;

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


// Add classes based on the anime's status
function addClassesToElement(element, classes) {
    element.classList.add(...classes);
}
function renderAnimeLibraryTable() {
    const tableBody = document.getElementById('animeLibraryTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    animeLibrary.forEach(anime => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td class="align-middle">${anime.id}</td>
            <td class="align-middle">${anime.title}</td>
            <td class="align-middle">${anime.genre}</td>
            <td class="align-middle">${anime.releaseYear}</td>
            <td class="align-middle">${anime.description}</td>
            <td class="align-middle"><span class = "status-cell badge rounded-pill"> ${anime.status}</span></td>
            <td class="col-lg-2 align-middle text-center">
                <button class="btn btn-info view-ticket" data-ticket-no="${anime.id}">view</button>
                <button class="btn btn-warning">Edit</button>
            </td>
        `;

        const statusCell = row.querySelector('.status-cell');

        // Add classes based on the anime's status
        if (anime.status === 'ongoing') {
            addClassesToElement(statusCell, ['text-bg-warning']);
        } else if (anime.status === 'completed') {
            addClassesToElement(statusCell, ['text-bg-success']);
        } else if (anime.status === 'unlisted') {
            addClassesToElement(statusCell, ['text-bg-secondary']);
        } else if (anime.status === 'watchlist') {
            addClassesToElement(statusCell, ['text-bg-light']);
        }

    });


}

// Event listener for the "Add Anime" button
document.getElementById('addAnimeButton').addEventListener('click', () => {
    // Clear the form when the modal is opened
    document.getElementById('addAnimeForm').reset();
});



///////// VIEW LIBRARY ///////////

// Update the "View" button click handler
document.getElementById('animeLibraryTable').addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a "View" button
    if (target.classList.contains('view-ticket')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        // Find the corresponding anime in the library
        selectedAnime = animeLibrary.find(anime => anime.id === animeID);

        // Populate the modal with anime details
        document.getElementById('viewID').textContent = selectedAnime.id;
        document.getElementById('viewTitle').textContent = selectedAnime.title;
        document.getElementById('viewGenre').textContent = selectedAnime.genre;
        document.getElementById('viewReleaseYear').textContent = selectedAnime.releaseYear;
        document.getElementById('viewDescription').textContent = selectedAnime.description;
        document.getElementById('viewStatus').textContent = selectedAnime.status;

        // Show the modal
        $('#viewAnimeModal').modal('show');

        const addToWatchlistBtn = document.getElementById('addToWatchlistBtn');
        // Check if the status is "unlisted" to enable the button, otherwise disable it
        addToWatchlistBtn.disabled = selectedAnime.status !== 'unlisted';
    }
});


// Add click handler for "Add to Watchlist" button inside the modal
document.getElementById('addToWatchlistBtn').addEventListener('click', function () {
    // Check if the status is "unlisted"
    if (selectedAnime.status === 'unlisted') {
        // Update the status in the library table
        selectedAnime.status = 'watchlist';
        renderAnimeLibraryTable(); // Update the library table

        // Add the anime to the watchlist table
        addToWatchlist(selectedAnime);

        // Close the modal
        $('#viewAnimeModal').modal('hide');
    }
});

document.getElementById('animeWatchlistTable').addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a "Delete" button
    if (target.classList.contains('delete')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        const watchlistIndex = watchlist.findIndex(anime => anime.id === animeID);

        // Find the corresponding anime in the watchlist
        const selectedAnime = watchlist.find(anime => anime.id === animeID);

        // Show the modal with the confirmation message
        const alertText = `Are you sure you want to delete "${selectedAnime.title}" from your watchlist?`;
        document.getElementById('deleteConfirmationAlertText').textContent = alertText;
        $('#deleteConfirmationModal').modal('show');

        // Add a click event listener to the "Yes, Delete" button in the modal
        document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
            // Remove the anime from the watchlist
            if (watchlistIndex !== -1) {
                const deletedAnime = watchlist.splice(watchlistIndex, 1)[0];

                // Update the status in the library to "unlisted"
                const libraryIndex = animeLibrary.findIndex(anime => anime.id === animeID);
                if (libraryIndex !== -1) {
                    animeLibrary[libraryIndex].status = 'unlisted';
                    renderAnimeLibraryTable(); // Update the library table

                    // Update the watchlist table
                    renderWatchlistTable();
                    // Close the modal
                    $('#deleteConfirmationModal').modal('hide');
                }
            }
        });
    }
});






function renderWatchlistTable() {
    const tableBody = document.getElementById('animeWatchlistTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    watchlist.forEach(anime => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td class="align-middle">${anime.id}</td>
            <td class="align-middle">${anime.title}</td>
            <td class="align-middle">${anime.genre}</td>
            <td class="align-middle">${anime.releaseYear}</td>
            <td class="align-middle">${anime.description}</td>
            <td class="align-middle"><span class = "status-cell badge rounded-pill"> ${anime.status}</span></td>
            <td class="col-lg-2 align-middle text-center">
                <button class="btn btn-info view-ticket" data-ticket-no="${anime.id}">view</button>
                <button class="btn btn-danger  delete" data-ticket-no="${anime.id}">Delete</button>
            </td>
        `;

        const statusCell = row.querySelector('.status-cell');

        // Add classes based on the anime's status
        if (anime.status === 'ongoing') {
            addClassesToElement(statusCell, ['text-bg-warning']);
        } else if (anime.status === 'completed') {
            addClassesToElement(statusCell, ['text-bg-success']);
        } else if (anime.status === 'unlisted') {
            addClassesToElement(statusCell, ['text-bg-secondary']);
        } else if (anime.status === 'watchlist') {
            addClassesToElement(statusCell, ['text-bg-light']);
        }
    });
    // Add click handler for "Delete" button in the watchlist table
    document.querySelectorAll('.delete-from-watchlist').forEach(button => {
        button.addEventListener('click', function () {
            const animeID = this.getAttribute('data-anime-id');
            deleteFromWatchlistAndUpdateStatus(animeID);
        });
    });


}

// Function to add anime to the watchlist table
function addToWatchlist(anime) {
    // Add the anime to the watchlist
    watchlist.push({
        id: anime.id,
        title: anime.title,
        genre: anime.genre,
        releaseYear: anime.releaseYear,
        description: anime.description,
        status: 'watchlist'
    });

    // Update the watchlist table
    renderWatchlistTable();
}


// Initialize the table when the page loads
window.onload = function () {
    renderWatchlistTable();
    renderAnimeLibraryTable();
};







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