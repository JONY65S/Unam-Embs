<template>
    <div class="genAbout">
      <div class="b1">
  <div class="container">
    <div class="tit">
      <p>Acerca de Embs</p>
    </div>
    <input type="radio" name="dot" id="one">
    <input type="radio" name="dot" id="two">
    <div class="main-card">
      <div class="cards">

        <div class="card">
         <div class="content">
           <!-- <div class="img">
             <img src="../../asstes/img/img1.jpg" alt="">
           </div> -->
           <div class="details">
             <div class="name">Organización Profesional</div>
             <div class="job">IEEE EMBS es una organización profesional dedicada a la ingeniería en medicina y biología.</div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name">Investigación Avanzada</div>
             <div class="job">Se enfoca en la investigación avanzada en áreas como dispositivos médicos, sistemas de salud y tecnologías biomédicas.</div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name">Colaboración Interdisciplinaria</div>
             <div class="job">Facilita la colaboración entre ingenieros, científicos médicos y profesionales de la salud.</div>
           </div>
         </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name">Eventos y Conferencias</div>
             <div class="job">Organiza eventos y conferencias para compartir conocimientos y avances en tecnología médica.</div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name">Innovación Tecnológica</div>
             <div class="job">Impulsa la innovación tecnológica para mejorar la atención médica y la calidad de vida.</div>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="details">
             <div class="name">Red Profesional</div>
             <div class="job">Brinda oportunidades de networking y desarrollo profesional para sus miembros en todo el mundo.</div>
           </div>
         </div>
        </div>
        
      </div>


      
      
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
 </div> 
    </div>

</template>

<style>

.tit p{
  font-size: 3rem;
  color: #FFF;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.genAbout{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
.b1{
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #5ca5db;
}
.b1::before{
  content: '';
  position: absolute;
  width: 100%;
  background: #FF676D;
  clip-path: inset(47% 0 0 0);
  z-index: -1;
  height: 100%;
}
::selection{
  background:	#FF676D;
  color: #fff;
}
.container{
  max-width: 950px;
  width: 100%;
  overflow: hidden;
  padding: 80px 0;
}
.container .main-card{
  display: flex;
  justify-content: space-evenly;
  width: 200%;
  transition: 1s;
}
#two:checked ~ .main-card{
  margin-left: -100%;
}
.container .main-card .cards{
  width: calc(100% / 2 - 10px);
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: space-between;
}
.main-card .cards .card{
  width: calc(100% / 3 - 10px);
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
}
.main-card .cards .card:hover{
  transform: translateY(-15px);
}
.cards .card .content{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.cards .card .content .img{
  height: 130px;
  width: 130px;
  border-radius: 50%;
  padding: 3px;
  background: #FF676D;
  margin-bottom: 14px;
}
.card .content .img img{
  height: 100%;
  width: 100%;
  border: 3px solid #ffff;
  border-radius: 50%;
  object-fit: cover;
}
.card .content .name{
  font-size: 20px;
  font-weight: 500;
}
.card .content .job{
  font-size: 20px;
  color: #FF676D;
}
.card .content .media-icons{
  margin-top: 10px;
  display: flex;

}
.media-icons a{
  text-align: center;
  line-height: 33px;
  height: 35px;
  width: 35px;
  margin: 0 4px;
  font-size: 14px;
  color: #FFF;
  border-radius: 50%;
  border: 2px solid transparent;
  background: #FF676D;
  transition: all 0.3s ease;
}
.media-icons a:hover{
  color: #FF676D;
  background-color: #fff;
  border-color: #FF676D;
}
 .container .button{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.button label{
  height: 15px;
  width: 15px;
  border-radius: 20px;
  background: #fff;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.button label.active{
  width: 35px;
}
#one:checked ~ .button .one{
  width: 35px;
}
#one:checked ~ .button .two{
  width: 15px;
}
#two:checked ~ .button .one{
  width: 15px;
}
#two:checked ~ .button .two{
  width: 35px;
}
input[type="radio"]{
  display: none;
}
@media (max-width: 768px) {
  .main-card .cards .card{
    margin: 20px 0 10px 0;
    width: calc(100% / 2 - 10px);
  }

  .tit p{
  font-size: 2.5rem;
  color: #FFF;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

}
@media (max-width: 600px) {
  .main-card .cards .card{
    /* margin: 20px 0 10px 0; */
    width: 100%;
  }

  .tit p{
  font-size: 2rem;
  color: #FFF;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
}

</style>