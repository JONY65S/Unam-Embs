<template>
    <div class="gen bg-custom-color-1">
        <div class="logotype">
            <div class="logox left">
                <a href="https://www.unam.mx/"><img src="../assets/logos/unam/001.png" alt="Logo de la unam"></a>
                <a href="https://www.ingenieria.unam.mx/"><img src="../assets/logos/unam/002.png" alt="Logo de la FI"></a>
                <a href="https://www.embs.org/welcome/?gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccNnRizTnpqju1dy3eKORNvAUMB44MybcdtmbGrZqCqZFRoYiRVicCxoCEfEQAvD_BwE"><img src="../assets/logos/unam/004.png" alt="Logo de Embs"></a>
            </div>
            <div class="logox right">
                <a href="https://www.ieee.org/"><img src="../assets/logos/unam/003.png" alt="Logo de IEEE"></a>
            </div>
        </div>
    </div>
</template>

<style>
    .gen{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        font-size: 20px;
        overflow: hidden;
    }

    .logotype {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 85px;
        padding: 5px 10%;
    }

    .logotype .logox {
        cursor: pointer;
    }

    .logotype .logox img {
        height: 70px;
        width: auto;
        transition: all 0.3s;
    }

    .logotype .logox img:hover {
        transform: scale(1.2);
    }

    .logotype .nav-links {
        list-style: none;
    }

    .logotype .nav-links li {
        display: inline-block;
        padding: 0 20px;
    }

    .logotype .nav-links li:hover {
        transform: scale(1.1);
    }

    .logotype .nav-links a {
        font-size: 700;
        color: #eceff1;
        text-decoration: none;
    }

    .logotype .nav-links li a:hover {
        color: #ffbc0e;
    }

    .logotype .btn button {
        font-weight: 700;
        color: #1b3039;
        padding: 9px 25px;
        background: #eceff1;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    .logotype .btn button:hover {
        background-color: #e2f1f8;
        color: #ffbc0e;
        transform: scale(1.1);
    }

    /* Added styles for left and right logos */
    .logotype .left {
        display: flex;
        align-items: center;
    }

    .logotype .right {
        order: 3;
    }

    .logotype .left img {
        margin-right: 10px;
    }
</style>
