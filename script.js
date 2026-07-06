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
        description: "Most businesses don't have a data problem, they have an alignment problem. We built Parralign because we spent decades on the client side of that exact problem — operators who owned and scaled complex enterprise operations from the inside, not outside theorists. We listen past the stated problem to what your organization actually needs, bridging the teams on the ground with the executives in the boardroom."
    },
    'what': {
        name: "What We Do",
        description: "Behind every system are the people who run it — so we align incentives, teams, and structure, not just technology. We assess, redesign, and streamline critical workflows across compensation, talent operations, and finance, tracing operational friction down to its root cause and turning fractured configurations into seamless, automated workflows."  
            },
    'our': {
        name: "Our Focus",
        description: "If your leadership team is making decisions based on manual spreadsheets, your departments run on disconnected logic, or a recent integration has left your back-office fragile — you're exactly why we built parralign. We make surgical corrections to stabilize what you have, without demanding a total teardown.​"
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
