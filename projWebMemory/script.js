

// variables*********
// n°= 00 image vide ou transparente - 0 dos carte - de 1 à 6 pour 12 cartes (6 paires)
// il faut aussi une image gagne.gif

var Cartes = [];
var CartesUsed = [];
var CartesFound = []
Cartes[0] = 'abyssWatcher'; Cartes[1] = 'Artorias'; Cartes[2] = 'duo' ;Cartes[3] = 'Lorian'; Cartes[4] = 'Midir'; Cartes[5] = 'Nameless'; Cartes[6] = 'Sif'; Cartes[7] = 'Sulyvahn'
var carteDos = 'dos'
var img1 = "";
var img2 = "";


place = new Array;
choix=0;nbim2=0;nbim3=0;
choixim=1
gain=0;
nombres="";
divs=nbc/2;
nb=nbc+1;
cpt=0;



function initPlateau() {
    document.write('<table>')
    var rand
    for (var iter = 0; iter < 2; iter++) {
        for (var iter2 = 0; iter2 < 8; iter2++) {
            rand = Math.random() * Cartes.length;
            while (CartesUsed.indexOf(Cartes[rand]) == -1) {
                rand = Math.random() * Cartes.length;
            }
            document.write('<td><a href="#" onClick="retourne(this.id])" id=Cartes[rand]><img src="./res/' + Cartes[rand] + '.jpg" width="10%" height="20%" border="0"></a></td>');
            CartesUsed.append(Cartes[rand]);
            if (iter2 == 3 || (iter2 == 7 && iter == 0)) {
                document.write('<tr>')
            }
        }
        CartesUsed = [];
    }
    document.write('</table >')
}

function retourne(carte) { //

    if (CartesFound.indexOf(carte) == -1) {
        if (nbim==nbim2) nbim=0;
        else{
            if (nbim==nbim3) nbim=0;
            else{
                if (choixim==3)
                {
                    if (val1==val2) {efface(nbim2);efface(nbim3);gain++;}
                    else {no_efface(nbim2);no_efface(nbim3);}
                    choixim=1;nbim3=0
                }
                if (choixim==1) {nbim2=nbim;val1=place[nbim];choix++;}
                if (choixim==2) {nbim3=nbim;val2=place[nbim];}
                choixim++;
            }}
        document.images[nbim-1].src = non_im+place[nbim]+".gif";
        if (choixim==3){if (gain==divs-1) {
            setTimeout("efface(nbim2);efface(nbim3);document.images[1].src = 'gagne.gif';",500);gain++;
        }}
        document.form1.result.value = choix
    }}

function efface(eff) {
    document.images[eff-1].src = non_im+"00.gif";
    place[eff]=0}

function no_efface(eff) {
    document.images[eff-1].src = non_im+"0.gif"
}

//-->
</script>