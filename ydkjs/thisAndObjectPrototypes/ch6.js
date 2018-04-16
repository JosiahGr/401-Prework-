var Task = {
  setID: function(ID) {this.id = ID;},
  outputID: function() {console.log( this.id );}
};

var XYZ = Object.create(Task);

XYZ.prepareTask = function(ID,Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
};


function Foo() {}

var a1 = new Foo();

a1;


function Foo() {}

var a1 = new Foo();

a1.constructor;
a1.constructor.name;


function Foo() {}

var a1 = new Foo();

Foo.prototype.constructor = function Gotcha(){};

a1.constructor;
a1.constructor.name;
a1;


var Foo = {};

var a1 = Object.create( Foo );

a1;

Object.defineProperty(Foo, 'constructor', {
  enumerable: false,
  value: function Gotcha(){}
});

a1;


function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function() {
  return 'I am ' + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  alert('Hello, ' + this.identify() + '.');
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1.speak();
b2.speak();


var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return 'I am ' + this.me;
  }
};

var Bar = Object.create(Foo);

Bar.speak = function() {
  alert('Hello, ' + this.identify() + '.');
};

var b1 = Object.create(Bar);
b1.init('b1');
var b2 = Object.create(Bar);
b2.init('b2');

b1.speak();
b2.speak();


function Widget(width, height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function($where){
  if (this.$elem) {
    this.$elem.css({
      width: this.width + 'px',
      height: this.height + 'px'
    }).appendTo($where);
  }
};

function Button(width,height,label) {
  Widget.call(this, width, height);
  this.label = label || 'Default';
  this.$elem = $('<button>').text(this.label);
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.render = function($where) {
  Widget.prototype.render.call(this, $where);
  this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function(evt) {
  console.log('Button \'' + this.label + '\' clicked!');
};

$(document).ready(function(){
  var $body = $(document.body);
  var btn1 = new Button(125, 30, 'Hello');
  var btn2 = new Button(150, 40, 'World');

  btn1.render($body);
  btn2.render($body);
} );


class Widget {
  constructor(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
  render($where){
    if (this.$elem) {
      this.$elem.css({
        width: this.width + 'px',
        height: this.height + 'px'
      }).appendTo($where);
    }
  }
}

class Button extends Widget {
  constructor(width, height, label) {
    super(width, height);
    this.label = label || 'Default';
    this.$elem = $('<button>').text(this.label);
  }
  render($where) {
    super.render($where);
    this.$elem.click(this.onClick.bind(this));
  }
  onClick(evt) {
    console.log('Button \'' + this.label + '\' clicked!');
  }
}

$(document).ready( function(){
  var $body = $(document.body);
  var btn1 = new Button(125, 30, 'Hello');
  var btn2 = new Button(150, 40, 'World');

  btn1.render($body);
  btn2.render($body);
} );


var Widget = {
  init: function(width, height){
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function($where){
    if (this.$elem) {
      this.$elem.css({
        width: this.width + 'px',
        height: this.height + 'px'
      }).appendTo($where);
    }
  }
};

var Button = Object.create(Widget);

Button.setup = function(width, height, label){
  this.init(width, height);
  this.label = label || 'Default';

  this.$elem = $('<button>').text(this.label);
};
Button.build = function($where) {
  this.insert($where);
  this.$elem.click(this.onClick.bind(this));
};
Button.onClick = function(evt) {
  console.log('Button \'' + this.label + '\' clicked!');
};

$(document).ready(function(){
  var $body = $(document.body);

  var btn1 = Object.create(Button);
  btn1.setup(125, 30, 'Hello');

  var btn2 = Object.create(Button);
  btn2.setup(150, 40, 'World');

  btn1.build($body);
  btn2.build($body);
});


function Controller() {
  this.errors = [];
}
Controller.prototype.showDialog = function(title, msg) {
};
Controller.prototype.success = function(msg) {
  this.showDialog('Success', msg);
};
Controller.prototype.failure = function(err) {
  this.errors.push(err);
  this.showDialog('Error', err);
};

function LoginController() {
  Controller.call(this);
}

LoginController.prototype = Object.create(Controller.prototype);

LoginController.prototype.getUser = function() {
  return document.getElementById('login_username').value;
};

LoginController.prototype.getPassword = function() {
  return document.getElementById('login_password').value;
};

LoginController.prototype.validateEntry = function(user, pw) {
  user = user || this.getUser();
  pw = pw || this.getPassword();

  if (!(user && pw)) {
    return this.failure('Please enter a username & password!');
  }
  else if (pw.length < 5) {
    return this.failure('Password must be 5+ characters!');
  }

  return true;
};
LoginController.prototype.failure = function(err) {
  Controller.prototype.failure.call(this, 'Login invalid: ' + err);
};
function AuthController(login) {
  Controller.call(this);
  this.login = login;
}
AuthController.prototype = Object.create( Controller.prototype );
AuthController.prototype.server = function(url,data) {
  return $.ajax( {
    url: url,
    data: data
  } );
};

AuthController.prototype.checkAuth = function() {
  var user = this.login.getUser();
  var pw = this.login.getPassword();

  if (this.login.validateEntry(user, pw)) {
    this.server('/check-auth',{
      user: user,
      pw: pw
    } )
      .then(this.success.bind(this))
      .fail(this.failure.bind(this));
  }
};

AuthController.prototype.success = function() {
  Controller.prototype.success.call(this, 'Authenticated!');
};

AuthController.prototype.failure = function(err) {
  Controller.prototype.failure.call(this, 'Auth Failed: ' + err);
};

var auth = new AuthController(
  new LoginController()
);

auth.checkAuth();


var LoginController = {
  errors: [],
  getUser: function() {
    return document.getElementById('login_username').value;
  },
  getPassword: function() {
    return document.getElementById('login_password').value;
  },
  validateEntry: function(user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) {
      return this.failure('Please enter a username & password!');
    }
    else if (pw.length < 5) {
      return this.failure('Password must be 5+ characters!');
    }
    return true;
  },
  showDialog: function(title, msg) {
  },
  failure: function(err) {
    this.errors.push(err);
    this.showDialog('Error', 'Login invalid: ' + err);
  }
};

var AuthController = Object.create(LoginController);

AuthController.errors = [];
AuthController.checkAuth = function() {
  var user = this.getUser();
  var pw = this.getPassword();

  if (this.validateEntry(user, pw)){
    this.server('/check-auth',{
      user: user,
      pw: pw
    })
      .then(this.accepted.bind(this))
      .fail(this.rejected.bind(this));
  }
};
AuthController.server = function(url,data) {
  return $.ajax({
    url: url,
    data: data
  });
};
AuthController.accepted = function() {
  this.showDialog('Success', 'Authenticated!');
};
AuthController.rejected = function(err) {
  this.failure('Auth Failed: ' + err);
};


var Foo = {
  bar: function(x) {
    if (x < 10) {
      return Foo.bar(x * 2);
    }
    return x;
  },
  baz: function baz(x) {
    if (x < 10) {
      return baz(x * 2);
    }
    return x;
  }
};


Bar.prototype instanceof Foo;
Object.getPrototypeOf(Bar.prototype) === Foo.prototype;
Foo.prototype.isPrototypeOf(Bar.prototype);


b1 instanceof Foo;
b1 instanceof Bar;
Object.getPrototypeOf(b1) === Bar.prototype;
Foo.prototype.isPrototypeOf(b1);
Bar.prototype.isPrototypeOf(b1);