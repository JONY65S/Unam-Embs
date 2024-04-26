<template>
    <div class="containerCard bg-gray-900">
        <div class="Card-container">
            <div class="hed">
                <p class="txth2">IEEE</p>
                <br>
                <a href="A">
                    <img src="../../assets/logos/unam/004.png" alt="">
                </a>
                <br>
                <p class="txth4">Engineering in Medicine and Biology Society</p>
                
            </div>
            <div class="desc">
                <p>Es la Sociedad internacional de ingenierosbiomédicos más grande del mundo. Sus 12000 miembros en 97 países, desarrollan actividades científicas, tecnológicas y educativas, donde son aplicados los conceptos y metodologías provenientes de las ciencias físicas e ingeniería a los campos de la biología y medicina.</p>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    *{
        margin: 0;
     }

    .containerCard{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: 'Courier New', Courier, monospace;
        padding: 0 20px;
        margin-top: -50px;
        margin-bottom: 0px;
    }

    .Card-container{
        display: flex;
        width: 600px;
        height: auto;
        background: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, .2);
        border-radius: 15px;
    }

    .hed{
        border-right: 1px solid #ddd;
    }

    .desc{
        background: #fbfbfb;
        position: relative;
    }

    .hed, .desc{
        padding: 20px;
        text-align: center;
    }

    .hed a{
        position: relative;
        display: block;
    }

    .border img{
        border-radius: 50%;
        box-shadow: 0 0 0 8px rgba(0, 0, 0, .06);
        margin: 20px 30px;
        transition: .2s;
    }

    .header a:hover img{
        box-shadow: 0 0 0 12px rgba(0, 0, 0, .06);
    }

    .header, .txth2{
        color: #fa522a;
    }

    .header, .txth4{
        margin-bottom: 20px;
    }

    .txth2{
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .txth4{
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .desc p{
        margin: 20px 30px;
    }

    .desc .social{
        margin-top:25px;
    }

    .desc .social a{
        display: inline-block;
        padding: 0 15px;
        color: #f0522a;
    }

    @media (max-width: 768px) {
        .Card-container{
            display: block;
            border: 0;
            width: 600px;
            height: 80%;
        }

        .hed{
            padding: 20px 20px 5px 20px;
            border: none;
        }

        .desc{
            padding: 5px 20px 20px 20px;
            background: transparent;
        }

        .hed .txth4{
            margin: 0;
        }

        .containerCard{
            margin-top: -80px;
        }

        .desc p{
            font-size: 1rem;
            margin: 20px 30px;
        }

        .hed .txth2{
            display: none;
        }

    }

</style>
