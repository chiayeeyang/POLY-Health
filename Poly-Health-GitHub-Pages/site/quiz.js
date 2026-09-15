const quizQuestions = [
  {title:'Do you track your periods?', answers:['Yes, regularly','No, I didn’t think I need to','Haven’t thought about it']},
  {title:'Do you experience PMS before your period?', answers:['Yes, every time','Sometimes','Never']},
  {title:'Do you have night sweats and/or hot flashes?', answers:['Yes, every day','Yes, less than 4 times a week','Never']}
];
let quizStep=-1;
let quizAnswers=[];
const quizRoot=document.querySelector('#app');
function renderQuiz(focus=true){
  const intro=quizStep<0, result=quizStep===quizQuestions.length;
  document.body.classList.toggle('quiz-results',result);
  const content=intro?`<a class="quiz-exit" href="/do-i-have-pcos/">‹ back</a><main class="quiz-intro"><h1 tabindex="-1">Wondering if you have PCOS<br>or other hormonal condition?</h1><button class="quiz-start" data-start>Take the test <span aria-hidden="true">›</span></button><p class="quiz-note">A three-question symptom check-in. This cannot diagnose PCOS or another hormonal condition.</p><p class="quiz-note">Your answers stay on this page and are cleared when you leave or reload.</p></main>`:result?`${logo()}<main class="quiz-result"><h1 tabindex="-1">TEST RESULT:</h1><p>This is a summary of your answers. These three questions cannot determine whether you have PCOS, another hormonal condition, or how severe any symptoms are.</p><dl>${quizQuestions.map((q,i)=>`<div><dt>${q.title}</dt><dd>${q.answers[quizAnswers[i]]}</dd></div>`).join('')}</dl><p>If you are concerned about your symptoms, speak with a healthcare professional to discuss what you’re noticing and whether any tests are appropriate.</p><button class="quiz-retake" data-restart>Retake the Test <span aria-hidden="true">↻</span></button><a class="quiz-start" href="/">Back to Home</a></main>`:`${logo()}<main class="quiz-question"><div class="quiz-progress"><button class="quiz-back" aria-label="Previous question">‹</button><progress value="${quizStep+1}" max="3" aria-label="Question ${quizStep+1} of 3"></progress></div><h1 tabindex="-1">${quizQuestions[quizStep].title}${quizStep===1?'<button class="quiz-info" aria-label="What is PMS?">i</button>':''}</h1><div class="quiz-options">${quizQuestions[quizStep].answers.map((answer,i)=>`<button data-answer="${i}" aria-pressed="${quizAnswers[quizStep]===i}">${answer}</button>`).join('')}</div></main>`;
  quizRoot.innerHTML=content+(!intro?'<footer class="quiz-footer">© 2026 Poly Health. All rights reserved.</footer>':'')+`<dialog id="pms-dialog" aria-labelledby="pms-title"><h2 id="pms-title">What is PMS?</h2><p>PMS is short for <strong>premenstrual syndrome</strong>. It describes symptoms that can happen in the weeks before a period, such as mood changes, breast tenderness, food cravings, tiredness, and trouble sleeping. Symptoms can vary from month to month.</p><a href="https://www.nhs.uk/conditions/pre-menstrual-syndrome/" target="_blank" rel="noopener">Learn more at NHS</a><form method="dialog"><button>Understand!</button></form></dialog>`;
  quizRoot.querySelector('[data-start]')?.addEventListener('click',()=>{quizStep=0;renderQuiz()});
  quizRoot.querySelector('.quiz-back')?.addEventListener('click',()=>{quizStep--;renderQuiz()});
  quizRoot.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{quizAnswers[quizStep]=Number(b.dataset.answer);quizStep++;renderQuiz()}));
  quizRoot.querySelector('[data-restart]')?.addEventListener('click',()=>{quizAnswers=[];quizStep=0;renderQuiz()});
  quizRoot.querySelector('.quiz-info')?.addEventListener('click',()=>quizRoot.querySelector('dialog').showModal());
  if(focus){quizRoot.querySelector('h1').focus();window.scrollTo(0,0)}
}
renderQuiz(false);
