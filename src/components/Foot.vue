<template>
    <footer>
        <div class="footer_p" id="footer_content">
            <div id="footer_contacts">
                <h1><img class="log" src="../assets/logos/unam/013.png" alt=""></h1>
                <p>Advancing Technology For Humanity.</p>

                <div id="footer_social_media">
                    <a href="https://www.instagram.com/ieeeorg/" class="footer-link" id="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/IEEE.org/" class="footer-link" id="facebook">
                        <i class="fa fa-facebook-f"></i>
                    </a>

                    <a href="https://twitter.com/IEEEorg" class="footer-link" id="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
                <div id="footer_social_media">
                    <a href="https://www.youtube.com/user/IEEEorg" class="footer-link" id="you">
                        <i class="fa fa-youtube"></i>
                    </a>

                    <a href="https://www.addthis.com/bookmark.php" class="footer-link" id="fa">
                        <i class="fa fa-flickr"></i>
                    </a>

                    <a href="https://www.linkedin.com/company/ieee" class="footer-link" id="link">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
            
            <ul class="footer-list">
                <li>
                    <h3>Páginas</h3>
                </li>
                <li>
                    <a href="https://unam-ieee-embs.000webhostapp.com/" class="footer-link">HOME</a>
                </li>
                <li>
                    <a href="http://www.ieee.org/sitemap.html" class="footer-link">SITE MAP</a>
                </li>
                <li>
                    <a href="https://www.ieee.org/accessibility-statement.html" class="footer-link">ACCESSIBILITY</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Políticas</h3>
                </li>
                <li>
                    <a href="https://www.ieee.org/about/corporate/governance/p9-26.html" class="footer-link">NONDISCRIMINATION POLICY</a>
                </li>
                <li>
                    <a href="http://www.ieee.org/site_terms_conditions.html" class="footer-link">POLICY TERMS AND CONDITIONS</a>
                </li>
                <li>
                    <a href="https://www.ieee.org/security_privacy.html" class="footer-link">IEEE PRIVACY POLICY</a>
                </li>
            </ul>

            <div id="footer_subscribe">
                <h3>Subscríbete</h3>

                <p>
                    Ingrese su correo electrónico para recibir notificaciones
                </p>

                <div id="input_group">
                    <input type="email" id="email">
                    <button>
                        <i class="fa fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="power">
            <p>Desarrollado por: Jonathan Baltazar Balderas</p>
            <br>
        </div>

        <div class="foo_fg" id="footer_copyright">
            &#169
            Copyright 2024 IEEE – All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
A not-for-profit organization, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </div>
        
    </footer>
</template>

<style>
    :root {
    --color-neutral-0: #0e0c0c;
    --color-neutral-10: #171717;
    --color-neutral-30: #a8a29e;
    --color-neutral-40: #f5f5f5;

}

.log{
    width: 65%;
}

.power{
    background-color: #171717;
    text-align: center;
    font-size: .85rem;
}

.power p{
    text-align: right;
    padding-right: 50px;
}

.footer_p{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 1px;
}

.foo_fg{
    text-align: center;
}


footer {
    width: 100%;
    color: var(--color-neutral-40);
}

.footer-link {
    text-decoration: none;
    font-size: 0.8rem;
}

#footer_content {
    background-color: var(--color-neutral-10);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem 3.5rem;
}

#footer_contacts h1 {
    margin-bottom: 0.75rem;
}

#footer_social_media {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
} 

#footer_social_media .footer-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    color: var(--color-neutral-40);
    border-radius: 50%;
    transition: all 0.4s;
}

#footer_social_media .footer-link i {
    font-size: 1.25rem;    
}

#footer_social_media .footer-link:hover {
    opacity: 0.8;
}

#instagram {
    background: linear-gradient(#7f37c9, #ff2992, #ff9807);
}

#facebook {
    background-color: #4267b3;
}

#whatsapp {
    background-color: #006699;
}

#twitter{
    background-color: #00acee;
}

#you{
    background-color: red;
}

#fa{
    background-color: #e68523;
}

#link{
    background-color: #0e76a8;
}

.footer-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
}

.footer-list .footer-link {
    color: var(--color-neutral-30);
    transition: all 0.4s;
}

.footer-list .footer-link:hover {
    color: #7f37c9;
}

#footer_subscribe {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

#footer_subscribe p {
    color: var(--color-neutral-30);
}

#input_group {
    display: flex;
    align-items: center;
    background-color: var(--color-neutral-0);
    border-radius: 4px;
}

#input_group input {
    all: unset;
    padding: 0.75rem;
    width: 100%;
}

#input_group button {
    background-color: #7f37c9;
    border: none;
    color: var(--color-neutral-40);
    padding: 0px 1.25rem;
    font-size: 1.125rem;
    height: 100%;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    transition: all 0.4s;
}

#input_group button:hover {
    opacity: 0.8;
}

#footer_copyright {
    display: flex;
    justify-content: center;
    background-color: var(--color-neutral-0);
    font-size: 0.9rem;
    padding: 1.5rem;
    font-weight: 100;
}

@media screen and (max-width: 768px) {
    #footer_content {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

@media screen and (max-width: 426px) {
    #footer_content {
        grid-template-columns: repeat(1, 1fr);
        padding: 3rem 2rem;
    }
}
</style>