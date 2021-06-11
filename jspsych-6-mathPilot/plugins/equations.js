
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function eqGeneFx (problem_type) {
	// select type of equation
	var yes = 0;
	var no = 1;
	if(problem_type==0){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		var correct_result = a + b
		var correct_equation = ""+a+" + "+b+" = <b style='color:green'>"+correct_result+"</b>";
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = correct_result;
			var required_response = yes;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			var result = a2 + b2;
			if(correct_result==result){result += getRndInteger(1,9)}
			var required_response = no;
	    }
		var displayed_equation = ""+a+" + "+b+" = <b>"+result+"</b>";
		
		return {displayed_equation: displayed_equation, required_response: required_response, correct_equation:correct_equation}
	}
	if(problem_type==1){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		var correct_result = a - b
		var correct_equation = ""+a+" - "+b+" = <b style='color:green'>"+correct_result+"</b>";
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = correct_result;
			var required_response = yes;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			var result = a2 - b2;
			if(correct_result==result){result += getRndInteger(1,9)}
			var required_response = no;
	    }
		var displayed_equation = ""+a+" - "+b+" = <b>"+result+"</b>";
		
		return {displayed_equation: displayed_equation, required_response: required_response, correct_equation:correct_equation}
	}
	if(problem_type==2){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		var correct_result = a * b
		var correct_equation = ""+a+" * "+b+" = <b style='color:green'>"+correct_result+"</b>";
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = correct_result;
			var required_response = yes;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			var result = a2 * b2;
			if(correct_result==result){result += getRndInteger(1,9)}
			var required_response = no;
	    }
		var displayed_equation = ""+a+" * "+b+" = <b>"+result+"</b>";
		
		return {displayed_equation: displayed_equation, required_response: required_response, correct_equation:correct_equation}
	}
	if(problem_type==3){
		a = getRndInteger(1,9)
		b = getRndInteger(1,9)
		var correct_result = (Math.round((a/b)*100))/100
		var correct_equation = ""+a+" : "+b+" = <b style='color:green'>"+correct_result+"</b>";
		coin = (Math.floor(Math.random() * 2) == 0)
	    if(coin){
			var result = correct_result;
			var required_response = yes;
	    }else{
			a2 = getRndInteger(1,9)
			b2 = getRndInteger(1,9)
			var result = (Math.round((a2/b2)*100))/100;
			if(correct_result==result){result += getRndInteger(1,9)}
			var required_response = no;
	    }
		var displayed_equation = ""+a+" : "+b+" = <b>"+result+"</b>";
		
		return {displayed_equation: displayed_equation, required_response: required_response, correct_equation:correct_equation}
	}
	
}
	
