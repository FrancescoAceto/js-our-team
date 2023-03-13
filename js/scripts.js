/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/
let MembriEL = document.getElementById("Membri");


let MembersArray = [
    {
        Nome: "Wayne Barret",
        Ruolo: "Founder & Ceo",
        Foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        Nome: "Angela Caroll",
        Ruolo: "Chief Editor",
        Foto: "angela-caroll-chief-editor.jpg"
    },

    {
        Nome: "Walter Gordon",
        Ruolo: "Office Manager",
        Foto: "walter-gordon-office-manager.jpg"
    },

    {
        Nome: "Angela Lopez",
        Ruolo: "Social Media Manager",
        Foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        Nome: "Scott Estrada",
        Ruolo: "Developer",
        Foto: "scott-estrada-developer.jpg"
    },

    {
        Nome: "Barbara Ramos",
        Ruolo: "Graphic Designer",
        Foto: "barbara-ramos-graphic-designer.jpg"
    }

];

for (let i = 0; i < MembersArray.length; i++) {
    
    for(let CurrentMember in MembersArray[i]){
        
        console.log(CurrentMember);

        console.log(MembersArray[i][CurrentMember]);

        MembriEL.innerHTML += `${CurrentMember}: ${MembersArray[i][CurrentMember]}
        <br>`;

    }
};

