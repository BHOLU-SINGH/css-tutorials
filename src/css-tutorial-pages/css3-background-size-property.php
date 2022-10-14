<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<title>CSS3 Background-Size Property | Free CSS Tutorials</title>
  <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
  <style type="text/css">
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }
    .syntax{
      background: silver;
    }
    .div{ 
      width: 100%; 
      height: 99.8vh; 
      border: 3px solid #fff; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      font-size: 5em; 
      color: red;
    }
    .div.div1{ background-image: url('../images/aim.png'); background-size: cover; }
    .div.div2{ background-image: url('../images/aim.png'); background-size: contain; }
    .div.div3{ background-image: url('../images/aim.png'); background-size: inherit; }
    .div.div4{ background-image: url('../images/aim.png'); background-size: initial; }
    .div.div5{ background-image: url('../images/aim.png'); background-size: unset; }
    .div.div6{ background-image: url('../images/aim.png'); background-size: 70px; }
    .div.div7{ background-image: url('../images/aim.png'); background-size: 40%; }
    .div.div8{ background-image: url('../images/aim.png'); background-size: 60px 100px; }
    .div.div9{ background-image: url('../images/aim.png'); background-size: 30% 40%; }
  </style>
</head>
<body>
  <div class="syntax">
    <div class="div div1">cover</div>
    <div class="div div2">contain</div>
    <div class="div div3">inherit</div>
    <div class="div div4">initial</div>
    <div class="div div5">unset</div>
    <div class="div div6">70px</div>
    <div class="div div7">40%</div>
    <div class="div div8">60px 100px</div>
    <div class="div div9">30% 40%</div>
  </div>
</body>
</html>