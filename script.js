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

// --- SHARED CLICK-OUTSIDE LISTENER FOR REMAINING MODALS ---
window.onclick = function(event) {
    const bioModal = document.getElementById('bioModal');
    const successModal = document.getElementById('successModal');

    if (bioModal && event.target === bioModal) bioModal.style.display = "none";
    if (successModal && event.target === successModal) successModal.style.display = "none";
};
