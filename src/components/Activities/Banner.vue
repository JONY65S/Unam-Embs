<template>
    <div class="wrapperB">
        <div class="containerB">
            <input type="radio" name="slide" id="c1" checked>
            <label for="c1" class="cardB">
                <div class="row">
                    <div class="icon">1</div>
                    <div class="description">
                        <h4>Winter</h4>
                        <p>Winter has so much to offer -
                         creative activities</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c2" >
            <label for="c2" class="cardB">
                <div class="row">
                    <div class="icon">2</div>
                    <div class="description">
                        <h4>Digital Technology</h4>
                        <p>Gets better every day -
                         stay tuned</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c3" >
            <label for="c3" class="cardB">
                <div class="row">
                    <div class="icon">3</div>
                    <div class="description">
                        <h4>Globalization</h4>
                        <p>Help people all over the world</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" >
            <label for="c4" class="cardB">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                         more and more advanced</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c5" >
            <label for="c5" class="cardB">
                <div class="row">
                    <div class="icon">5</div>
                    <div class="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                         more and more advanced</p>
                    </div>
                </div>
            </label>
        </div>
    </div>
</template>

<style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.wrapperB {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #eee;
}

.containerB {
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

.cardB {
    width: 80px;
    border-radius: .75rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
}

.cardB > .row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
}

.cardB > .row > .icon {
    background: #223;
    color: white;
    border-radius: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
}

.cardB > .row > .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 520px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

.description p {
    color: #b0b0ba;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}

input {
    display: none;
}

input:checked + label {
    width: 600px;
}

input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.cardB[for="c1"] {
    background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);
}
.cardB[for="c2"] {
    background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);
}
.cardB[for="c3"] {
    background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);
}
.cardB[for="c4"] {
    background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);
}
.cardB[for="c5"] {
    background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);
}


</style>