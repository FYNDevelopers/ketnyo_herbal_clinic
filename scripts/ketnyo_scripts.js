




	var btn_irene = document.getElementsByClassName('btn_irene')[0]
var btn_lucy = document.getElementsByClassName('btn_lucy')[0]
var btn_gladys = document.getElementsByClassName('btn_gladys')[0]
var btn_odhiambo = document.getElementsByClassName('btn_odhiambo')[0]

	var text = document.getElementsByClassName('text')[0]

	var img_irene = document.getElementsByClassName('photo_irene')[0]
	var img_lucy = document.getElementsByClassName('photo_lucy')[0]
	var img_gladys = document.getElementsByClassName('photo_gladys')[0]
	var img_odhiambo = document.getElementsByClassName('photo_odhiambo')[0]
    var irn = 0
    var lcy = 0
    var gld = 0
    var odh = 0

function coverImageIrene(){
		

        if (irn == 0) {
          btn_irene.innerHTML = "Cover Image";
          text.style.display = "none";
          img_irene.style.filter = "blur(0)";
          irn = 1;
        } else {
          btn_irene.innerHTML = "Uncover Image";
          text.style.display = "block";
          img_irene.style.filter = "blur(15px)";
          irn = 0;
        }
}


function coverImageLucy(){

        if (lcy == 0) {
          btn_lucy.innerHTML = "Cover Image";
          text.style.display = "none";
          img_lucy.style.filter = "blur(0)";
          lcy = 1;
        } else {
          btn_lucy.innerHTML = "Uncover Image";
          text.style.display = "block";
          img_lucy.style.filter = "blur(15px)";
          lcy = 0;
        }
}

function coverImageGladys(){

        if (gld == 0) {
          btn_gladys.innerHTML = "Cover Image";
          text.style.display = "none";
          img_gladys.style.filter = "blur(0)";
          gld = 1;
        } else {
          btn_gladys.innerHTML = "Uncover Image";
          text.style.display = "block";
          img_gladys.style.filter = "blur(15px)";
          gld = 0;
        }
}


function coverImageOdhiambo(){

        if (odh == 0) {
          btn_odhiambo.innerHTML = "Cover Image";
          text.style.display = "none";
          img_odhiambo.style.filter = "blur(0)";
          odh = 1;
        } else {
          btn_odhiambo.innerHTML = "Uncover Image";
          text.style.display = "block";
          img_odhiambo.style.filter = "blur(15px)";
          odh = 0;
        }
}

