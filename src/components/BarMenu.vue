<template>
    <div class="hNvm bg-custom-color-2">
        <div class="navbarNvm">
            <div class="logoNvm">
                <a href="">UNAM | IEEE EMBS</a>
            </div>
            <ul class="linksNvm">
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/activities">Actividades</router-link></li>
                <li><router-link to="/members">Miembros</router-link></li>
                <li><router-link to="/events">Memorias</router-link></li>
            </ul>
            <a href="#" class="action_btn">Próximamente</a>
            <div class="toggle_btn">
                <i class="fa fa-bars"></i>
            </div>
        </div>
        <div class="drop_menu">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/activities">Actividades</router-link></li>
            <li><router-link to="/members">Miembros</router-link></li>
            <li><router-link to="/events">Memorias</router-link></li>
            <li><a href="#" class="action_btn">Próximamente</a></li>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const dropDownMenu = document.querySelector('.drop_menu');

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');

            toggleBtnIcon.className = isOpen
                ? 'fa fa-times'
                : 'fa fa-bars';
        };
    },
};
</script>

<style>
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
}

a:hover {
    color: #252525;
} 

.hNvm {
    position: relative;
    padding: 0 2rem;
}

.navbarNvm {
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbarNvm .logoNvm a {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbarNvm .linksNvm {
    display: flex;
    gap: 2rem;
    color: #fff;
}

.logoNvm a{
    color: #fff;
}

.navbarNvm .toggle_btn {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
}

.action_btn {
    background-color: orange;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: scale 0.2s;
}

.action_btn:hover {
    transform: scale(1.05);
    color: #fff;
}

.action_btn:active {
    transform: scale(0.95);
}

.drop_menu {
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 300px;
    height: 0;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.drop_menu.open {
    height: 240px;
}

.drop_menu li {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.drop_menu .action_btn {
    width: 100%;
    display: flex;
    justify-content: center;
}

@media (max-width:768px) {
    .navbarNvm .linksNvm,
    .navbarNvm .action_btn {
        display: none;
    }

    .navbarNvm .toggle_btn {
        display: block;
    }
}
</style>
