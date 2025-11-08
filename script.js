// Tender data array
const tendersList = [
    {
        id: 1,
        title: 'Work of shifting of HT/LT lines passing over the Primary/Upper Primary and Composite School under EDD-Jangipur, Ghazipur',
        refNo: 'G7/EDC(G)/2025-26',
        closingDate: '14-Nov-2025 12:00 PM',
        bidDate: '14-Nov-2025 02:00 PM'
    },
    {
        id: 2,
        title: 'Work of transportation of burnt bricks Damaged 25/63/100/250/400/630 KVA T/F in Subdivision under EDD',
        refNo: 'G5/EDC(G)/2025-26',
        closingDate: '14-Nov-2025 12:00 PM',
        bidDate: '14-Nov-2025 02:00 PM'
    },
    {
        id: 3,
        title: 'Construction of Road and Bridge work in Rural Development Department under PMGSY Phase-III',
        refNo: 'RD/PMGSY/2025-27',
        closingDate: '15-Nov-2025 11:00 AM',
        bidDate: '15-Nov-2025 01:00 PM'
    },
    {
        id: 4,
        title: 'Supply of Medical Equipment for Primary Health Centers in Lucknow District',
        refNo: 'MED/LKO/2025-28',
        closingDate: '16-Nov-2025 10:00 AM',
        bidDate: '16-Nov-2025 12:00 PM'
    },
    {
        id: 5,
        title: 'Renovation and Maintenance of Government School Buildings in Kanpur Division',
        refNo: 'EDU/KNP/2025-29',
        closingDate: '17-Nov-2025 02:00 PM',
        bidDate: '17-Nov-2025 04:00 PM'
    },
    {
        id: 6,
        title: 'Installation of Solar Power Systems in Government Offices across Agra Region',
        refNo: 'PWD/AGR/2025-30',
        closingDate: '18-Nov-2025 09:00 AM',
        bidDate: '18-Nov-2025 11:00 AM'
    },
    {
        id: 7,
        title: 'Water Supply and Sanitation Project for Rural Areas in Varanasi District',
        refNo: 'WS/VNS/2025-31',
        closingDate: '19-Nov-2025 03:00 PM',
        bidDate: '19-Nov-2025 05:00 PM'
    },
    {
        id: 8,
        title: 'Procurement of IT Equipment and Software for Digital India Initiative',
        refNo: 'IT/DIG/2025-32',
        closingDate: '20-Nov-2025 01:00 PM',
        bidDate: '20-Nov-2025 03:00 PM'
    },
    {
        id: 9,
        title: 'Construction of Drainage System and Flood Control Measures in Gorakhpur',
        refNo: 'IRR/GKP/2025-33',
        closingDate: '21-Nov-2025 11:00 AM',
        bidDate: '21-Nov-2025 01:00 PM'
    },
    {
        id: 10,
        title: 'Supply and Installation of Street Lighting Systems in Urban Areas of Meerut',
        refNo: 'UDD/MRT/2025-34',
        closingDate: '22-Nov-2025 04:00 PM',
        bidDate: '22-Nov-2025 06:00 PM'
    },
    {
        id: 11,
        title: 'Supply of Asian Paints Premium Quality Paint for Government Buildings and Infrastructure Projects',
        refNo: 'PWD/PAINT/2025-35',
        closingDate: '23-Nov-2025 02:00 PM',
        bidDate: '23-Nov-2025 04:00 PM'
    }
];

function populateAllTenders() {
    const tbody = document.getElementById('tendersBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    tendersList.forEach(tender => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="tender-details.html?id=${tender.id}" class="tender-link">${tender.title}</a></td>
            <td>${tender.refNo}</td>
            <td>${tender.closingDate}</td>
            <td>${tender.bidDate}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateAllTenders();

    // Sidebar navigation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent;
            if (text === 'MIS Reports') window.location.href = 'mis-reports.html';
            else if (text === 'Tenders by Location') window.location.href = 'tenders-location.html';
            else if (text === 'Tenders by Organisation') window.location.href = 'tenders-organisation.html';
            else if (text === 'Tenders by Classification') window.location.href = 'tenders-classification.html';
            else if (text === 'Tenders in Archive') window.location.href = 'tenders-archive.html';
            else if (text === 'Tenders Status') window.location.href = 'tenders-status.html';
            else if (text === 'Cancelled/Retendered') window.location.href = 'cancelled-tenders.html';
            else alert('Page under development: ' + text);
        });
    });

    // Main navigation
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#search') window.location.href = 'search.html';
            else if (href === '#active') window.location.href = 'active-tenders.html';
            else if (href === '#closing') window.location.href = 'closing-date.html';
            else if (href === '#corrigendum') window.location.href = 'corrigendum.html';
            else if (href === '#results') window.location.href = 'results.html';
        });
    });

    // Login functionality
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const goBtn = document.querySelector('.go-btn');
    const searchInput = document.querySelector('.search-input');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = 'search.html?q=' + encodeURIComponent(searchTerm);
        } else {
            alert('Please enter a search term');
        }
    }

    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (goBtn) goBtn.addEventListener('click', performSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
    }

    // App download links
    document.querySelectorAll('.app-links img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const alt = this.alt.toLowerCase();
            if (alt.includes('dashboard')) {
                window.location.href = 'dashboard.html';
            } else if (alt.includes('google')) {
                alert('Redirecting to Google Play Store...');
            } else if (alt.includes('app')) {
                alert('Redirecting to App Store...');
            }
        });
    });
});