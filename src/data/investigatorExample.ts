import { Investigator } from "@/src/types/investigator";
import { MADELYN_BROWN } from "./madelynBrown";

const DR_ARTHUR_DIBDEN: Investigator = {
  id: 2,
  profile:{
    imageUrl: "/arthur-dibden.png",
    name: "Dr. Arthur Dibden",
    occupation: "Médico/Cirurgião",
    birthplace: "Inglaterra",
    residence: "Londres, Inglaterra",
    age: 45
  },
  characteristics: {
    força: 50,
    constituição: 50,
    destreza: 70,
    inteligência: 65,
    tamanho: 80,
    poder: 60,
    aparência: 35,
    educação: 84,
  },
  status: {
    hitPoints: { current: 13, max: 13},
    magicPoints: {current: 12, max: 12},
    sanity: {current: 54, max: 60, initial: 54}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Dibden serviu no Corpo Médico do Exército Real por mais de vinte anos. Um breve casamento com sua namorada de infância, Mary, terminou em tragédia quando ela morreu durante o parto. Após perder tanto seu amor quanto seu bebê, Dibden se afundou no trabalho. Apesar de suas experiências com os horrores da guerra moderna durante a Grande Guerra, seu desejo de viajar não diminuiu e, após o conflito, ele viajou através do Atlântico para as Américas. Embora inicialmente apreciando os pontos turísticos dos EUA, seu fascínio pela América do Sul o levou ao México, e depois para a Colômbia. Nos últimos meses, Dibden tem prestado assistência médica e auxílio na esteira da epidemia de gripe espanhola. Recentemente, ele viu notícias da imprensa sobre uma expedição que estava sendo organizada em Lima, Peru por um tal Augustus Larkin. Ansioso para conhecer o antigo Peru, ele contatou Larkin e garantiu um lugar na expedição por sua experiência médica de campo.",
    personalDescription: "acima da altura média e bastante robusto, com cabelos grisalhos e rosto marcado pela idade, seus olhos têm um olhar assombrado.",
    traits: "gentil, mas não gosta de quem fala besteira. Procura escapar dos horrores do passado.",
    ideologyBeliefs: "tornou-se ateu depois de tudo o que viu e viveu.",
    treasuredPossessions: "medalhão à volta do pescoço que contém uma foto da sua esposa Mary."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 2,
    cash: 5,
    assets: [""],
  }
}

const ARCHIBALD_WASHINGTON: Investigator = {
  id: 3,
  profile: {
    imageUrl: "/archibald-washington.png",
    name: "Archibald Washington",
    occupation: "Engenheiro",
    birthplace: "Estados Unidos",
    residence: "Chicago, Estados Unidos",
    age: 26
  },
  characteristics: {
    força: 85,
    constituição: 70,
    destreza: 70,
    inteligência: 70,
    tamanho: 70,
    poder: 50,
    aparência: 60,
    educação: 45,
  },
  status: {
    hitPoints: { current: 14, max: 14},
    magicPoints: {current: 10, max: 10},
    sanity: {current: 50, max: 50, initial: 50}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Archibald passou sua juventude em Boston, se metendo em problemas nas ruas e com a lei; todos acreditavam que ele passaria a maior parte de sua vida dentro de uma prisão, mas isso foi antes dele descobrir o boxe. Direcionando toda a sua energia para o esporte, ele se concentrou em ganhar lutas e entrou em rápida ascensão para logo se tornar um verdadeiro lutador. No entanto, a sorte nunca esteve ao seu lado. Na véspera da luta pelo grande título, ele foi “aconselhado” a desistir ou sua família enfrentaria as consequências. Ele perdeu, mas sempre se odiou por isso. Guiado por seu senso inato de justiça, ele matou o mafioso que havia ameaçado sua família e fugiu de Boston, juntando-se ao exército para lutar na guerra, onde foi treinado em engenharia. Desde que regressou da França, trabalhou como mecânico, sem nunca conseguir um trabalho melhor como engenheiro. Archibald anseia por coisas empolgantes, desesperado como está para se libertar do  trabalho pesado e do racismo diário que precisa aturar. Lendo que uma expedição no Peru precisava de um engenheiro, ele contatou o líder da expedição, Augustus Larkin, e ofereceu seus serviços. Usando todas as suas escassas poupanças, Archibald comprou uma passagem e partiu para Lima, no Peru. Talvez lá ele encontre o significado que procura em sua vida.",
    personalDescription: "afro-americano, com porte robusto e forte; seu rosto bonito mascara sua carreira no boxe.",
    ideologyBeliefs: "odeia valentões e gente que pensa que é superior aos outros; tem um forte senso de justiça e procura corrigir as coisas (mesmo que isso signifique operar por fora da lei).",
    treasuredPossessions: "fotografia de sua falecida mãe, que ele guarda na carteira."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 1,
    cash: 2,
    assets: [""],
  }
}

const PROFESSORA_ELEANOR_BUTLER: Investigator = {
  id: 4,
  profile: {
    imageUrl: "/eleanor-butler.png",
    name: "Eleanor Butler",
    occupation: "Professora de História",
    birthplace: "Estados Unidos",
    residence: "Boston, Estados Unidos",
    age: 39
  },
  characteristics: {
    força: 55,
    constituição: 65,
    destreza: 65,
    inteligência: 65,
    tamanho: 65,
    poder: 65,
    aparência: 35,
    educação: 90, 
  },
  status: {
    hitPoints: { current: 13, max: 13},
    magicPoints: {current: 13, max: 13},
    sanity: {current: 65, max: 65, initial: 65}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Eleanor cresceu numa fazenda do meio oeste, ansiando por alguma mudança em sua vida monótona. Quando confrontada com a perspectiva de se casar com um garoto local, ela resolveu escapar do futuro que o destino lhe reservara e fugiu, embarcando às pressas em um trem para Nova York. Trabalhando nos empregos que conseguia, ainda encontrou tempo para seu passatempo favorito, ler livros de história na Biblioteca Pública de Nova York — uma paixão constante ao longo de sua vida que a levou a se formar e tornar-se historiadora. Na vida acadêmica, ela ainda precisa deixar a sua marca, um fato que muitas vezes perturba sua mente, pois ela vê outros recebendo fama enquanto seu trabalho persiste sem receber reconhecimento. Após ver o anúncio de Augustus  Larkin sobre sua expedição para encontrar uma pirâmide perdida no Peru, Eleanor resolveu fazer algo desafiador e inesperado. Contatando Larkin, ingressou na expedição e fez suas malas para o Peru em busca de fama e aventura.",
    personalDescription: "americana branca, altura e compleição mediana, com cabelos castanhos à altura do ombro e olhos castanhos.",
    traits: "ambiciosa; se enfurece quando tentam jogá-la contra a parede; tende a guardar rancor.",
    ideologyBeliefs: "agarre as oportunidades que surgirem.",
    treasuredPossessions: "a caneta tinteiro dada a ela pelo noivo que abandonou no altar."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 1,
    cash: 2,
    assets: [""],
  },

}

const WINSTON_GREENE: Investigator = {
  id: 5,
  profile: {
    imageUrl: "/winston-greene.png",
    name: "Winston Greene",
    occupation: "Arqueólogo",
    birthplace: "Estados Unidos",
    residence: "Nova York, Estados Unidos",
    age: 26
  },
  characteristics: {
    força: 75,
    constituição: 55,
    destreza: 50,
    inteligência: 80,
    tamanho: 70,
    poder: 55,
    aparência: 75,
    educação: 75,
  },
  status: {
    hitPoints: { current: 12, max: 12},
    magicPoints: {current: 11, max: 11},
    sanity: {current: 55, max: 55, initial: 55}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Winston sempre teve uma vida cosmopolita, criado por pais abastados em São Francisco. Ele nunca precisou lutar para encontrar seu caminho, desfrutou de uma educação privada longe das realidades mais duras da vida. Apesar de nascer em berço de ouro, Winston sempre olhou para o horizonte com um desejo ardente de desafiar a si mesmo, e também de descobrir quem ele realmente era. Foi apenas na universidade que descobriu sua paixão pela história e pelo mundo antigo. Cansado de ser excluído das sociedades universitárias por causa de sua cor, ele descobriu que mergulhar no passado parecia fornecer-lhe um meio para escapar do mundo moderno e de seus males. Após a graduação, Winston procurou juntar-se a inúmeras pesquisas arqueológicas, mas foi recusado vez após outra. Sabendo que suas credenciais eram iguais, se não  melhores, do que a dos outros graduados, ele ficou furioso e deprimido, pois parecia que nunca conseguiria provar o seu valor e fazer seu nome no campo que escolheu. Perto de desistir de seus sonhos, ele encontrou um artigo de notícias sobre um homem chamado Augustus Larkin que estava montando uma expedição para encontrar uma pirâmide perdida nas profundezas do Peru. Ao entrar em contato com Larkin, Winston ficou encantado por ser aceito sem reservas. Finalmente, parecia que o destino tinha permitido uma oportunidade, que ele agora pretende agarrar com todas as suas forças.",
    personalDescription: "afro-americano; compleição magra e rígida, com feições bonitas.",
    traits: "ambicioso, anseia por fazer seu próprio nome, intolerante com valentões e racistas.",
    ideologyBeliefs: "um cristão com grande senso de certo e errado.",
    treasuredPossessions: "a Bíblia de bolso de sua mãe."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 2,
    cash: 3,
    assets: [""],
  }
}

const PERRY_ASTOR: Investigator = {
  id: 6,
  profile: {
    imageUrl: "/perry-astor.png",
    name: "Perry Astor",
    occupation: "Explorador",
    birthplace: "Canadá",
    residence: "Toronto, Canadá",
    age: 36},
  characteristics: {
    força: 70,
    constituição: 70,
    destreza: 70,
    inteligência: 50,
    tamanho: 60,
    poder: 65,
    aparência: 50,
    educação: 25,},
  status: {
    hitPoints: { current: 13, max: 13},
    magicPoints: {current: 13, max: 13},
    sanity: {current: 65, max: 65, initial: 65}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Quando jovem, Perry vivia para sentir o vento correndo pelos seus cabelos enquanto cavalgava a uma velocidade vertiginosa em torno do rancho de seu pai. “Duro de roer”, era como o pai costumava descrevê-lo. Ficar com a cara enfiada em livros não era o estilo de Perry; ele preferia sujar as mãos de lama e sangue. Apesar dos desejos de seu pai, tinha curiosidade e empolgação demais para ficar na fazenda, desejava aventura. Aos 17 anos, Perry partiu e começou a descobrir o mundo. Ao longo dos anos, viajou extensivamente pela América do Norte e do Sul, trabalhando em todos os tipos de empregos para pagar suas despesas. Recentemente, enquanto dava apoio a uma expedição a Tiwanaku no oeste da Bolívia, Perry soube da proposta de Augustus Larkin de procurar uma pirâmide perdida no Peru. Já fazendo seus planos, ele escreveu ao organizador dizendo  que não havia ninguém mais qualificado para dar apoio ao à empreitada e disse a Larkin para esperá-lo em Lima. Perry se apressou pela costa peruana (quase 1.500 km) até chegar a Lima, bem a tempo de partir junto com a expedição.",
    personalDescription: "um canadense branco, alto, com feições desgastadas pelo tempo e um cabelo curto e indisciplinado que costuma esconder sob o chapéu.",
    traits: "desejo de viajar: irritável quando fica parado por muito tempo. Às vezes se enraivece rápido demais.",
    ideologyBeliefs: "só se aprende sujando as mãos*.",
    treasuredPossessions: "'Mary', a faca Bowie dada a ele por seu pai.",
    observations: "* Embora não saiba, Perry sofre de dislexia: a causa de sua antipatia por livros e leitura."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 2,
    cash: 4,
    assets: [""],
  }

}

const JENNIFER_SMALLWOOD: Investigator = {
  id: 7,
  profile: {
    imageUrl: "/jennifer-smallwood.png",
    name: "Jennifer Smallwood",
    occupation: "Diletante",
    birthplace: "Inglaterra",
    residence: "Londres, Inglaterra",
    age: 36
  },
  characteristics: {
    força: 35,
    constituição: 70,
    destreza: 70,
    inteligência: 65,
    tamanho: 50,
    poder: 60,
    aparência: 55,
    educação: 60,
  },
  status: {
    hitPoints: { current: 12, max: 12},
    magicPoints: {current: 12, max: 12},
    sanity: {current: 60, max: 60, initial: 60}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Jennifer vem de uma família inglesa cuja riqueza foi acumulada durante o início do século XIX, através de empreendimentos de transporte. Seus pais se perderam no mar em 1888, enquanto estavam a bordo do SS Vaitarna a caminho de Bombaim, deixando Jennifer e sua irmã mais velha Valerie como herdeiras da fortuna Smallwood. Enquanto Valerie preferiu ficar na casa da família em Hampshire, Jennifer fez as malas e decidiu viajar para o Novo Mundo. A decisão prejudicou seu relacionamento com a irmã, que acreditava ser o papel de uma dama ficar em sua terra e encontrar um marido adequado, não sair se metendo com climas estrangeiros. Depois de festejar em Nova York e na Califórnia, Jennifer cansou-se das intermináveis danças e filas de homens tentando atrair seu interesse. Ela resolveu que havia muito mais para ver e experimentar e começou a procurar (como ela mesma disse) por “algo diferente”. Vendo um artigo sobre uma expedição que estava sendo montada no Peru em busca de pessoas com um desejo por aventura, Jennifer contatou o chefe do projeto,  um tal Augustus Larkin, que lhe contou sobre seu objetivo de encontrar uma pirâmide perdida. A oferta de doar mil dólares para a expedição foi aceita de bom grado por Larkin. Com os planos de viagem montados, a Jennifer partiu para Lima e para o seu destino.",
    personalDescription: "inglesa branca, alta e esbelta, com cabelos escuros curtos em um penteado elegante.",
    traits: "aventureira, imprudente e sempre em movimento.",
    ideologyBeliefs: "às vezes é preciso quebrar alguns ovos para fazer uma omelete (ou seja, resolver as coisas). Criação católica.",
    treasuredPossessions: "carteira de viagem contendo uma fotografia de sua família em tempos felizes; um colar de ouro dado pelo seu falecido pai."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 3,
    cash: 10,
    assets: [""],
  }
}

const JOHAN_BRAUN: Investigator = {
  id: 8,
  profile: {
    imageUrl: "/johan-braun.png",
    name: "Johan Braun",
    occupation: "Professor de línguas",
    birthplace: "Alemanha",
    residence: "Berlim, Alemanha",
    age: 48
  },
  characteristics: {
    força: 55,
    constituição: 60,
    destreza: 70,
    inteligência: 65,
    tamanho: 50,
    poder: 70,
    aparência: 45,
    educação: 85
  },
  status: {
    hitPoints: { current: 11, max: 11},
    magicPoints: {current: 14, max: 14},
    sanity: {current: 70, max: 70, initial: 70}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "A mãe de Johan era bibliotecária e seu pai, um professor de línguas, o que pode explicar seu grande amor por livros e idiomas. Ao longo da infância, o jovem esteve rodeado de livros sobre ciência, história, mitos e muito mais. Sempre o melhor de sua classe, Johan seguiu carreira acadêmica, lendo línguas e clássicos na Universidade de Würzburg, na Baviera. Foi enquanto lecionava em sua alma mater que a Grande Guerra eclodiu, e Johan foi convocado para servir na Frente Ocidental. Sobrevivendo aos horrores das trincheiras, deixou a Europa o mais rápido que pôde e foi para a América para assumir um posto na Universidade da Califórnia, em Berkeley. Apesar de um começo promissor, Johan nunca sentiu que se encaixava no estilo de vida americano e começou a ficar desiludido com a academia. Foi com bastante interesse que ele leu sobre o ressurgimento de escavações arqueológicas que ocorreu durante a guerra, e descobriu uma entrevista com um homem chamado Augustus Larkin, que propunha montar uma expedição para o interior do Peru a fim de procurar por uma pirâmide perdida; a entrevista terminava com Larkin convocando especialistas e  aventureiros para entrar em contato com ele. Sem perder tempo, Johan escreveu para Larkin e garantiu um lugar na equipe; Larkin sentiu que seu conhecimento de línguas seria útil. A última carta de Larkin disse a Johan para se encontrar com ele e os outros membros da expedição em Lima.",
    personalDescription: "alemão branco,baixo e um pouco acima do peso,com cabelo apresentando entradas, barba e um bigode proeminente.",
    traits: "costuma buscar cobertura quando ouve um barulho alto (devido a seu tempo na guerra); uma sede de conhecimento distinta.",
    ideologyBeliefs: "a guerra foi um erro terrível e a humanidade nunca mais deve sucumbir a esses instintos básicos — devemos trabalhar juntos para construir um futuro melhor, livre dos horrores do passado.",
    treasuredPossessions: "o cantil de prata que salvou a sua vida: a bala inglesa ainda está firmemente alojada no metal."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 2,
    cash: 6,
    assets: [""],
  },
}

const PRANIT_SINGH_DHILLON: Investigator = {
  id: 9,
  profile: {
    imageUrl: "/pranit-singh-dhillon.png",
    name: "Pranit Singh Dhillon",
    occupation: "Ex-Soldado",
    birthplace: "Índia",
    residence: "Bombaim, Índia",
    age: 29,
  },
  characteristics: {
    força: 75,
    constituição: 65,
    destreza: 65,
    inteligência: 65,
    tamanho: 80,
    poder: 60,
    aparência: 75,
    educação: 65
  },
  status: {
    hitPoints: {current: 14, max: 14},
    magicPoints: {current: 12, max: 12},
    sanity: {current: 60, max: 60, initial: 60}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Nascido e criado na cidade punjabi de Ferozepore, a família de Pranit tem uma longa história de serviço militar; primeiro para com os marajás do Império Sikh, e depois para os britânicos após a queda do Império. Desejoso de seguir os passos de seus antepassados, Pranit juntou-se aos Sikhs de Ferozepore do 14o Príncipe de Gales assim que pôde. Durante a Grande Guerra, seu batalhão serviu no Egito, Gallipoli, Pérsia e Mesopotâmia (onde o heroísmo dos soldados Sikh lhes rendeu o apelido de “Leões Negros”). Sendo um dos poucos a sobreviver ileso ao banho de sangue que foi a Terceira Batalha de Krithia (Gallipoli, 1915), Pranit foi finalmente dispensado por invalidez devido a uma lesão pouco antes do Armistício. Com dificuldade em se estabelecer na vida civil, Pranit decidiu dar bom uso às suas habilidades militares e agora viaja pelo mundo como um soldado contratado. Seu contrato anterior como guarda em uma  das minas de prata do Peru tinha acabado de expirar, então o anúncio da expedição de Augustus Larkin, que partiria em busca de encontrar uma pirâmide perdida, não podia ter vindo em hora melhor. Ao ler seu histórico de serviço, Larkin aceitou Pranit como segurança para a próxima expedição.",
    personalDescription: "indiano, alto e bonito, com olhos penetrantes, uma barba desgrenhada e um turbante azul pálido.",
    traits: "orgulhoso e leal àqueles que ele considera seus companheiros.",
    ideologyBeliefs: "deus é um só, e todos os homens (e mulheres) são iguais.",
    treasuredPossessions: "os cinco Ks (os artigos de sua fé), incluindo seu kangha (pente de marfim), kara (pulseira de aço) e kirpan (faca cerimonial)."
  },
  inventory: {
    gearPossessions: [],
    spendingLevel: 1,
    cash: 1,
    assets: []
  }
}

const FRANCOISE_PELLETIER: Investigator = {
  id: 10,
  profile: {
    imageUrl: "/francoise-pelletier.png",
    name: "Françoise Pelletier",
    occupation: "Fotógrafa",
    birthplace: "França",
    residence: "Paris, França",
    age: 33
  },
  characteristics: {
    força: 55,
    constituição: 60,
    destreza: 65,
    inteligência: 70,
    tamanho: 55,
    poder: 70,
    aparência: 55,
    educação: 65
  },
  status: {
    hitPoints: {current: 11, max: 11},
    magicPoints: {current: 14, max: 14},
    sanity: {current: 70, max: 70, initial: 70}
  },
  skills: [],
  combat: [],
  backstory: {
    story: "Filha de um adido naval, Françoise nunca tinha vivido em um lugar por tempo o bastante para considerá-lo sua casa. Quando seu pai estava lotado em Lima, como parte da missão militar francesa permanente no Peru,Françoise ficou deslumbrada com a vida noturna de sua cidade adotiva, e ela continuamente entrava e saía da cena social,lutando para encontrar um lugar para si mesma que não fosse definido pelo trabalho de seu pai.Quando,por acaso,ganhou em seu 21o aniversário uma câmera fotográfica de presente,a jovem encontrou sua resposta.Desde então,ela vem construindo uma reputação como fotógrafa em Lima. No entanto, ela desejava ser levada a sério, além do que uma cronista da alta sociedade de Lima, e queria começar a trabalhar com fotografia paisagística. Ultimamente, Françoise tem visitado vários sítios arqueológicos de Lima, particularmente os templos de Pachacamac, cuja antiguidade e persistência a fascinam. Ao ficar sabendo do anúncio de Augustus Larkin sobre a busca de uma pirâmide perdida, ela viu uma oportunidade de finalmente se libertar e encontrar aventura e satisfação pessoal. Tendo assegurado uma vaga para documentar a expedição, Françoise vê o esforço de Larkin como uma oportunidade de se provar para aqueles que sentem que ela estaria melhor se continuasse trabalhando com o que já sabe fazer.",
    personalDescription: "francesa branca; cabelo loiro ondulado e um sorriso largo. Veste-se com trajes masculinos sempre que acredita que vai se safar. Seus olhos cor de avelã procuram constantemente o melhor ângulo para uma foto.",
    traits: "determinada e teimosa.",
    ideologyBeliefs: "acredita que mulheres são tão capazes quanto qualquer homem, e está ansiosa para provar esse ponto.",
    treasuredPossessions: "a câmara dela."
  },
  inventory: {
    gearPossessions: [],
    spendingLevel: 1,
    cash: 1,
    assets: []
  }
}

// 10 investigadores no total


export const INVESTIGATORS: Investigator[] = [MADELYN_BROWN, DR_ARTHUR_DIBDEN, ARCHIBALD_WASHINGTON, PROFESSORA_ELEANOR_BUTLER, WINSTON_GREENE, PERRY_ASTOR, JENNIFER_SMALLWOOD, JOHAN_BRAUN, PRANIT_SINGH_DHILLON, FRANCOISE_PELLETIER];