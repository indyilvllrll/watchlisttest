document.getElementById('addAnimeButton').addEventListener('click', function () {
    $('#addAnimeModal').modal('show');
});

const animeData = [
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
renderTable();