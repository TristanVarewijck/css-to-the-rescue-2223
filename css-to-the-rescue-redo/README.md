CSS to the rescue
Description
Binnenkant van auto als bedieningspaneel met alleen CSS.

## Table of Contents
Process
Meta
License

## Proces
### Week 01
Tijdens de eerste les van de eindopdracht zijn er een aantal opdrachten getoond waaruit je kon kiezen ik heb gekozen om het bedieningspaneel te maken voor het bedieningspaneel heb ik een eigen opdracht verzonnen namelijk de binnenkant van een auto waarin je verschillende interacties moet kunnen uitvoeren als inspiratie heb ik een tekening gevonden van hoe ik het ongeveer eruit wil laten zien. 

<img src="https://github.com/TristanVarewijck/css-to-the-rescue-2223/blob/main/css-to-the-rescue-redo/bedieningspaneel/images/inside-of-car-reference.avif" 
alt="project-reference" width="500" border="10" />

Zoals je zit is dit de binnenkant met meerdere knoppen mijn uitdaging is om deze knoppen met alleen css te laten werken super leuk!

### Week 02
In week twee ben ik vooral bezig geweest met het bedenken en structuren van mijn interacties, wat wil ik interactief maken en hoe is dit logische voor een binnekant van een auto op dit punt dacht ik dat het leuk zou zijn als je de richting aanwijzers zou kunnen gebruiken, de radio, de verwarming en dat het cool zou zijn als je op verschillende plekken met je auto kan rijden. 

<img src="https://github.com/TristanVarewijck/css-to-the-rescue-2223/blob/main/css-to-the-rescue-redo/bedieningspaneel/images/amsterdam.jpeg" 
alt="amsterdam" width="250" border="10" />

<img src="https://github.com/TristanVarewijck/css-to-the-rescue-2223/blob/main/css-to-the-rescue-redo/bedieningspaneel/images/newyork.jpeg" 
alt="newyork" width="250" border="10" />

<img src="https://github.com/TristanVarewijck/css-to-the-rescue-2223/blob/main/css-to-the-rescue-redo/bedieningspaneel/images/paris.jpeg" 
alt="paris" width="250" border="10" />

Naast het itereren heb ik ook uitleg gekregen van Vasilis over de :target selector waarmee je doormiddel van **<a>ancore links<a/>** kan zorgen dat je interface veranderd dit was in week twee al gelukt maar vond dit zelf nog iets te saai dus heb ik ook bepaalde elementen laten bewegen als deze target veranderd in dit geval leek het me leuk om een uithang board te maken die reageert op de huidige :target
  
Ook ben in deze week begonnen met het verdiepen met de :has selector gepaard met de :checked selector deze twee samen zijn heel powerfull omdat je hiermee radio en checkboxes kan gebruiken in puur CSS. 

### Week 03
In week drie heb ik mijn interacties met de :has en :checked selectors bijna allemaal af en ben ik me wezen verdiepen in custom-properties ik vond dit best lastig te begrijpen omdat ik Javascript gewend ben en niet op de hoogte was dat dit uberhaubt in CSS kon. Na de uitleg van Sanne heb ik een goed beeld gekregen hoe dit handig kan zijn en hoe je dit zou kunnen gebruiken ik heb dit bijvoorbeeld gebruikt voor een aantal keyframe animaties zodat ik niet hele styling regels hoef te kopieren maar dit op kan lossen doormiddel van custom-properties hieronder zie je een voorbeeld van hoe ik custom-properties heb gebruikt om een kleine licht-show te geven. 

```
:target > div p span{
transform: scaleX(var(--scale)); 
color: hsl(var(--hue, 0), 80%, 50%);
animation-name: rainbowLetters, spinningLetters;
animation-duration: 3.5s;
animation-iteration-count: 1;
animation-delay: calc(var(--index, 0) * -0.2s);
animation-timing-function: linear;
}

@keyframes rainbowLetters {
0%, 100% {
--hue: 10;
}
14% {
--hue: 35;
}
28% {
--hue: 55;
}
42% {
--hue: 110;
}
56% {
--hue: 200;
}
70% {
--hue: 230;
}
84% {
--hue: 280;
}
} 
```

Hierboven zie je dus hoe ik een custom-propertie heb gebruikt om voor elk element een lichtshow te creeeren en doormiddel van en --index een andere delay mee te geven om het voor elk element een beetje anders te lijken. 

Op dit punt in mijn process was ik best tevreden met mijn interacties en heb ik besloten om me te focussen op het bouwen van mijn interface, omdat ik tot nu alleen nog interacties heb maar mijn interface helemaal nog niet op een auto leek dit is natuurlijk niet te bedoeling...

### Week 04
In de laatste week heb ik als tip meegekregen van Vasilis om mij nu echt te gaan focussen om mijn interface, omdat het wel leuk is dat ik allemaal interacties heb maar als mijn eind product niet lijkt op wat ik beloofd had dat heb ik eigenlijk niks. Dus heb ik in de laatste 2 dagen mijn interface afgemaakt en daar ben ik best blij mee. 
  
<img src="https://github.com/TristanVarewijck/css-to-the-rescue-2223/blob/main/css-to-the-rescue-redo/bedieningspaneel/images/amsterdam.jpeg" 
alt="amsterdam" width="250" border="10" />
  
 

Reflectie Veel geleerd, veel nieuwe dingen in CSS ook. Wat je eignelijk allemaal kan met basis css is best tof. Sowieso wat je met CSS kan is best indrukwekkend. Ik denk dat veel mensen CSS niet zien als zo'n krachtige taal. Natuurlijk is er ook veel fout gegaan en wilde niet alles lukken, maar ook hier leer je van. Misschien toch mee doen met Divtober 🤷‍♂️. Ik denk dat ik wil meer met CSS ga experimenteren, voor de lol of gewoon in aankomende projecten. Het is heel fijn om te weten wat de limits zijn van verschillende technieken, tools, softwaren en talen. Lekker die grensen opzoeken!

## Meta
Tristan Varewijck - tristan.varewijck@gmail.com - https://github.com/TristanVarewijck/css-to-the-rescue-2223

## License
Usage is provided under the MIT License MIT. See LICENSE for the full details.
