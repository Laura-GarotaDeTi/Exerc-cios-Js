// quero saber a soma de todo o caixa do exp ultilizando o reduce 
// o reduce ele tem 4 parametros : acumulador , valor , index,array
//sempre que trabalhamos com o reduce ele guarda o primeiro valor do array ali e retorna na proxima conta o valor fica armazenado no acumulador 


const companies=[                       //para fazer essa conta queremos saber apenas a soma do market value de cada um 
    {name:'samsung', marketValue:50, CEO:'kim',foundedOn:1938},
    {name:'microsoft', MarketValue: 415,Ceo:'satya',FoundeOn: 1975},
    {name:'facebook', marketValue: 383, ceo:'mark',foundeOn:2006}
        
    ];
    const list=[50,415,383];                     //criamos um novo array com o total de numeros de cada market value 
    const newlist=list.reduce((acc,current)=>{   // criamos uma arrow functions aonde colocamos a list.filter que recebe  os parametros acc -- acumulador e current-- valor total 
        return acc +current.marketValue                      //em seguida vamos retornar e fazer chamar o acumulador e + current valor total e . marketvalue para indicar que queremos o valor do market value  porque queremos somar todos aqueles itens que estao dentro do array e para isso fazemos acc+current.marketvalue
      
    },0) 
    console.log(newlist)          //em seguida damos um console.log para imrpimir o resultado da fução