class CalcControler{

	constructor(){
		this._locale = 'pt-BR';
		this._displayCalcEl = document.querySelector("#display");
		this._dateEl = document.querySelector("#data");
		this._timeEl = document.querySelector("#hora");		
		this._currentDate; 
		this.initialize();
		
	}
	initialize(){
		this.setdisplaydatetime();

		setInterval(()=>{
			this.setdisplaydatetime();
			
		},1000);
	}
	addEventListenerAll(element, events, fn){

		events.split(' ').forEach(event => {

			element.addEventListener(event,fn,false);
		});

	}

	initbuttonsEvents(){
		let buttons = document.querySelectorAll("#buttons >  g, #parts > g");

		buttons.forEach((btn,index)=>{

			this.addEventListenerAll(btn,"click drag", e =>{

				console.log(btn.className.baseVal.replace("btn-",""));

			});
			this.addEventListenerAll(btn,"mouseover mouseup mousedown", e =>{
				btn.style.cursor = "pointer";

			});

		});

	}

	setdisplaydatetime(){
		//this.displayDate = this.currentDate.toLocaleDateString('pt-BR');
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
	}

	get displayTime(){
		return this._timeEl.innerHTML;

	}
	set displayTime(Value){
		this._timeEl.innerHTML = Value;

    }
	get displayDate(){
		return this._dateEl.innerHTML;

	}
	set displayDate(Value){
		this._dateEl.innerHTML = Value;
	}
	get displayCalc(){
		return this._displayCalcEl.innerHTML;
	}
	set displayCalc(Value){
		this._displayCalcEl.innerHTML = Value;
	}
	get currentDate(){
		return new Date();
	}
	set currentDate(value){
		this._currentDate = Value;
 
	}

}