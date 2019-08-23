var Member = function(firstName,lastName){
  if(!(this instanceof Member)) {
    return new Member(firstName,lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Member('浩全','橋本');
console.log(mem.getName());
