class numeros{
  literal(num){
    return this.menoresA15(num);
  }
  menoresA15(num){
    var lit;
    if(num<10){
      if(num==0)
      lit="cero"
      if(num==1)
      lit="uno"
      if(num==2)
      lit="dos"
      if(num==3)
      lit="tres"
      if(num==4)
      lit="cuatro"
      if(num==5)
      lit="cinco"
      if(num==6)
      lit="seis"
      if(num==7)
      lit="siete"
      if(num==8)
      lit="ocho"
      if(num==9)
      lit="nueve"
    }
    if(num==10)
    lit="diez"
    if(num>10){
      if(num==11)
      lit="on"
      if(num==12)
      lit="do"
      if(num==13)
      lit="tre"
      if(num==14)
      lit="cator"
      if(num==15)
      lit="quin"
      lit=lit+"ce";
    }
    return lit
  }
}
export default numeros