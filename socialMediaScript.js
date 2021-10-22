const linksSocialMedia  = {
  github: "Athirson-Silva",
  youtube: "channel/UC4-GmgMpWc6J0TQyfhGOz-w",
  facebook: "athirson.silva.965",
  instagram: "cavalosdeturing",
  twitter: "diveinthat"
}
function changeSocialMediaLinks() {
   for (let li of socialLinks.children) {//.children verifica todos os filhos da tag li      
    const social = li.getAttribute("id")  //pegamos cada id de cada da lista
    console.log(social) 
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` //dentro dos filhos de li, seleciona-se o primeiro (posição 0), e dentro de href atribuimos o link, modificado com a rede social e seu respectivo link. ${linksSocialMedia[social], os [] servem para selecionar o atributo correto do objeto  
   }

}

changeSocialMediaLinks()