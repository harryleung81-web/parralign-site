const teamData = {
    'mea': {
        name: "Mea Kwon",
        title: "Financial Services & Human Capital",
        bio: "With 30 years at the intersection of financial services and human capital strategy, Mea transforms complex compensation data into clear narratives that drive business decisions. She has a proven track record of building scalable tools and processes that stick across organizations of every size."
    },
    'harry': {
        name: "Harry Leung",
        title: "Data Infrastructure & Architecture",
        bio: "Harry specializes in data infrastructure that quietly eliminates problems most teams don't yet know they have. With 15+ years designing resilient data architecture across talent and operations, he translates strategic intent into systems that work and scale."
    },
    'nancy': {
        name: "Nancy Maloney",
        title: "C.P.A. & Data Governance",
        bio: "Nancy is a licensed C.P.A. with deep expertise in Data Governance, Data Quality, Metadata, Business Intelligence, and Risk. She brings clients a rare blend of analytical rigor and real-world operational know-how across finance, audit, and technology.​"
    },
    'natalie': {
        name: "Natalie Johnson, Advisory",
        title: "Learning & Development",
        bio: "Natalie has spent 15+ years helping organizations build the people systems and learning frameworks that make everything else run better. She specializes in translating high-level strategy, from enterprise performance management to leadership development, into programs teams can execute and measure."
    }
};

const whowhatourData = {
    'who': {
        name: "Who We Are",
        description: "We are an elite consulting SWAT team composed of execution-focused systems architects. We emerged from the technical engineering groups of First Republic Bank, where we directly built, managed, and defended complex compensation models before executive leadership boards. We bridge data engineering down in the weeds with strategic narrative translation at the executive level."
    },
    'what': {
        name: "What We Do",
        description: "We orchestrate full-cycle sales performance management and systems integration from initial raw database query models up to boardroom execution layouts. We align multi-layered incentive plans, design clean enterprise data architectures, deploy native Varicent data configurations, and balance system operations without messy manual workarounds."
    },
    'our': {
        name: "Our Focus",
        description: "We build uncompromising data infrastructure for scaling enterprises. If your operational data depends on manual spreadsheets, disconnected third-party logic blocks, or post-integration fragility, we drop in surgically to engineer high-fidelity tracking engines built completely from first principles."
    }
};

// --- Function for Home Page Popups ---
function openB3(key) {
    const data = whowhatourData[key];
    const modal = document.getElementById('b3Modal');
    if (data && modal) {
        document.getElementById('b3Name').innerText = data.name;
        document.getElementById('b3description').innerText = data.description;
        modal.style.display = "block";
    }
}

// --- Function for Team Page Popups ---
function openBio(key) {
    const data = teamData[key];
    const modal = document.getElementById('bioModal');
    if (data && modal) {
        document.getElementById('bioName').innerText = data.name;
        document.getElementById('bioTitle').innerText = data.title || "";
        document.getElementById('bioText').innerText = data.bio;
        modal.style.display = "block";
    }
}

// Separate Close Functions
function closeB3() { document.getElementById('b3Modal').style.display = "none"; }
function closeBio() { document.getElementById('bioModal').style.display = "none"; }


// --- Function for Contact Form & Success Modal ---
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        submitBtn.innerText = 'Sending...';

        const serviceID = 'service_01ds56n';
        const templateID = 'template_0p8574y';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                submitBtn.innerText = 'Submit';
                successModal.style.display = 'flex';
                contactForm.reset();
            }, (err) => {
                submitBtn.innerText = 'Submit';
                alert("Send failed. Please email info@parralign.com directly.");
                console.error("EmailJS Error:", err);
            });
    });
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = "none";
}

// --- SHARED CLICK-OUTSIDE LISTENER ---
window.onclick = function(event) {
    const bioModal = document.getElementById('bioModal');
    const b3Modal = document.getElementById('b3Modal');
    const successModal = document.getElementById('successModal');

    if (bioModal && event.target === bioModal) bioModal.style.display = "none";
    if (b3Modal && event.target === b3Modal) b3Modal.style.display = "none";
    if (successModal && event.target === successModal) successModal.style.display = "none";
};
