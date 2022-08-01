function myname(){
    let zakatCamal=document.getElementById('camal').value;
    let result;
      if(zakatCamal>=400){
         result="8Hiqqay";
      }
    else   if(zakatCamal>=396){
         result="8Hiqqay";
    }
    else if(zakatCamal>=386){
         result="7Hiqqay + 1 Bint e laboon";
    }
    else if(zakatCamal>=375){
         result="7Hiqqay + 1 Bint e makhaz";
    }
    else if(zakatCamal>=370){
         result="7Hiqqay + 4 goat";
    }
    else if(zakatCamal>=365){
         result="7Hiqqay + 3 goat";
    }
    else if(zakatCamal>=360){
         result="7Hiqqay + 2 goat";
    }
    else if(zakatCamal>=355){
         result="7Hiqqay + 1 goat";


    }
    else if(zakatCamal>=346){
         result="7Hiqqay";


    }
    else if(zakatCamal>=336){
         result="6Hiqqay + 1 Bint e laboon";


    }
    else if(zakatCamal>=325){
         result="6Hiqqay + 1 Bint e makhaz";

    }
    else if(zakatCamal>=320){
         result="6Hiqqay + 4 goat";

    }
    else if(zakatCamal>=315){
         result="6Hiqqay + 3 goat";

    }
    else if(zakatCamal>=310){
         result="6Hiqqay + 2 goat";

    }
    else if(zakatCamal>=305){
         result="6Hiqqay + 1 goat";

    }
    else if(zakatCamal>=296){
         result="6Hiqqay";

    }
    else if(zakatCamal>=286){
         result="5Hiqqay + 1 Bint e laboon";

    }
    else if(zakatCamal>=275){
         result="5Hiqqay + 1 Bint e makhaz";

    }
    else if(zakatCamal>=270){
         result="5Hiqqay + 4 goat";

    }
    else if(zakatCamal>=265){
         result="5Hiqqay + 3 goat";

    }
    else if (zakatCamal>=260){
         result="5Hiqqay + 2 goat";

    }
    else if(zakatCamal>=255){
         result="5Hiqqay +  1 goat";

    }
    else if(zakatCamal>=246){
         result="5Hiqqay";

    }
    else if(zakatCamal>=236){
         result="4Hiqqay + 1 Bint e laboon";

    }
    else if (zakatCamal>=225){
         result="4Hiqqay + 1 Bint e makhaz";

    }
    else if (zakatCamal>=220){
         result="4Hiqqay + 4 goat";

    }
    else if (zakatCamal>=215){
         result="4Hiqqay + 3 goat";

    }
    else if(zakatCamal>=210){
         result="4Hiqqay + 2 goat";

    }
    else if (zakatCamal>=205){
         result="4Hiqqay + 1 goat";

    }
    else if (zakatCamal>=196){
         result="4Hiqqay";
    }
    else if (zakatCamal>=186){
         result="3Hiqqay + 1 Bint e laboon";
    }
    else if(zakatCamal>=175){
         result="3Hiqqay + 1Bint e makhaz";
    }
    else if(zakatCamal>=170){
         result="3Hiqqay + 4goat";
    }
    else if (zakatCamal>=165){
         result="3Hiqqay + 3goat";
    }
    else if (zakatCamal>=160){
         result="3Hiqqay + 2goat";     }
     else if (zakatCamal>=155){
         result="3Hiqqay + 1goat";
    }
    else  if (zakatCamal>=150){
       result="3Hiqqay";
    }else if (zakatCamal>=145){
         result="2Hiqqay+1 Bent e makhaz";
    }else if(zakatCamal>=140){
         result="2Hiqqay+4 goat ";
    }else if(zakatCamal>=135){
         result="2Hiqqay+3 goat ";
    }else if(zakatCamal>=130){
         result="2Hiqqay+2 goat ";
    }else if(zakatCamal>=125){
         result="2Hiqqay+1 goat ";
    }else if(zakatCamal>=120){
         result="2Hiqqay ";
    }else if(zakatCamal>=91){
         result="2Hiqqay ";   
    }else if(zakatCamal>=76){
         result="2 Bint e laboon ";
    }else if(zakatCamal>=61)
    {
         result="1 Jizaa";
    }else if (zakatCamal>=46)
    {
         result="1 Hiqqay";
    }else if (zakatCamal>=36){
         result="2 Bint e laboon";
    }else if(zakatCamal>=26){
         result="2 Bint e makhaz";
    }else if (zakatCamal>=20){
         result="4 goat or sheep ";
    } 
    else if(zakatCamal>=15){
         result="3 goat or sheep";
    }else if(zakatCamal>=10){
         result="2 goat or sheep";
    }else if (zakatCamal>=5){
         result="1 goat or sheep";
    }else{
         result="Not Payable Zakat";
    }
      document.getElementById('head').innerText=result;
}