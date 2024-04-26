<template>
    <div class="owC">
        <div class="summary">
            <article>
                <div class="containerOw">
            <div class="img-c">
                <img src="../../assets/img/img1.jpg" alt="Photo profile">
            </div>
            <p class="full-name">Mark McGrow</p>
            <p class="role">UX/UI Developer</p>
            <p class="description">
                Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus illum tenetur nostrum harum dolore itaque et amet.
            </p>
            <div class="social-c">
                <button><i class="fab fa-github"></i></button>
                <button><i class="fab fa-twitter"></i></button>
                <button><i class="fab fa-linkedin-in"></i></button>
            </div>
            </div>
            </article>
            <article>
                <div class="containerOw">
            <div class="img-c">
                <img src="../../assets/img/img1.jpg" alt="Photo profile">
            </div>
            <p class="full-name">Mark McGrow</p>
            <p class="role">UX/UI Developer</p>
            <p class="description">
                Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus illum tenetur nostrum harum dolore itaque et amet.
            </p>
            <div class="social-c">
                <button><i class="fab fa-github"></i></button>
                <button><i class="fab fa-twitter"></i></button>
                <button><i class="fab fa-linkedin-in"></i></button>
            </div>
            </div>
            </article>
            <article>
                <div class="containerOw">
            <div class="img-c">
                <img src="../../assets/img/img1.jpg" alt="Photo profile">
            </div>
            <p class="full-name">Mark McGrow</p>
            <p class="role">UX/UI Developer</p>
            <p class="description">
                Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus illum tenetur nostrum harum dolore itaque et amet.
            </p>
            <div class="social-c">
                <button><i class="fab fa-github"></i></button>
                <button><i class="fab fa-twitter"></i></button>
                <button><i class="fab fa-linkedin-in"></i></button>
            </div>
            </div>
            </article>
            <article>
                <div class="containerOw">
            <div class="img-c">
                <img src="../../assets/img/img1.jpg" alt="Photo profile">
            </div>
            <p class="full-name">Mark McGrow</p>
            <p class="role">UX/UI Developer</p>
            <p class="description">
                Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus illum tenetur nostrum harum dolore itaque et amet.
            </p>
            <div class="social-c">
                <button><i class="fab fa-github"></i></button>
                <button><i class="fab fa-twitter"></i></button>
                <button><i class="fab fa-linkedin-in"></i></button>
            </div>
            </div>
            </article>
            <article>
                <div class="containerOw">
            <div class="img-c">
                <img src="../../assets/img/img1.jpg" alt="Photo profile">
            </div>
            <p class="full-name">Mark McGrow</p>
            <p class="role">UX/UI Developer</p>
            <p class="description">
                Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus illum tenetur nostrum harum dolore itaque et amet.
            </p>
            <div class="social-c">
                <button><i class="fab fa-github"></i></button>
                <button><i class="fab fa-twitter"></i></button>
                <button><i class="fab fa-linkedin-in"></i></button>
            </div>
            </div>
            </article>
            <article>
                <div class="containerOw">
            <div class="img-c">
                <img src="../../assets/img/img1.jpg" alt="Photo profile">
            </div>
            <p class="full-name">Mark McGrow</p>
            <p class="role">UX/UI Developer</p>
            <p class="description">
                Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus illum tenetur nostrum harum dolore itaque et amet.
            </p>
            <div class="social-c">
                <button><i class="fab fa-github"></i></button>
                <button><i class="fab fa-twitter"></i></button>
                <button><i class="fab fa-linkedin-in"></i></button>
            </div>
            </div>
            </article>
        </div>
        
    </div>
</template>

<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

.summary{
    display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        max-width: 1000px;
        margin: auto;
        justify-content: center;
    align-items: center;
}

owC {
    min-height: 100vh;
    width: 100%;
    font-size: 14px;
    background: #061e36;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    
}

.containerOw {
    position: relative;
    background-color: #eee;
    width: 220px;
    height: 220px;
    padding: 24px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 60px 5px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transition: width 0.4s, height 0.4s,
        border-radius 0.4s;
}

.containerOw:hover {
    width: 340px;
    height: 440px;
    border-radius: 4px;
}

.img-c {
    width: 170px;
    height: 170px;
    min-height: 170px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.2);
}

.img-c img {
    width: 100%;
    max-width: 100%;
}

.full-name {
    font-size: 1.4em;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 40px;
    margin-bottom: 16px;
}

.role,
.description {
    font-size: 1em;
    letter-spacing: 0.5px;
    line-height: 20px;
    text-align: center;
}

.role {
    text-transform: uppercase;
    padding-bottom: 8px;
    margin-bottom: 24px;
    border-bottom: 2px solid #ffbe44;
}

.social-c {
    position: absolute;
    top: 40px;
    left: -40px;
    display: flex;
    flex-direction: column;
}

.social-c button {
    border: none;
    outline: none;
    color: #006699;
    background: none;
    width: 20px;
    height: 40px;
    font-size: 1.7em;
    margin-bottom: 16px;
    cursor: pointer;
    transition: transform 0.4s;
}

.containerOw:hover .social-c button {
    transform: translateX(60px);
    transition-delay: 0.3s;
}

.containerOw:hover .social-c button:nth-child(2) {
    transition-delay: 0.5s;
}

.containerOw:hover .social-c button:nth-child(3) {
    transition-delay: 0.7s;
}

@media (max-width: 840px){
        .summary{
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 768px){
        .summary{
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
        align-items: center;
        }
    }

    @media (max-width: 500px){
        .summary{
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
        align-items: center;
        }
    }
</style>