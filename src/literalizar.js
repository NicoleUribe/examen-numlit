class numeros{
  literal(num){
    return this.menoresA15(num);
  }
  menoresA15(num){
    var lit;
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
    if(num==10)
    lit="diez"
    return lit
  }
}
export default numeros