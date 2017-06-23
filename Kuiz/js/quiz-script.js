var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('kuis');
var questionEl = document.getElementById('pertanyaan');
var opt1 = document.getElementById('jawaban1');
var opt2 = document.getElementById('jawaban2');
var opt3 = document.getElementById('jawaban3');
var answer1 = document.getElementById('pilih1');
var answer2 = document.getElementById('pilih2');
var answer3 = document.getElementById('pilih3');
var nextButton = document.getElementById('lanjutButton');
var resultCont = document.getElementById('hasil');
var keterangan = document.getElementById('keterangan');
var ulangButton = document.getElementById('ulangButton');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '.' +  q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	ulangButton.style.visibility = "hidden";
};

function lanjutSoal () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Mohon Isi Dulu Jawabannya :)');
		return;
	}
	answer1.style.backgroundColor = "transparent";
	answer2.style.backgroundColor = "transparent";
	answer3.style.backgroundColor = "transparent";
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		// nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		keterangan.style.display = '';
		ulangButton.style.visibility = "visible";
		if (score>=70) {
		keterangan.textContent = 'Selamat Kamu Lulus :)';
		resultCont.textContent = 'Nilaimu adalah: ' + score;
		} else{
		keterangan.textContent = 'Maaf Kamu Gagal :(';
		resultCont.textContent = 'Nilaimu adalah: ' + score;
		}
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

function pilihJawaban() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;

	if (answer==1) {
		answer1.style.backgroundColor = "#98f48d";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
	}else if (answer == 2) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "#98f48d";
		answer3.style.backgroundColor = "transparent";
	}else if (answer == 3) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "#98f48d";
	}
}