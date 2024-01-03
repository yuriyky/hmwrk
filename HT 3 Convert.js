// Значение переменных  : Километры - "Klm"  Часы - "Hrs " Килограммы- "Kgs"


const MeasureUnit =  " "                   

var  MeasureUnitNumber = 10


switch (MeasureUnit) 
{
    case "Klm" : 

        console.log ( MeasureUnitNumber * 1000  + ' ' + 'Mtr in' + " " + MeasureUnitNumber + " " + MeasureUnit  );

        break

    case "Hrs" :
       console.log ( MeasureUnitNumber * 60  + ' ' + 'Min in' + ' ' +  MeasureUnitNumber + ' ' + MeasureUnit )

       break

    case "Kgm" :

        console.log ( MeasureUnitNumber * 1000  + ' ' + 'Grm in' + " " + MeasureUnitNumber + " " + MeasureUnit  );

    break 

    
     default:
    
    console.log ("To convert use correct type  of units or check in table by yourself :)  ")
        
    }


      
      