
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
        id: 'ANI-00009',
        title: 'Tokyo Ghoul',
        genre: 'Horror, Mystery, Supernatural',
        releaseYear: '2014',
        description: 'Kaneki, a college student, becomes a half-ghoul after a chance encounter with one. As he grapples with his new identity, he must navigate a world where ghouls prey on humans.',
        status: 'watchlist'
    },
    {
        id: 'ANI-00010',
        title: 'Hunter x Hunter',
        genre: 'Action, Adventure, Fantasy',
        releaseYear: '2011',
        description: 'Gon Freecss sets out to become a Hunter and find his missing father. Along the way, he encounters friends and foes while uncovering the mysteries of the Hunter Association.',
        status: 'watchlist'
    }
];

let watchlist = [

    {
        id: 'ANI-00009',
        title: 'Tokyo Ghoul',
        genre: 'Horror, Mystery, Supernatural',
        releaseYear: '2014',
        description: 'Kaneki, a college student, becomes a half-ghoul after a chance encounter with one. As he grapples with his new identity, he must navigate a world where ghouls prey on humans.',
        status: 'watchlist'
    },
    {
        id: 'ANI-00010',
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
    const animeID = `ANI-${String(100000 + animeLibrary.length + 1).slice(1)}`;

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
    updateStatusCards();


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
                <button class="btn btn-warning edit-ticket"data-ticket-no="${anime.id}">Edit</button>
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


// Function to update anime data in all tables
function updateAnimeData(animeID, updatedAnimeData) {
    // Update the anime data in the library
    const libraryIndex = animeLibrary.findIndex(anime => anime.id === animeID);
    if (libraryIndex !== -1) {
        animeLibrary[libraryIndex] = updatedAnimeData;
    }

    // Update the anime data in the watchlist
    const watchlistIndex = watchlist.findIndex(anime => anime.id === animeID);
    if (watchlistIndex !== -1) {
        watchlist[watchlistIndex] = updatedAnimeData;
    }

    // Update the anime data in the ongoing list
    const ongoingIndex = ongoing.findIndex(anime => anime.id === animeID);
    if (ongoingIndex !== -1) {
        ongoing[ongoingIndex] = updatedAnimeData;
    }

    // Update the anime data in the completed list
    const completedIndex = completed.findIndex(anime => anime.id === animeID);
    if (completedIndex !== -1) {
        completed[completedIndex] = updatedAnimeData;
    }
    // Update the tables
    renderAnimeLibraryTable();
    renderWatchlistTable();
    renderOngoinglistTable();
    renderCompletedTable();

}


// Add event listener for "View" and "Edit" buttons in the library table
document.getElementById('animeLibraryTable').addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a "View" or "Edit" button
    if (target.classList.contains('view-ticket') || target.classList.contains('edit')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        // Find the corresponding anime in the library
        selectedAnime = animeLibrary.find(anime => anime.id === animeID);

            const modalID = 'viewAnimeModal';

            // Populate the modal with anime details
            document.getElementById(`${modalID}-viewID`).textContent = selectedAnime.id;
            document.getElementById(`${modalID}-viewTitle`).textContent = selectedAnime.title;
            document.getElementById(`${modalID}-viewGenre`).textContent = selectedAnime.genre;
            document.getElementById(`${modalID}-viewReleaseYear`).textContent = selectedAnime.releaseYear;
            document.getElementById(`${modalID}-viewDescription`).textContent = selectedAnime.description;
            document.getElementById(`${modalID}-viewStatus`).textContent = selectedAnime.status;

            // Show the modal
        $('#viewAnimeModal').modal('show');
        // Add event listener for the "Update" button inside the modal


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

    // Check if the clicked element is a "Delete" button (watchlist)
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
                    updateStatusCards();

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
    updateStatusCards();

}




///////////////////////////////////////

function addToOngoingAndRemoveFromWatchlist(anime) {
    // Remove the anime from the watchlist

    const watchlistIndex = watchlist.findIndex(watchedAnime => watchedAnime.id === anime.id);
    if (watchlistIndex !== -1) {
        watchlist.splice(watchlistIndex, 1);
    }

    // Update the anime's status in the library to "ongoing"
    const libraryIndex = animeLibrary.findIndex(libraryAnime => libraryAnime.id === anime.id);
    if (libraryIndex !== -1) {
        animeLibrary[libraryIndex].status = 'ongoing';
        renderAnimeLibraryTable(); // Update the library table
    }

    // Add the anime to the ongoing list
    ongoing.push({
        id: anime.id,
        title: anime.title,
        genre: anime.genre,
        releaseYear: anime.releaseYear,
        description: anime.description,
        status: 'ongoing',
        dateStarted: getCurrentDate() // Set the current date
    });

    // Update the ongoing list table
    renderOngoinglistTable();

    // Update the watchlist table
    renderWatchlistTable();
    updateStatusCards();

    // Show a success notification
}


function renderOngoinglistTable() {
    const tableBody = document.getElementById('animeOngoinglistTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    ongoing.forEach(anime => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td class="align-middle">${anime.id}</td>
            <td class="align-middle">${anime.title}</td>
            <td class="align-middle">${anime.genre}</td>
            <td class="align-middle">${anime.releaseYear}</td>
            <td class="align-middle">${anime.description}</td>
            <td class="align-middle">${anime.dateStarted}</td>
            <td class="align-middle"><span class = "status-cell badge rounded-pill"> ${anime.status}</span></td>
            <td class="col-lg-2 align-middle text-center">
                <button class="btn btn-info view-ticket" data-ticket-no="${anime.id}">view</button>
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
    // Add click handler for "Add to Ongoing" button inside the modal
}

document.getElementById('addToOngoingBtn').addEventListener('click', function () {
    // Check if the status is "unlisted"
    console.log('selectedAnime:', selectedAnime);

    if (selectedAnime.status === 'watchlist') {
        // Add the anime to the ongoing list and remove from the watchlist
        addToOngoingAndRemoveFromWatchlist(selectedAnime);

        // Close the modal
        $('#viewWatchlistModal').modal('hide');
    }
});
///////// VIEW Watchlist ///////////

// Update the "View" button click handler
document.getElementById('animeWatchlistTable').addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a "View" button
    if (target.classList.contains('view-ticket')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        // Find the corresponding anime in the library
        selectedAnime = watchlist.find(anime => anime.id === animeID);

        const modalID = 'viewWatchlistModal';

        // Populate the modal with anime details
        document.getElementById(`${modalID}-viewID`).textContent = selectedAnime.id;
        document.getElementById(`${modalID}-viewTitle`).textContent = selectedAnime.title;
        document.getElementById(`${modalID}-viewGenre`).textContent = selectedAnime.genre;
        document.getElementById(`${modalID}-viewReleaseYear`).textContent = selectedAnime.releaseYear;
        document.getElementById(`${modalID}-viewDescription`).textContent = selectedAnime.description;
        document.getElementById(`${modalID}-viewStatus`).textContent = selectedAnime.status;

        // Show the modal
        $('#viewWatchlistModal').modal('show');

    }
});


document.getElementById('animeLibraryTable').addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a "View" button
    if (target.classList.contains('edit-ticket')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        // Find the corresponding anime in the library
        const selectedAnime = animeLibrary.find(anime => anime.id === animeID);

        const modalID = 'editAnimeModal'; // Correct modal ID

        // Populate the modal with anime details
        document.getElementById(`${modalID}-editTitle`).value = selectedAnime.title;
        document.getElementById(`${modalID}-editGenre`).value = selectedAnime.genre;
        document.getElementById(`${modalID}-editReleaseYear`).value = selectedAnime.releaseYear;
        document.getElementById(`${modalID}-editDescription`).value = selectedAnime.description;
        document.getElementById(`${modalID}-editStatus`).value = selectedAnime.status;

        // Show the modal
        $(`#${modalID}`).modal('show');

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            // Get the updated anime data from the modal inputs
            const updatedAnimeData = {
                id: animeID,
                title: document.getElementById(`${modalID}-editTitle`).value,
                genre: document.getElementById(`${modalID}-editGenre`).value,
                releaseYear: document.getElementById(`${modalID}-editReleaseYear`).value,
                description: document.getElementById(`${modalID}-editDescription`).value,
                status: document.getElementById(`${modalID}-editStatus`).value
            };

            // Update the anime data in all tables
            updateAnimeData(animeID, updatedAnimeData);
            // Hide the modal
            $(`#${modalID}`).modal('hide');



        });
    }
}); 

document.getElementById('animeOngoinglistTable').addEventListener('click', function (event) {
     target = event.target;
     animeID = target.getAttribute('data-ticket-no');

     selectedAnime = ongoing.find(anime => anime.id === animeID);
    // Check if the clicked element is a "View" button
    if (target.classList.contains('view-ticket')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        // Find the corresponding anime in the library
        const selectedAnime = ongoing.find(anime => anime.id === animeID);

        const modalID = 'viewOngoingModal'; // Correct modal ID

        // Populate the modal with anime details
        document.getElementById(`${modalID}-viewID`).textContent = selectedAnime.id;
        document.getElementById(`${modalID}-viewTitle`).textContent = selectedAnime.title;
        document.getElementById(`${modalID}-viewGenre`).textContent = selectedAnime.genre;
        document.getElementById(`${modalID}-viewReleaseYear`).textContent = selectedAnime.releaseYear;
        document.getElementById(`${modalID}-viewDescription`).textContent = selectedAnime.description;
        document.getElementById(`${modalID}-viewDateStarted`).textContent = selectedAnime.dateStarted; // Correct ID
        document.getElementById(`${modalID}-viewStatus`).textContent = selectedAnime.status;

        // Show the modal
        $(`#${modalID}`).modal('show');




    }



});

// Add click handler for "Add to Completed" button outside of the above click event


document.getElementById('addToCompletedBtn').addEventListener('click', function () {
    // Check if the status is "ongoing"
    console.log('selectedAnime:', selectedAnime.status);
    if (selectedAnime.status === 'ongoing') {
        // Add the anime to the completed list and remove from ongoing
        addToCompletedAndRemoveFromOngoing(selectedAnime);

        // Close the modal
        $('#viewOngoingModal').modal('hide');
    }
});





function renderCompletedTable() {
    const tableBody = document.getElementById('animeCompletedTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    completed.forEach(anime => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td class="align-middle">${anime.id}</td>
            <td class="align-middle">${anime.title}</td>
            <td class="align-middle">${anime.genre}</td>
            <td class="align-middle">${anime.releaseYear}</td>
            <td class="align-middle">${anime.description}</td>
            <td class="align-middle">${anime.dateStarted}</td>
            <td class="align-middle">${anime.dateCompleted}</td>
            <td class="align-middle"><span class = "status-cell badge rounded-pill"> ${anime.status}</span></td>
            <td class="col-lg-2 align-middle text-center">
                <button class="btn btn-info view-ticket" data-ticket-no="${anime.id}">view</button>
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







function addToCompletedAndRemoveFromOngoing(anime) {
    // Remove the anime from the watchlist





    const ongoingIndex = ongoing.findIndex(watcheAnime => watcheAnime.id === anime.id);
    if (ongoingIndex !== -1) {
        ongoing.splice(ongoingIndex, 1);
    }

    // Update the anime's status in the library to "ongoing"
    const libraryIndex = animeLibrary.findIndex(libraryAnime => libraryAnime.id === anime.id);
    if (libraryIndex !== -1) {
        animeLibrary[libraryIndex].status = 'completed';
        renderAnimeLibraryTable(); // Update the library table
    }

    // Add the anime to the ongoing list
    completed.push({
        id: anime.id,
        title: anime.title,
        genre: anime.genre,
        releaseYear: anime.releaseYear,
        description: anime.description,
        dateStarted: anime.dateStarted,
        dateCompleted: getCurrentDate(),
        status: 'completed',
    });

    // Update the ongoing list table
    renderOngoinglistTable();

    // Update the watchlist table
    renderCompletedTable();

    updateStatusCards();

    // Show a success notification

}




document.getElementById('animeCompletedTable').addEventListener('click', function (event) {
    target = event.target;

    // Check if the clicked element is a "View" button
    if (target.classList.contains('view-ticket')) {
        // Get the anime ID from the data attribute
        const animeID = target.getAttribute('data-ticket-no');

        // Find the corresponding anime in the library
        const selectedAnime = completed.find(anime => anime.id === animeID);

        const modalID = 'viewCompletedModal'; // Correct modal ID

        // Populate the modal with anime details
        document.getElementById(`${modalID}-viewID`).textContent = selectedAnime.id;
        document.getElementById(`${modalID}-viewTitle`).textContent = selectedAnime.title;
        document.getElementById(`${modalID}-viewGenre`).textContent = selectedAnime.genre;
        document.getElementById(`${modalID}-viewReleaseYear`).textContent = selectedAnime.releaseYear;
        document.getElementById(`${modalID}-viewDescription`).textContent = selectedAnime.description;
        document.getElementById(`${modalID}-viewDateStarted`).textContent = selectedAnime.dateStarted; // Correct ID
        document.getElementById(`${modalID}-viewStatus`).textContent = selectedAnime.status;

        // Show the modal
        $(`#${modalID}`).modal('show');




    }
    
});


function updateStatusCards() {
    // Get counts for animeLibrary, completed, and ongoing
    const totalAnimeCount = animeLibrary.length;
    const watchedCount = completed.length;
    const ongoingCount = ongoing.length;

    // Update the h2 elements in the HTML
    document.getElementById('totalAnimeCount').textContent = totalAnimeCount;
    document.getElementById('watchedCount').textContent = watchedCount;
    document.getElementById('ongoingCount').textContent = ongoingCount;
}







function getCurrentDate() {
    const today = new Date();
    const month = today.getMonth() + 1; // Months are zero-based
    const day = today.getDate();
    const year = today.getFullYear().toString().slice(2);
    return `${month}/${day}/${year}`;
}








// Initialize the table when the page loads
window.onload = function () {
    renderWatchlistTable();
    renderAnimeLibraryTable();
    renderOngoinglistTable();
    renderCompletedTable();
    updateStatusCards();
};

