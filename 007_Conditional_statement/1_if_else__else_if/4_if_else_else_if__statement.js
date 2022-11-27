let a = prompt('Hey what is your age?');
a = Number.parseInt(a);

if(a<0){
    alert('This is valid age');
}
else if(a<9) {
    alert('You are a kid, go and drink milk do not think of entering the club')
}
else if(a<18 && a>=9) {
    alert('You are a kid, you can think of goung into club')
}
else {
    alert('You can enter the club');
}