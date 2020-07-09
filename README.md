# RockPaperScissors

A Simple game of Rock, Paper, Scissors.

Please do not mind the CSS... 👍😁


<script src="RPS.js"></script>

<img src="RPS.gif" id="Rock"/>

<div class="Test">Can you beat the computer?</div>

<div>Click on your choice</div>

<div>
<button id="Rock" onclick="Winner(event)"> <img src="Rock.jpg" id="Rock"/> </button> 
<button id="Scissors" onclick="Winner(event)"> <img src="Scissors.jpg" id="Scissors"/> </button>
<button id="Paper" onclick="Winner(event)"> <img src="Paper.jpg" id="Paper"/> </button>
</div>

<!--<select id="Options">
   <option>Rock</option>
   <option>Scissors</option>
   <option>Paper</option>
</select>
<button onclick="Winner()">Play</button>-->

<h2> Computer Played: <b id="ComputerChoice"> </b> </h2>

<h3 id="Result" style="color:red"></h3>



