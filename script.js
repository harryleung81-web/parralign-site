// --- Team Data for Team Page Popups ---
const teamData = {
    'mea': {
        name: "Mea Kwon",
        title: "Financial Services & Human Capital",
        bio: "With 30 years at the intersection of financial services and human capital strategy — including direct experience writing enterprise compensation plans — Mea transforms complex compensation data into clear narratives that drive business decisions. She has a proven track record of building scalable tools and processes that stick across organizations of every size."
    },
    'harry': {
        name: "Harry Leung",
        title: "Data Infrastructure & Architecture",
        bio: "Harry specializes in data infrastructure that quietly eliminates problems most teams don't yet know they have. With 15+ years designing resilient data architecture across talent and operations, he brings rare end-to-end Varicent depth — from requirements and compensation plan design through native development, data architecture, and implementation — including engineering cross-platform solutions that bring external calculation logic into Varicent when the platform alone isn’t enough. He translates strategic intent into systems that work and scale."
    },
    'nancy': {
        name: "Nancy Maloney",
        title: "CPA & Data Governance",
        bio: "Nancy brings a rare combination of regulatory rigor and front-end solutioning experience — including FDIC audit and compliance work — that gives clients both the technical credibility and the operational instinct to get things right the first time. As a licensed CPA with deep expertise in Data Governance, Data Quality, Metadata, Business Intelligence, and Risk, she bridges the gap between what the data says and what the business actually needs."
    },
    'natalie': {
        name: "Natalie Johnson, Advisory",
        title: "Learning & Development",
        bio: "Natalie has spent 15+ years helping organizations build the people systems and learning frameworks that make everything else run better. She specializes in translating high-level strategy, from enterprise performance management to leadership development, into programs teams can execute and measure."
    }
};

// --- Who / What / Our Focus Data for Hero Popups ---
const whowhatourData = {
    'who': {
        name: "Who we are",
        description: "Most businesses don't have a data problem, they have an alignment problem. We built Parralign because we spent decades on the client side of that exact problem — operators who owned and scaled complex enterprise operations from the inside, not outside theorists. We listen beyond the stated problem to what your organization actually needs, bridging the teams on the ground with the executives in the boardroom."
    },
    'what': {
        name: "What we do",
        description: "Behind every system are the people who run it — so we align incentives, teams, and structure, not just technology. We assess, redesign, and streamline critical workflows across compensation, talent operations, and finance, tracing operational friction down to its root cause and turning fractured configurations into seamless, automated workflows."  
    },
    'our': {
        name: "Our focus",
        description: "If your leadership team is making decisions based on manual spreadsheets, your departments run on disconnected logic, or a recent integration has left your back-office fragile — you're exactly why we built parralign. We make surgical corrections to stabilize what you have, without demanding a total teardown."
    }
};

// --- Function for Hero Cards Popups ---
function openB3(key) {
    const data = whowhatourData[key];
    const modal = document.getElementById('b3Modal');
    if (data && modal) {
        document.getElementById('b3Name').innerText = data.name;
        document.getElementById('b3description').innerText = data.description;
        modal.style.display = "block";
    }
}

// --- Function for Team Page Bio Popups ---
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
function closeB3() { 
    const modal = document.getElementById('b3Modal');
    if (modal) modal.style.display = "none"; 
}

function closeBio() { 
    const modal = document.getElementById('bioModal');
    if (modal) modal.style.display = "none"; 
}

// --- Function for Contact Form & Success Modal ---
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (submitBtn) submitBtn.innerText = 'Sending...';

        const serviceID = 'service_01ds56n';
        const templateID = 'template_0p8574y';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                if (submitBtn) submitBtn.innerText = 'Submit';
                if (successModal) successModal.style.display = 'flex';
                contactForm.reset();
            }, (err) => {
                if (submitBtn) submitBtn.innerText = 'Submit';
                alert("Send failed. Please email info@parralign.com directly.");
                console.error("EmailJS Error:", err);
            });
    });
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.style.display = "none";
}

// --- SHARED CLICK-OUTSIDE LISTENER FOR MODALS ---
window.onclick = function(event) {
    const bioModal = document.getElementById('bioModal');
    const b3Modal = document.getElementById('b3Modal');
    const successModal = document.getElementById('successModal');

    if (bioModal && event.target === bioModal) bioModal.style.display = "none";
    if (b3Modal && event.target === b3Modal) b3Modal.style.display = "none";
    if (successModal && event.target === successModal) successModal.style.display = "none";
};
