const teamContainer = document.getElementById("our-team-container");

const teamMembers = [
    { name: "Caroline Washington", role: "Seller" },
    { name: "Gerald Ferguson", role: "Seller" },
    { name: "Averi Maddox", role: "Seller" }
];

teamContainer.innerHTML = teamMembers
    .map((member, i) => `
        <div class="our-team-card">
            <div class="team-photo" style="background-image: url(assets/images/our-team/team-${i + 1}.webp)"></div>
            <div class="our-team-text">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        </div>
    `)
    .join("");


const foiContainer = document.getElementById("foi-wrapper");

foiContainer.innerHTML = [1, 2, 3, 4]
    .map(i => `
        <div class="foi-photo" style="background-image: url(assets/images/follow-our-instagram/img-${i}.webp)"></div>
    `)
    .join("");



const starBox = document.getElementById("review-star-box");

starBox.innerHTML = [1, 2, 3, 4, 5]
    .map(i => `
        <img src="./assets/images/review/star.svg" alt="">
    `)
    .join("");

