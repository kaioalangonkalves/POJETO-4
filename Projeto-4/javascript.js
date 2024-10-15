// Variavel global:
// impult inicial
const inpultValue = document.getElementById("validadeCasamento");


// função validação se pode ou não se casar
function valideOcasamento(){

    let casador = "null";
// casador e >0 verificação !
    if (casador === "-10" || casador === "-9" || casador === "-8"  || casador === "-7" || casador === "-6" || casador === "-5" || casador === "-4" || casador === "-3" || casador === "-2" || casador === "-1") {
        alert("Ele não esta apto a se casar")
    }
    if (casador === "+10" || casador === "+9" || casador === "+8"  || casador === "+7" || casador === "+6" || casador === "+5" || casador === "+4" || casador === "+3" || casador === "+2" || casador === "+1") {
        alert("Você pode fazer uma mulhe feliz ! ")
    }
    
}
valideOcasamento();




// ativação de uma classe e desativação usando uma função e uma posição
function ativaçãoclass() {
let lis = document.querySelectorAll("#paragrafo");

for (let item of lis) {
    item.addEventListener('mouseover', () => {
   
        
        item.classList.add('active');
    });


   function removerActiv() {
        for (let items of lis) {
            items.classList.remove('active');
        }
    }

};

};
// função que pega o valor de um objeto
function bricadodevalidar() {
    const objeto = {

        
        nome: "kaio",
       idade: "15",
       família_propria: "Não"
        
    }
    // console.log(`${objeto.família_propria}`)
}
bricadodevalidar() 
// Função que pega uma nova data
function novaData() {
    setInterval(() => {
        const data = new Date();
        const geTime = data.getMinutes()
        // console.log( Math.round( geTime))
    },60000); //1 minuto = secenta milhe segundos 60000
}
novaData()

function capturaCorSet() {
    
    const cor = ['Amarela', 'red', 'green'];
setTimeout(()=>{
    // Gera um número aleatorio de 0 a 9 com o math.rendom e aredonda usando o math.foor
const valor = Math.floor(Math.random() * 2 + 1)
console.log(valor)
    for (let i = 0; i <= cor.length; i++){
    
        // console.log(cor[i])

    }
},100);

}
capturaCorSet()


function buto(){
   
 
}

buto()

// key event evento de press na key letra
// function keyEvent(){

//     inpultValue.addEventListener('keydown', (e) => {
//         if(e.key === "Enter" || e.key === "1" ){

            function apataInfomação(){

                let bancoDaFamilia = [
                { 
                    // informação privilegiada{Cep : 72/309/200,
                   // QN : 321 CJ E LOTE 4 AP 204 SAMANBAIA DF,}
                        // Kaio Alan 
                    IP:'0000',
                    Nome: 'Kaio Alan Gonçalves Oliveira',
                    Idade: '15',
                    Sexo:'M',
                    Hora:"08:19",
                    Cpf:'101/002/115/165',
                    Municipio:"Brasilia-DF",
                    Nacimento:'15/09/2009',
                    Linhagem: 'Gonçalves + Oliveira', 
                    Filiação:"Claudiomar Ribeiro de Oliveira e Andréa Michelle Gonçalves Coluna.",
                    Linhagem: 'ségunda', 
                },
                // Andra
                {
                    IP : '0001',
                    Nome: ' Andréa Michelle Gonçalves Coluna ',
                    Idade: '15',
                    Cpf:'101/002/115/165',
                    NASC :' Brasileira  est DF Data 28/ 07/1984 Nacimento 15/09/2009',
                    RG : '2240 771 SSP DF',
                    Linhagem: 'Gonçalves + Oliveira',
                    Linhagem: 'Primeira',  
                     
                },
            //   Isabelly Rodrigues Gonçalves
                {
                    Ip : '0002',
                    Nome : 'Isabelly Rodrigues Gonçalves',
                    Nacimento: '23 / 12/ 2015',
                    Cpf : '098.872.841-90',
                    Hora: '21 17',
                    sexo: 'feminino',
                    Local:'Hospital Regional de Samanbaia',
                    Municipio : 'Samanbaia / DF',
                    Filiação: 'Patrick Evangelista Rodrigues Marques E Andréa Michelle Gonçalves Coluna',
                    AVÓS: 'Paternos,Joelci Rodrigues e Maria da Luz Evangelista da Silva, Maternos, Eleusa de Fatima Gonçalves Coluna.',
                    Linhagem: 'ségunda', 
                },
                
                
                
                ];
                // Verificação de if

      const inpultValues = inpultValue.value;
                if(inpultValues === ""){
            //   console.log("!")
            alert("impulte não foi prenchido !")
              
                    }




            // case swit
            switch (inpultValue.value) {
                case 'Isabelly':
            document.getElementById("paragrafo").innerHTML=` 
                    Ip : '0002',<br>
                    Nome : 'Isabelly Rodrigues Gonçalves',<br>
                    Nacimento: '23 / 12/ 2015',<br>
                    Cpf : '098.872.841-90',<br>
                    Hora: '21 17',<br>
                    sexo: 'feminino',<br>
                    Local:'Hospital Regional de Samanbaia',<br>
                   Município: Brasília-DF ,<br>
                    Filiação: 'Patrick Evangelista Rodrigues Marques E Andréa Michelle Gonçalves Coluna',<br>
                    AVÓS: 'Paternos,Joelci Rodrigues e Maria da Luz Evangelista da Silva, Maternos, Eleusa de Fatima Gonçalves Coluna.',<br>
                    Linhagem: Terceira <br>
                `
                    break;
                case 'Andréa':
            document.getElementById("paragrafo").innerHTML=` 
                     IP : '0001',<br>
                    Nome: ' Andréa Michelle Gonçalves Coluna ',<br>
                    Idade: '15',<br>
                    Cpf:'009/181/881/80',<br>
                    NASC :' Brasileira  est DF Data 28/ 07/1984 Nacimento 15/09/2009',<br>
                    RG : '2240 771 SSP DF',<br>
                    Linhagem: 'Gonçalves + Coluna',<br>
                    <br>  
                      
                `
                    break;
                case  'Kaio':
            document.getElementById("paragrafo").innerHTML=` 
                     
                    IP:'0000<br>
                    Nome: 'Kaio Alan Gonçalves Oliveira<br>
                    Idade: '15<br>
                    Sexo:'M<br>
                    Hora:"08:19",
                    Cpf:'101/002/115/165<br>
                    Municipio:"Brasilia-DF",
                    Nacimento:'15/09/2009<br>
                    Linhagem: 'Gonçalves + Oliveira<br> 
                    Filiação:"Claudiomar Ribeiro de Oliveira e Andréa Michelle Gonçalves Coluna.",<br>
                    Linhagem: 'terçeira<br>
                     `
                    break;
            
                default:
                    break;
                }
               
            }
keyEvent()


